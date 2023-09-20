// https://images.unsplash.com/photo-1693345988541-89e4de8911fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=100
const linkData = {
    "topics": [
        {
            "name": "Basic Topic",
            "list": [
                "Get Started",
                "Variables",
                "Expressions",
                "Operators",
                "ControlStatements"
            ]
        },
        {
            "name": "Advanced Topic",
            "list": [
                "Loops",
                "Functions",
                "Objects",
                "Classes"
            ]
        },
        {
            "name": "Intermediate Topic",
            "list": [
                "Dom Manipulation and Events",
                "Error Handling",
                "Closures and CallBacks",
                "Es6 Features",
                "Asynchronous Programing",
                "Woking With Apis"
            ]
        },
        {
            "name": "Advanced Topic",
            "list": [
                "Modules",
                "Oject-Oriented Programing",
                "Design Patterns",
                "Optimization Techniques"
            ]
        }
    ],
    "notes": [
        {
            noteName: "Getting Started",
            nextNote: "Variables",
            noteImage: "../assets/images/test.png",
            bgPosition: "40px",
            noteText: `<p>
                A function is a self-contained block of code that performs a
                specific task or a set of related tasks.
                Functions are used to organize and modularize code, making
                it more readable, maintainable, and reusable.
            </p>`
        },
        {
            noteName: "Variables",
            nextNote: "Expressions",
            noteImage: "../assets/images/test.png",
            bgPosition: "40px",
            noteText: `<p>variables</p>`,
            challanges: `
            <h2>Challenge One: <br>Working With Variables</h2>
            <p>
                Log to the console all the possible variables learnt today
            </p>
            `
        },
        {
            noteName: "Functions",
            nextNote: "Objects",
            noteImage: "../assets/images/test.png",
            bgPosition: "40px",
            noteText: `
            <p>
            A function is a self-contained block of code that performs a
            specific task or a set of related tasks.
            Functions are used to organize and modularize code, making
            it more readable, maintainable, and reusable.
        </p>

        <br>
        <p>Let's dive into JavaScript functions! </p>
        <br>
        <br>

        <h2>1. Function Declaration:</h2>

        <p>
            Function declarations are defined using the function
            keyword followed by a function name and a parameter
            list enclosed in parentheses. They are hoisted, which
            means they can be used before they are declared in the code.
        </p>
        <p>
            <br> Here's a bit more detail: <br> The greet function in the
            codetakes a name parameter and returns a greeting message.
        </p>
        <br><br>
        <pre class="prettyprint">
                <code>
                    function greet(name) {
                        return "Hello, "+ name;
                    }
                        
                    const greeting = greet("Hype");
                    console.log(greeting); // Output: Hello, Hype!
                </code>
            </pre>

        <br><br><br>

        <h2>2. Function Expression:</h2>

        <p>
            Function expressions involve assigning a function to
            a variable. They are not hoisted, so you can only use
            them after they are defined. This is particularly useful
            when you want to create anonymous functions or pass
            functions as arguments to other functions.
            Here's more on this:
        </p>
        <br><br>
        <pre class="prettyprint">
                <code>
                    const add = function (a, b) {
                        return a + b;
                    };
                    
                    const result = add(5, 3);
                    console.log(result); // Output: 8
                </code>
            </pre>


        <br><br><br>

        <h2>3. Arrow Functions (ES6):</h2>

        <p>
            Arrow functions provide a concise syntax for writing
            functions, especially when they are simple and have a
            single expression.Arrow functions automatically bind to
            the surrounding context, which can come in real handy
            when working.

        </p>
        <br><br>
        <pre class="prettyprint">
                <code>
                    const multiply = (x, y) => x * y;

                    const product = multiply(4, 6);
                    console.log(product); // Output: 24
                </code>
            </pre>

        <br><br><br>
        <h2>4. Anonymous Functions:</h2>

        <p>
            Anonymous functions don't have a name.
            They are often used as callback functions
            or when you need a function temporarily.
            They are defined inline and are suitable for short,
            one-off tasks.
            Here's how they are commonly used:

        </p>
        <br><br>
        <pre class="prettyprint">
                <code>
                    const numbers = [1, 2, 3, 4, 5];
                    const doubled = numbers.map(function (num) {
                        return num * 2;
                    });

                    console.log(doubled); // Output: [2, 4, 6, 8, 10]
                </code>
            </pre>


        <br><br><br>
        <h2>5. Higher-Order Functions:</h2>

        <p>
            Higher-order functions are functions that
            operate on other functions. They can take
            functions as arguments or return functions.
            Here, map takes an anonymous function as an
            argument to transform each element in the array.
            One common example is the map function:
        </p>
        <br><br>
        <pre class="prettyprint">
                <code>
                    const names = ["Alice", "Bob", "Charlie"];
                    const initials = names.map((name) => name[0]);

                    console.log(initials); // Output: ["A", "B", "C"]
                </code>
            </pre>
            `,
            challanges: `
            <h2>Challenge One: <br>Find the Maximum Number</h2>
                            <p>
                                Write a function findMax that takes an array of numbers as an argument and returns the maximum number
                                from that array.
                
                                For example, if you call findMax([7, 2, 9, 4, 1]), it should return 9 because 9 is the largest number in
                                the array.
                            </p>
                
                            <br><br>
                            <h2>Challenge Two: <br>Calculate the Average</h2>
                            <p>
                                Write a function calculateAverage that takes an array of numbers as an argument and returns the average
                                (mean) of those numbers.
                
                                For example, if you call calculateAverage([2, 4, 6, 8, 10]), it should return 6 because the average of
                                these numbers is 6.
                            </p>
                            <br><br>
                            <h2>Challenge Three: <br>Calculate Factorial</h2>
                            <p>
                                Write a function calculateFactorial that takes an integer n as an argument and calculates the factorial
                                of that number. The factorial of a non-negative integer n, denoted as n!, is the product of all positive
                                integers less than or equal to n.
                
                                For example, calculateFactorial(5) should return 120 because 5! = 5 * 4 * 3 * 2 * 1 = 120.
                            </p>
                            <br><br>
                            <h2>Challenge Four: <br>Palindrome Checker</h2>
                            <p>
                                Write a function isPalindrome that takes a string as an argument and returns true if the string is a
                                palindrome, and false otherwise. A palindrome is a word, phrase, or sequence of characters that reads
                                the same forward and backward, ignoring spaces, punctuation, and capitalization.
                
                                For example, isPalindrome("racecar") should return true, and isPalindrome("Hello, World!") should return
                                false.
                            </p>
            `
        }
        ,
        {
            noteName: "Loops",
            nextNote: "Functions",
            noteImage: "https://images.unsplash.com/photo-1694608344824-eec4f8dc3cb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            bgPosition: "600px",
            noteText: `
            <p>
            Loops are a fundamental concept in programming, and they allow you to execute a block of code repeatedly. In JavaScript, there are mainly two types of loops: for loops and while loops.
        </p>

        <br>
        <p>Let's dive into JavaScript Loops! </p>
        <br>
        <br>

        <h2>1. For Loops:</h2>
        <p>
        A for loop is used when you know in advance how many times you want to repeat a block of code. It consists of three parts:
        </p>
        <br><br>
        <pre class="prettyprint">
            <code>
                for (initialization; condition; increment) {
                    // Code to be executed repeatedly
                }
            </code>
        </pre>
        <br><br>
        <p>
            Initialization: This is where you initialize a variable that acts as a counter. <br/> <br/>
            Condition: It's a condition that checks whether the loop should continue or stop. <br/>  <br/>
            Increment: This part is responsible for changing the counter after each iteration.  <br/>
            <br/> Here's an example: <br/> <br/>
            This loop will run five times, printing "Iteration 0" through "Iteration 4" to the console. <br/> <br/>
        </p>
        <pre class="prettyprint">
            <code>
                for (let i = 0; i < 5; i++) {
                    console.log("Iteration " + i);
                }
            </code>
        </pre>
            
        <br><br><br>


        <h2>2. While Loops:</h2>
        <p>
        A while loop is used when you don't know how many times you need to repeat a block of code in advance. It continues as long as a specified condition is true:        </p>
        <br><br>
        <pre class="prettyprint">
            <code>
                while (condition) {
                    // Code to be executed repeatedly
                }
            </code>
        </pre>
        <br><br>
        <p>
            For example: This loop will also print "Iteration 0" through "Iteration 4."
        </p>
        <pre class="prettyprint">
            <code>
                let count = 0;
                while (count < 5) {
                    console.log("Iteration " + count);
                    count++;
                }
            </code>
        </pre>
            
        <br><br><br>

        <h2>3. Do...While Loops:</h2>
        <p>
        A variation of the while loop is the do...while loop. It's similar to a while loop but ensures that the code block is executed at least once, even if the condition is initially false.  </p>      <br><br>
        <pre class="prettyprint">
            <code>
                do {
                    // Code to be executed at least once
                } while (condition);
            </code>
        </pre>
        <br><br><br>

        <h2>4. Loop Control Statements:</h2>
        <p>
        In JavaScript, you can use break and continue statements to control loops. break is used to exit a loop prematurely, while continue is used to skip the current iteration and move to the next one.
        </p>
        <pre class="prettyprint">
            <code>
                for (let i = 0; i < 5; i++) {
                    if (i === 2) {
                    continue; // Skip iteration 2
                    }
                    if (i === 4) {
                    break; // Exit the loop at iteration 4
                    }
                    console.log("Iteration " + i);
                }
            </code>
        </pre>
        <p>
        These are the basics of loops in JavaScript. They are incredibly powerful for automating repetitive tasks and iterating through arrays or collections of data. 
        </p>
        <br><br><br>



        <h2>Advanced concepts related to loops in JavaScript.</h2>
        <p>
            These concepts will help you write more efficient and flexible code.
        </p>
        <br><br><br>

        <h2>1. Iterating Arrays and Objects:</h2>
        <p>
        JavaScript provides several methods for iterating over arrays and objects more efficiently than traditional for loops. These methods include:
        </p>

        <br/><br/><br/>
        <p>
        forEach: <br/> This method is used for iterating over the elements of an array. It accepts a callback function that is executed for each element in the array.
        </p>
        <pre class="prettyprint">
            <code>
            const numbers = [1, 2, 3, 4, 5];
            numbers.forEach(function (number) {
              console.log(number);
            });
            </code>
        </pre>
            
        <br/><br/><br/>
        <p>
            for...of: <br/> This is a modern way to iterate over iterable objects like arrays and strings. It simplifies the syntax for looping.
        </p>
        <pre class="prettyprint">
            <code>
            const colors = ['red', 'green', 'blue'];
            for (const color of colors) {
                console.log(color);
            }
            </code>
        </pre>

        <br/><br/>
        <p>
            for...in:<br/> This is used to loop through the properties of an object. Be cautious when using it with arrays, as it can iterate over array indices as well as properties.        </p>
        <pre class="prettyprint">
            <code>
            const person = { name: 'John', age: 30 };
            for (const key in person) {
                console.log(key + ': ' + person[key]);
            }
            </code>
        </pre>

        <br/><br/><br/>
        <h2>2. Nested Loops:</h2>
        <p>
        You can nest loops inside each other to work with multi-dimensional data structures like arrays of arrays or matrices. This is often used in games or data manipulation.
        </p>
        <pre class="prettyprint">
            <code>
            const matrix = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
              ];
              
              for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {
                  console.log(matrix[i][j]);
                }
              }
            </code>
        </pre>

        <br/><br/><br/>

        <h2>3. Loop Optimization:</h2>
        <p>
        Optimizing loops is essential for improving performance. Avoid performing heavy computations inside loops, and try to minimize DOM manipulation within loops for web applications.
        </p>

        <br/><br/><br/>

        <h2>4. Recursion:</h2>
        <p>
        Recursion is a powerful concept where a function calls itself. It can be used to solve complex problems that involve repetitive or nested calculations.
        </p>
        <pre class="prettyprint">
            <code>
            function factorial(n) {
                if (n === 0) {
                  return 1;
                }
                return n * factorial(n - 1);
              }
              
              console.log(factorial(5)); // Calculates 5!
            </code>
        </pre>
        
        <br/><br/><br/>

        <h2>5. Generator Functions:</h2>
        <p>
        Generator functions allow you to pause and resume the execution of a function, which is useful for handling asynchronous operations and streaming data. <br/> <br/>

        They are defined using an asterisk (*) after the function keyword. <br/><br/> They use the yield keyword to pause and resume execution. <br/>

Also they are often used with asynchronous operations to simplify code that deals with promises which we would get to letter in the course.
        </p>
        <pre class="prettyprint">
            <code>
            function* countNumbers() {
                let number = 1;
                while (true) {
                  yield number++;
                }
              }
              
              const counter = countNumbers();
              console.log(counter.next().value); // 1
              console.log(counter.next().value); // 2
            </code>
        </pre>
        
        <br/><br/><br/>
        
        
        <p> Feel free to experiment in the sandbox file to solidify your understanding.</p>
        


            `,
            challanges: `
            
                         <h2>Challenge One: <br>Sum of Multiples</h2>
                            <p>
                            Write a JavaScript function that calculates the sum of all multiples of 3 or 5 below a given number n. For example, if n is 10, the function should return 23 (3 + 5 + 6 + 9).
                            </p>
                
                            <br><br>
                            <h2>Challenge Two: <br> Factorial with Recursion</h2>
                            <p>
                            Create a JavaScript function that calculates the factorial of a given positive integer n using recursion. The factorial of a number is the product of all positive integers up to that number. For example, the factorial of 5 (5!) is 120 (1 * 2 * 3 * 4 * 5).
                            </p>
                            <br><br>
                            <h2>Challenge Three: <br>Reverse a String</h2>
                            <p>
                            Write a JavaScript function that takes a string as input and returns the reverse of that string. You can use a loop to achieve this. For example, if the input is "Hello," the function should return "olleH."
                            </p>
                            <br><br>
                            <h2>Challenge Four: <br>FizzBuzz</h2>
                            <p>
                            FizzBuzz is a classic programming challenge. Write a JavaScript program that prints numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number. For multiples of 5, print "Buzz" instead of the number. For numbers that are multiples of both 3 and 5, print "FizzBuzz." For all other numbers, print the number itself.
                            </p>
            `
        }
    ]
}

