// Concat creates a copy of an array and appends the value
const arr = [1];
const arr2 = arr.concat(2);
console.log(arr2);

// Map alters the values in an array somehow, returns a NEW array
const m1 = arr.map((value) => value * 2);
console.log(m1);

// Can be used to create very different array, commonly used in React
const m2 = arr.map((value) => "<li>" + value + "</li>");
console.log(m2);
const t = [1, 2, 3, 4, 5];

// Destructuring Assignment
const [first, second, ...rest] = arr2;
console.log(first, second);
console.log(rest);

// *******
// OBJECTS
// *******

// Object Literals, aka listing properties within braces
const object1 = {
  name: "Daniel",
  age: 35,
};
const object2 = {
  name: "Full Stack web application development",
  level: "intermediate studies",
};

// Reference using the "dot" notation
console.log(object1.name);
console.log(object2.name);

// Add properties on the fly
object2.greeting = "Hello";
console.log(object2.greeting);

const t = [1, -1, 3];

t.push(5);

console.log(t.length);
console.log(t[1]);

t.forEach((value) => {
  console.log(value);
});

// For Each
const c = [];
t.forEach((value) => c.push(value));

console.log(c);

// *********
// Functions
// *********
const square = (p) => {
  console.log(p);
  return p * p;
};

console.log(square(5));

const square2 = (p) => p * p;

const tSquared = t.map((p) => p * p);

function product(a, b) {
  return a * b;
}
const result = product(2, 6);

// Adding an empty string to something is one way of turning it into a string
console.log(1 + 2 + 3 + "");
