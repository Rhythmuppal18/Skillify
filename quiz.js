// Skillify Core Engine & Question Bank
// Team PID-6 - FEE-II Project
// Subjects: Frontend, DBMS, Java, C, Operating Systems

const QUIZ_DATA = {
  frontend: {
    title: "Frontend Engineering",
    desc: "HTML5 semantics, CSS Flexbox/Grid, ES6+ JavaScript, DOM events.",
    color: "var(--web)",
    questions: [
      {
        q: "Which semantic HTML5 element represents self-contained, independent content like a blog post or news item?",
        options: ["<section>", "<article>", "<aside>", "<div>"],
        answer: 1,
        explanation: "<article> is specifically designed for self-contained, reusable content that can be distributed independently."
      },
      {
        q: "What flexbox CSS property controls the distribution of extra space along the main axis?",
        options: ["align-items", "justify-content", "flex-direction", "align-content"],
        answer: 1,
        explanation: "justify-content defines how space is distributed along the main axis of a flex container."
      },
      {
        q: "Which JavaScript keyword creates a block-scoped variable that cannot be reassigned?",
        options: ["var", "let", "const", "static"],
        answer: 2,
        explanation: "const declares block-scoped variables whose value binding cannot be re-assigned after initialization."
      },
      {
        q: "What does the Array.prototype.map() method return in JavaScript?",
        options: ["The modified original array", "A new array with transformed elements", "A single aggregated primitive value", "A boolean flag indicating match"],
        answer: 1,
        explanation: "map() creates a brand new array populated with the results of calling a provided function on every element."
      },
      {
        q: "Which CSS box-sizing value ensures padding and border are included in the element's total width and height?",
        options: ["content-box", "border-box", "padding-box", "inherit"],
        answer: 1,
        explanation: "border-box forces width and height to include content, padding, and borders."
      },
      {
        q: "What event occurs when an input field loses focus in DOM scripting?",
        options: ["focus", "change", "blur", "submit"],
        answer: 2,
        explanation: "The blur event fires when an element loses focus."
      },
      {
        q: "How do you pass arguments to an ES6 Arrow function concise body?",
        options: ["(a, b) => a + b", "function(a, b) { return a + b; }", "=> (a, b) -> a + b", "arrow(a, b) => a + b"],
        answer: 0,
        explanation: "(a, b) => a + b is the exact ES6 arrow function syntax with implicit return."
      },
      {
        q: "What HTTP response header status code represents successful resource creation?",
        options: ["200 OK", "201 Created", "204 No Content", "304 Not Modified"],
        answer: 1,
        explanation: "201 Created indicates that the HTTP request succeeded and led to the creation of a resource."
      },
      {
        q: "Which method converts a JavaScript object into a JSON formatted string?",
        options: ["JSON.parse()", "JSON.stringify()", "Object.toJSON()", "String.fromObject()"],
        answer: 1,
        explanation: "JSON.stringify() serializes a JS object or primitive into a JSON string."
      },
      {
        q: "Which selector targets all direct child paragraph elements of a div container in CSS?",
        options: ["div p", "div > p", "div + p", "div ~ p"],
        answer: 1,
        explanation: "The child combinator (>) selects elements that are direct children of a specified parent."
      }
    ]
  },
  dbms: {
    title: "DBMS & SQL",
    desc: "Database concepts, SQL queries, normalization, ACID properties, indexing.",
    color: "var(--dbms)",
    questions: [
      {
        q: "What does the 'I' stand for in the database ACID transaction properties?",
        options: ["Integrity", "Isolation", "Indexability", "Inheritance"],
        answer: 1,
        explanation: "Isolation guarantees that concurrent transactions execute without interfering with each other."
      },
      {
        q: "Which SQL clause is used to filter records aggregated by a GROUP BY clause?",
        options: ["WHERE", "HAVING", "FILTER", "ORDER BY"],
        answer: 1,
        explanation: "HAVING filters groups created by GROUP BY, while WHERE filters individual rows prior to grouping."
      },
      {
        q: "A database table is in 2NF if it is in 1NF and has no:",
        options: ["Transitive functional dependencies", "Partial functional dependencies", "Multivalued dependencies", "Duplicate key columns"],
        answer: 1,
        explanation: "2NF requires eliminating partial dependencies (non-prime attribute depending on part of a composite candidate key)."
      },
      {
        q: "Which JOIN type returns all records from the left table and matched records from the right table?",
        options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
        answer: 1,
        explanation: "LEFT JOIN (or LEFT OUTER JOIN) returns all rows from the left table and matched values from the right."
      },
      {
        q: "What type of key uniquely identifies a record in another referenced table?",
        options: ["Primary Key", "Foreign Key", "Candidate Key", "Super Key"],
        answer: 1,
        explanation: "A Foreign Key is a field (or collection of fields) in one table that refers to the Primary Key in another table."
      },
      {
        q: "Which SQL command is classified as a DDL (Data Definition Language) statement?",
        options: ["SELECT", "INSERT", "CREATE", "UPDATE"],
        answer: 2,
        explanation: "CREATE defines database schema objects and is part of DDL commands (along with ALTER, DROP, TRUNCATE)."
      },
      {
        q: "What functional dependency condition defines Boyce-Codd Normal Form (BCNF)?",
        options: ["For every X -> Y, X must be a super key", "Every attribute must be atomic", "No partial dependencies allowed", "No transitive dependencies allowed"],
        answer: 0,
        explanation: "BCNF is a stricter 3NF variant requiring that for every functional dependency X -> Y, X must be a super key."
      },
      {
        q: "Which database indexing structure keeps data sorted and allows search, insertion, and deletion in logarithmic time?",
        options: ["B+ Tree", "Linked List", "Hash Table", "Binary Stack"],
        answer: 0,
        explanation: "B+ Trees are balanced search trees widely utilized in DBMS indexing for sequential disk block access."
      },
      {
        q: "What is the result of a SQL query containing SELECT COUNT(*) FROM table when the table is completely empty?",
        options: ["NULL", "0", "Undefined", "SQL Error"],
        answer: 1,
        explanation: "COUNT(*) returns 0 when there are no matching rows in the table."
      },
      {
        q: "Which transaction state occurs immediately after all SQL operations complete successfully before committing?",
        options: ["Active", "Partially Committed", "Committed", "Terminated"],
        answer: 1,
        explanation: "A transaction enters the Partially Committed state after its final statement has been executed."
      }
    ]
  },
  java: {
    title: "Java Programming",
    desc: "Java OOPs principles, syntax, exception handling, collections framework.",
    color: "var(--java)",
    questions: [
      {
        q: "Which OOP concept allows a subclass to provide a specific implementation of a method declared in its superclass?",
        options: ["Method Overloading", "Method Overriding", "Encapsulation", "Abstraction"],
        answer: 1,
        explanation: "Method Overriding allows a subclass to provide a specific implementation for a superclass method."
      },
      {
        q: "Which Java collection interface guarantees unique elements and no duplicates?",
        options: ["List", "Set", "Queue", "Map"],
        answer: 1,
        explanation: "The Set interface models a mathematical set and contains no duplicate elements."
      },
      {
        q: "What keyword prevents a class from being inherited or a method from being overridden in Java?",
        options: ["static", "final", "abstract", "super"],
        answer: 1,
        explanation: "The final keyword prevents inheritance when applied to classes and overriding when applied to methods."
      },
      {
        q: "Where are Java Object instances allocated during runtime execution?",
        options: ["Call Stack", "Heap Memory", "Method Area", "Register Set"],
        answer: 1,
        explanation: "All objects in Java are dynamically allocated on the Heap Memory."
      },
      {
        q: "Which exception type in Java must be caught or declared in the method signature (Checked Exception)?",
        options: ["NullPointerException", "ArithmeticException", "IOException", "ArrayIndexOutOfBoundsException"],
        answer: 2,
        explanation: "IOException is a checked exception inheriting directly from Exception (and not RuntimeException)."
      },
      {
        q: "What is the default value of an uninitialized instance variable of type boolean in Java?",
        options: ["true", "false", "null", "0"],
        answer: 1,
        explanation: "Instance boolean variables default to false in Java."
      },
      {
        q: "Which interface must be implemented to sort custom objects using Collections.sort(list)?",
        options: ["Comparable", "Cloneable", "Serializable", "Iterable"],
        answer: 0,
        explanation: "Implementing Comparable<T> defines natural ordering via the compareTo() method."
      },
      {
        q: "What is the size of an int data type variable in Java?",
        options: ["16 bits (2 bytes)", "32 bits (4 bytes)", "64 bits (8 bytes)", "Depends on JVM host OS"],
        answer: 1,
        explanation: "Java primitives have fixed sizes platform-independently; an int is strictly 32 bits (4 bytes)."
      },
      {
        q: "Which block in exception handling executes regardless of whether an exception is thrown or caught?",
        options: ["try", "catch", "finally", "throw"],
        answer: 2,
        explanation: "The finally block always executes when the try-catch block exits, ensuring cleanup."
      },
      {
        q: "What feature introduced in Java 8 allows passing functionality as method arguments?",
        options: ["Generics", "Lambda Expressions", "Annotations", "Reflection API"],
        answer: 1,
        explanation: "Lambda expressions enable functional programming patterns in Java 8+."
      }
    ]
  },
  cprog: {
    title: "C Programming",
    desc: "Pointers, dynamic memory allocation, structs, functions, preprocessor directives.",
    color: "var(--c)",
    questions: [
      {
        q: "Which operator is used to access the memory address of a variable in C?",
        options: ["*", "&", "->", "."],
        answer: 1,
        explanation: "The address-of operator (&) returns the memory address of a variable."
      },
      {
        q: "Which standard library function allocates memory dynamically and initializes all bytes to zero?",
        options: ["malloc()", "calloc()", "realloc()", "free()"],
        answer: 1,
        explanation: "calloc(n, size) allocates memory blocks and initializes every byte to zero (unlike malloc)."
      },
      {
        q: "What is the value of an uninitialized local pointer variable in C?",
        options: ["NULL", "0", "Wild / Garbage address", "Valid heap memory"],
        answer: 2,
        explanation: "Uninitialized local pointers contain unpredictable garbage memory addresses (wild pointers)."
      },
      {
        q: "Which keyword defines custom structure types containing variables of different data types under one name?",
        options: ["enum", "union", "struct", "typedef"],
        answer: 2,
        explanation: "struct allows grouping variables of different types into a single user-defined record."
      },
      {
        q: "What operator accesses structure members when holding a pointer to a struct instance?",
        options: [".", "->", "*", "&"],
        answer: 1,
        explanation: "The arrow operator (->) dereferences a structure pointer to access its members."
      },
      {
        q: "Which C standard header file declares dynamic memory functions like malloc() and free()?",
        options: ["<stdio.h>", "<stdlib.h>", "<string.h>", "<memory.h>"],
        answer: 1,
        explanation: "<stdlib.h> contains function prototypes for memory management, conversion, and process control."
      },
      {
        q: "What happens if free(ptr) is called twice on the same allocated pointer without reallocation?",
        options: ["Memory is safely freed again", "Double Free Vulnerability / Runtime Segmentation Fault", "Pointer turns to NULL automatically", "No effect"],
        answer: 1,
        explanation: "Freeing already deallocated memory causes undefined behavior and potential double free crash."
      },
      {
        q: "Which string function calculates the length of a null-terminated string in C?",
        options: ["sizeof()", "strlen()", "strcat()", "strcmp()"],
        answer: 1,
        explanation: "strlen() counts characters up to (excluding) the terminating null byte ('\\0')."
      },
      {
        q: "What is the return type of main() in standard ANSI C?",
        options: ["void", "int", "char", "float"],
        answer: 1,
        explanation: "Standard C specifies main() returns int to communicate execution status to the operating system."
      },
      {
        q: "What preprocessor directive defines symbolic constants in C?",
        options: ["#include", "#define", "#pragma", "#ifdef"],
        answer: 1,
        explanation: "#define creates macro constants replaced by the preprocessor prior to compilation."
      }
    ]
  },
  os: {
    title: "Operating Systems",
    desc: "Process management, CPU scheduling, threads, deadlocks, virtual memory.",
    color: "var(--os)",
    questions: [
      {
        q: "What state does a process enter when waiting for an I/O operation to complete?",
        options: ["Ready", "Running", "Blocked / Waiting", "Terminated"],
        answer: 2,
        explanation: "When a process requests I/O, it transitions from Running to Blocked/Waiting until the I/O completes."
      },
      {
        q: "Which CPU scheduling algorithm gives the lowest average waiting time for a set of processes?",
        options: ["First-Come, First-Served (FCFS)", "Shortest Job First (SJF)", "Round Robin (RR)", "Priority Scheduling"],
        answer: 1,
        explanation: "Shortest Job First (SJF) is mathematically optimal for minimizing average process waiting time."
      },
      {
        q: "What condition is NOT one of Coffman's four required conditions for deadlock to occur?",
        options: ["Mutual Exclusion", "Hold and Wait", "Preemption Allowed", "Circular Wait"],
        answer: 2,
        explanation: "No Preemption is a deadlock condition. Preemption allowed actually prevents or breaks deadlocks."
      },
      {
        q: "What is the lightweight unit of execution within a single process that shares code and data memory?",
        options: ["Thread", "Daemon", "Sub-process", "PCB"],
        answer: 0,
        explanation: "A Thread is an execution unit inside a process sharing code, data, and OS resources."
      },
      {
        q: "Which memory management technique divides physical memory into fixed-sized blocks?",
        options: ["Pages", "Frames", "Segments", "Partitions"],
        answer: 1,
        explanation: "Physical memory is divided into fixed-sized blocks called Frames; logical memory into Pages."
      },
      {
        q: "What occurs when the OS spends more time swapping pages in and out than executing instructions?",
        options: ["Fragmentation", "Thrashing", "Deadlock", "Context Switching"],
        answer: 1,
        explanation: "Thrashing occurs when high page fault rates cause continuous swapping, crippling performance."
      },
      {
        q: "Which algorithm is used for deadlock avoidance by evaluating resource allocation safety?",
        options: ["Banker's Algorithm", "Dijkstra's Algorithm", "Peterson's Algorithm", "Round Robin"],
        answer: 0,
        explanation: "Banker's Algorithm checks resource request allocation safety to avoid deadlock states."
      },
      {
        q: "What mechanism allows processes to communicate and synchronize actions without shared memory?",
        options: ["Inter-Process Communication (IPC)", "Virtual Paging", "Interrupt Vector", "DMA Transfer"],
        answer: 0,
        explanation: "IPC mechanisms (like message queues, sockets, pipes) facilitate process interaction."
      },
      {
        q: "What OS data structure stores state information, registers, and memory boundaries for a process?",
        options: ["Page Table", "Process Control Block (PCB)", "File Control Block", "Segment Table"],
        answer: 1,
        explanation: "The Process Control Block (PCB) contains all bookkeeping data for a process."
      },
      {
        q: "What scheduling algorithm uses a fixed time quantum in a cyclic order?",
        options: ["Round Robin (RR)", "Priority Scheduling", "FCFS", "Multi-level Queue"],
        answer: 0,
        explanation: "Round Robin assigns a fixed time slice (quantum) to each ready process in circular order."
      }
    ]
  }
};

