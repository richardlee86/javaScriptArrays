//use a for loop to iterate over an array
//use forEach to iterate over an array
// Compare and contrast for loops and forEach

// For Loop
//To loop over an array using a for loop, you need to use the array's length property

var nums = [1, 2, 3, 4, 5];

for (var i = 0; i < nums.length; i++) {
  if (nums[i] % 2 !== 0) {
    console.log(nums[i]);
  }
}

//forEach is an easy way to iterate over an array
var someNums = [1, 2, 3, 4, 5, 6, 7];

someNums.forEach(function(num) {
  console.log(num);
});

//Challenge
