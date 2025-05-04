export const quizzes = [
    // --- Existing Quizzes (15 Questions) ---
    {
      id: "algorithms-basics",
      title: "Algorithms Fundamentals",
      description: "Test your knowledge on fundamental algorithm concepts and principles.",
      topic: "Fundamentals",
      difficulty: "beginner",
      questions: [
        {
          id: "algo-basics-1",
          text: "What is an algorithm?",
          options: [
            { id: "a1", text: "A programming language", isCorrect: false },
            { id: "a2", text: "A step-by-step procedure for solving a problem", isCorrect: true },
            { id: "a3", text: "A type of computer hardware", isCorrect: false },
            { id: "a4", text: "A mathematical equation", isCorrect: false }
          ],
          explanation: "An algorithm is a step-by-step procedure or a set of rules for solving a problem or accomplishing a task. It's a sequence of instructions where each instruction is clear and unambiguous."
        },
        {
          id: "algo-basics-2",
          text: "What does the time complexity of an algorithm measure?",
          options: [
            { id: "a1", text: "The actual time an algorithm takes to run", isCorrect: false },
            { id: "a2", text: "The space required by an algorithm", isCorrect: false },
            { id: "a3", text: "How the running time of an algorithm grows as input size grows", isCorrect: true },
            { id: "a4", text: "The number of programming languages that can implement the algorithm", isCorrect: false }
          ],
          explanation: "Time complexity measures how the running time of an algorithm increases as the size of the input increases. It's usually expressed using the Big O notation, which describes the upper bound of the growth rate."
        },
        {
          id: "algo-basics-3",
          text: "What is the best-case time complexity of a linear search algorithm?",
          options: [
            { id: "a1", text: "O(1)", isCorrect: true },
            { id: "a2", text: "O(n)", isCorrect: false },
            { id: "a3", text: "O(log n)", isCorrect: false },
            { id: "a4", text: "O(n²)", isCorrect: false }
          ],
          explanation: "The best-case time complexity of linear search is O(1), which occurs when the target element is found at the first position of the array. In this case, only one comparison is needed."
        },
        {
          id: "algo-basics-4",
          text: "Which data structure is most appropriate for implementing a First-In-First-Out (FIFO) behavior?",
          options: [
            { id: "a1", text: "Stack", isCorrect: false },
            { id: "a2", text: "Queue", isCorrect: true },
            { id: "a3", text: "Tree", isCorrect: false },
            { id: "a4", text: "Hash Table", isCorrect: false }
          ],
          explanation: "A queue is a data structure that follows the First-In-First-Out (FIFO) principle, meaning the first element added is the first one to be removed. This makes it ideal for scenarios like task scheduling, print job management, etc."
        },
        {
          id: "algo-basics-5",
          text: "What is the space complexity of an algorithm?",
          options: [
            { id: "a1", text: "The maximum number of operations it performs", isCorrect: false },
            { id: "a2", text: "The minimum input size it requires", isCorrect: false },
            { id: "a3", text: "The amount of memory or storage it needs to execute", isCorrect: true },
            { id: "a4", text: "The number of lines of code in its implementation", isCorrect: false }
          ],
          explanation: "Space complexity measures the amount of memory or storage an algorithm needs to execute as a function of the size of the input. Like time complexity, it's often expressed using Big O notation."
        }
      ]
    },
    {
      id: "sorting-algorithms",
      title: "Sorting Algorithms",
      description: "Test your knowledge on common sorting algorithms, their implementations, and complexities.",
      topic: "Sorting",
      difficulty: "intermediate",
      questions: [
        {
          id: "sort-1",
          text: "Which sorting algorithm has the best average-case time complexity?",
          options: [
            { id: "a1", text: "Bubble Sort - O(n²)", isCorrect: false },
            { id: "a2", text: "Merge Sort - O(n log n)", isCorrect: true },
            { id: "a3", text: "Insertion Sort - O(n²)", isCorrect: false },
            { id: "a4", text: "Selection Sort - O(n²)", isCorrect: false }
          ],
          explanation: "Of the listed algorithms, Merge Sort has the best average-case time complexity at O(n log n). It consistently achieves this performance regardless of input characteristics, making it efficient even for large datasets."
        },
        {
          id: "sort-2",
          text: "Which sorting algorithm is considered 'in-place'?",
          options: [
            { id: "a1", text: "Merge Sort", isCorrect: false },
            { id: "a2", text: "Insertion Sort", isCorrect: true },
            { id: "a3", text: "Counting Sort", isCorrect: false },
            { id: "a4", text: "Radix Sort", isCorrect: false }
          ],
          explanation: "Insertion Sort is an in-place sorting algorithm, meaning it requires only a constant amount O(1) of additional space beyond the input array. It sorts the array by repeatedly taking elements and inserting them into their correct position within the already-sorted portion."
        },
        {
          id: "sort-3",
          text: "What is the worst-case time complexity of Quick Sort?",
          options: [
            { id: "a1", text: "O(n log n)", isCorrect: false },
            { id: "a2", text: "O(n)", isCorrect: false },
            { id: "a3", text: "O(n²)", isCorrect: true },
            { id: "a4", text: "O(log n)", isCorrect: false }
          ],
          explanation: "The worst-case time complexity of Quick Sort is O(n²), which occurs when the pivot selection consistently results in highly unbalanced partitions. This happens, for example, when the array is already sorted and the first or last element is chosen as the pivot."
        },
        {
          id: "sort-4",
          text: "Which sorting algorithm is stable?",
          options: [
            { id: "a1", text: "Quick Sort", isCorrect: false },
            { id: "a2", text: "Heap Sort", isCorrect: false },
            { id: "a3", text: "Selection Sort", isCorrect: false },
            { id: "a4", text: "Merge Sort", isCorrect: true }
          ],
          explanation: "Merge Sort is a stable sorting algorithm, meaning that it preserves the relative order of equal elements in the sorted output. This property is important in certain applications where the original order of equal items matters."
        },
        {
          id: "sort-5",
          text: "Which sorting algorithm would be most efficient for sorting a small array (less than 20 elements)?",
          options: [
            { id: "a1", text: "Quick Sort", isCorrect: false },
            { id: "a2", text: "Bubble Sort", isCorrect: false },
            { id: "a3", text: "Insertion Sort", isCorrect: true },
            { id: "a4", text: "Merge Sort", isCorrect: false }
          ],
          explanation: "Insertion Sort is very efficient for small arrays or nearly sorted arrays due to its low constant factors and simplicity. For small arrays (like less than 20 elements), the O(n²) worst-case complexity doesn't significantly impact performance, and the algorithm's simplicity gives it an advantage."
        }
      ]
    },
    {
      id: "data-structures",
      title: "Data Structures",
      description: "Test your understanding of fundamental data structures, their operations, and applications.",
      topic: "Data Structures",
      difficulty: "advanced", // Changed difficulty to reflect the mix
      questions: [
        {
          id: "ds-1",
          text: "What is the time complexity of inserting an element at the beginning of an array?",
          options: [
            { id: "a1", text: "O(1)", isCorrect: false },
            { id: "a2", text: "O(log n)", isCorrect: false },
            { id: "a3", text: "O(n)", isCorrect: true },
            { id: "a4", text: "O(n²)", isCorrect: false }
          ],
          explanation: "Inserting an element at the beginning of an array requires shifting all existing elements one position to the right to make space, resulting in O(n) time complexity where n is the number of elements in the array."
        },
        {
          id: "ds-2",
          text: "Which data structure uses LIFO (Last In, First Out) principle?",
          options: [
            { id: "a1", text: "Queue", isCorrect: false },
            { id: "a2", text: "Stack", isCorrect: true },
            { id: "a3", text: "Heap", isCorrect: false },
            { id: "a4", text: "Linked List", isCorrect: false }
          ],
          explanation: "A stack operates on the Last In, First Out (LIFO) principle where the last element added is the first one to be removed. Common operations include push (add to top), pop (remove from top), and peek (view top without removing)."
        },
        {
          id: "ds-3",
          text: "What is the time complexity for finding an element by key in a hash table (average case)?",
          options: [
            { id: "a1", text: "O(1)", isCorrect: true },
            { id: "a2", text: "O(log n)", isCorrect: false },
            { id: "a3", text: "O(n)", isCorrect: false },
            { id: "a4", text: "O(n²)", isCorrect: false }
          ],
          explanation: "The average case time complexity for finding an element in a hash table is O(1) or constant time. This efficiency comes from the hash function which maps keys directly to bucket locations, allowing for immediate access in most cases."
        },
        {
          id: "ds-4",
          text: "Which traversal method for binary trees visits the root node first, then the left subtree, then the right subtree?",
          options: [
            { id: "a1", text: "In-order traversal", isCorrect: false },
            { id: "a2", text: "Pre-order traversal", isCorrect: true },
            { id: "a3", text: "Post-order traversal", isCorrect: false },
            { id: "a4", text: "Level-order traversal", isCorrect: false }
          ],
          explanation: "Pre-order traversal follows a 'Root-Left-Right' pattern, meaning the algorithm first visits the root node, then recursively traverses the left subtree, and finally recursively traverses the right subtree."
        },
        {
          id: "ds-5",
          text: "What is the main advantage of a binary search tree over a linked list?",
          options: [
            { id: "a1", text: "Lower memory usage", isCorrect: false },
            { id: "a2", text: "Faster insertion at any position", isCorrect: false },
            { id: "a3", text: "More efficient searching operations", isCorrect: true },
            { id: "a4", text: "Better cache performance", isCorrect: false }
          ],
          explanation: "The main advantage of a binary search tree (BST) is its efficient searching operations. A balanced BST allows search, insertion, and deletion operations in O(log n) time, whereas a linked list requires O(n) time for searching."
        }
      ]
    },
  
    // --- New Quizzes Start Here (85 more questions) ---
  
    {
      id: "complexity-analysis",
      title: "Complexity Analysis",
      description: "Deep dive into Big O, Omega, Theta notations and analyzing algorithm efficiency.",
      topic: "Complexity",
      difficulty: "intermediate",
      questions: [
        // Q16
        {
          id: "comp-1",
          text: "What does Big O notation represent?",
          options: [
            { id: "a1", text: "The exact running time of an algorithm", isCorrect: false },
            { id: "a2", text: "The lower bound on the running time", isCorrect: false },
            { id: "a3", text: "The upper bound on the running time (worst-case)", isCorrect: true },
            { id: "a4", text: "The average running time", isCorrect: false }
          ],
          explanation: "Big O notation (O) describes the upper bound of an algorithm's time or space complexity, often representing the worst-case scenario as the input size grows."
        },
        // Q17
        {
          id: "comp-2",
          text: "Which notation represents the lower bound of an algorithm's running time?",
          options: [
            { id: "a1", text: "Big O (O)", isCorrect: false },
            { id: "a2", text: "Big Omega (Ω)", isCorrect: true },
            { id: "a3", text: "Big Theta (Θ)", isCorrect: false },
            { id: "a4", text: "Little o (o)", isCorrect: false }
          ],
          explanation: "Big Omega (Ω) notation describes the lower bound of an algorithm's time or space complexity, representing the best-case scenario or the minimum growth rate."
        },
        // Q18
        {
          id: "comp-3",
          text: "What does it mean if an algorithm has a time complexity of O(1)?",
          options: [
            { id: "a1", text: "It takes 1 second to run", isCorrect: false },
            { id: "a2", text: "It requires 1 unit of memory", isCorrect: false },
            { id: "a3", text: "Its execution time is constant and does not depend on input size", isCorrect: true },
            { id: "a4", text: "It only works for input size 1", isCorrect: false }
          ],
          explanation: "O(1) complexity, also known as constant time complexity, means that the algorithm's execution time does not change regardless of the size of the input data."
        },
        // Q19
        {
          id: "comp-4",
          text: "What is the time complexity of accessing an element in an array by its index?",
          options: [
            { id: "a1", text: "O(n)", isCorrect: false },
            { id: "a2", text: "O(log n)", isCorrect: false },
            { id: "a3", text: "O(1)", isCorrect: true },
            { id: "a4", text: "O(n²)", isCorrect: false }
          ],
          explanation: "Accessing an element in an array using its index is a direct memory access operation, which takes constant time, O(1), regardless of the array's size."
        },
        // Q20
        {
          id: "comp-5",
          text: "What is the typical time complexity of a nested loop where both loops iterate 'n' times?",
          options: [
            { id: "a1", text: "O(n)", isCorrect: false },
            { id: "a2", text: "O(log n)", isCorrect: false },
            { id: "a3", text: "O(n²)", isCorrect: true },
            { id: "a4", text: "O(2n)", isCorrect: false }
          ],
          explanation: "When one loop iterating 'n' times is nested inside another loop also iterating 'n' times, the inner loop's body executes n * n = n² times, resulting in O(n²) time complexity."
        },
        // Q21
        {
          id: "comp-6",
          text: "What does Big Theta (Θ) notation signify?",
          options: [
            { id: "a1", text: "Only the worst-case complexity", isCorrect: false },
            { id: "a2", text: "Only the best-case complexity", isCorrect: false },
            { id: "a3", text: "A tight bound on the complexity (both upper and lower)", isCorrect: true },
            { id: "a4", text: "The complexity is negligible", isCorrect: false }
          ],
          explanation: "Big Theta (Θ) notation provides a tight bound, meaning the algorithm's growth rate is bounded both from above (like Big O) and below (like Big Omega) by the same function."
        },
        // Q22
        {
          id: "comp-7",
          text: "If Algorithm A has O(n) complexity and Algorithm B has O(log n) complexity, which is generally faster for large inputs?",
          options: [
            { id: "a1", text: "Algorithm A", isCorrect: false },
            { id: "a2", text: "Algorithm B", isCorrect: true },
            { id: "a3", text: "They are equally fast", isCorrect: false },
            { id: "a4", text: "It depends on the constant factors", isCorrect: false } // While true in practice for small n, log n grows significantly slower asymptotically.
          ],
          explanation: "Logarithmic time complexity (O(log n)) grows much slower than linear time complexity (O(n)). Therefore, for large input sizes (n), Algorithm B will generally be significantly faster."
        }
      ]
    },
    {
      id: "searching-algorithms",
      title: "Searching Algorithms",
      description: "Explore different methods for finding elements within data structures.",
      topic: "Searching",
      difficulty: "intermediate",
      questions: [
        // Q23
        {
          id: "search-1",
          text: "What is the worst-case time complexity of Linear Search?",
          options: [
            { id: "a1", text: "O(1)", isCorrect: false },
            { id: "a2", text: "O(log n)", isCorrect: false },
            { id: "a3", text: "O(n)", isCorrect: true },
            { id: "a4", text: "O(n²)", isCorrect: false }
          ],
          explanation: "The worst case for linear search occurs when the target element is the last element in the array or not present at all, requiring 'n' comparisons, resulting in O(n) complexity."
        },
        // Q24
        {
          id: "search-2",
          text: "What is a prerequisite for using Binary Search?",
          options: [
            { id: "a1", text: "The data must be stored in a linked list", isCorrect: false },
            { id: "a2", text: "The data must be sorted", isCorrect: true },
            { id: "a3", text: "The data must contain only unique elements", isCorrect: false },
            { id: "a4", text: "The data must be stored in a hash table", isCorrect: false }
          ],
          explanation: "Binary search works by repeatedly dividing the search interval in half. This process relies on the property that the array (or list) is sorted."
        },
        // Q25
        {
          id: "search-3",
          text: "What is the time complexity of Binary Search?",
          options: [
            { id: "a1", text: "O(1)", isCorrect: false },
            { id: "a2", text: "O(log n)", isCorrect: true },
            { id: "a3", text: "O(n)", isCorrect: false },
            { id: "a4", text: "O(n log n)", isCorrect: false }
          ],
          explanation: "Binary search halves the search space with each comparison, leading to a logarithmic time complexity, O(log n)."
        },
        // Q26
         {
          id: "search-4",
          text: "Which searching algorithm works by comparing the target value with the middle element of a sorted array?",
          options: [
            { id: "a1", text: "Linear Search", isCorrect: false },
            { id: "a2", text: "Binary Search", isCorrect: true },
            { id: "a3", text: "Depth First Search (DFS)", isCorrect: false },
            { id: "a4", text: "Breadth First Search (BFS)", isCorrect: false }
          ],
          explanation: "Binary search is the algorithm that operates on sorted arrays by comparing the target with the middle element to determine which half of the array to search next."
        },
        // Q27
        {
          id: "search-5",
          text: "In which scenario would Linear Search be preferable to Binary Search?",
          options: [
            { id: "a1", text: "When searching very large datasets", isCorrect: false },
            { id: "a2", text: "When the data is unsorted and sorting is costly", isCorrect: true },
            { id: "a3", text: "When search time must be guaranteed logarithmic", isCorrect: false },
            { id: "a4", text: "When searching for the maximum element", isCorrect: false }
          ],
          explanation: "If the data is unsorted, Binary Search cannot be directly applied. Sorting the data first takes O(n log n) time. If only a few searches are needed, the O(n) time of Linear Search might be better than the cost of sorting plus O(log n) search."
        },
        // Q28
        {
          id: "search-6",
          text: "What is the worst-case time complexity for searching in a hash table?",
          options: [
            { id: "a1", text: "O(1)", isCorrect: false },
            { id: "a2", text: "O(log n)", isCorrect: false },
            { id: "a3", text: "O(n)", isCorrect: true },
            { id: "a4", text: "O(n²)", isCorrect: false }
          ],
          explanation: "The worst-case for hash table search occurs when all keys hash to the same bucket (collision), degrading performance to that of searching a linked list, which is O(n)."
        }
      ]
    },
    {
      id: "linked-lists",
      title: "Linked Lists",
      description: "Questions about singly, doubly, and circular linked list operations and properties.",
      topic: "Data Structures",
      difficulty: "intermediate",
      questions: [
        // Q29
        {
          id: "ll-1",
          text: "What is the primary advantage of a linked list over an array?",
          options: [
            { id: "a1", text: "Constant time access to elements by index", isCorrect: false },
            { id: "a2", text: "Efficient dynamic resizing (insertion/deletion)", isCorrect: true },
            { id: "a3", text: "Better cache locality", isCorrect: false },
            { id: "a4", text: "Lower memory usage per element", isCorrect: false } // Nodes often use more memory due to pointers
          ],
          explanation: "Linked lists excel at dynamic resizing. Inserting or deleting elements in the middle requires only updating pointers (O(1) once the node is found), unlike arrays which may need shifting elements (O(n))."
        },
        // Q30
        {
          id: "ll-2",
          text: "What is the time complexity to insert a node at the beginning of a singly linked list?",
          options: [
            { id: "a1", text: "O(1)", isCorrect: true },
            { id: "a2", text: "O(log n)", isCorrect: false },
            { id: "a3", text: "O(n)", isCorrect: false },
            { id: "a4", text: "O(n log n)", isCorrect: false }
          ],
          explanation: "Inserting at the beginning (head) of a singly linked list only involves creating the new node and updating the head pointer and the new node's next pointer, taking constant time, O(1)."
        },
        // Q31
        {
          id: "ll-3",
          text: "What is the time complexity to find the k-th element in a singly linked list?",
          options: [
            { id: "a1", text: "O(1)", isCorrect: false },
            { id: "a2", text: "O(log n)", isCorrect: false },
            { id: "a3", text: "O(k)", isCorrect: true }, // More precisely O(k), which is O(n) in worst case
            { id: "a4", text: "O(n log n)", isCorrect: false }
          ],
          explanation: "To find the k-th element, you must traverse the list from the head, following 'next' pointers k times. This takes O(k) time, which is O(n) in the worst case (finding the last element)."
        },
        // Q32
        {
          id: "ll-4",
          text: "What is the main benefit of a doubly linked list over a singly linked list?",
          options: [
            { id: "a1", text: "It uses less memory", isCorrect: false },
            { id: "a2", text: "It allows traversal in both forward and backward directions", isCorrect: true },
            { id: "a3", text: "Insertion at the beginning is faster", isCorrect: false }, // Both are O(1)
            { id: "a4", text: "Searching is faster", isCorrect: false } // Search is still O(n)
          ],
          explanation: "A doubly linked list has pointers to both the next and the previous node, allowing efficient traversal in both directions. This is useful for operations like deleting a node given only a pointer to the node itself."
        },
        // Q33
        {
          id: "ll-5",
          text: "How do you detect a cycle in a linked list?",
          options: [
            { id: "a1", text: "By checking if the head node is NULL", isCorrect: false },
            { id: "a2", text: "Using Floyd's Cycle-Finding Algorithm (Tortoise and Hare)", isCorrect: true },
            { id: "a3", text: "By traversing the list and marking visited nodes (requires extra space)", isCorrect: true }, // Also correct, but Floyd's is more common in interviews
            { id: "a4", text: "Comparing the first and last node", isCorrect: false }
          ],
          explanation: "Floyd's Cycle-Finding Algorithm uses two pointers, one slow (tortoise) moving one step at a time, and one fast (hare) moving two steps. If they meet, there's a cycle. Marking visited nodes also works but uses O(n) space, whereas Floyd's uses O(1) space."
          // Note: Made two options technically correct, but highlighted the more standard O(1) space solution.
        },
         // Q34
        {
          id: "ll-6",
          text: "What is a characteristic of a circular linked list?",
          options: [
            { id: "a1", text: "It must have at least two nodes", isCorrect: false },
            { id: "a2", text: "The last node points back to the first node (head)", isCorrect: true },
            { id: "a3", text: "It cannot be traversed", isCorrect: false },
            { id: "a4", text: "It does not have a head pointer", isCorrect: false }
          ],
          explanation: "In a circular linked list, the 'next' pointer of the last node points back to the head node instead of NULL, forming a circle."
        }
      ]
    },
    {
      id: "trees-basics",
      title: "Tree Data Structures Basics",
      description: "Fundamentals of tree terminology, properties, and basic operations.",
      topic: "Data Structures",
      difficulty: "beginner",
      questions: [
        // Q35
        {
          id: "tree-b-1",
          text: "What is the topmost node in a tree called?",
          options: [
            { id: "a1", text: "Leaf", isCorrect: false },
            { id: "a2", text: "Root", isCorrect: true },
            { id: "a3", text: "Branch", isCorrect: false },
            { id: "a4", text: "Child", isCorrect: false }
          ],
          explanation: "The root is the unique starting node of a tree structure, from which all other nodes descend."
        },
        // Q36
        {
          id: "tree-b-2",
          text: "What are nodes with no children called?",
          options: [
            { id: "a1", text: "Root nodes", isCorrect: false },
            { id: "a2", text: "Internal nodes", isCorrect: false },
            { id: "a3", text: "Leaf nodes (or terminal nodes)", isCorrect: true },
            { id: "a4", text: "Parent nodes", isCorrect: false }
          ],
          explanation: "Leaf nodes are nodes at the end of branches that do not have any children."
        },
        // Q37
        {
          id: "tree-b-3",
          text: "What is the height of a tree?",
          options: [
            { id: "a1", text: "The number of nodes in the tree", isCorrect: false },
            { id: "a2", text: "The number of leaf nodes", isCorrect: false },
            { id: "a3", text: "The length of the longest path from the root to a leaf node", isCorrect: true },
            { id: "a4", text: "The number of edges connected to the root", isCorrect: false }
          ],
          explanation: "The height of a tree is the maximum number of edges on a path from the root node to any leaf node. The height of an empty tree is often defined as -1, and a tree with only a root node has height 0."
        },
        // Q38
        {
          id: "tree-b-4",
          text: "In a binary tree, what is the maximum number of children a node can have?",
          options: [
            { id: "a1", text: "1", isCorrect: false },
            { id: "a2", text: "2", isCorrect: true },
            { id: "a3", text: "Unlimited", isCorrect: false },
            { id: "a4", text: "N (where N is the number of nodes)", isCorrect: false }
          ],
          explanation: "By definition, each node in a binary tree can have at most two children, typically referred to as the left child and the right child."
        },
        // Q39
         {
          id: "tree-b-5",
          text: "Which tree traversal visits nodes in ascending order in a Binary Search Tree (BST)?",
          options: [
            { id: "a1", text: "Pre-order", isCorrect: false },
            { id: "a2", text: "Post-order", isCorrect: false },
            { id: "a3", text: "In-order", isCorrect: true },
            { id: "a4", text: "Level-order", isCorrect: false }
          ],
          explanation: "In-order traversal (Left-Root-Right) of a Binary Search Tree visits the nodes in ascending sorted order of their keys."
        },
         // Q40
        {
          id: "tree-b-6",
          text: "What defines a 'full' binary tree?",
          options: [
            { id: "a1", text: "Every node has exactly two children", isCorrect: false },
            { id: "a2", text: "Every node has either 0 or 2 children", isCorrect: true },
            { id: "a3", text: "All leaf nodes are at the same level", isCorrect: false },
            { id: "a4", text: "The tree is perfectly balanced", isCorrect: false }
          ],
          explanation: "A full binary tree (sometimes called a proper binary tree) is a tree in which every node has either zero or exactly two children."
        }
      ]
    },
    {
      id: "bst-operations",
      title: "Binary Search Trees (BST)",
      description: "Focusing on the properties and operations of Binary Search Trees.",
      topic: "Data Structures",
      difficulty: "intermediate",
      questions: [
        // Q41
        {
          id: "bst-1",
          text: "What is the key property of a Binary Search Tree (BST)?",
          options: [
            { id: "a1", text: "All nodes are smaller than the root", isCorrect: false },
            { id: "a2", text: "The tree is always perfectly balanced", isCorrect: false },
            { id: "a3", text: "For any node, all keys in the left subtree are smaller, and all keys in the right subtree are larger", isCorrect: true },
            { id: "a4", text: "It uses level-order traversal for insertion", isCorrect: false }
          ],
          explanation: "The BST property mandates that for every node, all values in its left subtree must be less than the node's value, and all values in its right subtree must be greater than the node's value."
        },
        // Q42
        {
          id: "bst-2",
          text: "What is the average time complexity for search, insertion, and deletion in a balanced BST?",
          options: [
            { id: "a1", text: "O(1)", isCorrect: false },
            { id: "a2", text: "O(log n)", isCorrect: true },
            { id: "a3", text: "O(n)", isCorrect: false },
            { id: "a4", text: "O(n log n)", isCorrect: false }
          ],
          explanation: "In a balanced BST (like AVL or Red-Black trees), the height is kept logarithmically proportional to the number of nodes (n), resulting in O(log n) average time for search, insertion, and deletion."
        },
        // Q43
        {
          id: "bst-3",
          text: "What is the worst-case time complexity for search, insertion, and deletion in a skewed (unbalanced) BST?",
          options: [
            { id: "a1", text: "O(1)", isCorrect: false },
            { id: "a2", text: "O(log n)", isCorrect: false },
            { id: "a3", text: "O(n)", isCorrect: true },
            { id: "a4", text: "O(n²)", isCorrect: false }
          ],
          explanation: "In the worst case, a BST can degenerate into a linear structure (like a linked list), where the height becomes proportional to n. Operations then require traversing potentially all nodes, leading to O(n) complexity."
        },
        // Q44
        {
          id: "bst-4",
          text: "How do you find the minimum value in a BST?",
          options: [
            { id: "a1", text: "Traverse to the rightmost node", isCorrect: false },
            { id: "a2", text: "Traverse to the leftmost node", isCorrect: true },
            { id: "a3", text: "Check the root node's value", isCorrect: false },
            { id: "a4", text: "Perform a level-order traversal", isCorrect: false }
          ],
          explanation: "Due to the BST property, the smallest value will always be found by starting at the root and repeatedly moving to the left child until a node with no left child is reached."
        },
        // Q45
         {
          id: "bst-5",
          text: "How do you find the maximum value in a BST?",
          options: [
            { id: "a1", text: "Traverse to the leftmost node", isCorrect: false },
            { id: "a2", text: "Traverse to the rightmost node", isCorrect: true },
            { id: "a3", text: "Check the root node's value", isCorrect: false },
            { id: "a4", text: "Perform a pre-order traversal", isCorrect: false }
          ],
          explanation: "Similarly to finding the minimum, the largest value in a BST is found by starting at the root and repeatedly moving to the right child until a node with no right child is reached."
        },
        // Q46
        {
          id: "bst-6",
          text: "When deleting a node with two children from a BST, what value typically replaces it?",
          options: [
            { id: "a1", text: "The node's left child", isCorrect: false },
            { id: "a2", text: "The node's right child", isCorrect: false },
            { id: "a3", text: "Its in-order successor (smallest in right subtree) or predecessor (largest in left subtree)", isCorrect: true },
            { id: "a4", text: "The root node of the tree", isCorrect: false }
          ],
          explanation: "To maintain the BST property after deleting a node with two children, it's typically replaced by either its in-order successor (the minimum value in its right subtree) or its in-order predecessor (the maximum value in its left subtree)."
        }
      ]
    },
     {
      id: "heap-data-structure",
      title: "Heap Data Structure",
      description: "Understanding Min-Heaps, Max-Heaps, heap operations, and Heap Sort.",
      topic: "Data Structures",
      difficulty: "intermediate",
      questions: [
          // Q47
          {
              id: "heap-1",
              text: "What is the primary property of a Max-Heap?",
              options: [
                  { id: "a1", text: "Each node's value is less than or equal to its children's values", isCorrect: false },
                  { id: "a2", text: "Each node's value is greater than or equal to its children's values", isCorrect: true },
                  { id: "a3", text: "The tree must be a full binary tree", isCorrect: false },
                  { id: "a4", text: "All leaf nodes are at the same depth", isCorrect: false }
              ],
              explanation: "In a Max-Heap, the value of any node is greater than or equal to the values of its children. This ensures the maximum element is always at the root."
          },
          // Q48
          {
              id: "heap-2",
              text: "What is the primary property of a Min-Heap?",
              options: [
                  { id: "a1", text: "Each node's value is less than or equal to its children's values", isCorrect: true },
                  { id: "a2", text: "Each node's value is greater than or equal to its children's values", isCorrect: false },
                  { id: "a3", text: "It's sorted in ascending order", isCorrect: false },
                  { id: "a4", text: "It only stores positive integers", isCorrect: false }
              ],
              explanation: "In a Min-Heap, the value of any node is less than or equal to the values of its children. This ensures the minimum element is always at the root."
          },
          // Q49
          {
              id: "heap-3",
              text: "What is the time complexity of inserting an element into a binary heap?",
              options: [
                  { id: "a1", text: "O(1)", isCorrect: false },
                  { id: "a2", text: "O(log n)", isCorrect: true },
                  { id: "a3", text: "O(n)", isCorrect: false },
                  { id: "a4", text: "O(n log n)", isCorrect: false }
              ],
              explanation: "Inserting into a heap involves adding the element at the end and then 'bubbling up' (or 'heapifying up') to restore the heap property. Since a heap is a complete binary tree, its height is O(log n), making the insertion complexity O(log n)."
          },
          // Q50
          {
              id: "heap-4",
              text: "What is the time complexity of extracting the minimum (from Min-Heap) or maximum (from Max-Heap) element?",
              options: [
                  { id: "a1", text: "O(1)", isCorrect: false },
                  { id: "a2", text: "O(log n)", isCorrect: true },
                  { id: "a3", text: "O(n)", isCorrect: false },
                  { id: "a4", text: "O(n log n)", isCorrect: false }
              ],
              explanation: "Extracting the min/max element involves taking the root, replacing it with the last element, and then 'bubbling down' (or 'heapifying down') to restore the heap property. This also takes O(log n) time due to the heap's height."
          },
          // Q51
          {
              id: "heap-5",
              text: "Which data structure is commonly implemented using a heap?",
              options: [
                  { id: "a1", text: "Stack", isCorrect: false },
                  { id: "a2", text: "Queue", isCorrect: false },
                  { id: "a3", text: "Priority Queue", isCorrect: true },
                  { id: "a4", text: "Hash Table", isCorrect: false }
              ],
              explanation: "Heaps are the standard implementation choice for Priority Queues because they allow efficient (O(log n)) insertion and extraction of the highest (or lowest) priority element."
          },
          // Q52
          {
              id: "heap-6",
              text: "What is the time complexity of building a heap from an array of n elements using the bottom-up approach (heapify)?",
              options: [
                  { id: "a1", text: "O(log n)", isCorrect: false },
                  { id: "a2", text: "O(n)", isCorrect: true },
                  { id: "a3", text: "O(n log n)", isCorrect: false },
                  { id: "a4", text: "O(n²)", isCorrect: false }
              ],
              explanation: "While inserting n elements one by one takes O(n log n), the more efficient bottom-up heapify algorithm builds a heap in linear time, O(n)."
          },
          // Q53
           {
              id: "heap-7",
              text: "What is the space complexity of Heap Sort?",
              options: [
                  { id: "a1", text: "O(1) (in-place)", isCorrect: true },
                  { id: "a2", text: "O(log n)", isCorrect: false },
                  { id: "a3", text: "O(n)", isCorrect: false },
                  { id: "a4", text: "O(n log n)", isCorrect: false }
              ],
              explanation: "Heap Sort can be performed in-place by building the heap within the input array and then swapping the root with the last element, reducing the heap size, and heapifying. This requires only constant extra space, O(1)."
          }
      ]
    },
    {
      id: "hash-tables",
      title: "Hash Tables",
      description: "Understanding hash functions, collision resolution, and hash table performance.",
      topic: "Data Structures",
      difficulty: "advanced",
      questions: [
          // Q54
          {
              id: "hash-1",
              text: "What is the primary purpose of a hash function in a hash table?",
              options: [
                  { id: "a1", text: "To sort the elements", isCorrect: false },
                  { id: "a2", text: "To map keys to bucket indices (addresses)", isCorrect: true },
                  { id: "a3", text: "To ensure elements are unique", isCorrect: false },
                  { id: "a4", text: "To compress the data", isCorrect: false }
              ],
              explanation: "A hash function takes a key as input and computes an index (or address) within the hash table's underlying array (bucket array) where the corresponding value should be stored or retrieved."
          },
          // Q55
          {
              id: "hash-2",
              text: "What is a 'collision' in a hash table?",
              options: [
                  { id: "a1", text: "When the hash table becomes full", isCorrect: false },
                  { id: "a2", text: "When trying to insert a duplicate key", isCorrect: false }, // This is handled, but not the definition of collision
                  { id: "a3", text: "When two different keys map to the same index", isCorrect: true },
                  { id: "a4", text: "When the hash function returns a negative index", isCorrect: false }
              ],
              explanation: "A collision occurs when the hash function generates the same index for two or more distinct keys. Collision resolution strategies are needed to handle this."
          },
          // Q56
          {
              id: "hash-3",
              text: "Which of the following is a common collision resolution technique?",
              options: [
                  { id: "a1", text: "Re-sorting the table", isCorrect: false },
                  { id: "a2", text: "Separate Chaining (using linked lists at each index)", isCorrect: true },
                  { id: "a3", text: "Ignoring the colliding element", isCorrect: false },
                  { id: "a4", text: "Using a larger hash function", isCorrect: false } // Doesn't resolve, just might reduce frequency
              ],
              explanation: "Separate Chaining is a common method where each bucket index points to a linked list (or other data structure) containing all keys that hash to that index."
          },
          // Q57
          {
              id: "hash-4",
              text: "What is 'Open Addressing' in hash tables?",
              options: [
                  { id: "a1", text: "Storing all elements outside the table in a separate list", isCorrect: false },
                  { id: "a2", text: "A collision resolution technique where colliding elements are stored in other empty slots within the table", isCorrect: true },
                  { id: "a3", text: "Allowing anyone to access the hash table", isCorrect: false },
                  { id: "a4", text: "Using multiple hash tables", isCorrect: false }
              ],
              explanation: "Open Addressing techniques (like linear probing, quadratic probing, double hashing) handle collisions by finding an alternative empty slot within the hash table array itself, rather than using external data structures like linked lists."
          },
           // Q58
          {
              id: "hash-5",
              text: "What is the 'load factor' of a hash table?",
              options: [
                  { id: "a1", text: "The number of collisions occurred", isCorrect: false },
                  { id: "a2", text: "The ratio of the number of stored elements to the number of buckets", isCorrect: true },
                  { id: "a3", text: "The size of the largest bucket chain", isCorrect: false },
                  { id: "a4", text: "The time taken to compute the hash function", isCorrect: false }
              ],
              explanation: "Load factor (α = n/m, where n is number of elements, m is number of buckets) indicates how full the hash table is. It significantly impacts performance; higher load factors increase collision probability."
          },
          // Q59
          {
              id: "hash-6",
              text: "Why is choosing a good hash function important?",
              options: [
                  { id: "a1", text: "To make keys easily readable", isCorrect: false },
                  { id: "a2", text: "To minimize collisions and distribute keys uniformly", isCorrect: true },
                  { id: "a3", text: "To ensure O(1) worst-case performance", isCorrect: false }, // Average case is O(1), worst is O(n)
                  { id: "a4", text: "To use less memory", isCorrect: false }
              ],
              explanation: "A good hash function distributes keys uniformly across the buckets, minimizing collisions and ensuring the average O(1) performance for insertions, deletions, and searches."
          },
           // Q60
          {
              id: "hash-7",
              text: "What is a potential disadvantage of linear probing for collision resolution?",
              options: [
                  { id: "a1", text: "It requires extra memory for pointers", isCorrect: false }, // This applies to chaining
                  { id: "a2", text: "It can lead to 'clustering', where filled slots group together", isCorrect: true },
                  { id: "a3", text: "It is complex to implement", isCorrect: false },
                  { id: "a4", text: "It only works for integer keys", isCorrect: false }
              ],
              explanation: "Linear probing (searching sequentially for the next empty slot) can suffer from primary clustering, where long runs of occupied slots build up, increasing search times for keys hashing into that cluster."
          }
      ]
    },
    {
      id: "graph-basics",
      title: "Graph Data Structures Basics",
      description: "Fundamental concepts, terminology, and representations of graphs.",
      topic: "Graphs",
      difficulty: "beginner",
      questions: [
         // Q61
         {
              id: "graph-b-1",
              text: "What does a graph data structure consist of?",
              options: [
                  { id: "a1", text: "Nodes and Layers", isCorrect: false },
                  { id: "a2", text: "Roots and Leaves", isCorrect: false }, // Tree terminology
                  { id: "a3", text: "Vertices (Nodes) and Edges", isCorrect: true },
                  { id: "a4", text: "Keys and Values", isCorrect: false } // Hash table terminology
              ],
              explanation: "A graph is formally defined as a set of vertices (or nodes) and a set of edges that connect pairs of vertices."
          },
          // Q62
          {
              id: "graph-b-2",
              text: "What is the difference between a directed and an undirected graph?",
              options: [
                  { id: "a1", text: "Directed graphs have weights, undirected do not", isCorrect: false },
                  { id: "a2", text: "Edges in a directed graph have a direction (A->B is different from B->A), while edges in an undirected graph do not", isCorrect: true },
                  { id: "a3", text: "Directed graphs must be acyclic", isCorrect: false },
                  { id: "a4", text: "Undirected graphs cannot have cycles", isCorrect: false }
              ],
              explanation: "In directed graphs (digraphs), edges represent a one-way relationship. In undirected graphs, edges represent a two-way relationship (an edge between A and B implies connection in both directions)."
          },
          // Q63
          {
              id: "graph-b-3",
              text: "What is an adjacency matrix?",
              options: [
                  { id: "a1", text: "A list showing which nodes are adjacent to the root", isCorrect: false },
                  { id: "a2", text: "A 2D array where M[i][j] = 1 if there's an edge between vertex i and vertex j, 0 otherwise", isCorrect: true },
                  { id: "a3", text: "A data structure used only for weighted graphs", isCorrect: false },
                  { id: "a4", text: "A way to store graph nodes sorted by degree", isCorrect: false }
              ],
              explanation: "An adjacency matrix is a square matrix used to represent a graph. The size of the matrix is V x V (where V is the number of vertices), and the value M[i][j] indicates the presence (and possibly weight) of an edge from vertex i to vertex j."
          },
          // Q64
          {
              id: "graph-b-4",
              text: "What is an adjacency list?",
              options: [
                  { id: "a1", text: "A list of all edges sorted by weight", isCorrect: false },
                  { id: "a2", text: "A matrix representation of node connections", isCorrect: false },
                  { id: "a3", text: "An array of lists, where List[i] contains all vertices adjacent to vertex i", isCorrect: true },
                  { id: "a4", text: "A special type of linked list for graphs", isCorrect: false }
              ],
              explanation: "An adjacency list represents a graph as an array of lists. The i-th entry in the array contains a list of all vertices that are adjacent to vertex i."
          },
          // Q65
          {
              id: "graph-b-5",
              text: "What is the 'degree' of a vertex in an undirected graph?",
              options: [
                  { id: "a1", text: "The number of edges connected to the vertex", isCorrect: true },
                  { id: "a2", text: "The weight of the heaviest edge connected to the vertex", isCorrect: false },
                  { id: "a3", text: "The distance from the root vertex", isCorrect: false },
                  { id: "a4", text: "The number of cycles passing through the vertex", isCorrect: false }
              ],
              explanation: "The degree of a vertex is simply the count of edges incident upon it. In directed graphs, we distinguish between in-degree (incoming edges) and out-degree (outgoing edges)."
          },
          // Q66
          {
              id: "graph-b-6",
              text: "When is using an adjacency list generally preferred over an adjacency matrix?",
              options: [
                  { id: "a1", text: "When the graph is dense (many edges)", isCorrect: false },
                  { id: "a2", text: "When the graph is sparse (few edges)", isCorrect: true },
                  { id: "a3", text: "When the graph has negative edge weights", isCorrect: false },
                  { id: "a4", text: "When needing to check for an edge between two specific vertices very quickly", isCorrect: false } // Matrix is faster (O(1)) for this
              ],
              explanation: "Adjacency lists are more space-efficient for sparse graphs (where |E| is much smaller than |V|²) because they only store existing edges. Adjacency matrices use O(V²) space regardless of the number of edges."
          }
      ]
    },
    {
      id: "graph-traversal",
      title: "Graph Traversal Algorithms",
      description: "Exploring Breadth-First Search (BFS) and Depth-First Search (DFS).",
      topic: "Graphs",
      difficulty: "intermediate",
      questions: [
          // Q67
          {
              id: "graph-t-1",
              text: "Which graph traversal algorithm explores the graph layer by layer?",
              options: [
                  { id: "a1", text: "Depth-First Search (DFS)", isCorrect: false },
                  { id: "a2", text: "Breadth-First Search (BFS)", isCorrect: true },
                  { id: "a3", text: "Dijkstra's Algorithm", isCorrect: false },
                  { id: "a4", text: "Prim's Algorithm", isCorrect: false }
              ],
              explanation: "BFS explores vertices level by level, visiting all neighbors of a vertex before moving to the neighbors' neighbors. It uses a queue to manage the order of visitation."
          },
          // Q68
          {
              id: "graph-t-2",
              text: "Which graph traversal algorithm explores as far as possible along each branch before backtracking?",
              options: [
                  { id: "a1", text: "Breadth-First Search (BFS)", isCorrect: false },
                  { id: "a2", text: "Depth-First Search (DFS)", isCorrect: true },
                  { id: "a3", text: "Kruskal's Algorithm", isCorrect: false },
                  { id: "a4", text: "Bellman-Ford Algorithm", isCorrect: false }
              ],
              explanation: "DFS explores a path as deeply as possible before backtracking and exploring alternative paths. It typically uses recursion or an explicit stack."
          },
          // Q69
          {
              id: "graph-t-3",
              text: "Which data structure is typically used to implement BFS?",
              options: [
                  { id: "a1", text: "Stack", isCorrect: false },
                  { id: "a2", text: "Queue", isCorrect: true },
                  { id: "a3", text: "Priority Queue", isCorrect: false },
                  { id: "a4", text: "Hash Table", isCorrect: false }
              ],
              explanation: "BFS uses a queue to maintain the FIFO (First-In, First-Out) order needed to explore nodes level by level."
          },
          // Q70
          {
              id: "graph-t-4",
              text: "Which data structure is typically used implicitly or explicitly to implement DFS?",
              options: [
                  { id: "a1", text: "Queue", isCorrect: false },
                  { id: "a2", text: "Stack", isCorrect: true },
                  { id: "a3", text: "Heap", isCorrect: false },
                  { id: "a4", text: "Linked List", isCorrect: false }
              ],
              explanation: "DFS uses a LIFO (Last-In, First-Out) approach, which is naturally provided by the call stack in recursive implementations or can be managed with an explicit stack in iterative versions."
          },
          // Q71
          {
              id: "graph-t-5",
              text: "What is the time complexity of BFS and DFS on a graph represented by adjacency lists?",
              options: [
                  { id: "a1", text: "O(V)", isCorrect: false },
                  { id: "a2", text: "O(E)", isCorrect: false },
                  { id: "a3", text: "O(V + E)", isCorrect: true },
                  { id: "a4", text: "O(V * E)", isCorrect: false }
              ],
              explanation: "Both BFS and DFS visit each vertex (V) and traverse each edge (E) at most once when using adjacency lists, resulting in O(V + E) time complexity."
          },
          // Q72
          {
              id: "graph-t-6",
              text: "What is the time complexity of BFS and DFS on a graph represented by an adjacency matrix?",
              options: [
                  { id: "a1", text: "O(V + E)", isCorrect: false },
                  { id: "a2", text: "O(V²)", isCorrect: true },
                  { id: "a3", text: "O(E log V)", isCorrect: false },
                  { id: "a4", text: "O(V log V)", isCorrect: false }
              ],
              explanation: "When using an adjacency matrix, checking the neighbors for each vertex takes O(V) time. Since this is done for all V vertices, the total time complexity for both BFS and DFS becomes O(V²)."
          },
          // Q73
          {
              id: "graph-t-7",
              text: "Which traversal algorithm is typically used to find the shortest path in an unweighted graph?",
              options: [
                  { id: "a1", text: "Depth-First Search (DFS)", isCorrect: false },
                  { id: "a2", text: "Breadth-First Search (BFS)", isCorrect: true },
                  { id: "a3", text: "Dijkstra's Algorithm", isCorrect: false }, // Used for weighted graphs
                  { id: "a4", text: "Topological Sort", isCorrect: false }
              ],
              explanation: "BFS explores layer by layer, guaranteeing that the first time it reaches a destination node, it has found the path with the fewest edges (shortest path in an unweighted graph)."
          }
      ]
    },
    {
      id: "shortest-path-mst",
      title: "Shortest Path & MST Algorithms",
      description: "Algorithms like Dijkstra's, Bellman-Ford, Prim's, and Kruskal's.",
      topic: "Graphs",
      difficulty: "advanced",
      questions: [
           // Q74
          {
              id: "sp-mst-1",
              text: "Which algorithm finds the shortest path from a single source vertex to all other vertices in a weighted graph with non-negative edge weights?",
              options: [
                  { id: "a1", text: "Bellman-Ford Algorithm", isCorrect: false },
                  { id: "a2", text: "Dijkstra's Algorithm", isCorrect: true },
                  { id: "a3", text: "Floyd-Warshall Algorithm", isCorrect: false }, // All-pairs shortest path
                  { id: "a4", text: "Prim's Algorithm", isCorrect: false } // MST algorithm
              ],
              explanation: "Dijkstra's algorithm is a greedy algorithm that efficiently finds the shortest paths from a single source in a graph where edge weights are non-negative."
          },
          // Q75
          {
              id: "sp-mst-2",
              text: "What is a limitation of Dijkstra's algorithm?",
              options: [
                  { id: "a1", text: "It only works on directed graphs", isCorrect: false },
                  { id: "a2", text: "It cannot handle graphs with cycles", isCorrect: false },
                  { id: "a3", text: "It may produce incorrect results if the graph has negative edge weights", isCorrect: true },
                  { id: "a4", text: "It has exponential time complexity", isCorrect: false }
              ],
              explanation: "The greedy approach of Dijkstra's assumes that once a vertex is finalized, its shortest path is found. Negative edge weights can violate this assumption, leading to incorrect results."
          },
          // Q76
          {
              id: "sp-mst-3",
              text: "Which algorithm can find the shortest path from a single source even if the graph contains negative edge weights (but no negative cycles)?",
              options: [
                  { id: "a1", text: "Dijkstra's Algorithm", isCorrect: false },
                  { id: "a2", text: "Bellman-Ford Algorithm", isCorrect: true },
                  { id: "a3", text: "Prim's Algorithm", isCorrect: false },
                  { id: "a4", text: "Breadth-First Search (BFS)", isCorrect: false }
              ],
              explanation: "The Bellman-Ford algorithm uses dynamic programming to handle negative edge weights correctly. It can also detect negative cycles reachable from the source."
          },
           // Q77
          {
              id: "sp-mst-4",
              text: "What does a Minimum Spanning Tree (MST) of a weighted, undirected graph represent?",
              options: [
                  { id: "a1", text: "The shortest path between two specific nodes", isCorrect: false },
                  { id: "a2", text: "A subgraph that connects all vertices together with the minimum possible total edge weight", isCorrect: true },
                  { id: "a3", text: "A cycle that visits every vertex exactly once with minimum weight", isCorrect: false }, // Traveling Salesperson Problem
                  { id: "a4", text: "The set of edges with the lowest weights", isCorrect: false } // Not necessarily connected
              ],
              explanation: "An MST is a tree (no cycles) that includes all vertices of the original graph and whose sum of edge weights is as small as possible."
          },
          // Q78
          {
              id: "sp-mst-5",
              text: "Which algorithm builds an MST by repeatedly adding the cheapest edge that connects a vertex in the MST to a vertex outside the MST?",
              options: [
                  { id: "a1", text: "Kruskal's Algorithm", isCorrect: false },
                  { id: "a2", text: "Prim's Algorithm", isCorrect: true },
                  { id: "a3", text: "Dijkstra's Algorithm", isCorrect: false },
                  { id: "a4", text: "Borůvka's Algorithm", isCorrect: false } // Another MST algo, but works differently
              ],
              explanation: "Prim's algorithm grows the MST starting from an arbitrary vertex, greedily adding the minimum-weight edge that connects a vertex already in the tree to one outside the tree."
          },
          // Q79
          {
              id: "sp-mst-6",
              text: "Which algorithm builds an MST by repeatedly adding the cheapest edge that does not form a cycle with already chosen edges?",
              options: [
                  { id: "a1", text: "Prim's Algorithm", isCorrect: false },
                  { id: "a2", text: "Kruskal's Algorithm", isCorrect: true },
                  { id: "a3", text: "Bellman-Ford Algorithm", isCorrect: false },
                  { id: "a4", text: "Floyd-Warshall Algorithm", isCorrect: false }
              ],
              explanation: "Kruskal's algorithm sorts all edges by weight and iteratively adds the next cheapest edge, provided it doesn't create a cycle (often checked using a Disjoint Set Union data structure)."
          },
          // Q80
           {
              id: "sp-mst-7",
              text: "What is the typical time complexity of Dijkstra's algorithm using a binary heap (priority queue)?",
              options: [
                  { id: "a1", text: "O(V + E)", isCorrect: false },
                  { id: "a2", text: "O(E log V)", isCorrect: true },
                  { id: "a3", text: "O(V log V)", isCorrect: false }, // Possible if E is close to V
                  { id: "a4", text: "O(V²)", isCorrect: false } // Without priority queue or dense graph
              ],
              explanation: "With a binary heap implementation for the priority queue, Dijkstra's algorithm runs in O(E log V) time. Using a Fibonacci heap can improve this to O(E + V log V)."
          }
      ]
    },
    {
      id: "dynamic-programming",
      title: "Dynamic Programming (DP)",
      description: "Concepts of memoization, tabulation, optimal substructure, and overlapping subproblems.",
      topic: "Dynamic Programming",
      difficulty: "advanced",
      questions: [
           // Q81
          {
              id: "dp-1",
              text: "What are the two key properties that a problem must exhibit to be solvable using Dynamic Programming?",
              options: [
                  { id: "a1", text: "Greedy choice and Recursive structure", isCorrect: false },
                  { id: "a2", text: "Optimal substructure and Overlapping subproblems", isCorrect: true },
                  { id: "a3", text: "Linear time complexity and Constant space complexity", isCorrect: false },
                  { id: "a4", text: "Directed edges and Non-negative weights", isCorrect: false }
              ],
              explanation: "Dynamic Programming applies to problems that can be broken down into smaller, overlapping subproblems, and where the optimal solution to the overall problem can be constructed from the optimal solutions of its subproblems (optimal substructure)."
          },
          // Q82
          {
              id: "dp-2",
              text: "What is 'Memoization' in the context of Dynamic Programming?",
              options: [
                  { id: "a1", text: "Building the solution bottom-up in a table", isCorrect: false }, // This is Tabulation
                  { id: "a2", text: "A top-down approach where results of expensive function calls are cached and reused", isCorrect: true },
                  { id: "a3", text: "A technique to reduce memory usage", isCorrect: false },
                  { id: "a4", text: "A way to parallelize DP algorithms", isCorrect: false }
              ],
              explanation: "Memoization is a top-down DP technique that uses recursion but stores the results of solved subproblems (usually in a hash map or array) to avoid recomputing them."
          },
          // Q83
          {
              id: "dp-3",
              text: "What is 'Tabulation' in the context of Dynamic Programming?",
              options: [
                  { id: "a1", text: "A recursive approach with caching", isCorrect: false }, // This is Memoization
                  { id: "a2", text: "A bottom-up approach where subproblems are solved iteratively and stored in a table", isCorrect: true },
                  { id: "a3", text: "Guessing the optimal solution", isCorrect: false },
                  { id: "a4", text: "A graphical representation of subproblems", isCorrect: false }
              ],
              explanation: "Tabulation is a bottom-up DP technique that solves subproblems in a specific order (usually starting from the smallest) and stores their results in a table (like an array or matrix), building up to the final solution."
          },
          // Q84
          {
              id: "dp-4",
              text: "Calculating Fibonacci numbers using recursion F(n) = F(n-1) + F(n-2) without DP suffers from what issue?",
              options: [
                  { id: "a1", text: "Incorrect results for large n", isCorrect: false },
                  { id: "a2", text: "Exponential time complexity due to recomputing the same subproblems", isCorrect: true },
                  { id: "a3", text: "Stack overflow for n > 2", isCorrect: false },
                  { id: "a4", text: "Inability to handle non-integer inputs", isCorrect: false }
              ],
              explanation: "Plain recursion for Fibonacci numbers recomputes values like F(n-2), F(n-3) multiple times, leading to an exponential number of calls (roughly O(2^n)). DP (memoization or tabulation) reduces this to O(n)."
          },
          // Q85
           {
              id: "dp-5",
              text: "Which of these problems is a classic example often solved using Dynamic Programming?",
              options: [
                  { id: "a1", text: "Sorting an array", isCorrect: false }, // Solved by sorting algorithms
                  { id: "a2", text: "Finding the shortest path in an unweighted graph", isCorrect: false }, // Solved by BFS
                  { id: "a3", text: "The Knapsack Problem (0/1 version)", isCorrect: true },
                  { id: "a4", text: "Searching in a Binary Search Tree", isCorrect: false } // Solved by BST search
              ],
              explanation: "The 0/1 Knapsack problem (selecting items with given weights and values to maximize total value within a weight capacity) exhibits optimal substructure and overlapping subproblems, making it suitable for DP."
          },
           // Q86
          {
              id: "dp-6",
              text: "What does 'Optimal Substructure' mean?",
              options: [
                  { id: "a1", text: "The problem can be solved in polynomial time", isCorrect: false },
                  { id: "a2", text: "The problem involves finding the minimum or maximum value", isCorrect: false },
                  { id: "a3", text: "An optimal solution to the problem contains within it optimal solutions to subproblems", isCorrect: true },
                  { id: "a4", text: "Subproblems do not depend on each other", isCorrect: false }
              ],
              explanation: "Optimal substructure is a key property indicating that if you have an optimal solution to a larger problem, the parts of that solution corresponding to smaller subproblems must also be optimal solutions for those subproblems."
          },
          // Q87
           {
              id: "dp-7",
              text: "What does 'Overlapping Subproblems' mean?",
              options: [
                  { id: "a1", text: "The problem has multiple optimal solutions", isCorrect: false },
                  { id: "a2", text: "A recursive algorithm solves the same subproblems repeatedly", isCorrect: true },
                  { id: "a3", text: "The subproblems are very similar but not identical", isCorrect: false },
                  { id: "a4", text: "The main problem can be divided into independent subproblems", isCorrect: false } // Divide and Conquer
              ],
              explanation: "Overlapping subproblems occur when a recursive solution involves solving the exact same subproblems multiple times. DP techniques store the results of these subproblems to avoid redundant computation."
          }
      ]
    },
     {
      id: "recursion-basics",
      title: "Recursion Basics",
      description: "Understanding recursive functions, base cases, and the call stack.",
      topic: "Fundamentals",
      difficulty: "beginner",
      questions: [
          // Q88
          {
              id: "rec-1",
              text: "What is a crucial component of every recursive function to prevent infinite loops?",
              options: [
                  { id: "a1", text: "A recursive call", isCorrect: false },
                  { id: "a2", text: "A base case (or termination condition)", isCorrect: true },
                  { id: "a3", text: "A helper function", isCorrect: false },
                  { id: "a4", text: "Passing parameters by reference", isCorrect: false }
              ],
              explanation: "A base case is a condition under which the function stops calling itself and returns a value directly. Without it, the recursion would continue indefinitely (or until a stack overflow)."
          },
          // Q89
          {
              id: "rec-2",
              text: "What happens in the 'recursive step' of a recursive function?",
              options: [
                  { id: "a1", text: "The function terminates", isCorrect: false },
                  { id: "a2", text: "The function calls itself with modified arguments, moving closer to the base case", isCorrect: true },
                  { id: "a3", text: "The function allocates memory on the heap", isCorrect: false },
                  { id: "a4", text: "The function returns the final result", isCorrect: false }
              ],
              explanation: "The recursive step breaks the problem down into a smaller version of itself and calls the function again to solve that smaller version, eventually reaching the base case."
          },
          // Q90
          {
              id: "rec-3",
              text: "Which data structure implicitly manages the function calls in recursion?",
              options: [
                  { id: "a1", text: "Queue", isCorrect: false },
                  { id: "a2", text: "Heap", isCorrect: false },
                  { id: "a3", text: "Call Stack", isCorrect: true },
                  { id: "a4", text: "Hash Table", isCorrect: false }
              ],
              explanation: "The call stack is used by the system to keep track of active function calls. Each recursive call adds a new frame to the stack, and returning from a call removes a frame."
          },
          // Q91
          {
              id: "rec-4",
              text: "What is a potential risk associated with deep recursion?",
              options: [
                  { id: "a1", text: "Heap overflow", isCorrect: false },
                  { id: "a2", text: "Stack overflow error", isCorrect: true },
                  { id: "a3", text: "Incorrect results", isCorrect: false }, // If logic is correct, results are correct
                  { id: "a4", text: "Slow execution compared to iteration", isCorrect: false } // Can be true due to function call overhead, but stack overflow is the primary risk
              ],
              explanation: "Each recursive call consumes space on the call stack. If the recursion goes too deep (too many nested calls without returning), the stack may run out of space, causing a stack overflow error."
          },
          // Q92
          {
              id: "rec-5",
              text: "Factorial (n!) is often used as an example of recursion. What is the base case for calculating factorial?",
              options: [
                  { id: "a1", text: "n = 100", isCorrect: false },
                  { id: "a2", text: "n = 0 (or n = 1), where factorial is 1", isCorrect: true },
                  { id: "a3", text: "n < 0", isCorrect: false }, // Usually handled as error or undefined
                  { id: "a4", text: "n is even", isCorrect: false }
              ],
              explanation: "The base case for factorial is typically defined as 0! = 1 (or sometimes 1! = 1). When the input reaches this value, the recursion stops."
          }
      ]
    },
     {
      id: "sorting-advanced",
      title: "Advanced Sorting Concepts",
      description: "Exploring stability, non-comparison sorts, and external sorting.",
      topic: "Sorting",
      difficulty: "advanced",
      questions: [
          // Q93
          {
              id: "sort-adv-1",
              text: "What does it mean for a sorting algorithm to be 'stable'?",
              options: [
                  { id: "a1", text: "It has O(n log n) time complexity", isCorrect: false },
                  { id: "a2", text: "It requires O(1) extra space", isCorrect: false },
                  { id: "a3", text: "It maintains the relative order of elements with equal keys", isCorrect: true },
                  { id: "a4", text: "It works correctly for negative numbers", isCorrect: false }
              ],
              explanation: "A stable sort preserves the original relative order of records that have equal keys. For example, if sorting cards by rank, a stable sort would keep (5, Heart) before (5, Diamond) if they appeared in that order originally."
          },
          // Q94
          {
              id: "sort-adv-2",
              text: "Which of these sorting algorithms is NOT a comparison sort (i.e., doesn't rely on comparing elements)?",
              options: [
                  { id: "a1", text: "Merge Sort", isCorrect: false },
                  { id: "a2", text: "Quick Sort", isCorrect: false },
                  { id: "a3", text: "Heap Sort", isCorrect: false },
                  { id: "a4", text: "Radix Sort", isCorrect: true }
              ],
              explanation: "Radix Sort (and others like Counting Sort, Bucket Sort) sorts elements based on their individual digits or characters, not by comparing elements directly. They can achieve linear time complexity under certain conditions."
          },
          // Q95
           {
              id: "sort-adv-3",
              text: "What is the theoretical lower bound for the time complexity of comparison-based sorting algorithms in the worst case?",
              options: [
                  { id: "a1", text: "O(n)", isCorrect: false },
                  { id: "a2", text: "O(log n)", isCorrect: false },
                  { id: "a3", text: "O(n log n)", isCorrect: true },
                  { id: "a4", text: "O(n²)", isCorrect: false }
              ],
              explanation: "Any comparison-based sorting algorithm must perform at least Ω(n log n) comparisons in the worst case to distinguish between the n! possible permutations of the input. Algorithms like Merge Sort and Heap Sort achieve this lower bound."
          },
          // Q96
          {
              id: "sort-adv-4",
              text: "What is Counting Sort particularly efficient for?",
              options: [
                  { id: "a1", text: "Sorting floating-point numbers", isCorrect: false },
                  { id: "a2", text: "Sorting linked lists", isCorrect: false },
                  { id: "a3", text: "Sorting integers within a known, limited range", isCorrect: true },
                  { id: "a4", text: "Sorting huge datasets that don't fit in memory", isCorrect: false } // External sorting
              ],
              explanation: "Counting Sort works by counting the occurrences of each distinct key value (integer) within a specific range (k). Its time complexity is O(n + k), which is linear if k is O(n)."
          },
          // Q97
          {
              id: "sort-adv-5",
              text: "What is 'External Sorting' used for?",
              options: [
                  { id: "a1", text: "Sorting data structures other than arrays", isCorrect: false },
                  { id: "a2", text: "Sorting data that is too large to fit entirely into main memory (RAM)", isCorrect: true },
                  { id: "a3", text: "Sorting data across multiple networked computers", isCorrect: false }, // Distributed sorting
                  { id: "a4", text: "A sorting algorithm that uses external libraries", isCorrect: false }
              ],
              explanation: "External sorting algorithms are designed to handle massive datasets stored on external storage (like hard drives). They typically involve breaking the data into chunks, sorting the chunks in memory, and then merging the sorted chunks."
          }
      ]
    },
    {
      id: "misc-concepts",
      title: "Miscellaneous DSA Concepts",
      description: "Covering various other important concepts in data structures and algorithms.",
      topic: "Miscellaneous",
      difficulty: "intermediate",
      questions: [
         // Q98
          {
              id: "misc-1",
              text: "What is the primary use case for a Trie (Prefix Tree)?",
              options: [
                  { id: "a1", text: "Sorting numbers efficiently", isCorrect: false },
                  { id: "a2", text: "Implementing priority queues", isCorrect: false },
                  { id: "a3", text: "Efficient prefix searching (e.g., autocomplete)", isCorrect: true },
                  { id: "a4", text: "Graph traversal", isCorrect: false }
              ],
              explanation: "Tries are tree-based data structures optimized for storing and searching strings based on prefixes. They are commonly used in applications like dictionary lookups and autocomplete suggestions."
          },
          // Q99
          {
              id: "misc-2",
              text: "What does 'Amortized Analysis' refer to?",
              options: [
                  { id: "a1", text: "Analyzing the average performance over all possible inputs", isCorrect: false }, // Average-case analysis
                  { id: "a2", text: "Analyzing the worst-case performance of a sequence of operations", isCorrect: true },
                  { id: "a3", text: "Analyzing algorithms that use randomization", isCorrect: false },
                  { id: "a4", text: "Analyzing the memory usage of an algorithm", isCorrect: false }
              ],
              explanation: "Amortized analysis considers the average cost of an operation over a sequence of operations, even if some individual operations within the sequence are very expensive. It guarantees the average performance in the worst case for the sequence."
          },
          // Q100
          {
              id: "misc-3",
              text: "Which algorithm design paradigm involves making the locally optimal choice at each step with the hope of finding a global optimum?",
              options: [
                  { id: "a1", text: "Dynamic Programming", isCorrect: false },
                  { id: "a2", text: "Divide and Conquer", isCorrect: false },
                  { id: "a3", text: "Greedy Algorithm", isCorrect: true },
                  { id: "a4", text: "Backtracking", isCorrect: false }
              ],
              explanation: "Greedy algorithms build up a solution piece by piece, always choosing the option that looks best at the current moment without regard for future consequences. Examples include Dijkstra's and Prim's algorithms."
          }
      ]
    }
  ];