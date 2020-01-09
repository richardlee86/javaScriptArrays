//Write a function printReverse() that takes an array as an argument
//and prints out the elements in the array in reverse order ( don't actually reverse the array itself)

var nums = [1, 2, 3, 4];

function printReverse(array) {
  var reversedArray = array.slice().reverse();
  console.log(reversedArray);
  for (let i = 0; i < array.length; i++) {
    console.log(reversedArray[i]);
  }
}

//Write a function isUniform that confirms or denies uniformity of an arryay's elements

var sameNums = [2, 9, 44, 3];

function isUniform(array) {
  var first = array[0];
  var answer = true;
  array.forEach(function(n) {
    if (first !== n) {
      answer = false;
    }
  });
  return answer;
}

//Write a function sumArray() that accepts an array of numbers and returns the sum of all numbers in the array

function sumArray(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum);
}

//Write a function max() that accepts an array of numbers and returns the maximum number in the array

function max(array) {
  var max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

//Bonus forEach Lesson
var nums = [1, 15, 14, 89];
function myForEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}
myForEach(nums, console.log);

myForEach(nums, function() {});
