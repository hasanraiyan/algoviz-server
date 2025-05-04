
// server.js - Consolidated MERN Backend

// --- Dependencies ---
require('dotenv').config(); // Load environment variables first
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { ClerkExpressRequireAuth } = require('@clerk/clerk-sdk-node');

// --- Configuration ---
const PORT = process.env.PORT || 3001;
const CLERK_SECRET_KEY = process.env.CLERK_SECRET_KEY;
const MONGODB_URI = process.env.MONGODB_URI;

if (!CLERK_SECRET_KEY) {
    console.error("FATAL ERROR: CLERK_SECRET_KEY is not set in the environment variables.");
    process.exit(1);
}
if (!MONGODB_URI) {
    console.error('FATAL ERROR: MONGODB_URI is not defined in .env file');
    process.exit(1);
}

// --- Mongoose Models Definition ---

const Schema = mongoose.Schema;

// Lesson Model
const LessonSchema = new Schema({
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true }, // Markdown content
    examples: { type: String }, // Markdown content
    resources: { type: String }, // Markdown content
    visualizerPath: { type: String },
    prevLessonSlug: { type: String, default: null },
    nextLessonSlug: { type: String, default: null },
}, { timestamps: true });
const Lesson = mongoose.model('Lesson', LessonSchema);

// Quiz Model
const OptionSchema = new Schema({
    optionId: { type: String, required: true },
    text: { type: String, required: true },
    isCorrect: { type: Boolean, required: true, default: false },
}, { _id: false });

const QuestionSchema = new Schema({
    questionId: { type: String, required: true, unique: true },
    text: { type: String, required: true },
    options: [OptionSchema],
    explanation: { type: String, required: true },
}, { _id: false });

const QuizSchema = new Schema({
    quizId: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    topic: { type: String, required: true },
    difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'], required: true },
    questions: [QuestionSchema],
}, { timestamps: true });
const Quiz = mongoose.model('Quiz', QuizSchema);

// User Progress Model
const UserProgressSchema = new Schema({
    userId: { type: String, required: true, index: true }, // Clerk User ID
    quizId: { type: String, required: true, index: true },
    completed: { type: Boolean, default: false },
    score: { type: Number, default: 0 },
    totalQuestions: { type: Number, required: true },
    lastAttemptDate: { type: Date, default: Date.now },
    answers: { type: Map, of: String, default: {} } // { questionId: selectedOptionId }
}, { timestamps: true });
UserProgressSchema.index({ userId: 1, quizId: 1 }, { unique: true });
const UserProgress = mongoose.model('UserProgress', UserProgressSchema);

// --- Database Connection ---
const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('MongoDB Connected Successfully');
    } catch (err) {
        console.error('MongoDB Connection Failed:', err.message);
        process.exit(1); // Exit on connection failure
    }
};

connectDB(); // Establish connection when the server starts

// --- Express App Setup ---
const app = express();

// --- Middleware ---
app.use(cors({
    // origin: process.env.FRONTEND_URL || 'http://localhost:8080',
    // credentials: true,
}));
app.use(express.json()); // Parse JSON request bodies

// --- Authentication Middleware ---
// Verifies Clerk token for protected routes
const requireAuth = ClerkExpressRequireAuth({});

// --- API Routes ---

// ** Public Routes **
app.get('/api/ping', (req, res) => res.json({ message: 'pong' }));

// GET all lesson metadata
app.get('/api/lessons', async (req, res) => {
    try {
        const lessons = await Lesson.find({}, 'slug title category description');
        res.json(lessons);
    } catch (err) {
        console.error("Error fetching lessons:", err);
        res.status(500).json({ message: 'Error fetching lessons' });
    }
});

