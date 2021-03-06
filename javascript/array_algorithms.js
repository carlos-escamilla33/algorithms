// <-------------TwoSum LEETCODE#1--------------->

const twoSum = (arr, target) => {
  // create a hashtable to store the nums
  let nums = {};
  for (let i = 0; i < arr.length; i++) {  // for loop through the nums
    const currNum = arr[i]; //initialize the current number we are at
    const possiblePair = target - currNum; // intialize variable to hold difference of the current number and the target
    if (possiblePair in nums) {  // if the result of target - currNum is not in the hashmap then we keep on iterating
      return [i, nums[possiblePair]]; // return the number we are at and the result of target - the currNum
    } else {
      nums[currNum] = i; // insert the current number we are at with the index so we can later pull it from the hashtable
    }
  }
}

// <-------------FlattenArray META-PREP--------------->
const flatten = (arr) => {
  let flatArray = []; // initalize empty array to push non array elements into
  for (let i = 0; i < arr.length; i++) { // for loop through the array
    const item = arr[i]; // initialize as item each element in the array
    if (Array.isArray(item)) { // check to see if the item is an array
      flatArray = flatArray.concat(flatten(item)); // if it is an array then we use recursion to break it down
      // we concat our current flat array to the returned value of the flattened array item
    } else {
      flatArray.push(item); // if the item is not an array then we simply push it to the flattened array
    }
  }
  return flatArray;
}

// <-------------Best Time to Buy and Sell Stock LEETCODE #121--------------->
const maxProfit = (pricesArr) => {
  let maxProfit = 0;   // initalize a max profit variable
  let minPrice = pricesArr[0]; // initalize a minPrice variable to keep track of a lower price that may come up in the prices array

  for (const price of pricesArr) {
    const currProfit = price - minPrice; // intializing a current profit variable to keep track of the best profit margin
    if (currProfit > maxProfit) { // if the current profit is greater than our current max profit
      maxProfit = currProfit; //we assign current profit to max profit
    } else if (price < minPrice) { // if current profit is not greater than our maxprofit 
      minPrice = price; // we can assign the price we are at to minPrice
    }
  }
  return maxProfit;
}

// <-------------Contains Duplicate LEETCODE #217--------------->
const constainsDuplicate = (numsArr) => {
  const numsSet = new Set(); // create a nums set
  for (const num of numsArr) { // for loop through the numbers
    if (numsSet.has(num)) { // check to see if the nums set has already the number you are currently on inside of the loop
      return true;   // return true if it does
    }
    numsSet.add(num); // if not then we just add it to the hashset
  }
  return false; // outside of the loop we can return false because we did not find a duplicate
}

// <-------------Maximum Subarray LEETCODE #238--------------->
const productExceptSelf = (numsArr) => {
  if (numsArr === null || numsArr.length === 0) return []; // check if the input array is null or is empty and return an empty array if it is
  let productArr = new Array(numsArr.length); // initalize the size of the array we are returning

  let runningProduct = 1;

  for (let i = 0; i < numsArr.length; i++) {
    productArr[i] = runningProduct;
    runningProduct = runningProduct * numsArr[i];
  }

  runningProduct = 1;

  for (let j = numsArr.length - 1; j >= 0; j--) {
    productArr[j] = productArr[j] * runningProduct;
    runningProduct = runningProduct * numsArr[j];
  }
}

productExceptSelf([1, 2, 3, 4]);


// <-------------Maximum Subarray LEETCODE #53--------------->
// find the largest sum of touching numbers

const maxSubArray = (nums) => {
  let max = nums[0];
  let currSum = 0;
  for (const num of nums) {
    if (currSum < 0) {
      currSum = 0;
    }
    currSum = currSum + num;
    max = Math.max(currSum, max);
  }
  return max;
}

// <-------------Maximum Product Subarray LEETCODE #152--------------->
// find a contiguous non-empty subarray within the array that has the largest product, and return the product.
const maxProduct = (nums) => {
  let resultMax = nums[0]; // Initialize the resultMax to the biggest number we've seen so far, which is the first
  let maxProductNum = 1; // Inititialize the maxProductNum to 1 instead of zero so we dont keep getting 0
  let minProductNum = 1; // same as maxProductNum
  for (const num of nums) { // for loop through nums array
    const max1 = maxProductNum * num; // intialize max1 to give you back the product of maxProductNum * num[i]
    const min1 = minProductNum * num; // intialize min1 to give you back the product of minProductNum * num[i]
    maxProductNum = Math.max(num, max1, min1); // gives you back the max number out of these three variables
    minProductNum = Math.min(num, max1, min1); // same as last variable, we need to take into consideration negative numbers
    resultMax = Math.max(resultMax, maxProductNum, minProductNum);
  }
  return resultMax;
}


// <-------------Maximum Product Subarray LEETCODE #153--------------->

const findMin = (arr) => {
  let result = arr[0];
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] < result) {
      result = arr[mid];
    } else if (arr[mid] >= arr[end]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
}

// <-------------TwoSum 2 LEETCODE #167--------------->
const twoSum2 = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    const currSum = nums[start] + nums[end];
    if (currSum === target) {
      return [start + 1, end + 1];
    } else if (currSum < target) {
      start++;
    } else if (currSum > target) {
      end--;
    }
  }
}


// <-------------Maximum Product Subarray LEETCODE #153--------------->
// FIX THIS SOLUTION
const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let start = 1;
    let end = nums.length - 1;
    while (start < end) {
      const currSum = nums[i] + nums[start] + nums[end];
      if (currSum === 0) {
        result.push([nums[i], nums[start], nums[end]]);
      } else if (currSum < 0) {
        start++;
      } else {
        end--;
      }
    }
  }
}