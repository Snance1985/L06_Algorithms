//Algorithms

/* Notes
At the core of software development lies the concept of algorithms.
It can be described as a set of step-by-step instructions that direct a computer to execute a particular task or solve a specific problem.
Algorithms can be as simple as adding one variable to another.
Or as complex as advanced mathematical and logical operations that require thousands of lines of code.
Knowing how and when to use popular algorithms will help you tackle a majority of the common problems you may face in software engineering.
All algorithms can be boiled down to basic patterns that describe their fundamental nature.
Some of the most common algorithm patterns:
sorting,
searching,
divide and conquer,
dynamic programming and memorization,
greedy algorithms, 
recursion,
graph traversal,
brute force approach,
branch and bound,
nearest neighbor method,
and more.
*/
//An algorithm can be as simple as adding 1 to another variable:
var x = 0; // input
x++; // algorithm
console.log(x); // output
/* Notes
When working with data structures, algorithms are used to create functional operations, such as insertion, deletion, and traversal.
Searching and sorting algorithms are particularly useful for navigating or traversing through data structures more effectively.
Popular searching and sorting algorithms include:
Binary Search algorithm,
Breadth First Search (BFS),
Depth First Search (DFS),
Insertion Sort,
Selection Sort,
Merge Sort,
Counting Sort,
Heap Sort,
and Quicksort.
*/

//Designing an Algorithm
/* Notes
When designing an algorithm, several key factors must be considered:
time and space complexity,
well-defined inputs and outputs,
unambiguous criteria and goals,
language independence,
feasibility,
and low computational cost (either in space or time complexity).
The process of developing an algorithm typically involves four steps:
Define the Problem
Design an Algorithm
Analyze the Algorithm
Implement the Algorithm
To define the problem,
developers should first identify the problem,
constraints,
and assumptions,
and create a clear problem definition.
It can be helpful to visually represent the problem on paper to aid in understanding the inputs and outputs.
In the algorithm design phase, developers should initially brainstorm a brute-force solution and then consider alternative approaches to improve the solution.
It is important to consider the runtime (Big O) for all potential solutions.
Once an algorithm is well-defined, it is important to calculate the space and time complexity of the solution and to explore potential ways to improve the algorithm's efficiency.
This might involve using more efficient data structures or algorithms.
After designing and analyzing the algorithm, it is time to implement it in code.
Multiple test cases should be provided to fine-tune the algorithm for different scenarios, including both good and bad inputs.
Overall, it is important to remember that the process of thinking through the solution steps is just as crucial as the code itself.
Following these steps and practicing speaking them out loud can help prepare developers for technical interviews and ensure that they are creating effective and efficient algorithms.
*/

//What Algorithms Should I know?
/* Notes
It is impossible to determine how many algorithms exist today, as new algorithms are being developed and discovered all the time. Algorithms are used in countless fields, including computer science, mathematics, physics, chemistry, biology, finance, and many others. Additionally, algorithms can be modified and optimized in numerous ways, leading to an ever-expanding number of possible algorithms.
So you may be wondering, how many algorithms should I know?
However, here are some algorithms that are commonly used and considered important for developers to know:
Searching Algorithms (Linear Search, Binary Search)
Sorting Algorithms (Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort)
Graph Algorithms (Breadth-First Search, Depth-First Search, Dijkstra's Algorithm)
Dynamic Programming (Fibonacci Series, Knapsack Problem, Longest Common Subsequence)
Divide and Conquer (Merge Sort, Quick Sort)
String Algorithms (String matching, Longest Common Substring, Longest Palindrome Substring)
Backtracking (N-Queens Problem, Sudoku Solver)
Tree Algorithms (Traversal, Binary Search Tree, Heap, Segment Tree)
Hashing (Hash Table, Collision Resolution Techniques)
Greedy Algorithms (Activity Selection Problem, Fractional Knapsack Problem)
These are just a few examples, and there are many more algorithms and data structures that can be useful for developers to know, depending on their specific field and interests. It's important to understand the tradeoffs between different algorithms and data structures, and to choose the most appropriate one for each situation based on factors such as time complexity, space complexity, and ease of implementation.
*/

