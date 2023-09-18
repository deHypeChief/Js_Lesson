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