/* Specialized Interactive Datasets Structured for ALL 5 Subjects */
const INTERACTIVE_DATA = {
  find_bug: {
    frontend: [
      {
        q: "Spot the invalid CSS flexbox alignment property in this style block:",
        codeLines: [
          ".container {",
          "    display: flex;",
          "    justify-content: center;",
          "    align-items: middle; // Bug: invalid alignment value",
          "    flex-direction: column;",
          "}"
        ],
        bugLine: 3,
        explanation: "Line 4 uses `middle` which is invalid for Flexbox `align-items`. The valid keyword is `center`."
      },
      {
        q: "Identify the line causing an illegal re-assignment error in ES6 JS:",
        codeLines: [
          "function calculateTotal(price) {",
          "    const tax = 0.18;",
          "    let total = price + (price * tax);",
          "    tax = 0.20; // Bug: re-assigning const variable",
          "    return total;",
          "}"
        ],
        bugLine: 3,
        explanation: "Line 4 re-assigns `tax` which was declared as a `const` primitive binding."
      },
      {
        q: "Find the broken event listener arrow function syntax line:",
        codeLines: [
          "const btn = document.querySelector('#submitBtn');",
          "btn.addEventListener('click', (e) => {",
          "    e.preventDefault();",
          "    console.log('Submitted');",
          "  => { return false; } // Bug: invalid inline syntax",
          "});"
        ],
        bugLine: 4,
        explanation: "Line 5 contains invalid standalone arrow function syntax inside the event handler."
      }
    ],
    dbms: [
      {
        q: "Locate the invalid SQL filtering clause in this grouped query:",
        codeLines: [
          "SELECT department_id, COUNT(*) AS emp_count",
          "FROM employees",
          "WHERE COUNT(*) > 5 // Bug: aggregate filter in WHERE",
          "GROUP BY department_id;"
        ],
        bugLine: 2,
        explanation: "Line 3 uses `WHERE` with an aggregate function `COUNT(*)`. Aggregates must be filtered using `HAVING` after `GROUP BY`."
      },
      {
        q: "Spot the invalid JOIN syntax in this SQL statement:",
        codeLines: [
          "SELECT e.name, d.dept_name",
          "FROM employees e",
          "JOIN departments d WHERE e.dept_id = d.id; // Bug: WHERE instead of ON",
          "ORDER BY e.name;"
        ],
        bugLine: 2,
        explanation: "Line 3 uses `JOIN ... WHERE` instead of standard ANSI JOIN syntax requiring `ON e.dept_id = d.id`."
      }
    ],
    java: [
      {
        q: "Locate the bug in this Java String comparison code:",
        codeLines: [
          "public class Test {",
          "    public static void main(String[] args) {",
          "        String s1 = new String(\"skillify\");",
          "        String s2 = new String(\"skillify\");",
          "        if (s1 == s2) { // Bug: Reference comparison instead of .equals()",
          "            System.out.println(\"Equal\");",
          "        }",
          "    }",
          "}"
        ],
        bugLine: 4,
        explanation: "Line 5 uses `==` which compares object reference addresses instead of string values (`.equals()`)."
      },
      {
        q: "Find the line attempting to override a final superclass method:",
        codeLines: [
          "class Parent {",
          "    final void display() { System.out.println(\"Parent\"); }",
          "}",
          "class Child extends Parent {",
          "    void display() { System.out.println(\"Child\"); } // Bug: cannot override final method",
          "}"
        ],
        bugLine: 4,
        explanation: "Line 5 attempts to override `display()` which is declared as `final` in the superclass."
      }
    ],
    cprog: [
      {
        q: "Identify the line with the syntax/logic bug in this C pointer function:",
        codeLines: [
          "#include <stdio.h>",
          "void updateVal(int *p) {",
          "    *p = 100;",
          "}",
          "int main() {",
          "    int *ptr;",
          "    updateVal(ptr); // Bug: Dereferencing uninitialized wild pointer!",
          "    return 0;",
          "}"
        ],
        bugLine: 6,
        explanation: "Line 7 passes an uninitialized wild pointer `ptr` to `updateVal()`, causing memory corruption."
      },
      {
        q: "Find the double-free memory corruption bug line below:",
        codeLines: [
          "int *arr = (int*) malloc(10 * sizeof(int));",
          "free(arr);",
          "arr[0] = 5;",
          "free(arr); // Bug: Double free vulnerability",
          "return 0;"
        ],
        bugLine: 3,
        explanation: "Line 4 calls `free(arr)` a second time on memory that was already deallocated."
      }
    ],
    os: [
      {
        q: "Identify the bug in this process loop causing priority starvation:",
        codeLines: [
          "while (has_processes) {",
          "    Process p = get_highest_priority();",
          "    execute(p);",
          "    p.priority++; // Bug: Uncapped priority boosting low processes never run!",
          "}"
        ],
        bugLine: 3,
        explanation: "Line 4 continuously boosts executing process priority, permanently starving lower priority ready processes."
      }
    ]
  },
  drag_drop: {
    frontend: [
      {
        q: "Drag the HTML5 document layout tags into proper top-to-bottom skeleton order:",
        items: ["<main>Content</main>", "<!DOCTYPE html>", "<footer>Footer</footer>", "<html>", "<header>Header</header>"],
        correctOrder: ["<!DOCTYPE html>", "<html>", "<header>Header</header>", "<main>Content</main>", "<footer>Footer</footer>"],
        explanation: "Standard semantic HTML skeleton structure flows from DOCTYPE -> html -> header -> main -> footer."
      }
    ],
    dbms: [
      {
        q: "Drag the SQL query clauses into the correct execution & logical syntax order:",
        items: ["WHERE age > 18", "GROUP BY department", "SELECT department, COUNT(*)", "HAVING COUNT(*) > 5", "FROM employees"],
        correctOrder: ["SELECT department, COUNT(*)", "FROM employees", "WHERE age > 18", "GROUP BY department", "HAVING COUNT(*) > 5"],
        explanation: "Standard ANSI SQL syntax requires: SELECT -> FROM -> WHERE -> GROUP BY -> HAVING."
      }
    ],
    java: [
      {
        q: "Order these Java exception handling blocks into valid compilation order:",
        items: ["finally { cleanup(); }", "try { processData(); }", "catch (IOException e) { log(e); }", "catch (Exception e) { handle(e); }"],
        correctOrder: ["try { processData(); }", "catch (IOException e) { log(e); }", "catch (Exception e) { handle(e); }", "finally { cleanup(); }"],
        explanation: "Java requires try block first, specific subclass exceptions before general Exception, followed by finally block."
      }
    ],
    cprog: [
      {
        q: "Order these C compilation pipeline stages from source file to executable:",
        items: ["Linker (Generates .exe)", "Preprocessor (Expands #include/#define)", "Compiler (Generates Assembly .s)", "Assembler (Generates Machine Object .o)"],
        correctOrder: ["Preprocessor (Expands #include/#define)", "Compiler (Generates Assembly .s)", "Assembler (Generates Machine Object .o)", "Linker (Generates .exe)"],
        explanation: "The C compilation sequence is Preprocessing -> Compilation -> Assembly -> Linking."
      }
    ],
    os: [
      {
        q: "Arrange the standard OS Process Lifecycle states from creation to completion:",
        items: ["Running State", "Ready Queue", "Terminated State", "New State", "Waiting / Blocked"],
        correctOrder: ["New State", "Ready Queue", "Running State", "Waiting / Blocked", "Terminated State"],
        explanation: "Process state transitions: New -> Ready -> Running -> Waiting/Blocked -> Terminated."
      }
    ]
  },
  code_blank: {
    frontend: [
      {
        q: "Fill in the missing ES6 DOM method to attach a click listener:",
        snippet: "const btn = document.querySelector('#btn');\nbtn.________('click', handleClick);",
        targetAnswer: "addEventListener",
        explanation: "addEventListener registers an event handler function on the target element."
      }
    ],
    dbms: [
      {
        q: "Type the SQL constraint keyword to enforce unique non-null row identification:",
        snippet: "CREATE TABLE Users (\n    id INT ________ KEY,\n    name VARCHAR(50)\n);",
        targetAnswer: "PRIMARY",
        explanation: "PRIMARY KEY uniquely identifies each record in a relational table."
      }
    ],
    java: [
      {
        q: "Complete the Java keyword used to invoke a superclass constructor:",
        snippet: "public ChildClass() {\n    ________(); // Invoke parent constructor\n}",
        targetAnswer: "super",
        explanation: "super() calls the direct parent class constructor in Java."
      }
    ],
    cprog: [
      {
        q: "Fill in the missing C library function to allocate 50 bytes of heap memory:",
        snippet: "int *arr = (int*) ________(50 * sizeof(int));",
        targetAnswer: "malloc",
        explanation: "malloc(size) dynamically allocates uninitialized memory blocks on the heap."
      }
    ],
    os: [
      {
        q: "Type the POSIX system call used to create a new child process in UNIX/Linux:",
        snippet: "pid_t pid = ________();\nif (pid == 0) { /* Child process */ }",
        targetAnswer: "fork",
        explanation: "fork() creates a new child process by duplicating the calling process."
      }
    ]
  },
  speed_tf: {
    frontend: [
      {
        q: "True or False: JavaScript Array.prototype.sort() sorts numbers numerically by default.",
        answer: false,
        explanation: "False! JS sort() converts elements to strings by default, sorting '10' before '2'."
      },
      {
        q: "True or False: HTML5 localStore data persists across browser tab closures.",
        answer: true,
        explanation: "True! localStorage data has no expiration time."
      }
    ],
    dbms: [
      {
        q: "True or False: The HAVING clause can filter individual table rows before GROUP BY aggregation.",
        answer: false,
        explanation: "False! WHERE filters rows before aggregation; HAVING filters groups after aggregation."
      },
      {
        q: "True or False: Foreign keys must reference a primary key or unique key in another table.",
        answer: true,
        explanation: "True! Foreign keys establish referential integrity to primary/unique keys."
      }
    ],
    java: [
      {
        q: "True or False: Java garbage collection guarantees immediate memory deallocation upon calling System.gc().",
        answer: false,
        explanation: "False! System.gc() is only a recommendation to the JVM; execution time is non-deterministic."
      },
      {
        q: "True or False: An interface in Java can contain private helper methods since Java 9.",
        answer: true,
        explanation: "True! Java 9 introduced private methods in interfaces for code reuse inside default methods."
      }
    ],
    cprog: [
      {
        q: "True or False: In C, array names decay into pointers to their first element when passed to functions.",
        answer: true,
        explanation: "True! Array names evaluate to the address of their first element (&arr[0])."
      },
      {
        q: "True or False: Freeing a NULL pointer in standard C causes an immediate runtime segmentation fault.",
        answer: false,
        explanation: "False! Standard C specifies free(NULL) is a safe no-op."
      }
    ],
    os: [
      {
        q: "True or False: Deadlock can be prevented by eliminating any one of Coffman's 4 conditions.",
        answer: true,
        explanation: "True! Breaking at least one condition (e.g. Hold & Wait) guarantees deadlock prevention."
      },
      {
        q: "True or False: Threads belonging to the same process share their call stacks and register sets.",
        answer: false,
        explanation: "False! Each thread has its own private stack and register set, though heap memory is shared."
      }
    ]
  }
};

