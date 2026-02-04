  /*

Write a function that returns an array containing the numbers 1 to NUM.

Put "fizz" in place of numbers divisible by 3 but not by 5,
"buzz" in place of numbers divisible by 5 but not by 3,
and "fizzbuzz" in place of numbers divisible by both 3 and 5.

fizzbuzz(16);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz',
11, 'fizz', 13, 14, 'fizzbuzz', 16]

*/

const fizzbuzz = (num) => {
  //Input: Number
  // Ouput: Array
  //Declare an empty array
  const output = []
  //For loop to increment up to num - starting at 1
  for(let i = num; i >= 1; i--){
    // console.log(num--)
  //If/Else for conditions 
    //"Fizz" - For numbers divisible by 3 but not 5
    // "Buzz" - For numbers divisble by 5 but not 3
    //"Fizzbuzz" - For numbers divisble by 3 and 5
    //Everything else is a number
    if (num % 3 === 0 && num % 5 !== 0) {
      output.push('fizz')
    } else if (num % 5 === 0 && num % 3 !== 0) {
      output.push('buzz')
    } else if (num % 5 === 0 && num % 3 === 0) {
      output.push('fizzbuzz')
    } else {
      output.push(num)
    }
    num--
  }
  //Revese the built array so it outputs from smallest to greatest
  const results = output.reverse()
  //Return reversed built array
  return results
};
// console.log(fizzbuzz(16))
/*

Extension: 
Write a function that returns an array containing the numbers 1 to NUM.

Put "fizz" in place of numbers divisible by 3 but not by 5 or 7,
"buzz" in place of numbers divisible by 5 but not by 3 or 7,
"bazz" in place of numbers divisible by 7 but not by 3 or 5,
"fizzbuzz" in place of numbers divisible by 3 and 5 but not 7,
"fizzbazz" in place of numbers divisible by 3 and 7 but not 5,
"buzzbazz" in place of numbers divisible by 5 and 7 but not 3,
and "fizzbuzzbazz" in place of numbers divisible by 3, 5, and 7.

fizzbuzzbazz(25);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 'bazz', 8, 'fizz', 'buzz',
11, 'fizz', 13, 'bazz', 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz', 'fizzbazz', 22,
23, 'fizz', 'buzz']

*/

const fizzbuzzbazz = (num) => {
  //Input: number
  //Ouput: array
  const output = []

  for(let i = num; i >= 1; i--){
    if (num % 3 === 0 && num % 5 !== 0 && num % 7 !== 0) {
      output.push('fizz')
    } else if (num % 5 === 0 && num % 3 !== 0 && num % 7 !== 0) {
      output.push('buzz')
    } else if (num % 7 === 0 && num % 5 !== 0 && num % 3 !== 0){
      output.push('bazz')
    } else if (num % 3 === 0 && num % 5 === 0 && num % 7 !== 0) {
      output.push('fizzbuzz')
    } else if (num % 3 === 0 && num % 7 === 0 && num % 5 !== 0) {
      output.push('fizzbazz')
    } else if (num % 5 === 0 && num % 7 === 0 && num % 3 !== 0) {
      output.push('buzzbazz')
    } else if (num % 5 === 0 && num % 3 === 0 && num % 7 === 0) {
      output.push('fizzbuzzbazz')
    }else {
      output.push(num)
    }
    num--
  }
  const results = output.reverse()
  return results
};

export { fizzbuzz, fizzbuzzbazz };
// console.log(fizzbuzzbazz(25))