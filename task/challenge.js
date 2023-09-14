function challenge() {
    // write your code here...

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
}
challenge();