//What is Pseudocode?
/* Notes
Pseudocode is a high-level description of a computer algorithm that is similar to programming code.
It represents the logical thought process of how to implement the algorithm, without using specific syntax from a particular programming language.
Writing pseudocode can be a powerful tool for thinking through the solutions to a problem before writing actual code.
It allows developers to design algorithms in a language-independent way and provides a step-by-step outline of the solution that can later be translated into actual code.
Here is an example of pseudocode:
Goal: add or subtract 1 to X until it is 10
Start
Input x
Loop while X is less than 10
    Add 1 to X
Loop while X is greater than 10
    Subtract 1 from X
Output X
End
In the example pseudocode provided, the goal is to add or subtract 1 from X until it reaches 10.
However, before writing the pseudocode, it's important to carefully define the constraints and assumptions of the problem, such as the type and format of the input data, as well as any edge cases that need to be considered.
To make the pseudocode more robust, we can add error handling to check for valid input, and we can test it with multiple test cases to ensure its effectiveness in all scenarios.
This is an example of what pseudocode might look like.
To make this pseudocode even clearer, one might include a more thorough problem description to better define the constraints and assumptions of X as input, such as:
Constraints and assumptions of X:
X is provided by user using program
X is a real integer and not a decimal
X will not have any other characters in the input other than its numeric value, including no whitespace.
From these constraints, we will adapt our pseudocode to check X as a valid input and plan for situations of good or bad input.
Then, we can test the algorithm will multiple test cases that will determine its effectiveness for all scenarios.
The time complexity of this pseudocode is O(N), where N is the number of iterations required to reach the goal.
However, it's important to also consider the space complexity of the algorithm and any potential memory constraints that may affect its performance.
*/

//Pseudocode Summary
/* Notes
Pseudocode is not a formal language, so there are no strict rules about how to write it.
However, it is important to keep it clear and concise so that others can easily understand the algorithm.
Pseudocode can be used at various stages of software development, from initial problem-solving to detailed design to actual coding.
Pseudocode can be written in a variety of styles, such as using natural language, flowcharts, or structured programming constructs.
Pseudocode should be based on the problem definition and requirements, and should not include any programming language-specific syntax.
Pseudocode can be useful for communicating algorithms to other developers or stakeholders, as well as for testing and verifying the logic of an algorithm.
Overall, pseudocode is a powerful tool for software development that can help developers think through problems, design algorithms, and communicate their ideas to others.
It is important to keep it clear, concise, and relevant to the problem at hand, and to use it in a way that supports effective collaboration and understanding among team members.
*/

//Recursive Algorithms
/* Notes
Recursion is a powerful technique used in computer programming, which involves a function calling itself repeatedly to solve a problem. A recursive function is a function that calls itself, either directly or indirectly.
A recursive algorithm is an algorithm that uses recursion to solve a problem by breaking it down into smaller subproblems of the same type. Each subproblem is solved by calling the same function again, until the problem can be solved directly, without further recursion.
Recursive algorithms are often used to solve problems that can be broken down into smaller problems of the same type. For example, sorting algorithms like quicksort and mergesort use recursion to divide an array into smaller sub-arrays, sort the sub-arrays, and then merge them back together.
Recursive algorithms can be more elegant and easier to understand than their iterative counterparts, but they can also be less efficient in terms of time and space complexity. Recursion can lead to stack overflow errors if too many recursive calls are made, so it's important to design recursive algorithms carefully and optimize them as much as possible.
To use recursion effectively, you need to have a clear understanding of the problem you're trying to solve and how it can be broken down into smaller subproblems. You also need to identify the base case, which is the condition that determines when the recursion should stop and the function should return a value.
*/

