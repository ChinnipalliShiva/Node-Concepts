let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = [
  99, 43, 47658, 3, 76, 234, 5675, 34, 5675, 34543647, 987654321, 234567, 34567,
];

// map()
// Purpose: Transforms each element in an array.
// Returns: A new array with transformed elements.
// Original array: Not modified.
// Use case: When you want to convert data (e.g., double every number).
// Callback return value: Used in the result array.

let mapping = a.map((item, index) => {
  return item + item;
});
console.log("map : ", mapping); // [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]

// Filter
// Purpose: Filters elements based on a condition.
// Returns: A new array containing elements that pass the test.
// Original array: Not modified.
// Use case: When you want to remove some items based on a condition.
// Callback return value: Should return true to keep the element.
let filter = a.filter((item, index) => {
  return item > 5;
});
console.log("filter : ", filter); // [ 6, 7, 8, 9, 10 ]

// Reduce
// Purpose: Reduces an array to a single value (can be a number, object, string, array, etc.).
// Returns: The accumulated result from the callback function.
// Original array: Not modified.
// Use case: When you want to compute a single result from multiple values (e.g., sum, average, grouping, flattening).
// Callback signature: (accumulator, currentValue, index, array) => {}
let reduce = a.reduce((accumulator, currentValue, index, array) => {
  return accumulator + currentValue;
}, 0);
console.log("reduce : ", reduce); // 55

// forEach
// Purpose: Executes a function for each array element.
// Returns: Undefined.
// Original array: Can be modified, but usually not recommended.
// Use case: When you want to perform side effects (e.g., logging, updating external variables).
// Callback return value: Ignored.
let forEach = a.forEach((item, index) => {
  console.log("forEach : ", item);
  return item + 1; // This return value is ignored.
});

//every()
// Purpose: Tests whether all elements pass a condition.
// Returns: A boolean (true if all pass, otherwise false).
// Original array: Not modified.
// Use case: When checking if all elements meet a requirement.
// Callback return value: Should return true or false.
const every = a.every((item, index) => {
  return item > 0; // Check if all elements are positive
});
console.log("every : ", every); // true

// some()
// Purpose: Tests whether at least one element passes a condition.
// Returns: A boolean (true if at least one passes, otherwise false).
// Original array: Not modified.
// Use case: When checking if any element meets a requirement.
// Callback return value: Should return true or false.
const some = a.some((item, index) => {
  return item > 5; // Check if any element is greater than 5
});
console.log("some : ", some); // true

// find()
// Purpose: Returns the first element that satisfies a condition.
// Returns: The first matching element or undefined if none found.
// Original array: Not modified.
// Use case: When you want to find a specific item in an array.
// Callback return value: Should return true or false.
const find = a.find((item, index) => {
  return item > 5; // Find the first element greater than 5
});
console.log("find : ", find); // 6

// findIndex()
// Purpose: Returns the index of the first element that satisfies a condition.
// Returns: The index of the first matching element or -1 if none found.
// Original array: Not modified.
// Use case: When you want to find the position of a specific item in an array.
// Callback return value: Should return true or false.
const findIndex = a.findIndex((item, index) => {
  return item > 5; // Find the index of the first element greater than 5
});
console.log("findIndex : ", findIndex); // 5

// indexOf()
// Purpose: Returns the first index of a specified value in an array.
// Returns: The index of the first occurrence or -1 if not found.
// Original array: Not modified.
// Use case: When you want to find the position of a specific value in an array.
// Callback return value: Not applicable.
const indexOf = a.indexOf(5); // Find the index of the first occurrence of 5
console.log("indexOf : ", indexOf); // 4

// lastIndexOf()
// Purpose: Returns the last index of a specified value in an array.
// Returns: The index of the last occurrence or -1 if not found.
// Original array: Not modified.
// Use case: When you want to find the last position of a specific value in an array.
// Callback return value: Not applicable.
const lastIndexOf = a.lastIndexOf(5); // Find the last index of 5
console.log("lastIndexOf : ", lastIndexOf); // 4