/* Quiz Engine Extended State */
let state = {
  gameMode: 'standard', // 'standard', 'ai_duel', 'speed_tf', 'find_bug', 'drag_drop', 'code_blank'
  currentCategoryKey: 'frontend',
  questions: [],
  currentIndex: 0,
  userAnswers: [],
  timerSeconds: 20,
  timerInterval: null,
  isFinished: false,

  // AI Bot state
  aiScore: 0,
  aiCurrentIndex: 0,
  aiTimerTimeout: null,
  aiStatusText: "Ready",
  userStartTime: 0,
  totalTimeSeconds: 0
};

document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('quizViewContainer')) return;
  initSubjectSearch();
  renderSubjectCards();
  renderHistorySection();

  // Global Keyboard listener for Speed T/F round (T / F or Left / Right arrow)
  document.addEventListener('keydown', (e) => {
    if (state.gameMode === 'speed_tf' && !state.isFinished && document.getElementById('activeQuizView').style.display !== 'none') {
      if (e.key === 't' || e.key === 'T' || e.key === 'ArrowLeft') {
        pickOption(0); // True
      } else if (e.key === 'f' || e.key === 'F' || e.key === 'ArrowRight') {
        pickOption(1); // False
      }
    }
  });
});

/* ---- Game Mode Switcher ---- */
window.switchGameMode = function(modeKey) {
  clearInterval(state.timerInterval);
  clearTimeout(state.aiTimerTimeout);
  state.gameMode = modeKey;

  // Update chip active class
  document.querySelectorAll('.mode-chip').forEach(chip => {
    chip.classList.toggle('active', chip.getAttribute('data-mode') === modeKey);
  });

  const heading = document.getElementById('selectionHeading');
  const desc = document.getElementById('selectionDesc');

  switch (modeKey) {
    case 'ai_duel':
      heading.textContent = "⚔️ 1v1 Battle vs CyberBot AI";
      desc.textContent = "Direct 1v1 battle against CyberBot AI across all 5 CSE subjects!";
      break;
    case 'speed_tf':
      heading.textContent = "⚡ True / False Speed Round";
      desc.textContent = "5 seconds per question! High-speed tactile quizzardry across all 5 subjects.";
      break;
    case 'find_bug':
      heading.textContent = "🐛 Find the Bug (Line-Click Debugging)";
      desc.textContent = "Inspect real code snippets across all 5 subjects and click the buggy line!";
      break;
    case 'drag_drop':
      heading.textContent = "🧩 Drag & Drop Sequencing";
      desc.textContent = "Drag code clauses, execution steps, and lifecycle states into correct order!";
      break;
    case 'code_blank':
      heading.textContent = "⌨️ Syntax Fill-in-the-Blank";
      desc.textContent = "Type missing keywords and functions directly into the syntax prompt for any subject!";
      break;
    default:
      heading.textContent = "Choose a subject to launch your test";
      desc.textContent = "Timed multiple-choice quizzardry across core Computer Science topics.";
      break;
  }

  // Reload cards for chosen mode
  renderSubjectCards();
  switchView('selectionView');
};

