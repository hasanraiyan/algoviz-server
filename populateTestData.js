// populateTestData.js - Script to populate MongoDB with test data

const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Connected Successfully');
    } catch (err) {
        console.error('MongoDB Connection Failed:', err.message);
        process.exit(1);
    }
};

// Define models (same as in server.js)
const Lesson = mongoose.model('Lesson', new mongoose.Schema({
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    examples: { type: String },
    resources: { type: String },
    visualizerPath: { type: String },
    prevLessonSlug: { type: String, default: null },
    nextLessonSlug: { type: String, default: null },
}, { timestamps: true }));

const Quiz = mongoose.model('Quiz', new mongoose.Schema({
    quizId: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    topic: { type: String, required: true },
    difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'], required: true },
    questions: [{
        questionId: { type: String, required: true, unique: true },
        text: { type: String, required: true },
        options: [{
            optionId: { type: String, required: true },
            text: { type: String, required: true },
            isCorrect: { type: Boolean, required: true, default: false }
        }],
        explanation: { type: String, required: true }
    }]
}, { timestamps: true }));

const UserProgress = mongoose.model('UserProgress', new mongoose.Schema({
    userId: { type: String, required: true, index: true },
    quizId: { type: String, required: true, index: true },
    completed: { type: Boolean, default: false },
    score: { type: Number, default: 0 },
    totalQuestions: { type: Number, required: true },
    lastAttemptDate: { type: Date, default: Date.now },
    answers: { type: Map, of: String, default: {} }
}, { timestamps: true }));

// Import lessons data
const { lessons } = require('./lessons');

// Process lessons to maintain relationships
const processedLessons = lessons.map((lesson, index, arr) => ({
    slug: lesson.slug,
    title: lesson.title,
    category: lesson.category,
    description: lesson.description,
    content: lesson.content,
    examples: lesson.examples || '',
    resources: lesson.resources || '',
    visualizerPath: lesson.visualizerPath || '',
    prevLessonSlug: lesson.prevLesson?.slug || null,
    nextLessonSlug: lesson.nextLesson?.slug || null
}));

// Import quizzes data
const { quizzes } = require('./Quiz');

// Process quizzes to match MongoDB schema
const processedQuizzes = quizzes.map(quiz => ({
    quizId: quiz.id,
    title: quiz.title,
    description: quiz.description,
    topic: quiz.topic,
    difficulty: quiz.difficulty,
    questions: quiz.questions.map(question => ({
        questionId: question.id,
        text: question.text,
        options: question.options.map(option => ({
            optionId: option.id,
            text: option.text,
            isCorrect: option.isCorrect
        })),
        explanation: question.explanation
    }))
}));

const testUserProgress = [
    {
        userId: "user_123",
        quizId: "js-basics-quiz",
        completed: true,
        score: 1,
        totalQuestions: 1,
        answers: { "q1": "o2" }
    }
];

// Populate function
const populateData = async () => {
    try {
        await connectDB();
        
        // Clear existing data
        await mongoose.connection.db.dropDatabase();
        
        // Insert lessons data
        await Lesson.insertMany(processedLessons);
        await Quiz.insertMany(processedQuizzes);
        await UserProgress.insertMany(testUserProgress);
        
        console.log('Test data populated successfully!');
        process.exit(0);
    } catch (err) {
        console.error('Error populating test data:', err);
        process.exit(1);
    }
};

populateData();