//Example Recursive Algorithm
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
/* Notes
In this example, the factorial function takes an input n and returns the factorial of that number.
If n is equal to 0 or 1, the function returns 1 (since the factorial of 0 and 1 is 1).
Otherwise, the function recursively calls itself with the argument n - 1 and multiplies the result by n.
This continues until the base case is reached, which is when n is 0 or 1.
*/

//Strategies for Designing Recursive Algorithms
/* Notes
Here are some strategies for designing recursive algorithms:
Identify the base case: The base case is the simplest problem that can be solved without recursion.
It is important to identify the base case because it will define when the recursion should stop.
Define the recursive case: The recursive case is the problem that can be solved by breaking it down into smaller sub problems of the same form as the original problem.
The recursive case should move towards the base case by reducing the problem size or complexity.
Plan the recursion: Plan how to use the solution of smaller sub problems to solve the larger problem.
This can involve combining or manipulating the results of the sub problems.
Implement the recursive algorithm: Translate the plan into code that implements the recursive algorithm.
The recursive function should call itself with the sub problem and eventually reach the base case.
Test the recursive algorithm: Test the algorithm with different inputs and verify that it produces correct results.
Recursive algorithms can be tricky to debug, so testing is particularly important.
By following these strategies, you can design effective and efficient recursive algorithms.
*/

//Strategies for Designing Algorithms
/* Notes
When designing algorithms, there are several key factors to consider, including the problem requirements, input data, available resources, and constraints.
One of the most critical aspects of designing algorithms is to ensure that they are efficient and effective.
The efficiency of an algorithm is determined by its time complexity, which refers to the amount of time it takes to execute the algorithm for a given input size.
Similarly, the space complexity of an algorithm is a measure of the amount of memory it requires to execute for a given input size.
To design effective algorithms, it's important to follow a structured approach, such as defining the problem, developing a solution strategy, analyzing and optimizing the solution, and finally implementing and testing the solution.
When defining the problem, it's crucial to understand the problem requirements, constraints, and assumptions.
Developing a solution strategy involves brainstorming and exploring various approaches to solve the problem.
It's important to consider the trade-offs between time complexity and space complexity, and select the most appropriate strategy.
Analyzing and optimizing the solution involves identifying inefficiencies in the algorithm and improving its performance.
This can be done by analyzing the time and space complexity of the algorithm, identifying bottlenecks, and optimizing the code accordingly.
Finally, implementing and testing the solution involves translating the algorithm into a specific programming language, testing the code to ensure that it works as expected, and iterating the process until the desired outcome is achieved.
*/

//Example Problem - Palindrome
/* Notes
Here's an example JavaScript technical interview question:
Write a JavaScript function that takes a string as input and returns a boolean value indicating whether the string is a palindrome.
A palindrome is a word, phrase, number, or other sequence of characters that reads the same backward as forward, ignoring spaces, punctuation, and capitalization.
*/
//The function should have the following signature:
function isPalindrome(str) {
    // code goes here
}
/* Notes
Your function should return true if str is a palindrome, and false otherwise.
For example, isPalindrome("racecar") should return true, and isPalindrome("hello") should return false.
Your function should be case-insensitive, so isPalindrome("Racecar") should also return true.
*/
//Pseudocode
/* Notes
To solve this problem, we can follow these steps:
Remove all non-alphanumeric characters from the string and convert all characters to lowercase to ignore case sensitivity.
Create a new string by reversing the original string.
Compare the original string with the reversed string.
If they are the same, the original string is a palindrome.
*/
//Solution
function isPalindrome(str) {
    // Step 1: Remove non-alphanumeric characters and convert to lowercase
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Step 2: Reverse the original string
    const reversed = cleaned.split('').reverse().join('');

    // Step 3: Compare the original and reversed strings
    return cleaned === reversed;
}
//We can test this function with different inputs:
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('hello')); // false
/* Notes
This solution first removes all non-alphanumeric characters and converts the string to lowercase using regular expressions.
Then it reverses the string by splitting it into an array of characters, reversing the array, and joining the characters back together into a string.
Finally, it compares the original and reversed strings to determine if the input string is a palindrome.
*/
//Examples of Good and Bad Inputs
//Good Inputs:
/* Notes
    "racecar" should return true
    "deified" should return true
    "A man a plan a canal Panama" should return true (case-insensitive and ignores spaces)
    "1221" should return true
*/
//Bad Inputs:
/* Notes
    "" should return false (empty string)
    "abc" should return false (not a palindrome)
    "racecars" should return false (not a palindrome)
    "121 " should return false (trailing whitespace)
    "1,221" should return false (contains non-alphanumeric characters)
*/