// Primary function Calls 
HandleChallange()
HandleNext()
HandleLinking()

function HandleLinking() {
    const tocList = document.getElementById('TOPICS')

    linkData.topics.forEach((link) => {
        let setWrap = document.createElement('div')
        let header = document.createElement('p')
        setWrap.className = 'tocWrap'
        header.className = "nextHeader"
        header.innerHTML = link.name

        tocList.appendChild(setWrap)
        setWrap.appendChild(header)

        if (link.list) {
            link.list.forEach((list, index) => {
                let bttn = document.createElement('div')
                let wrap = document.createElement('div')
                let link = document.createElement('a')

                bttn.className = "topicLinks"
                wrap.className = "tLink"
                link.className = "linkTopic"

                bttn.append(wrap)
                wrap.append(link)

                link.innerText = list
                if (list == 'Get Started') {
                    link.href = `./index.html`
                } else {
                    let listNameArray = list.split(" ")
                    if (listNameArray.length > 1) {
                        let listUrl = listNameArray.join("%20")
                        link.href = `./${listUrl}.html`
                    }
                    else {
                        link.href = `./${list}.html`
                    }
                }


                setWrap.appendChild(bttn)
            })
        }
    })
}


function HandleChallange() {
    const ChallangeView = document.getElementById("challangeView"),
        ChanllangeBttn = document.getElementById('cBttn'),
        CloseCBttn = document.getElementById('closeCBttn')

    if (ChanllangeBttn) {
        ChanllangeBttn.addEventListener('click', e => {
            ChallangeView.style.display = 'flex'
        })
        CloseCBttn.addEventListener('click', () => {
            ChallangeView.style.display = 'none'
        })
    }
}

