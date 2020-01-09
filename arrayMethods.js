//All methods for arrays can be found on MDN

//push/pop
//-------------

//push adds to the end of an array and returns new length of array
var nums = [1, 2, 3];
nums.push(4);

//pop removes last element of array and returns last item in array
nums.pop(4);

//Shift / Unshift
//------------------------

//Unshift adds to the front of an array
nums.unshift(0);

//Shift removes the first item in an array and returns removed element
nums.shift(0);

//indexOf() finds the index of an item in an array. If element is not present -1 is
//returned
nums.indexOf(2);

//Slice() copies parts of an array
var numbers = [1, 2, 3, 4, 5];
var otherNumbers = numbers.slice(3, 5);