//Introduction to Backtracking Algorithms
/*
Backtracking is a general algorithmic technique for solving problems recursively by trying out different possible solutions and rejecting those that fail to satisfy the problem's constraints.
The backtracking algorithm works in a depth-first search manner, which means that it explores a solution path as far as possible before backtracking and exploring another path.
It is a powerful algorithmic technique that is used to solve a wide variety of problems, particularly in the field of combinatorial optimization.
The basic idea behind backtracking is to incrementally build a solution to a problem, exploring all possible choices and, when a choice is found to be invalid or unsuccessful, backtracking to the previous step to explore a different option.
This process continues until a valid solution is found, or it is determined that no valid solution exists.
Backtracking algorithms can be used to solve a wide variety of problems, including problems in graph theory, combinatorics, and constraint satisfaction.
Some common examples of problems that can be solved using backtracking include the N-Queens problem, Sudoku, and the Knight's Tour problem.
One of the strengths of backtracking is that it can be used to solve problems that are difficult or impossible to solve using other techniques.
However, backtracking algorithms can also be quite complex and require a deep understanding of the problem being solved.
Additionally, the efficiency of a backtracking algorithm can be greatly impacted by the order in which choices are explored, making it important to carefully choose the order in which choices are considered.
Learning backtracking algorithms can be a challenging but rewarding experience for developers who are interested in solving complex problems and developing efficient algorithms.
By understanding the basic principles of backtracking and practicing with a variety of problems, developers can develop the skills they need to tackle a wide variety of algorithmic challenges.
Here's an example of how the backtracking algorithm works.
Suppose you want to find all possible ways to arrange the letters in the word "abc" without repetition.
The backtracking algorithm would proceed as follows:
    Start with the first letter 'a' and try out all possible arrangements of the remaining letters 'bc', which are 'bc' and 'cb'.
    Once all possible arrangements starting with 'a' have been tried, backtrack and try out the next letter 'b'.
    Repeat the process for all possible arrangements starting with 'b'.
    Finally, try out all possible arrangements starting with 'c'.
This approach will eventually generate all possible arrangements of the letters 'abc' without repetition.
As mentioned, Backtracking algorithms are often used to solve problems such as the N-Queens problem and the Sudoku puzzle.
In the N-Queens problem, the goal is to place N queens on an NxN chessboard so that no two queens threaten each other.
In the Sudoku puzzle, the goal is to fill a 9x9 grid with numbers so that each row, column, and 3x3 sub-grid contains all of the digits from 1 to 9.
To solve these types of problems using backtracking, you typically define a recursive function that takes the current state of the solution as input and returns a boolean value indicating whether the solution is valid or not.
The function then tries out all possible ways to extend the solution and recursively calls itself on each extension until a valid solution is found or all possibilities have been exhausted.
Let's look at the N-Queens Problem.
*/
//N-Queens Problem
/* Notes
The N-Queens problem is a well-known classic problem in computer science that deals with the task of placing N chess queens on an N x N chessboard such that no two queens threaten each other.
In other words, no two queens can share the same row, column, or diagonal on the chessboard. This problem is interesting because it requires not only logical thinking and problem-solving skills, but also an understanding of how to implement a backtracking algorithm.
The N-Queens problem is often used as an example to demonstrate backtracking because it can be solved by a simple recursive algorithm that tries out all possible configurations of queens on the chessboard.
At each step, the algorithm places a queen on an empty square on the board, checks if it is under attack by any other queens already placed, and if not, it moves on to the next row and repeats the process.
If at any point the algorithm finds that it cannot place a queen without violating the rules of the game, it backtracks to the previous row and tries again with a different square.
Solving the N-Queens problem can be a challenging task, especially for larger values of N, but it is also a good exercise for improving problem-solving skills and gaining a better understanding of backtracking algorithms.
With a solid understanding of backtracking and the ability to implement it in code, you will be able to tackle a wide range of complex problems that involve searching through a large number of possible solutions.
*/
//Pseudocode and Implementation 
/* Notes
1 Define a function solveNQueens(n) that takes an integer n as input and returns a list of solutions (each solution is a list of integers representing the positions of the queens on the board).
2 Initialize an empty list solutions to store the solutions.
3 Define a helper function isSafe(board, row, col) that takes a 2D list board representing the current state of the board, and integers row and col representing the position of a queen, and returns True if it is safe to place a queen at that position, and False otherwise.
  The function should check if there is no other queen in the same row, column, or diagonal as the current position.
4 Define a recursive function backtrack(board, row) that takes a 2D list board representing the current state of the board, and an integer row representing the current row that needs to be filled with a queen.
5 Base case: if row equals n, we have filled all rows with queens, so we append a copy of the current state of the board to solutions, and return.
6 For each column col in the current row, check if it is safe to place a queen at position (row, col) using the isSafe function.
  If it is safe, set board[row][col] to 1 and call backtrack(board, row+1) recursively.
7 If the recursive call in step 6 returns, set board[row][col] back to 0 (undoing the placement of the queen) and try the next column.
8 Once all columns have been tried, return from the function (this will backtrack to the previous row).
9 Finally, call backtrack with an empty board ([[0]*n for _ in range(n)]) and row 0 to start the search.
10 Return the list of solutions solutions.
*/
//Example Implementation:
/**
 * Returns an array of solutions to the N-Queens problem.
 *
 * @param {number} n - The size of the board and the number of queens.
 * @return {string[][]} - An array of solutions, where each solution is represented as a 2D array of strings.
 */