/* ---- Subject Search Filter ---- */
function initSubjectSearch() {
  const searchInput = document.getElementById('subjectSearch');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    renderSubjectCards(query);
  });
}

/* ---- Render ALL 5 Subject Cards Grid across EVERY Game Mode ---- */
function renderSubjectCards(filterQuery = '') {
  const grid = document.getElementById('subjectGrid');
  if (!grid) return;

  grid.innerHTML = '';
  const keys = Object.keys(QUIZ_DATA);
  let matchCount = 0;

  keys.forEach(key => {
    const cat = QUIZ_DATA[key];
    const textMatch = cat.title.toLowerCase().includes(filterQuery) ||
                      cat.desc.toLowerCase().includes(filterQuery);

    if (!filterQuery || textMatch) {
      matchCount++;
      let qCount = cat.questions.length;
      if (['find_bug', 'drag_drop', 'code_blank', 'speed_tf'].includes(state.gameMode)) {
        if (INTERACTIVE_DATA[state.gameMode] && INTERACTIVE_DATA[state.gameMode][key]) {
          qCount = INTERACTIVE_DATA[state.gameMode][key].length;
        }
      }

      let actionText = 'Start Quiz →';
      if (state.gameMode === 'ai_duel') actionText = '⚔️ Battle AI →';
      else if (state.gameMode === 'speed_tf') actionText = '⚡ 5s Speed Round →';
      else if (state.gameMode === 'find_bug') actionText = '🐛 Debug Subject →';
      else if (state.gameMode === 'drag_drop') actionText = '🧩 Sequence Subject →';
      else if (state.gameMode === 'code_blank') actionText = '⌨️ Syntax Fill →';

      const card = document.createElement('article');
      card.className = 'subject-card';
      card.style.setProperty('--card-color', cat.color);
      card.innerHTML = `
        <span class="file">${key.toUpperCase()}</span>
        <h3>${cat.title}</h3>
        <p>${cat.desc}</p>
        <div class="card-meta">
          <span>${qCount} Questions</span>
          <span>${state.gameMode === 'speed_tf' ? '5s' : '20s'} / Q</span>
        </div>
        <button class="btn btn-primary card-link" onclick="selectCategory('${key}')">
          ${actionText}
        </button>
      `;
      grid.appendChild(card);
    }
  });

  if (matchCount === 0) {
    grid.innerHTML = `<p class="eyebrow" style="grid-column:1/-1; text-align:center; padding:30px 0;">No subjects match "${filterQuery}".</p>`;
  }
}

