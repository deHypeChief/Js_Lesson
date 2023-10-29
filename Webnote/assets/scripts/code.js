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
            "name": "Going Futher",
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
        },
        {
            noteName: "Objects",
            nextNote: "Classes",
            noteImage: "../assets/images/test.png",
            bgPosition: "40px",
            noteText: `<p>
            Objects are a fundamental data structure in many programming languages, including JavaScript. They are used to store and organize data in a structured way. Objects can hold various types of data, including properties and methods, making them versatile and powerful.
        </p>
        <br><br>

        <h2>1. Object Basics:</h2>
        <p>
        An object is an unordered collection of key-value pairs, where each key is a unique identifier (also called a property) for a specific value. <br>
        Objects can represent real-world entities and their attributes, making them suitable for modeling complex data.
        </p> 
<br>
        <h2>2. Creating Objects:</h2>
        <p>
            In JavaScript, you can create an object using object literal notation, which is the most common way:
        </p><br>
        <pre class="prettyprint">
            <code>
                const person = {
                    name: "John",
                    age: 30,
                    isEmployed: true
                };
            </code>
        </pre><br>
        <p>
         Or you can also create objects using the Object constructor:
        </p><br>
        <pre class="prettyprint">
            <code>
                const person = new Object();
                person.name = "John";
                person.age = 30;
                person.isEmployed = true;
            </code>
        </pre><br>
        
        <br>
        <h2>3. Accessing And Modifying  Properties:</h2>
        <p>
        You can access and modify object properties using dot notation or bracket notation:
        </p><br>
        <pre class="prettyprint">
            <code>
                console.log(person.name); // John
                console.log(person["age"]); // 30

                // Modifying 
                person.age = 31;
            </code>
        </pre><br>

        <br>
        <h2>4. Adding And Deleting Properties:</h2>
        <p>
            You can add and delete new properties in an existing object by assigning a value to a new key:
        </p><br>
        <pre class="prettyprint">
            <code>
                person.city = "New York"; //adding
                delete person.isEmployed; //deleting
            </code>
        </pre><br>

        <br>
        <h2>5. Methods:</h2>
        <p>
        Objects can also contain methods, which are functions stored as object properties. Methods can perform actions or computations related to the object:
        </p><br>
        <pre class="prettyprint">
            <code>
            const calculator = {
                add: function (a, b) {
                  return a + b;
                }
              };
              const sum = calculator.add(5, 3); // Calls the add method
            </code>
        </pre><br>

        <br>
        <h2>6. Iterating Over Object Properties:</h2>
        <p>
        You can loop through an object's properties using for...in or Object.keys():
        </p><br>
        <pre class="prettyprint">
            <code>
              for (let key in person) {
                console.log(key, person[key]);
              }
            </code>
        </pre><br>


        <br>
        <h2>7. Object Use Cases::</h2>
        <p>
        Objects are used to model complex data structures, such as user profiles, configurations, and more.
        </p><br>
        <p>
        They are commonly used in web development, representing DOM elements, form data, and AJAX requests.
        </p><br>
        <p>
        Objects are integral to object-oriented programming, where they serve as the building blocks for classes and instances
        </p><br>
        <p>
        Objects can be converted to JSON format for data exchange and storage. JSON is a lightweight data-interchange format that is easy to read and write by both humans and machines.
        </p><br><br><br>


        <p>
        Also JavaScript objects can inherit properties and methods from prototypes. This forms the basis of object-oriented programming in the language.<br>
        Understanding objects is crucial for effective programming, as they are a core component of many programming languages, enabling developers to structure and manipulate data in a versatile and organized manner.
        </p><br>
        <br>
        `

            ,
            challanges: `
            <h2>Challenge One: <br>Object Key Reversal:</h2>
            <p>
            Create a function that converts an array of objects into a single object, where the objects in the array become properties, and their values are the respective elements of the array.
            </p>
<br>
            <h2>Challenge Two: <br>Object Properties Sum:</h2>
            <p>
            Create a function that takes an object as an argument and returns the sum of all numeric properties in that object.
            </p>

            <br>
            <h2>Challenge Three: <br>Object Intersection:</h2>
            <p>
            Create a function that takes two objects as input and returns a new object containing the common key-value pairs found in both input objects.
            </p>
            `
        },
        {
            noteName: "Classes",
            nextNote: "Dom Manipulation and Events",
            noteImage: "../assets/images/test.png",
            bgPosition: "40px",
            noteText: `
            <p>
            In programming, classes are a fundamental concept used for creating objects, which are instances of those classes. Classes act as blueprints or templates for objects, defining their structure and behavior. They provide a way to model and encapsulate data and functions into a single unit.
            </p>
            
            <br>
                <pre class="prettyprint">
                <code>
                class MyClass {
                    constructor(prop1, prop2) {
                      this.property1 = prop1;
                      this.property2 = prop2;
                    }
                  
                    method1() {
                      // Method logic here
                    }
                  
                    method2() {
                      // Method logic here
                    }
                  }
                </code>
            </pre><br>
            <p>
            -The class keyword is used to define a class, in this case, MyClass. <br> <br>
            -The constructor method is called when an instance of the class is created. It initializes the class properties. <br> <br>
            -You can define various methods within the class to perform actions or computations. <br> <br>
            </p>

            <br>
        <h2>Attributes (Properties/Fields): </h2>
        <p>
        These are variables that store data associated with the class. For example, a Person class might have attributes like name, age, and gender.
        </p>
        <br>
        <h2>Methods (Functions): </h2>
        <p>
        Methods define the behavior of objects created from the class. For instance, a Car class could have methods like startEngine() and stopEngine().
        </p>
        <br>
        <h2>Constructor: </h2>
        <p>
         The constructor is a special method that gets called when an object is created from the class. It's used to initialize the attributes of the object. In many programming languages, like JavaScript and Python, the constructor is named __init__.
        </p>
        <br>
        <h2>Encapsulation: </h2>
        <p>
        Classes allow for encapsulation, which means bundling data and methods together and controlling access to them. It helps protect data from unauthorized access and modification.
        </p>
          
        <br>

        <h2>Classes In Action</h2>
        <br>
                <pre class="prettyprint">
                <code>
                class Person {
                    constructor(name, age) {
                      this.name = name;
                      this.age = age;
                    }
                  
                    sayHello() {
                      console.log("Hello, my name is " + name + "and I'm " + age + years old.");
                    }
                  }
                  
                  // Creating an instance of the Person class
                  const john = new Person('John', 30);
                  john.sayHello();
                </code>
            </pre><br>
            <p>
            We define a Person class with a constructor that takes name and age as parameters.
            The sayHello method is used to introduce the person
            </p>
<br>
<br>
<br>
            <h2>More On Classes</h2>
            <br><br>


            <h2>Inheritance: </h2>
            <p>
            JavaScript supports class inheritance, where one class can inherit properties and methods from another. This allows you to create more specialized classes based on a general one. To do this, you use the extends keyword:
            </p>
            <br>
            <pre class="prettyprint">
            <code>
            class Student extends Person {
                constructor(name, age, studentId) {
                  super(name, age); // Calls the parent class's constructor
                  this.studentId = studentId;
                }
                
                study() {
                  console.log(name+' is studying.');
                }
              }
              
              const alice = new Student('Alice', 20, 'S12345');
              alice.introduce(); // Output: Hi, I'm Alice and I'm 20 years old.
              alice.study();    // Output: Alice is studying.
            </code>
            
        </pre><br>
        


            <h2>Static Methods: </h2>
            <p>
            You can also create static methods that belong to the class itself, not to instances of the class:

javascript
            </p>
            <br>
                <pre class="prettyprint">
                <code>
                class MathHelper {
                    static square(x) {
                      return x * x;
                    }
                  }
                  
                  const result = MathHelper.square(5); // Calling the static method
                  console.log(result); // Output: 25             
                </code>
            </pre><br>

            <h2> Inheritance and Super Keyword: </h2>
            <p>
            Inheritance allows you to create a new class based on an existing one. JavaScript supports this through the extends keyword, as demonstrated earlier. When you create a subclass, you can use the super keyword to call the constructor and methods of the parent class.
            </p>
            <br>
                <pre class="prettyprint">
                <code>
                class Animal {
                    constructor(name) {
                      this.name = name;
                    }
                  
                    speak() {
                      console.log(name +' makes a sound.');
                    }
                  }
                  
                  class Dog extends Animal {
                    speak() {
                      console.log(name + ' barks.');
                    }
                  }
                  
                  const myDog = new Dog('Buddy');
                  myDog.speak(); // Output: Buddy barks.             
                </code>
            </pre><br>


            <h2>Getters and Setters:

            </h2>
            <p>
            You can use getter and setter methods to control access to object properties. Getters are used to retrieve property values, while setters are used to change them.
            </p>
            <br>
                <pre class="prettyprint">
                <code>
                class Circle {
                    constructor(radius) {
                      this._radius = radius; // Use an underscore to indicate a private property.
                    }
                  
                    get radius() {
                      return this._radius;
                    }
                  
                    set radius(newRadius) {
                      if (newRadius > 0) {
                        this._radius = newRadius;
                      }
                    }
                  }
                  
                  const myCircle = new Circle(5);
                  console.log(myCircle.radius); // Output: 5
                  myCircle.radius = 10; // Setter
                  console.log(myCircle.radius); // Output: 10           
                </code>
            </pre><br>


            <h2>Static Methods and Properties:</h2>
            <p>
            Static methods and properties belong to the class itself rather than instances. They are accessed directly on the class, not on objects created from it.
            </p>
            <br>
                <pre class="prettyprint">
                <code>
                class MathHelper {
                    static square(x) {
                      return x * x;
                    }
                  }
                  
                  console.log(MathHelper.square(5)); // Output: 25            
                </code>
            </pre><br>


            <h2>Private Fields and Methods:</h2>
            <p>
            In JavaScript, fields and methods can be marked as private by prefixing them with a #. This makes them inaccessible from outside the class.
            </p>
            <br>
                <pre class="prettyprint">
                <code>
                class Secret {
                    #hiddenField = 42;
                  
                    #hiddenMethod() {
                      console.log('This method is private.');
                    }
                  
                    reveal() {
                      console.log(this.#hiddenField);
                      this.#hiddenMethod();
                    }
                  }
                  
                  const secretInstance = new Secret();
                  secretInstance.reveal(); // Outputs 42 and "This method is private."
                  console.log(secretInstance.#hiddenField); // Error: Cannot access private field.           
                </code>
            </pre><br>

            <h2>Mixins:</h2>
            <p>
            Mixins are a way to combine multiple classes into one. They allow you to reuse methods and properties from various classes, providing flexibility in code organization.
            </p>
            <br>
                <pre class="prettyprint">
                <code>
                const Serializable = {
                    serialize() {
                      return JSON.stringify(this);
                    },
                    deserialize(data) {
                      return JSON.parse(data);
                    }
                  };
                  
                  class Person {
                    constructor(name) {
                      this.name = name;
                    }
                  }
                  
                  class SerializablePerson extends Person {
                    constructor(name) {
                      super(name);
                    }
                  }
                  
                  Object.assign(SerializablePerson.prototype, Serializable);
                  
                  const person = new SerializablePerson('Alice');
                  const serializedData = person.serialize();
                  console.log(serializedData);
                  const deserializedPerson = new SerializablePerson('Bob');
                  deserializedPerson.deserialize(serializedData);            
                </code>
            </pre><br>

            `,
            challanges: `
            <h2>Challenge One:</h2>
            <p>
            Develop a class called BankAccount with attributes for balance and account number. Include methods for deposit, withdrawal, and checking the balance.
            </p>
            <br>
            <h2>Challenge Two:</h2>
            <p>
            Create a class Employee with attributes like name, job title, and salary. Include a method to give a raise to an employee.
            </p>
            <br>
            <h2>Challenge Three:</h2>
            <p>
            Create two classes, Animal and Bird. The Animal class should have properties like name and a speak method that logs a generic sound. The Bird class should extend Animal and override the speak method to make a bird-specific sound. Create instances of both classes and demonstrate inheritance and method overriding.


            </p>
            <br>
            <h2>Challenge Four:</h2>
            <p>
            Build a Temperature class with a private temperature property in Celsius. Implement a getter to convert the temperature to Fahrenheit and a setter to allow setting the temperature in Celsius. Ensure the temperature cannot go below -100°C or above 100°C.
            </p>
            <h2>Challenge Five:</h2>
            <p>
            Develop a mixin called Logger with methods for logging messages. Create a class Product with properties like name and price. Use the Logger mixin to add logging functionality to the Product class, allowing it to log messages when a new product is created or its details are updated.
            </p>

            <br>
            <br>
            <h2>Challenge Six: Online Store Inventory</h2>
            <p>
            Create a class-based inventory system for an online store. The system should incorporate several advanced class concepts, including inheritance, getters and setters, static methods and properties, and private fields and methods.
            </p>


            <p>
            
            -Create a base class called Product with the following properties:
            name (string): The name of the product.<br>
            price (number): The price of the product.<br>
            id (string): A unique identifier for the product (generate this automatically).<br>
            <br>
            -Implement a static property in the Product class called totalProducts to keep track of the total number of products created.
<br><br>
            -Implement a private field in the Product class to store the product's cost price.
<br><br>
            -Create a getter for the cost price field that calculates the cost price as 70% of the selling price (price). This demonstrates the use of getters to derive values.
<br><br>
            -Implement a setter for the selling price (price) to ensure that it cannot be set to a value less than the cost price. If an attempt is made to set the selling price less than the cost price, throw an error.
<br><br>
            -Create a subclass called Electronics that extends Product. Add an additional property, warrantyMonths, which represents the warranty period of the electronic product in months.
<br><br>
            -Implement a mixin named Logger with a private field for logging and a public method to log messages. Mix this into both the Product and Electronics classes to demonstrate the use of mixins.
            
            <br>
            <br>
            <br>
            --Challenges:--
            <br><br>

--Create instances of both the Product and Electronics classes, ensuring that they correctly handle the cost price calculation, price validation, and logging of actions.
<br><br>

--Create multiple instances of Product and Electronics classes, logging actions for each instance, and keeping track of the total number of products using the static property.
<br><br>

            </p>
            `
        },
        {
            noteName: "Dom Manipulation and Events",
            nextNote: "Error Handling",
            noteImage: "../assets/images/test.png",
            bgPosition: "40px",
            noteText: `
            <h2>DOM Manipulation: </h2>
            <p>
            
DOM (Document Object Model) manipulation is all about interacting with the structure and content of a web page using JavaScript. It allows you to dynamically change, add, or remove elements on a webpage. As a UI/UX designer and full-stack developer, you'll find this crucial for creating dynamic and responsive user interfaces.

Imagine you're building a web page for a restaurant you'd like to own. With DOM manipulation, you can update the menu items, prices, and even create an interactive reservation form. It's the magic that happens behind the scenes to make your website come to life.
            </p>
            <br>
            <br>
            <h2>Events:</h2>
            <p>
            
Events are the interactions and occurrences on a web page that trigger specific actions. These interactions can be as simple as clicking a button, hovering over an image, or submitting a form. Events are what make your website interactive and engaging.

As someone who loves basketball, think of a website where you display live basketball scores. Events like updating the scores when a game ends or showing player statistics on a click are all powered by event handling.
            </p>
            <br>
            <br>
            <h2>Combining DOM Manipulation and Events:</h2>
            <p>
            
The real fun begins when you combine DOM manipulation with events. You can create web applications that respond to user actions. For example, you can build a digital art gallery where clicking on an artwork reveals additional details or allows users to leave comments.

As someone who enjoys coding and web services for companies, mastering this combo can help you develop web applications that offer users a seamless and enjoyable experience. It's not just about static web pages but creating dynamic solutions.
            </p>
            <br>
            <br>

            <h2>DOM Manipulation Examples:</h2>
            <p>
            Changing Text Content: <br>
            You can use JavaScript to change the text content of an HTML element. For instance, let's change the text of a paragraph with an ID "demo":
            </p>
            <br>
            <pre class="prettyprint">
                <code>
                <p id="demo">This is a demonstration.</p>
                </code>
            </pre>
            <p>JavaScript code to change the text:</p>
            <br>
            <pre class="prettyprint">
                <code>
                const demoParagraph = document.getElementById("demo");
                demoParagraph.textContent = "Text has been changed!";
                </code>
            </pre>

            <br>
            <p>
            Creating New Elements:<br>
            To add a new element to your page, like a list item, you can do thisan ID "demo":
            </p>
            <br>
            <pre class="prettyprint">
                <code>
                const list = document.getElementById("myList");
                const newItem = document.createElement("li");
                newItem.textContent = "New List Item";
                list.appendChild(newItem);
                </code>
            </pre>

            <br>
            <br>
            <h2>Events Examples:</h2>
            <br>
            <p>
            Event Listeners:<br>
Let's add a click event listener to a button that triggers an action:
            </p>
            <br>
            <pre class="prettyprint">
                <code>
                <button id="myButton">Click Me</button>
                </code>
            </pre>
            <p>JavaScript to add an event listener:</p>
            <br>
            <pre class="prettyprint">
                <code>
                const myButton = document.getElementById("myButton");

                myButton.addEventListener("click", function() {
                    alert("Button was clicked!");
                });
                </code>
            </pre>
            <br>

            <p>
            Form Submission: <br>
Handling form submission is a common use case. Suppose you have a simple form:
            </p>
            <br>
            <pre class="prettyprint">
                <code>
                <form id="myForm">
    <input type="text" id="name" placeholder="Your Name">
    <button type="submit">Submit</button>
</form
                </code>
            </pre>
            
            <p>JavaScript to handle the form submission:</p>
            <br>
            <pre class="prettyprint">
                <code>
                const myForm = document.getElementById("myForm");

                myForm.addEventListener("submit", function(event) {
                    event.preventDefault(); // Prevents the form from submitting.
                    const name = document.getElementById("name").value;
                    alert('Hello,' +name + '! Form submitted.');
                });
                </code>
            </pre>
            `,
            challanges: `
            <h2>Challenge One: <br>Text Toggle</h2>
            <p>
            Create a webpage with a button and a paragraph. When the button is clicked, it should toggle the text of the paragraph between two different messages. For example, clicking the button changes the text from "Show Details" to "Hide Details" and vice versa.
            </p>
            <br>
            <h2>Challenge Two: <br>To-Do List</h2>
            <p>
            
Build a simple to-do list. Users can add items, mark them as done, and remove them. You'll need to use DOM manipulation to add and remove list items and event handling to mark items as done when clicked.
            </p>
            <br>
            <h2>Challenge Three: <br> Image Slider</h2>
            <p>
            Create an image slider that displays a series of images. Add "Previous" and "Next" buttons that allow users to navigate through the images. Use event listeners to handle button clicks and update the displayed image.
            </p>
            <br>
            <h2>Challenge Four: <br> Form Validation</h2>
            <p>
            Design a registration form with various input fields (name, email, password, etc.). Implement form validation using JavaScript to ensure that required fields are filled out correctly. Display error messages if there are issues, and enable form submission only when everything is valid.
            </p>
            <br>
            <h2>Challenge Four: <br>Quiz Game</h2>
            <p>
            Develop a quiz game with multiple-choice questions. When a user selects an answer, provide immediate feedback on whether it's correct or not. Use event handlers to manage user interactions and dynamically update the UI based on their responses.
            </p>
            `
        },
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