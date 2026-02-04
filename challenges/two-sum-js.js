/*
  Given an array of numbers and a target number,
  return true if two of the numbers in the array add up to the target.
  Otherwise, return false.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  The straightforward way to solve this problem would take O(n²)time. Is it possible to do this in O(n) time? 

  Example:

  const nums = [2, 5, 11, 15]
  twoSum(num, 7) -> true
  Rationale:  nums[0] + nums[1] = 2 + 5 = 7,

  twoSum(nums, 9) -> false
  Rationale: No elements inside the array sum up to the target number
*/
// I dont think you could because we talked about in class how arrays are formmatted in a way that 
// requires you to manually search each element in an array... I think
export const twoSum = (arr, target) => {
  //Input: array of numbers + target number
  //Output: Boolean 

  // Two loops 
  //Outer loop equals the first element to add to the rest
  for(let i = 0; i < arr.length; i++){
    //Inner loop will start at the second elment and increment through them adding to the first element then the next and so on
    for(let j = 1; j < arr.length; j++) {
      //If it finds the target nember itll output true
      // console.log(arr[j]) 
      if (arr[i] + arr[j] === target) return true
    }
  }
  //Defualt to return false if nothing is found
  return false;
};
const nums = [2, 5, 11, 15]
console.log(twoSum(nums, 9))
/*
Extension:
Given an array of numbers and a target number, 
return true if three of the numbers in the array add up to the target.
Otherwise, return false.

The straightforward way to solve this problem would take O(n³) time. Is it possible to do this in O(n²) time?

*/

export const threeSum = (arr, target) => {
  return false;
};