/* ---- Select Subject & Show Guidelines ---- */
window.selectCategory = function(key) {
  state.currentCategoryKey = key;
  const category = QUIZ_DATA[key];

  let qCount = category.questions.length;
  if (['find_bug', 'drag_drop', 'code_blank', 'speed_tf'].includes(state.gameMode)) {
    if (INTERACTIVE_DATA[state.gameMode] && INTERACTIVE_DATA[state.gameMode][key]) {
      qCount = INTERACTIVE_DATA[state.gameMode][key].length;
    }
  }

  document.getElementById('guidelinesSubjectTitle').textContent = `${category.title} (${state.gameMode.toUpperCase().replace('_', ' ')})`;
  document.getElementById('guidelinesQCount').textContent = qCount;
  if (state.gameMode === 'speed_tf') {
    document.getElementById('guidelinesTimerText').textContent = '5 Seconds Per Question';
  } else if (state.gameMode === 'drag_drop') {
    document.getElementById('guidelinesTimerText').textContent = '30 Seconds Single-Screen Challenge';
  } else {
    document.getElementById('guidelinesTimerText').textContent = '20 Seconds Per Question';
  }

  switchView('guidelinesView');
};

/* ---- Begin Quiz ---- */
window.startQuiz = function() {
  if (['find_bug', 'drag_drop', 'code_blank', 'speed_tf'].includes(state.gameMode)) {
    state.questions = [...(INTERACTIVE_DATA[state.gameMode][state.currentCategoryKey] || [])];
  } else {
    state.questions = [...QUIZ_DATA[state.currentCategoryKey].questions];
  }

  state.currentIndex = 0;
  state.userAnswers = new Array(state.questions.length).fill(null);
  state.isFinished = false;
  state.userStartTime = Date.now();

  const catTitle = QUIZ_DATA[state.currentCategoryKey].title;
  document.getElementById('hudTopicTitle').textContent = `${catTitle} [${state.gameMode.toUpperCase()}]`;

  // Setup 1v1 AI Bot state if in AI Duel mode
  if (state.gameMode === 'ai_duel') {
    state.aiScore = 0;
    state.aiCurrentIndex = 0;
    state.aiAnsweredMap = {};
    state.aiStatusText = "CyberBot is thinking...";
    document.getElementById('duelSplitHud').style.display = 'grid';
    document.getElementById('hudPlayer1Name').textContent = '👤 You';
    document.getElementById('hudPlayer2Name').textContent = '🤖 CyberBot AI';
    updateDuelHud();
    triggerAiQuestionAnswer(0);
  } else {
    document.getElementById('duelSplitHud').style.display = 'none';
  }

  switchView('activeQuizView');
  loadQuestion(0);
};

/* ---- Synchronized AI Bot Opponent Engine ---- */
function triggerAiQuestionAnswer(index) {
  clearTimeout(state.aiTimerTimeout);
  if (state.isFinished || index >= state.questions.length) return;
  if (!state.aiAnsweredMap) state.aiAnsweredMap = {};
  if (state.aiAnsweredMap[index]) return;

  state.aiStatusText = "Thinking...";
  updateDuelHud();

  const thinkDelay = Math.floor(Math.random() * 1200) + 1200;
  state.aiTimerTimeout = setTimeout(() => {
    if (state.isFinished || state.aiAnsweredMap[index]) return;
    state.aiAnsweredMap[index] = true;
    const isCorrect = Math.random() < 0.70;
    if (isCorrect) state.aiScore++;
    state.aiCurrentIndex = Math.max(state.aiCurrentIndex, index + 1);
    state.aiStatusText = isCorrect ? "Answered ✔" : "Answered ✖";
    updateDuelHud();
  }, thinkDelay);
}

function updateDuelHud() {
  const userCorrect = countUserCorrectAnswers();
  const userPct = ((state.currentIndex + 1) / state.questions.length) * 100;
  const oppPct = ((state.aiCurrentIndex) / state.questions.length) * 100;

  document.getElementById('hudPlayer1Score').textContent = `Score: ${userCorrect}`;
  document.getElementById('hudPlayer1Bar').style.width = `${userPct}%`;

  document.getElementById('hudPlayer2Score').textContent = `Score: ${state.aiScore} (${state.aiStatusText})`;
  document.getElementById('hudPlayer2Bar').style.width = `${oppPct}%`;
}

function countUserCorrectAnswers() {
  let c = 0;
  state.questions.forEach((q, idx) => {
    const ans = state.userAnswers[idx];
    if (state.gameMode === 'find_bug' && ans === q.bugLine) c++;
    else if (state.gameMode === 'code_blank' && ans && ans.toLowerCase() === q.targetAnswer.toLowerCase()) c++;
    else if (state.gameMode === 'drag_drop' && JSON.stringify(ans) === JSON.stringify(q.correctOrder)) c++;
    else if (state.gameMode === 'speed_tf' && ans === q.answer) c++;
    else if (ans === q.answer) c++;
  });
  return c;
}

/* ---- Load Question ---- */
function loadQuestion(index) {
  state.currentIndex = index;
  const qObj = state.questions[index];

  // Update HUD
  document.getElementById('hudProgressText').textContent = `Question ${index + 1} of ${state.questions.length}`;
  const pct = ((index + 1) / state.questions.length) * 100;
  document.getElementById('quizProgressBar').style.width = `${pct}%`;

  document.getElementById('questionText').textContent = `${index + 1}. ${qObj.q}`;
  const optionsWrap = document.getElementById('quizOptionsWrap');
  optionsWrap.innerHTML = '';

  // Hide/Show Speed Ring Timer
  const speedTimerWrap = document.getElementById('speedTimerWrap');
  if (state.gameMode === 'speed_tf') {
    speedTimerWrap.style.display = 'block';
  } else {
    speedTimerWrap.style.display = 'none';
  }

  // RENDER QUESTION BY TYPE
  if (state.gameMode === 'find_bug') {
    renderFindBugQuestion(qObj, index, optionsWrap);
  } else if (state.gameMode === 'drag_drop') {
    renderDragDropQuestion(qObj, index, optionsWrap);
  } else if (state.gameMode === 'code_blank') {
    renderCodeBlankQuestion(qObj, index, optionsWrap);
  } else if (state.gameMode === 'speed_tf') {
    renderSpeedTFQuestion(qObj, index, optionsWrap);
  } else {
    renderStandardMCQQuestion(qObj, index, optionsWrap);
  }

  // Controls
  const prevBtn = document.getElementById('prevQBtn');
  const nextBtn = document.getElementById('nextQBtn');

  if (state.gameMode === 'drag_drop') {
    document.getElementById('hudProgressText').textContent = "Drag & Drop Challenge (Single Screen)";
    prevBtn.style.display = 'none';
    nextBtn.textContent = 'Submit Drag & Drop Sequence →';
  } else {
    prevBtn.style.display = 'inline-flex';
    prevBtn.disabled = (index === 0);
    nextBtn.textContent = (index === state.questions.length - 1) ? 'Submit Quiz' : 'Next Question →';
  }

  if (state.gameMode === 'ai_duel') {
    triggerAiQuestionAnswer(index);
  }

  updateDuelHud();
  resetTimer();
}

