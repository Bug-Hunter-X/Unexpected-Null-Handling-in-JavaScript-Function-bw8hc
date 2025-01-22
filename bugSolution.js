function foo(a, b) {
  a = a === null ? 0 : a; // Handle null by assigning a default value
  b = b === null ? 0 : b; // Handle null by assigning a default value
  return a + b;
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
console.log(foo(null, null)); //Output: 0