// includes()
// Purpose: Checks if an array contains a specified value.
// Returns: A boolean (true if found, otherwise false).
// Original array: Not modified.
// Use case: When you want to check for the presence of a value in an array.
// Callback return value: Not applicable.
const includes = a.includes(5); // Check if 5 is in the array
console.log("includes : ", includes); // true

// keys()
// Purpose: Returns a new array iterator object that contains the keys for each index in the array.
// Returns: An Array Iterator object.
// Original array: Not modified.
// Use case: When you want to iterate over the keys of an array.
// Callback return value: Not applicable.
const keys = a.keys(); // Get an iterator for the keys of the array
console.log("keys : ", keys); // Array Iterator { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 }

// values()
// Purpose: Returns a new array iterator object that contains the values for each index in the array.
// Returns: An Array Iterator object.

// Original array: Not modified.
// Use case: When you want to iterate over the values of an array.
// Callback return value: Not applicable.
const values = a.values(); // Get an iterator for the values of the array
console.log("values : ", values); // Array Iterator { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }

// entries()
// Purpose: Returns a new array iterator object that contains the key/value pairs for each index in the array.
// Returns: An Array Iterator object.
// Original array: Not modified.
// Use case: When you want to iterate over both keys and values of an array.
// Callback return value: Not applicable.
const entries = a.entries(); // Get an iterator for the entries of the array
console.log("entries : ", entries); // Array Iterator { [ 0, 1 ], [ 1, 2 ], [ 2, 3 ], [ 3, 4 ], [ 4, 5 ], [ 5, 6 ], [ 6, 7 ], [ 7, 8 ], [ 8, 9 ], [ 9, 10 ] }

// flat()
// Purpose: Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// Returns: A new flattened array.
// Original array: Not modified.
// Use case: When you want to flatten nested arrays.
// Callback return value: Not applicable.
const flat = [1, [2, [4, 5, 6, 7, [8]]]].flat(); // Flatten the array (default depth is 1)
console.log("flat : ", flat); // [ 1, 2, [ 4, 5, 6, 7, [ 8 ] ] ]
const flat2 = [1, [2, [4, 5, 6, 7, [8]]]].flat(2); // Flatten the array (depth is 2)
console.log("flat2 : ", flat2); // [ 1, 2, 4, 5, 6, 7, [ 8 ] ]
const flat3 = [1, [2, [4, 5, 6, 7, [8]]]].flat(3); // Flatten the array (depth is 3)
console.log("flat3 : ", flat3); // [ 1, 2, 4, 5, 6, 7, 8 ]
const flat4 = [1, [2, [4, 5, 6, 7, [8]]]].flat(4); // Flatten the array (depth is 4)
console.log("flat4 : ", flat4); // [ 1, 2, 4, 5, 6, 7, 8 ]

// flatMap()
// Purpose: Maps each element using a mapping function, then flattens the result into a new array.
// Returns: A new flattened array.
// Original array: Not modified.
// Use case: When you want to apply a function and flatten the result in one step.
// Callback return value: Used in the result array.
const flatMap = [1, [2, [4, 5, 6, 7, [8]]]].flatMap((item, index) => {
  return [item * 2]; // Double each item and flatten the result
});
console.log("flatMap : ", flatMap); // [ 2, 4, 8, 10, 12, 14, 16 ]

console.log("a after splice : ", a); // [ 1, 2, 99, 100, 6, 7, 8, 9, 10 ]

// slice()
// Purpose: Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
// Returns: A new array containing the selected elements.
// Original array: Not modified.
// Use case: When you want to extract a portion of an array without modifying the original.
// Callback return value: Not applicable.
const slice = a.slice(2, 5); // Extract elements from index 2 to 5 (not including 5)
console.log("slice : ", slice); // [ 99, 100, 6 ]
console.log("a after slice : ", a); // [ 1, 2, 99, 100, 6, 7, 8, 9, 10 ]