/* ---- RENDERERS FOR INTERACTIVE TYPES ---- */
function renderStandardMCQQuestion(qObj, index, container) {
  const letters = ['A', 'B', 'C', 'D'];
  qObj.options.forEach((optText, optIdx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    if (state.userAnswers[index] === optIdx) btn.classList.add('selected');
    btn.innerHTML = `
      <span class="opt-label">${letters[optIdx]}</span>
      <span>${escapeHtml(optText)}</span>
    `;
    btn.addEventListener('click', () => pickOption(optIdx));
    container.appendChild(btn);
  });
}

function renderSpeedTFQuestion(qObj, index, container) {
  const options = ['TRUE (Press Left Arrow / T)', 'FALSE (Press Right Arrow / F)'];
  options.forEach((optText, optIdx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    if (state.userAnswers[index] === (optIdx === 0)) btn.classList.add('selected');
    btn.innerHTML = `<span class="opt-label">${optIdx === 0 ? 'T' : 'F'}</span><span>${optText}</span>`;
    btn.addEventListener('click', () => pickOption(optIdx === 0));
    container.appendChild(btn);
  });
}

function renderFindBugQuestion(qObj, index, container) {
  const codeBox = document.createElement('div');
  codeBox.className = 'code-bug-container';

  qObj.codeLines.forEach((lineText, lineIdx) => {
    const lineEl = document.createElement('div');
    lineEl.className = 'code-bug-line';
    if (state.userAnswers[index] === lineIdx) lineEl.classList.add('wrong-bug-line');

    lineEl.innerHTML = `
      <span class="line-num">${lineIdx + 1}</span>
      <span class="line-code">${escapeHtml(lineText)}</span>
    `;
    lineEl.addEventListener('click', () => {
      state.userAnswers[index] = lineIdx;
      document.querySelectorAll('.code-bug-line').forEach((l, idx) => {
        l.classList.toggle('wrong-bug-line', idx === lineIdx);
      });
      showToast(`Selected Line ${lineIdx + 1}`);
    });
    codeBox.appendChild(lineEl);
  });
  container.appendChild(codeBox);
}

function renderDragDropQuestion(qObj, index, container) {
  container.innerHTML = '';

  const mainWrap = document.createElement('div');
  mainWrap.className = 'drag-drop-container';

  // 1. Array Control Header
  let currentItems = state.userAnswers[index] ? [...state.userAnswers[index]] : [...qObj.items];
  state.userAnswers[index] = currentItems;

  const headerBox = document.createElement('div');
  headerBox.className = 'drag-drop-header';
  headerBox.innerHTML = `
    <div class="drag-header-info">
      <span class="drag-badge">ARRAY SEQUENCE (${currentItems.length} ITEMS)</span>
      <span class="drag-sub-tip">💡 Drag items or click <strong>▲ Move Up</strong> / <strong>▼ Move Down</strong> to rearrange sequence</span>
    </div>
    <button type="button" class="drag-reset-btn" id="dragResetBtn" title="Reset sequence to default order">
      🔄 Reset Order
    </button>
  `;

  headerBox.querySelector('#dragResetBtn').addEventListener('click', () => {
    state.userAnswers[index] = [...qObj.items];
    renderDragDropQuestion(qObj, index, container);
    if (typeof showToast === 'function') showToast('Reset sequence to original order');
  });

  mainWrap.appendChild(headerBox);

  // 2. Sequence Items Wrapper
  const seqWrap = document.createElement('div');
  seqWrap.className = 'drag-sequence-wrap';
  seqWrap.setAttribute('role', 'list');

  let draggedIdx = null;

  currentItems.forEach((itemText, itemIdx) => {
    const itemEl = document.createElement('div');
    itemEl.className = 'drag-item';
    itemEl.draggable = true;
    itemEl.setAttribute('data-idx', itemIdx);
    itemEl.setAttribute('tabindex', '0');
    itemEl.setAttribute('role', 'listitem');
    itemEl.setAttribute('aria-label', `Item ${itemIdx + 1}: ${itemText}`);

    const isFirst = itemIdx === 0;
    const isLast = itemIdx === currentItems.length - 1;
    const stepNum = String(itemIdx + 1).padStart(2, '0');

    itemEl.innerHTML = `
      <div class="drag-item-left">
        <span class="drag-step-num">${stepNum}</span>
        <span class="drag-handle" title="Drag item">⠿</span>
        <div class="drag-item-text"><code>${escapeHtml(itemText)}</code></div>
      </div>
      <div class="drag-controls-btn-group">
        <button type="button" class="drag-move-btn drag-move-up" title="Move Up" ${isFirst ? 'disabled' : ''} aria-label="Move item up">
          ▲
        </button>
        <button type="button" class="drag-move-btn drag-move-down" title="Move Down" ${isLast ? 'disabled' : ''} aria-label="Move item down">
          ▼
        </button>
      </div>
    `;

    // Move Up action handler
    const moveUpBtn = itemEl.querySelector('.drag-move-up');
    if (moveUpBtn && !isFirst) {
      moveUpBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const temp = currentItems[itemIdx];
        currentItems[itemIdx] = currentItems[itemIdx - 1];
        currentItems[itemIdx - 1] = temp;
        state.userAnswers[index] = currentItems;
        renderDragDropQuestion(qObj, index, container);
      });
    }

    // Move Down action handler
    const moveDownBtn = itemEl.querySelector('.drag-move-down');
    if (moveDownBtn && !isLast) {
      moveDownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const temp = currentItems[itemIdx];
        currentItems[itemIdx] = currentItems[itemIdx + 1];
        currentItems[itemIdx + 1] = temp;
        state.userAnswers[index] = currentItems;
        renderDragDropQuestion(qObj, index, container);
      });
    }

    // HTML5 Drag Events
    itemEl.addEventListener('dragstart', (e) => {
      draggedIdx = itemIdx;
      e.dataTransfer.setData('text/plain', itemIdx);
      e.dataTransfer.effectAllowed = 'move';
      itemEl.classList.add('is-dragging');
    });

    itemEl.addEventListener('dragend', () => {
      itemEl.classList.remove('is-dragging');
      document.querySelectorAll('.drag-item').forEach(el => {
        el.classList.remove('drag-over-above', 'drag-over-below');
      });
    });

    itemEl.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      const rect = itemEl.getBoundingClientRect();
      const midpoint = rect.top + rect.height / 2;
      if (e.clientY < midpoint) {
        itemEl.classList.add('drag-over-above');
        itemEl.classList.remove('drag-over-below');
      } else {
        itemEl.classList.add('drag-over-below');
        itemEl.classList.remove('drag-over-above');
      }
    });

    itemEl.addEventListener('dragleave', () => {
      itemEl.classList.remove('drag-over-above', 'drag-over-below');
    });

    itemEl.addEventListener('drop', (e) => {
      e.preventDefault();
      itemEl.classList.remove('drag-over-above', 'drag-over-below');
      const fromIdx = parseInt(e.dataTransfer.getData('text/plain'));
      if (isNaN(fromIdx) || fromIdx === itemIdx) return;

      const rect = itemEl.getBoundingClientRect();
      const midpoint = rect.top + rect.height / 2;
      let toIdx = itemIdx;
      if (e.clientY >= midpoint && fromIdx < itemIdx) {
        // dropped on lower half, insert after
      }

      const draggedItem = currentItems.splice(fromIdx, 1)[0];
      currentItems.splice(toIdx, 0, draggedItem);
      state.userAnswers[index] = currentItems;
      renderDragDropQuestion(qObj, index, container);
    });

    // Mobile Touch Drag Support
    let touchStartY = 0;
    let isTouchDragging = false;

    itemEl.addEventListener('touchstart', (e) => {
      if (e.target.closest('.drag-move-btn')) return;
      touchStartY = e.touches[0].clientY;
      draggedIdx = itemIdx;
      isTouchDragging = true;
    }, { passive: true });

    itemEl.addEventListener('touchmove', (e) => {
      if (!isTouchDragging) return;
      const touchY = e.touches[0].clientY;
      const targetEl = document.elementFromPoint(e.touches[0].clientX, touchY);
      const targetItem = targetEl ? targetEl.closest('.drag-item') : null;

      document.querySelectorAll('.drag-item').forEach(el => {
        el.classList.remove('drag-over-above', 'drag-over-below');
      });

      if (targetItem && targetItem !== itemEl) {
        const rect = targetItem.getBoundingClientRect();
        if (touchY < rect.top + rect.height / 2) {
          targetItem.classList.add('drag-over-above');
        } else {
          targetItem.classList.add('drag-over-below');
        }
      }
    }, { passive: true });

    itemEl.addEventListener('touchend', (e) => {
      if (!isTouchDragging) return;
      isTouchDragging = false;
      const touch = e.changedTouches[0];
      const targetEl = document.elementFromPoint(touch.clientX, touch.clientY);
      const targetItem = targetEl ? targetEl.closest('.drag-item') : null;

      if (targetItem && targetItem !== itemEl) {
        const toIdx = parseInt(targetItem.getAttribute('data-idx'));
        if (!isNaN(toIdx) && toIdx !== draggedIdx) {
          const draggedItem = currentItems.splice(draggedIdx, 1)[0];
          currentItems.splice(toIdx, 0, draggedItem);
          state.userAnswers[index] = currentItems;
          renderDragDropQuestion(qObj, index, container);
        }
      }
      document.querySelectorAll('.drag-item').forEach(el => {
        el.classList.remove('drag-over-above', 'drag-over-below');
      });
    });

    // Keyboard navigation (Arrow keys move array items)
    itemEl.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp' || (e.altKey && e.key === 'ArrowUp')) {
        e.preventDefault();
        if (!isFirst) {
          const temp = currentItems[itemIdx];
          currentItems[itemIdx] = currentItems[itemIdx - 1];
          currentItems[itemIdx - 1] = temp;
          state.userAnswers[index] = currentItems;
          renderDragDropQuestion(qObj, index, container);
          setTimeout(() => {
            const items = container.querySelectorAll('.drag-item');
            if (items[itemIdx - 1]) items[itemIdx - 1].focus();
          }, 50);
        }
      } else if (e.key === 'ArrowDown' || (e.altKey && e.key === 'ArrowDown')) {
        e.preventDefault();
        if (!isLast) {
          const temp = currentItems[itemIdx];
          currentItems[itemIdx] = currentItems[itemIdx + 1];
          currentItems[itemIdx + 1] = temp;
          state.userAnswers[index] = currentItems;
          renderDragDropQuestion(qObj, index, container);
          setTimeout(() => {
            const items = container.querySelectorAll('.drag-item');
            if (items[itemIdx + 1]) items[itemIdx + 1].focus();
          }, 50);
        }
      }
    });

    seqWrap.appendChild(itemEl);
  });

  mainWrap.appendChild(seqWrap);
  container.appendChild(mainWrap);
}