// GET specific lesson details by slug
app.get('/api/lessons/:slug', async (req, res) => {
    try {
        const lesson = await Lesson.findOne({ slug: req.params.slug });
        if (!lesson) {
            return res.status(404).json({ message: 'Lesson not found' });
        }
        // Fetch titles for prev/next lessons if slugs exist
        let prevLessonTitle = null;
        let nextLessonTitle = null;
        if (lesson.prevLessonSlug) {
             const prev = await Lesson.findOne({ slug: lesson.prevLessonSlug }, 'title');
             if (prev) prevLessonTitle = prev.title;
        }
         if (lesson.nextLessonSlug) {
             const next = await Lesson.findOne({ slug: lesson.nextLessonSlug }, 'title');
             if (next) nextLessonTitle = next.title;
        }
        const lessonToSend = lesson.toObject();
        if (prevLessonTitle) lessonToSend.prevLesson = { slug: lesson.prevLessonSlug, title: prevLessonTitle };
        if (nextLessonTitle) lessonToSend.nextLesson = { slug: lesson.nextLessonSlug, title: nextLessonTitle };

        res.json(lessonToSend);
    } catch (err) {
        console.error(`Error fetching lesson ${req.params.slug}:`, err);
        res.status(500).json({ message: 'Error fetching lesson details' });
    }
});

// GET all quiz metadata
app.get('/api/quizzes', async (req, res) => {
    try {
        const quizzes = await Quiz.find({}, 'quizId title description topic difficulty');
        // Map quizId to id for frontend compatibility if needed
        res.json(quizzes.map(q => ({
            id: q.quizId,
            title: q.title,
            description: q.description,
            topic: q.topic,
            difficulty: q.difficulty
        })));
    } catch (err) {
        console.error("Error fetching quizzes:", err);
        res.status(500).json({ message: 'Error fetching quizzes' });
    }
});

// GET specific quiz details by quizId (including questions)
app.get('/api/quizzes/:quizId', async (req, res) => {
    try {
        const quiz = await Quiz.findOne({ quizId: req.params.quizId });
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }
         // Map DB structure to frontend Quiz type structure
        const quizToSend = {
            id: quiz.quizId,
            title: quiz.title,
            description: quiz.description,
            topic: quiz.topic,
            difficulty: quiz.difficulty,
            questions: quiz.questions.map(q => ({
                id: q.questionId,
                text: q.text,
                options: q.options.map(o => ({
                    id: o.optionId,
                    text: o.text,
                    isCorrect: o.isCorrect
                })),
                explanation: q.explanation
            }))
        };
        res.json(quizToSend);
    } catch (err) {
        console.error(`Error fetching quiz ${req.params.quizId}:`, err);
        res.status(500).json({ message: 'Error fetching quiz details' });
    }
});

// ** Protected Routes (Require Authentication) **

// GET all quiz progress for the logged-in user
app.get('/api/user/progress', requireAuth, async (req, res) => {
    const userId = req.auth.userId;
    try {
        const userProgressRecords = await UserProgress.find({ userId });
        const progressMap = userProgressRecords.reduce((acc, record) => {
            acc[record.quizId] = {
                quizId: record.quizId,
                completed: record.completed,
                score: record.score,
                totalQuestions: record.totalQuestions,
                lastAttemptDate: record.lastAttemptDate.toISOString(),
                answers: record.answers ? Object.fromEntries(record.answers) : {} // Handle potential undefined/null Map
            };
            return acc;
        }, {});
        res.json(progressMap);
    } catch (err) {
        console.error(`Error fetching progress for user ${userId}:`, err);
        res.status(500).json({ message: 'Error fetching user progress' });
    }
});

// GET progress for a specific quiz for the logged-in user
app.get('/api/user/progress/:quizId', requireAuth, async (req, res) => {
    const userId = req.auth.userId;
    const { quizId } = req.params;
    try {
        const progress = await UserProgress.findOne({ userId, quizId });
        if (!progress) {
            return res.status(200).json(null); // No progress found is not an error
        }
        const progressToSend = {
            quizId: progress.quizId,
            completed: progress.completed,
            score: progress.score,
            totalQuestions: progress.totalQuestions,
            lastAttemptDate: progress.lastAttemptDate.toISOString(),
            answers: progress.answers ? Object.fromEntries(progress.answers) : {}
        };
        res.json(progressToSend);
    } catch (err) {
        console.error(`Error fetching progress for user ${userId}, quiz ${quizId}:`, err);
        res.status(500).json({ message: 'Error fetching specific quiz progress' });
    }
});

