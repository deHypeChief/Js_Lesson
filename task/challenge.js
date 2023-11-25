function challenge() {
  // write your code here...

  /*
  console.log("\n\n\nTASK ONE: calculate the max value\n\n\n");
  //This is the first task
  const numbers = [3, 99, 21, 57, 1];
  let num_Integer = 5;
  //declared variable numbers that contains an array value of unordered numbers

  function findMax(arr) {
    //firstly I need to declare a variable sortNumber to sort the numbers in an ascending order, so I would be able to return the maximum value in the array which is gonna be the last value in the array items.
    let sortNumbers = arr.sort((a, b) => a - b);
    // I use sort method/function which is one of the high order function, which makes use of another function (arrow function) to return the new ordered array.
    //after sorting, I return the maximum value in the new array using the array last index.
    let maxValue = sortNumbers[sortNumbers.length - 1];
    return maxValue;
  }
  console.log(
    "The maximum value of array [3, 99, 21, 57, 1] will be: " + findMax(numbers)
  );

  console.log(
    "\n\n\n=============================================================\n\n\n"
  );

  console.log("TASK TWO: calculate average value\n\n\n");

  function calculateAverage(arr) {
    let sumOfArrayValues = arr.reduce(function (total, value) {
      return total + value;
    });

    let averageValue = sumOfArrayValues / arr.length;

    return Math.round(averageValue);
  }

  console.log(
    "Average value of array [3, 99, 21, 57, 1] will be: " +
      calculateAverage(numbers)
  );

  console.log(
    "\n\n\n=============================================================\n\n\n"
  );

  console.log("TASK THREE: calculate factorial\n\n\n");

  function calculateFactorial(number) {
    const generatedNumbers = Array.from({ length: number }, (value, i) => {
      return i + 1;
    });

    return generatedNumbers.reduce((total, value) => total * value, 1);
  }

  console.log(
    `The factorial of ${num_Integer} is : ${calculateFactorial(num_Integer)}`
  );

  console.log(
    "\n\n\n=============================================================\n\n\n"
  );

  console.log("TASK FOUR: palindrome checker\n\n\n");

  function isPalindromeCheck(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    const reverseString = str.split("").reverse().join("");

    return str === reverseString;
  }

  console.log(isPalindromeCheck("hannah"));
  */
  /*
  console.log("\n\nSum of Multiples exercise\n\n");

  function calSum(n) {
    let numberAccumulator = 0;
    for (let i = 3; i < n; i++) {
      if (i % 3 !== 0 && i % 5 !== 0) {
        continue;
      }
      numberAccumulator += i;
    }
    console.log(numberAccumulator);
  }

  calSum(10);

  console.log("\n\n=====Factorial using recursion=====\n\n");

  function calFactorial(n) {
    if (n === 0) {
      return 1;
    }

    return n * calFactorial(n - 1);
  }

  console.log(calFactorial(10));

  console.log("\n\n=====Reverse a String=====\n\n");

  function reverseString(str) {
    let rev = str.split("").reverse();
    for (let i = 0; i > rev.length; i++) {
      return rev[i];
    }

    console.log(rev.join(""));
  }

  function reverseStr(str) {
    let string = str.split('');
    let returnedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      returnedString += string.join('')[i];
    }

    console.log(returnedString)
  }

  reverseString("lemon");

  console.log("\n\n or \n\n");

  reverseStr("Mango");

  console.log("\n\n=====FizzBuzz Challenge=====\n\n");

  function fizzBuzz(n) {
    let fizzBuzz = "";

    for (let i = 1; i <= n; i++) {
      if (i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else {
        console.log(i);
      }
    }
  }

  fizzBuzz(100);
  */

  const teachers = [
    {
      name: "Thomas",
      subject: "English",
      age: 56,
      status: "married",
      class: "jss2",
      fullTime: true,
      sex: "male",
      introduceYourself: function () {
        return `Hello my name is ${this.name}, and I am ${this.age} years old.`
      }
    },
    {
      name: "Clark",
      subject: "Mathematics",
      age: 34,
      status: "dating",
      class: "ss3",
      fullTime: true,
      sex: "male",
      introduceYourself: function () {
        return `Hello my name is ${this.name}, and I am ${this.age} years old.`
      }
    },
    {
      name: "Jessica",
      subject: ["Geography", "Government", "French", "History"],
      age: 27,
      status: "engaged",
      class: ["ss1", "ss2", "ss3"],
      fullTime: false,
      sex: "female",
      introduceYourself: function () {
        return `Hello my name is ${this.name}, and I am ${this.age} years old.`
      }
    },
    {
      name: "Smith",
      subject: "Literature-in-english",
      age: 36,
      status: "married",
      class: "ss3",
      fullTime: true,
      sex: "male",
      introduceYourself: function () {
        return `Hello my name is ${this.name}, and I am ${this.age} years old.`
      }
    },
    {
      name: "David",
      subject: "Computer-science",
      age: 22,
      status: "can't say!",
      class: "all classes",
      fullTime: false,
      sex: "male",
      introduceYourself: function () {
        return `Hello my name is ${this.name}, and I am ${this.age} years old.`
      }
    },
  ];

  for (let i = 0; i < teachers.length; i++) {
    console.log(teachers[i]);
  }

  teachers.forEach((teacher) => console.log(teacher));
}

challenge();