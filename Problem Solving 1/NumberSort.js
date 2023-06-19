console.log("--------> Number sort in ascending order <-------")
const numbers = [20, 1, 39, 34, 56, 76, 23, 45, 67, 12, 3];
numbers.sort((a, b) => a - b);

// numbers.sort(function (a, b) {
//     return a - b;
// });

// numbers.sort(myNumberSort);
// function myNumberSort(a, b) {
//     return a - b;
// }

console.log(numbers);