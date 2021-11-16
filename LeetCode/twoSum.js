// Problem statement

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Problem statement taken from: https://leetcode.com/problems/two-sum

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [8,2,6,9,10], target = 7
// Output: []








// Algorithm

// - Create a new HashMap
// - Iterate over the array
//   - Subtract current array element from target
//   - Check if the above difference exists in HashMap
//     - If YES, then return the current index and the value of the difference in HashMap
//     - If NO, then store the current element as HashMap key and current index as its value
// - Return empty array as a result if nums array iteration is completed in the above step





// Solutions
// Brute force solution

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function solution(nums, target) {
  if (nums.length < 2) {
    return [];
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

// BigO Notation
// Time 	Space
// O(N^2) 	O(1)











// Optimal Solution

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function solution(nums, target) {
  if (nums.length < 2) {
    return [];
  }
  const numsMap = {};
  for (let i = 0; i < nums.length; i++) {
    let curMapVal = numsMap[nums[i]];
    if (curMapVal >= 0) {
      return [i, curMapVal];
    } else {
      const numberToFind = target - nums[i];
      numsMap[numberToFind] = i;
    }
  }
  return [];
}

// Explanation We have our numsMap which is a hashmap that contains key/value pairs. We create these key/value pairs based on figuring out what the numberToFind is when we look at each number in the array. The key is the numberToFind and the value is the index of the number we're currently looking at. This means that as we go through the array, we compare each number to see if it matches one of the numberToFind we've already created. If it already exists in our hashmap, then the value we get will be the index of element in the array that created the numberToFind which gives us our answer!

// BigO Notation
// Time 	Space
// O(N) 	O(N)