function HandleNext() {
    const nxtBttn = document.getElementById("nxtBttn")
    if (nxtBttn) {
        nxtBttn.addEventListener('click', () => {
            console.log(nxtBttn.innerText);
            location.href = `./${nxtBttn.innerText}.html`
        })
    }
}


// Notes Functions
HandleNotes()

function HandleNotes() {
    const title = document.getElementById('NoteHeader'),
        mainImage = document.getElementById('NoteImage'),
        text = document.getElementById('NoteText'),
        nextNote = document.getElementById('nxtBttn'),
        noteChallange = document.getElementById('ChallangePoint'),
        chBttn = document.getElementById('chBttn')

    let CurrentTopic
    let CurrentUrl = location.href.split("/")
    let currentLocation = CurrentUrl[CurrentUrl.length - 1].split(".")[0];
    if (currentLocation == 'index') {
        CurrentTopic = 'Getting Started'
    } else {
        CurrentTopic = currentLocation.split("%20").join(" ");
    }


    linkData.notes.forEach(note => {
        if (note.noteName == CurrentTopic) {
            title.innerText = CurrentTopic
            nextNote.innerText = note.nextNote
            mainImage.style.background = `url(${note.noteImage})`
            mainImage.style.backgroundRepeat = `no-repeat`
            mainImage.style.backgroundSize = `cover`
            mainImage.style.backgroundPositionY = `-${note.bgPosition}`


            text.innerHTML = note.noteText


            if (note.challanges) {
                chBttn.style.display = 'block'
                noteChallange.innerHTML = note.challanges
            }
            else {
                chBttn.style.display = 'none'
            }
        }
    })
}