// join()
// Purpose: Joins all elements of an array into a string.
// Returns: A string containing all array elements joined by a specified separator.
// Original array: Not modified.
// Use case: When you want to create a string representation of an array.
// Callback return value: Not applicable.
const join = a.join(", "); // Join elements with a comma and space
console.log("join : ", join); // "100, 99, 10, 9, 8, 7, 6, 2, 1"

console.log("a after fill : ", a); // [ 100, 99, 0, 0, 0, 7, 6, 2, 1 ]

console.log("a after shift : ", a); // [ 99, 0, 0, 0, 7, 6, 2, 1 ]

//concat()
// Purpose: Merges two or more arrays into a new array.
// Returns: A new array containing the merged elements.
// Original array: Not modified.
// Use case: When you want to combine multiple arrays into one.
// Callback return value: Not applicable.
const concat = a.concat(b); // Merge arrays a and b
console.log("concat : ", concat); // [ 1, 2, 99, 0, 0, 0, 7, 6, 2, 1, 99, 43, 47658, 3, 76, 234, 5675, 34, 5675, 34543647, 987654321, 234567, 34567 ]

//modified --- ***

// splice()***
// Purpose: Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// Returns: The removed elements, if any.
// Original array: Modified.
// Use case: When you want to add, remove, or replace elements in an array.
// Callback return value: Not applicable.
const splice = a.splice(2, 3, 99, 100); // Remove 3 elements starting from index 2 and add 99 and 100
console.log("splice : ", splice); // [ 3, 4, 5 ]

// sort()
// Purpose: Sorts the elements of an array in place and returns the sorted array.
// Returns: The sorted array.
// Original array: Modified.
// Use case: When you want to sort the elements of an array (e.g., numbers, strings).
// Callback return value: Should return a negative, zero, or positive value to indicate the order.
const sort = a.sort((a, b) => {
  return a - b; // Sort in ascending order
});
console.log("sort : ", sort); // [ 1, 2, 6, 7, 8, 9, 10, 99, 100 ]
console.log("a after sort : ", a); // [ 1, 2, 6, 7, 8, 9, 10, 99, 100 ]

// reverse()
// Purpose: Reverses the elements of an array in place and returns the reversed array.
// Returns: The reversed array.
// Original array: Modified.
// Use case: When you want to reverse the order of elements in an array.
// Callback return value: Not applicable.
const reverse = a.reverse(); // Reverse the array
console.log("reverse : ", reverse); // [ 100, 99, 10, 9, 8, 7, 6, 2, 1 ]
console.log("a after reverse : ", a); // [ 100, 99, 10, 9, 8, 7, 6, 2, 1 ]

// fill()***
// Purpose: Fills all elements of an array with a static value from a start index to an end index.
// Returns: The modified array.
// Original array: Modified.
// Use case: When you want to replace all or part of an array with a specific value.
// Callback return value: Not applicable.
const fill = a.fill(0, 2, 5); // Fill elements from index 2 to 5 with 0
console.log("fill : ", fill); // [ 100, 99, 0, 0, 0, 7, 6, 2, 1 ]
console.log("a after fill : ", a); // [ 100, 99, 0, 0, 0, 7, 6, 2, 1 ]

//shift()
// Purpose: Removes the first element from an array and returns that element.
// Returns: The removed element or undefined if the array is empty.
// Original array: Modified.
// Use case: When you want to remove the first item from an array.
// Callback return value: Not applicable.
const shift = a.shift(1); // Remove the first element
console.log("shift : ", shift); // 100
console.log("a after shift : ", a); // [ 99, 0, 0, 0, 7, 6, 2, 1 ]

// unshift() ***
// Purpose: Adds one or more elements to the beginning of an array and returns the new length of the array.
// Returns: The new length of the array.
// Original array: Modified.
// Use case: When you want to add items to the start of an array.
// Callback return value: Not applicable.
const unshift = a.unshift(1, 2); // Add 1 and 2 to the beginning
console.log("unshift : ", unshift); // 10
console.log("a after unshift : ", a); // [ 1, 2, 99, 0, 0, 0, 7, 6, 2, 1 ]