// POST (Save/Update) progress for a specific quiz for the logged-in user
app.post('/api/user/progress/:quizId', requireAuth, async (req, res) => {
    const userId = req.auth.userId;
    const { quizId } = req.params;
    const { answers, completed } = req.body; // Expecting { answers: { qId: oId, ... }, completed: bool }

    if (!answers || typeof completed !== 'boolean') {
        return res.status(400).json({ message: 'Invalid progress data: "answers" and "completed" required.' });
    }

    try {
        const quiz = await Quiz.findOne({ quizId });
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found for scoring.' });
        }

        // Calculate score server-side
        let score = 0;
        const questionMap = new Map(quiz.questions.map(q => [q.questionId, q]));
        for (const [questionId, selectedOptionId] of Object.entries(answers)) {
            const question = questionMap.get(questionId);
            if (question) {
                const correctOption = question.options.find(o => o.isCorrect);
                if (correctOption && correctOption.optionId === selectedOptionId) {
                    score++;
                }
            }
        }

        const progressData = {
            userId,
            quizId,
            completed,
            score,
            totalQuestions: quiz.questions.length,
            lastAttemptDate: new Date(),
            answers: new Map(Object.entries(answers)) // Store as Mongoose Map
        };

        // Upsert the progress record
        const updatedProgress = await UserProgress.findOneAndUpdate(
            { userId, quizId },
            progressData,
            { new: true, upsert: true, setDefaultsOnInsert: true }
        );

        console.log(`[Progress POST] User ${userId}, Quiz ${quizId}. Score: ${score}/${quiz.questions.length}, Completed: ${completed}`);

        // Respond with the updated progress in frontend format
        const progressToSend = {
            quizId: updatedProgress.quizId,
            completed: updatedProgress.completed,
            score: updatedProgress.score,
            totalQuestions: updatedProgress.totalQuestions,
            lastAttemptDate: updatedProgress.lastAttemptDate.toISOString(),
            answers: updatedProgress.answers ? Object.fromEntries(updatedProgress.answers) : {}
        };
        res.status(200).json({ message: 'Progress saved successfully', progress: progressToSend });

    } catch (err) {
        console.error(`Error saving progress for user ${userId}, quiz ${quizId}:`, err);
        res.status(500).json({ message: 'Error saving quiz progress' });
    }
});


// --- Error Handling Middleware ---
// 404 Handler (Not Found)
app.use((req, res, next) => {
    res.status(404).json({ message: `Not Found: Cannot ${req.method} ${req.originalUrl}` });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error("Unhandled Error:", err.stack || err);

    // Clerk authentication errors
    if (err.name === 'ClerkAPIError' || err.statusCode === 401 || err.statusCode === 403) {
        return res.status(err.statusCode || 401).json({ message: err.message || 'Authentication error' });
    }
    // Mongoose validation errors
    if (err.name === 'ValidationError') {
         return res.status(400).json({ message: 'Validation Error', errors: err.errors });
    }
    // Mongoose Cast Errors (e.g., invalid ObjectId format)
    if (err.name === 'CastError') {
        return res.status(400).json({ message: 'Invalid ID format', path: err.path, value: err.value });
    }

    // Default Internal Server Error
    res.status(500).json({ message: 'Internal Server Error' });
});

// --- Server Start ---
app.listen(PORT, () => {
    console.log(`🚀 AlgoViz MERN Backend server running on http://localhost:${PORT}`);
    console.log(`🔑 Clerk Authentication Key Loaded: ${CLERK_SECRET_KEY ? 'Yes' : 'NO!'}`);
    console.log(`🌐 Allowing CORS from: ${process.env.FRONTEND_URL || 'http://localhost:8080'}`)
    console.log(`💾 MongoDB URI Configured: ${MONGODB_URI ? 'Yes' : 'NO!'}`);
});