function renderCodeBlankQuestion(qObj, index, container) {
  const box = document.createElement('div');
  box.className = 'code-blank-box';
  box.innerHTML = escapeHtml(qObj.snippet).replace('________', `<input type="text" class="code-blank-input" id="codeBlankInput" value="${escapeHtml(state.userAnswers[index] || '')}" placeholder="Type key...">`);

  container.appendChild(box);

  const inputEl = container.querySelector('#codeBlankInput');
  if (inputEl) {
    inputEl.addEventListener('input', (e) => {
      state.userAnswers[index] = e.target.value.trim();
    });
  }
}

function pickOption(value) {
  state.userAnswers[state.currentIndex] = value;
  const options = document.querySelectorAll('#quizOptionsWrap .option-btn');
  options.forEach((opt, idx) => {
    if (typeof value === 'boolean') {
      opt.classList.toggle('selected', (idx === 0 && value === true) || (idx === 1 && value === false));
    } else {
      opt.classList.toggle('selected', idx === value);
    }
  });
}

/* ---- Timer Loop ---- */
function resetTimer() {
  clearInterval(state.timerInterval);
  if (state.gameMode === 'speed_tf') {
    state.timerSeconds = 5;
  } else if (state.gameMode === 'drag_drop') {
    state.timerSeconds = 30;
  } else {
    state.timerSeconds = 20;
  }
  updateTimerUI();

  const maxTime = state.timerSeconds;
  state.timerInterval = setInterval(() => {
    state.timerSeconds--;
    updateTimerUI(maxTime);
    if (state.timerSeconds <= 0) {
      clearInterval(state.timerInterval);
      handleNextQuestion();
    }
  }, 1000);
}

function updateTimerUI(maxTime = 20) {
  const timerEl = document.getElementById('timerCount');
  const timerBox = document.getElementById('timerBox');
  if (timerEl) timerEl.textContent = `${state.timerSeconds}s`;

  if (timerBox) {
    timerBox.classList.toggle('warning', state.timerSeconds <= 10 && state.timerSeconds > 5);
    timerBox.classList.toggle('danger', state.timerSeconds <= 5);
  }

  // Speed ring SVG update
  const circle = document.getElementById('speedRingCircle');
  const speedVal = document.getElementById('speedTimerVal');
  if (circle && speedVal) {
    speedVal.textContent = `${state.timerSeconds}s`;
    const circumference = 213.6;
    const offset = circumference - (state.timerSeconds / maxTime) * circumference;
    circle.style.strokeDashoffset = offset;
  }
}

window.handleNextQuestion = function() {
  if (state.currentIndex < state.questions.length - 1) {
    loadQuestion(state.currentIndex + 1);
  } else {
    finishQuiz();
  }
};

window.handlePrevQuestion = function() {
  if (state.currentIndex > 0) {
    loadQuestion(state.currentIndex - 1);
  }
};