function solveNQueens(n) {
    // Create an empty board
    const board = Array.from({ length: n }, () => Array.from({ length: n }, () => '.'));

    // Array to store all solutions
    const solutions = [];

    /**
     * Checks if it's safe to place a queen at a given position.
     *
     * @param {number} row - The row index.
     * @param {number} col - The column index.
     * @return {boolean} - True if it's safe to place a queen, false otherwise.
     */
    function isSafe(row, col) {
        // Check the row and column for other queens
        for (let i = 0; i < n; i++) {
            if (board[row][i] === 'Q' || board[i][col] === 'Q') {
                return false;
            }
        }

        // Check the diagonals for other queens
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }
        for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }

        // It's safe to place a queen at this position
        return true;
    }

    /**
     * Backtracks and finds all solutions to the N-Queens problem.
     *
     * @param {number} row - The row index.
     */
    function backtrack(row) {
        // Base case: Found a solution
        if (row === n) {
            solutions.push(board.map(row => [...row])); // Make a deep copy of the board and add it to the solutions array
            return;
        }

        // Recursive case: Try placing a queen in each column of the current row
        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 'Q'; // Place a queen
                backtrack(row + 1); // Recursively check the next row
                board[row][col] = '.'; // Remove the queen and backtrack
            }
        }
    }

    // Start the backtracking process at the first row
    backtrack(0);

    return solutions;
}
/* Notes
You can call this function with an integer n to find all solutions for an n x n chessboard.
*/
//Here's some code to test the solveNQueens() function:
const solutions = solveNQueens(4);
for (let i = 0; i < solutions.length; i++) {
    console.log(`Solution ${i + 1}:`);
    console.log(solutions[i]);
    console.log();
}
/* Notes
This code will generate and print all solutions for the 4-queens problem.
You can change the argument to solveNQueens() to test with different board sizes.
*/
//Here's the output for testNQueens(4):
[['.Q..', '...Q', 'Q...', '..Q.'],
['..Q.', 'Q...', '...Q', '.Q..']
]
//Here's the output for testNQueens(5):
[['Q....', '..Q..', '....Q', '.Q...', '...Q.'],
['Q....', '...Q.', '.Q...', '....Q', '..Q..'],
['.Q...', '...Q.', 'Q....', '..Q..', '....Q'],
['.Q...', '....Q', '..Q..', 'Q....', '...Q.'],
['..Q..', 'Q....', '...Q.', '.Q...', '....Q'],
['..Q..', '....Q', '.Q...', '...Q.', 'Q....'],
['...Q.', 'Q....', '..Q..', '....Q', '.Q...'],
['...Q.', '.Q...', '....Q', '..Q..', 'Q....'],
['....Q', '.Q...', '...Q.', 'Q....', '..Q..'],
    ['....Q', '..Q..', 'Q....', '...Q.', '.Q...']
]
//Time and Space Complexity Analysis
/* Notes
The time complexity of the n-queens algorithm is O(n!), which is the number of possible ways to place n queens on an n x n board.
This is because the algorithm must generate and check every possible permutation of queens on the board.
The space complexity of the algorithm is O(n), which is the maximum number of recursive calls that can be made on the call stack at any given time.
This is because the algorithm uses recursion to generate and check each possible permutation of queens, and each recursive call adds a new queen to the board.
Therefore, the maximum depth of the recursion is n, since there can be at most one queen per row. Additionally, the algorithm uses an array to store the positions of the queens on the board, which takes O(n) space.
*/

