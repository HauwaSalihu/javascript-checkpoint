//String Manipulation Functions

// Reverse a String: Write a function that reverses a given string.
function revString(str) {
  const strRev = str.split("").reverse().join("");
  console.log(strRev);
}
console.log(revString("johman"));

//Count Characters: Create a function that counts the number of characters in a string.

function countString(word) {
  return word.length;
}

console.log(countString("len hadeu"));

//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function titleCase(sentence) {
  return sentence
    .split(" ") // Split the sentence into an array of words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(" "); // Join the words back into a sentence
}
console.log(titleCase("how to write ?"));

//Array Functions:

//Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.

let answer = [];
function minMax(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  answer = [min, max];
  return answer;
}

console.log(minMax([2, 4, 6, 8]));

//Sum of Array: Create a function that calculates the sum of all elements in an array.

function addUp(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}

console.log(addUp([7, 9, 8]));

//Filter Array: Implement a function that filters out elements from an array based on a given condition.

// using foreach loop for  to checkk number of true values in an array
function countTrue(arr) {
  let count = 0;
  arr.forEach((element) => {
    if (element === true) {
      count += 1;
    }
  });
  return count;
}

console.log(countTrue([true, false, true, false, false]));

// Mathematical Functions:

// Factorial: Write a function to calculate the factorial of a given number.

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

console.log(factorial(7));

// Prime Number Check: Create a function to check if a number is prime or not.

function checkPrime(num) {
  let res = true;
  if (num <= 1) {
    res = false;
  }

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      res = false;
      break;
    }
  }
  if (res) {
    console.log(num, " is a prime number.");
  } else {
    console.log(num, " is not a prime number.");
  }
}
checkPrime(7);
checkPrime(8);

// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
function fibonacciUpTo(limit) {
  // Start the sequence with 0 and 1
  const sequence = [0, 1];

  // Calculate the next Fibonacci number
  let nextNumber =
    sequence[sequence.length - 1] + sequence[sequence.length - 2];

  // Generate Fibonacci numbers as long as they are less than or equal to the limit
  while (nextNumber <= limit) {
    sequence.push(nextNumber);
    nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
  }

  return sequence;
}

console.log(fibonacciUpTo(36));
