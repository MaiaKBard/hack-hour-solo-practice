  // //create an output array 
  // const output = []

  // //create count variable starting at the input number 
  // let count = 0

  // //iterate the count variable - decrementing until equivalent to 0
  // while(count <= num){
  //   //if number we are accessing is divisible by 3 NOT 5 push "fizz" into output array
  //   if(count % 3 === 0 && count % 5 !== 0) output.push("fizz")
  //   //if number is divisible by 5 NOT 3 push "buzz" into output array
  //   else if(count % 5 === 0 && count % 3 !== 0) output.push("buzz")
  //   //if number is divisible by BOTH 3 and 5 push 'fizzbuzz' into the output array
  //   else if(count % 5 === 0  && count % 3 === 0) output.push("fizzbuzz")
  //   //otherwise push the number we are accessing
  //   else(output.push(count))
  //   //decremnt the count varible
  //   count++
  // }
    

  // //return output array 
  // return output
/*

Write a function that returns an array containing the numbers 1 to NUM.

Put "fizz" in place of numbers divisible by 3 but not by 5,
"buzz" in place of numbers divisible by 5 but not by 3,
and "fizzbuzz" in place of numbers divisible by both 3 and 5.

fizzbuzz(16);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz',
11, 'fizz', 13, 14, 'fizzbuzz', 16]

*/

//create a function fizzbuzz //input: number //output: array
const fizzbuzz = (num) => {

  //create an output array
  const output = [];
  // create a for loop to iterate through num
  for (let i = 1; i <= num; i++) {
  // create a dynamic string, use compound assignment to add to it based on conditions being met (or an array)
  const currentWord = []; //let myString = '';
  // check for 3
  if (i % 3 === 0) currentWord.push('fizz'); //myString += 'fizz';
  // check for 5
  if (i % 5 === 0) currentWord.push('buzz'); //myString += 'buzz';
  //push the resulting accumulated string into the output array
  output.push(currentWord.join('') || i); //output.push(myString || i)
  } //close loop

  return output;
  //return an output array
};



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
    //create an output array
  const output = [];
  // create a for loop to iterate through num
  for (let i = 1; i <= num; i++) {
  // create a dynamic string, use compound assignment to add to it based on conditions being met (or an array)
  const currentWord = []; //let myString = '';
  // check for 3
  if (i % 3 === 0) currentWord.push('fizz'); //myString += 'fizz';
  // check for 5
  if (i % 5 === 0) currentWord.push('buzz'); //myString += 'buzz';
  // check for 7
  if (i % 7 === 0) currentWord.push('bazz'); //myString += 'bazz';  //push the resulting accumulated string into the output array
  output.push(currentWord.join('') || i); //output.push(myString || i)
  } //close loop

  return output;
  //return an output array
};

export { fizzbuzz, fizzbuzzbazz };