//Introduction to Greedy Algorithms
/* Notes
A greedy algorithm is a simple and intuitive approach to solving optimization problems.
It involves making locally optimal choices at each step in the hope of finding a global optimum.
In other words, a greedy algorithm makes the best choice it can at each step, without worrying about the future consequences of that choice.
The key idea behind a greedy algorithm is to identify the optimal substructure property of the problem.
This means that the problem can be broken down into smaller sub problems, each of which can be solved independently.
By solving each subproblem optimally, we can obtain an optimal solution to the original problem.
Greedy algorithms are often used to solve problems where the optimal solution can be built up step by step.
Examples include finding the shortest path in a graph, scheduling tasks, and making change with the fewest coins.
However, it's important to note that greedy algorithms don't always produce optimal solutions.
In some cases, a greedy algorithm may produce a suboptimal solution because it doesn't take into account future consequences of its choices.
Therefore, it's important to carefully analyze the problem and determine whether a greedy approach is appropriate.
*/
//Pseudocode
/* Notes
A greedy algorithm is a type of algorithmic strategy that involves making locally optimal choices at each step with the hope of finding a global optimum.
In other words, a greedy algorithm makes the best possible decision at each step, without worrying about the long-term consequences or global optimum.
The idea is that by choosing the locally optimal solution at each step, the algorithm will eventually arrive at the global optimum.
One of the key features of greedy algorithms is that they are often very fast and efficient.
They are particularly useful for solving optimization problems, where the goal is to maximize or minimize a certain objective function.
To use a greedy algorithm, we typically follow these steps:
    Define the problem and identify the objective function to optimize.
    Identify the local choices that lead to the best solution in the short term.
    Use a greedy strategy to make the locally optimal choice at each step.
    Check whether the solution obtained is valid and satisfies any constraints or conditions.
    If the solution is valid, terminate the algorithm. Otherwise, backtrack and make a different choice.
    Repeat steps 3-5 until a valid solution is obtained.
Of course, not all problems can be solved using a greedy algorithm, and even those that can be solved using a greedy algorithm may not always yield the best possible solution.
However, greedy algorithms can be a very powerful tool in many situations and are definitely worth learning about if you're interested in algorithm design and optimization.
Let's look at a popular problem that will utilize a greedy algorithm implementation called the Fractional Knapsack Problem.
*/
//Fractional Knapsack Problem
/* Notes
In this problem, you are given a set of items, each with a weight and a value.
You also have a knapsack that can hold a maximum weight. Your goal is to select a subset of the items to put in the knapsack that maximizes the total value of the items while still respecting the weight constraint.
The fractional knapsack problem differs from the traditional knapsack problem in that you are allowed to take fractions of items.
That is, you can take a fraction of an item's weight and value if it makes sense to do so.
A greedy algorithm can be used to solve this problem by sorting the items by their "value per unit weight" (i.e., the value of the item divided by its weight) in descending order.
Then, starting with the item with the highest value per unit weight, add as much of the item to the knapsack as possible.
Continue in this way, selecting the next highest value per unit weight item that will fit until the knapsack is full.
This approach is called a "greedy" algorithm because it makes the locally optimal choice at each step (i.e., selecting the item with the highest value per unit weight) without considering the overall global optimal solution.
However, in this case, it can be shown that the greedy approach does indeed produce the global optimal solution.
*/
//Pseudocode
/* Notes
Here are the steps for solving the fractional knapsack problem using a greedy algorithm:
    Calculate the value per unit weight for each item in the input set.
    Sort the items in decreasing order of their value per unit weight.
    Initialize the total value of the knapsack to zero and the remaining weight of the knapsack to its maximum capacity.
    For each item in the sorted set:
    a. If the entire item can fit in the knapsack, add it and update the total value and remaining weight of the knapsack accordingly.
    b. If only a fraction of the item can fit in the knapsack, add the fraction that can fit and update the total value and remaining weight of the knapsack accordingly.
    c. If the item cannot fit in the knapsack at all, move on to the next item.
    Return the total value of the items in the knapsack.
*/
//Example Implementation:
// Returns the maximum value that can be put in a knapsack of capacity W
function fractionalKnapsack(items, W) {
    // Sort items by value per unit weight (in descending order)
    items.sort((a, b) => b.value / b.weight - a.value / a.weight);

    let totalValue = 0;
    let remainingWeight = W;

    // Loop through sorted items and add as much of each item as possible to the knapsack
    for (let i = 0; i < items.length; i++) {
        if (items[i].weight <= remainingWeight) {
            // Take the whole item
            totalValue += items[i].value;
            remainingWeight -= items[i].weight;
        } else {
            // Take a fraction of the item
            totalValue += items[i].value * (remainingWeight / items[i].weight);
            break;
        }
    }

    return totalValue;
}

