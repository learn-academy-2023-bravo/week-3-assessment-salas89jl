// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.


describe ("fibCount", () => {
  it("takes in a number > 2, and returns an array with a length equal to the number containing the numbers of the Fibonacci sequence", () => {
    const fibLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    
    const fibLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fibCount(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibCount(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// FAIL  ./code-challenges.test.js
// fibCount
//   ✕ takes in a number > 2, and returns an array with a length equal to the number containing the numbers of the Fibonacci sequence (1 ms)

// ● fibCount › takes in a number > 2, and returns an array with a length equal to the number containing the numbers of the Fibonacci sequence

//   ReferenceError: fibCount is not defined


// b) Create the function that makes the test pass.
//  Pseudo Code
//  Create a fuction called fibCount
//  Input: a number
//  Output: an array of fibonacci sequece
//  Declare a variable called fibArr to store an array containing part of the Fibonacci sequence.
//  In order for the function engage more outputs, I think a for loop will be needed in order to iterate or in other words
//  Pass a condition that if num is less then or equal to 0 then the return is [0]
//  Pass a condition that if num is equal to 1 then return [1]
//  
//    What if is Fib. Sequence?:  0 + 1 = 1
//                                1 + 1 = 2 
//                                1 + 2 = 3
//                                2 + 3 = 5
//                                3 + 5 = 8
//                                5 + 8 = 13
// 

const fibCount = (num) => {
  if (num <= 0) {
    return []
  }
  if (num === 1) {
    return [1]
  }
  var fibArr =[1,1]
  for (var i = 2; i < num; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2]
  }
  return fibArr.slice(0, num)

}
console.log(fibCount(6)) //--> [1, 1, 2, 3, 5, 8]
console.log(fibCount(10)) //--> [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

describe ("objectReturn", () => {
  it("Takes in a object and returns an array with values sorted from least to greatest", () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
    // Expected output: [15, 15, 20, 30, 30, 60, 90]

    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
    // Expected output: [10, 15, 20, 45, 60, 65, 100]

    expect(objectReturn(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(objectReturn(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
    
  })
})

// FAIL  ./code-challenges.test.js
// objectReturn
//   ✕ Takes in a object and returns an array with values sorted from least to greatest (1 ms)

// b) Create the function that makes the test pass.

// Pseudo Code:
// Create a function name objectReturn
// Input: Object
// Output: Object values in an [from least ---> to greatest]
// object.value() will be used to return an array with elements
// Declare a variable called arr1 and assign the object.value array
// Use array.sort() to take the elements from arr1 and sort them in accending order


const objectReturn = (object) => {
  let arr1 = Object.values(object)
 return arr1.sort(function(a,b){return a - b})
}

console.log (objectReturn(studyMinutesWeek1)) //--> [ 15, 15, 20, 30, 30, 60, 90 ]
console.log (objectReturn(studyMinutesWeek2)) //--> [ 10, 15,  20, 45, 60, 65, 100 ]
  
// PASS  ./code-challenges.test.js
// objectReturn
//   ✓ Takes in a object and returns an array with values sorted from least to greatest

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe ("accuSum", () => {
  it("Input: an array, and returns an array with input array's accumulating sum", () => {
    const accountTransactions1 = [100, -17, -23, -9]
    // Expected output: [100, 83, 60, 51]
    const accountTransactions2 = [250, -89, 100, -96]
    // Expected output: [250, 161, 261, 165]
    const accountTransactions3 = []
// Expected output: []
    expect(accuSum(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(accuSum(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(accuSum(accountTransactions3)).toEqual([])
  })
})

// FAIL  ./code-challenges.test.js
// accuSum
// ✕ Input: an array, and returns an array with input array's accumulating sum (1 ms)
// ReferenceError: accuSum is not defined

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

// Pseudo Code:
// Create a function called accuSum
// Input: an array of numbers
// Output: an array of numbers that represent the input array's accumilating sum. 
// Example: Input: [1, 2, 3] => 1 + 2 = 3 equates to [1, 3]; 3 + 3 = 6 equates to [1, 3, 6]
// Iteration will be needed to loop through each element and sum up the current in with the next. i + i-1

    
  const accuSum = (arr) => {
    for (let i = 1; i < arr.length; i++) {
      arr[i] = arr[i] + arr[i-1]
    } return arr
  }

  // PASS  ./code-challenges.test.js
  // accuSum
  //   ✓ Input: an array, and returns an array with input array's accumulating sum

  console.log(accuSum(accountTransactions1))//--> [100, 83, 60, 51]
  console.log(accuSum(accountTransactions2))//--> [250, 161, 261, 165]
  console.log(accuSum(accountTransactions3))//--> []
