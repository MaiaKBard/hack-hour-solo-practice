/*

Write a function that returns an array containing the numbers 1 to NUM.

Put "fizz" in place of numbers divisible by 3 but not by 5,
"buzz" in place of numbers divisible by 5 but not by 3,
and "fizzbuzz" in place of numbers divisible by both 3 and 5.

fizzbuzz(16);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz',
11, 'fizz', 13, 14, 'fizzbuzz', 16]

*/

// Time complexity: O(n) where n is the input number
// Space complexity: O(n) for the results array
/* This solution iterates from 1 to num, checking each number for divisibility.
   The key trick is building a string for each number:
   - If divisible by 3: add 'fizz'
   - If divisible by 5: add 'buzz'
   - If the string is empty (not divisible by 3 or 5): use the number itself
   
   The modulo operator (%) returns the remainder of division.
   For example: 15 % 3 = 0 (divisible), 15 % 5 = 0 (divisible), so we get 'fizzbuzz' */

const fizzbuzz = (num) => {
  // array to store our results
  const results = [];

  for (let i = 1; i <= num; i++) {
    let str = '';
    // check if divisible by 3
    if (i % 3 === 0) str += 'fizz';
    // check if divisible by 5
    if (i % 5 === 0) str += 'buzz';

    // empty strings are falsey in JavaScript
    // so if str is empty (not divisible by 3 or 5), the number i is used instead
    results.push(str || i);
  }

  return results;
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

// Time complexity: O(n)
// Space complexity: O(n)
/* Extension solution follows the same pattern, just adds divisibility check for 7.
   The beauty of this approach is that it automatically handles all combinations:
   - Divisible by 3 and 5: 'fizzbuzz'
   - Divisible by 3 and 7: 'fizzbazz'
   - Divisible by 5 and 7: 'buzzbazz'
   - Divisible by 3, 5, and 7: 'fizzbuzzbazz' */

const fizzbuzzbazz = (num) => {
  const results = [];

  for (let i = 1; i <= num; i++) {
    let str = '';
    if (i % 3 === 0) str += 'fizz';
    if (i % 5 === 0) str += 'buzz';
    if (i % 7 === 0) str += 'bazz';

    // empty strings are falsey, so if nothing has been concatenated to str, i will be pushed instead
    results.push(str || i);
  }

  return results;
};

export { fizzbuzz, fizzbuzzbazz };