// Example usage and test
const items = [
    { weight: 10, value: 60 },
    { weight: 20, value: 100 },
    { weight: 30, value: 120 },
];
const capacity = 50;

const maxValue = fractionalKnapsack(items, capacity);
console.log(maxValue); // Output: 240  
/* Notes
In this implementation, we have defined a fractionalKnapsack function that takes an array of items and a capacity W as input, and returns the maximum total value of the items that can be put into the knapsack without exceeding the weight capacity.
The function first sorts the items by their value per unit weight (in descending order) using the sort method of the array.
It then initializes totalValue and remainingWeight to zero and the capacity W, respectively.
In the loop, the function checks if the current item's weight is less than or equal to the remaining weight capacity.
If it is, then the whole item is added to the knapsack, and the corresponding weight and value are subtracted from the remaining capacity and total value, respectively.
Otherwise, a fraction of the item is added to the knapsack, such that the weight of the added fraction is equal to the remaining capacity, and the corresponding value is calculated proportionally.
Finally, the function returns the total value of the items added to the knapsack.
In the example usage and test, we define an array of items and a capacity, and call the fractionalKnapsack function with these parameters.
We then log the result to the console, which should output 240.
*/
//Time and Space Complexity Analysis
/* Notes
The time complexity of the fractional knapsack algorithm is O(n log n), where n is the number of items in the input list.
The sorting of the items based on value per unit weight takes O(n log n) time, and the iteration over the sorted items takes O(n) time.
The space complexity is O(n), as the algorithm requires an array to store the sorted items and a few constant variables for bookkeeping purposes.
*/