/* ---- Finish Quiz & Render Results ---- */
function finishQuiz() {
  clearInterval(state.timerInterval);
  clearTimeout(state.aiTimerTimeout);
  state.isFinished = true;
  state.totalTimeSeconds = Math.round((Date.now() - state.userStartTime) / 1000);

  let correctCount = countUserCorrectAnswers();
  const total = state.questions.length;
  const scorePct = Math.round((correctCount / total) * 100);

  const duelBox = document.getElementById('duelWinnerBox');
  const ring = document.getElementById('standardScoreRing');

  if (state.gameMode === 'ai_duel') {
    duelBox.style.display = 'block';
    ring.style.display = 'none';

    let oppScore = state.aiScore;
    let oppName = 'CyberBot AI';

    const winnerTitle = document.getElementById('winnerTitle');
    const winnerIcon = document.getElementById('winnerIcon');

    if (correctCount > oppScore) {
      winnerTitle.textContent = `VICTORY! You defeated ${oppName}!`;
      winnerIcon.textContent = '🏆';
    } else if (correctCount === oppScore) {
      winnerTitle.textContent = `IT'S A DRAW! Equal Score!`;
      winnerIcon.textContent = '🤝';
    } else {
      winnerTitle.textContent = `${oppName} Won the Duel!`;
      winnerIcon.textContent = '⚡';
    }

    document.getElementById('duelStatComparison').innerHTML = `
      <div><strong>Your Score:</strong> ${correctCount} / ${total} (${state.totalTimeSeconds}s)</div>
      <div><strong>${oppName}:</strong> ${oppScore} / ${total}</div>
    `;
  } else {
    duelBox.style.display = 'none';
    ring.style.display = 'block';
  }

  document.getElementById('resultsScoreVal').textContent = `${scorePct}%`;
  document.getElementById('resultsFractionText').innerHTML = `${correctCount} / ${total}<br><span style="font-size:10px; text-transform:uppercase; letter-spacing:0.06em; opacity:0.85;">Correct</span>`;

  const msgEl = document.getElementById('resultsFeedbackMsg');
  const certBtn = document.getElementById('claimCertBtn');

  if (scorePct >= 80) {
    msgEl.textContent = "🏆 Outstanding Performance! You scored above 80% and unlocked your Certificate of Excellence!";
    if (certBtn) certBtn.style.display = 'inline-flex';
  } else {
    msgEl.textContent = "Good effort! Revise the tricky questions below and try again to unlock your Certificate.";
    if (certBtn) certBtn.style.display = 'none';
  }

  renderReviewAccordion();
  saveScoreToHistory(scorePct, correctCount, total);
  switchView('resultsView');
}

function renderReviewAccordion() {
  const accordion = document.getElementById('reviewAccordion');
  if (!accordion) return;
  accordion.innerHTML = '';

  state.questions.forEach((qObj, idx) => {
    const userChoice = state.userAnswers[idx];
    let isCorrect = false;

    if (state.gameMode === 'find_bug') isCorrect = (userChoice === qObj.bugLine);
    else if (state.gameMode === 'code_blank') isCorrect = (userChoice && userChoice.toLowerCase() === qObj.targetAnswer.toLowerCase());
    else if (state.gameMode === 'drag_drop') isCorrect = (JSON.stringify(userChoice) === JSON.stringify(qObj.correctOrder));
    else if (state.gameMode === 'speed_tf') isCorrect = (userChoice === qObj.answer);
    else isCorrect = (userChoice === qObj.answer);

    let detailsHtml = '';
    if (state.gameMode === 'drag_drop' && Array.isArray(userChoice)) {
      const userSeq = userChoice.map((item, i) => {
        const match = item === qObj.correctOrder[i];
        return `<div class="review-seq-item ${match ? 'seq-match' : 'seq-mismatch'}">
          <span class="seq-num">${i + 1}</span> <span>${escapeHtml(item)}</span> ${match ? '✔' : '✖'}
        </div>`;
      }).join('');

      const correctSeq = qObj.correctOrder.map((item, i) => `
        <div class="review-seq-item seq-target">
          <span class="seq-num">${i + 1}</span> <span>${escapeHtml(item)}</span>
        </div>
      `).join('');

      detailsHtml = `
        <div class="drag-review-grid">
          <div class="drag-review-col">
            <strong>Your Submitted Sequence:</strong>
            <div class="review-seq-wrap">${userSeq}</div>
          </div>
          <div class="drag-review-col">
            <strong>Target Correct Sequence:</strong>
            <div class="review-seq-wrap">${correctSeq}</div>
          </div>
        </div>
      `;
    }

    const item = document.createElement('article');
    item.className = `review-item ${isCorrect ? 'is-correct' : 'is-wrong'}`;
    item.innerHTML = `
      <div class="review-q">${idx + 1}. ${escapeHtml(qObj.q)}</div>
      <div class="review-ans">
        <strong>Result:</strong> ${isCorrect ? '✔ Correct Order' : '✖ Incorrect Order'}<br>
        ${detailsHtml}
      </div>
      <div class="review-exp">💡 Explanation: ${escapeHtml(qObj.explanation)}</div>
    `;
    accordion.appendChild(item);
  });
}

/* ---- Save Score History ---- */
function saveScoreToHistory(scorePct, correctCount, total) {
  const history = JSON.parse(localStorage.getItem('skillify_score_history') || localStorage.getItem('quizze_score_history') || '[]');
  const subjectName = QUIZ_DATA[state.currentCategoryKey] ? QUIZ_DATA[state.currentCategoryKey].title : state.gameMode.toUpperCase();

  const record = {
    id: Date.now(),
    subject: subjectName,
    mode: state.gameMode,
    scorePct: scorePct,
    correct: correctCount,
    total: total,
    timestamp: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  history.unshift(record);
  if (history.length > 15) history.pop();
  localStorage.setItem('skillify_score_history', JSON.stringify(history));
  renderHistorySection();
}

/* ---- Render History Section ---- */
function renderHistorySection() {
  const grid = document.getElementById('historyGrid');
  if (!grid) return;

  const history = JSON.parse(localStorage.getItem('skillify_score_history') || localStorage.getItem('quizze_score_history') || '[]');
  if (history.length === 0) {
    grid.innerHTML = `<p class="eyebrow" style="grid-column:1/-1;">No quiz attempts logged yet. Complete a quiz to track performance!</p>`;
    return;
  }

  grid.innerHTML = '';
  history.forEach(item => {
    const card = document.createElement('article');
    card.className = 'history-card';
    card.innerHTML = `
      <div class="h-subject">${escapeHtml(item.subject)} <span style="font-size:11px; opacity:0.8;">(${item.mode || 'standard'})</span></div>
      <div class="h-meta">
        <span>Score: <strong>${item.scorePct}%</strong> (${item.correct}/${item.total})</span>
        <time>${escapeHtml(item.timestamp)}</time>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ---- Clear History ---- */
window.clearScoreHistory = function() {
  if (confirm('Are you sure you want to clear your local score history?')) {
    localStorage.removeItem('skillify_score_history');
    localStorage.removeItem('quizze_score_history');
    renderHistorySection();
    showToast('Score history cleared successfully.');
  }
};

/* ---- Certificate Generator Modal ---- */
window.openCertificateModal = function() {
  const modal = document.getElementById('certModal');
  if (!modal) return;

  const currentUser = JSON.parse(sessionStorage.getItem('currentUser') || localStorage.getItem('currentUser') || 'null');
  const recipientName = currentUser ? (currentUser.name || currentUser.email) : 'Guest Candidate';
  const category = QUIZ_DATA[state.currentCategoryKey] || { title: state.gameMode.toUpperCase() };

  let correctCount = countUserCorrectAnswers();
  const scorePct = Math.round((correctCount / state.questions.length) * 100);

  document.getElementById('certRecipientName').textContent = recipientName;
  document.getElementById('certSubjectTitle').textContent = category.title;
  document.getElementById('certScoreText').textContent = `${scorePct}% Accuracy (${correctCount}/${state.questions.length})`;
  document.getElementById('certDateText').textContent = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  modal.style.display = 'flex';
};

window.closeCertificateModal = function() {
  const modal = document.getElementById('certModal');
  if (modal) modal.style.display = 'none';
};

window.printCertificate = function() {
  window.print();
};

/* ---- Reset to Category Selection ---- */
window.resetToCategories = function() {
  clearInterval(state.timerInterval);
  clearTimeout(state.aiTimerTimeout);
  switchView('selectionView');
};

/* ---- View Switcher Helper ---- */
function switchView(viewId) {
  const views = ['selectionView', 'guidelinesView', 'activeQuizView', 'resultsView'];
  views.forEach(v => {
    const el = document.getElementById(v);
    if (el) el.style.display = (v === viewId) ? 'block' : 'none';
  });

  if (viewId === 'activeQuizView') {
    document.body.classList.add('in-quiz');
  } else {
    document.body.classList.remove('in-quiz');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function showToast(msg) {
  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}
