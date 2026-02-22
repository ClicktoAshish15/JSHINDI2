console.log("Hello Ashish, JavaScript started!");

/* This is a multi-line comment
   spanning multiple lines */
// this is single line
var n = 5;
console.log(n);
var n = 10;
//let m=20 can not use same let

let m = 4;
switch (m) {
  case 1:
    VariableChecking();
    break;
  case 2:
    testOperator();
    break;
  case 3:
    ConditionalStatements();
    break;
  case 4:
    testArray();
    break;
}

function VariableChecking() {
  var n = 15;
  let m = "ashish";
  let testUndefined;
  console.log(testUndefined);
  let testNull = null;
  console.log(testNull);
  let obj = {
    name: "navya",
    age: "10",
  };
  console.log(obj);
  console.log(n);
  console.log(m);
  const testConst = 10;
  console.log(testConst == 10);
  console.log(testConst === 10);
  console.log(5 > 3 > 1); // this is because 5>3 is true and true is converted to 1 and 1>1 is false
  //  console.log(5>3>2) // this is because 5>3 is true and true is converted to 1 and 1>2 is false
}
function testOperator() {
  console.log("operator checking");
  const sum = 5 + 3; // Addition
  const diff = 10 - 2; // Subtraction
  const p = 4 * 2; // Multiplication
  const q = 8 / 2; // Division
  console.log(sum, diff, p, q);
  //Asignment Operators
  let n = 10;
  n += 5;
  n *= 2;
  console.log(n);
  //Comparison operators
  console.log(10 > 5);
  console.log(10 === "10"); //
  const a = true,
    b = false;
  //logical operators
  console.log(a && b); // Logical AND
  console.log(a || b); // Logical OR
  //bitwise
  const rs = 5 & 3;
  console.log(rs);
  //Comma evalutate each one left to right
  let n1, n2;
  const result = ((n1 = 5), (n2 = 10), n1 + n2, n1 * n2, (n1 = 15), (n2 = 25));
  console.log("result is " + result);
  console.log(n1);
  //Unary Operators
  let x = 5;
  console.log(++x); // Pre-increment
  console.log(x--); //
  //Big Int
  const big1 = 123456789012345678901234567890n;
  const big2 = 987654321098765432109876543210n;
  console.log(big1 + big2);
  const obj = { length: 10 };
  console.log("length" in obj);
  console.log([] instanceof Array);
  /*in checks if a property exists in an object.
instanceof checks if an object is an instance of a constructor*/
}
function ConditionalStatements() {
  let num1 = -10;

  if (num1 > 0) console.log("The number is positive.");
  else console.log("The number is negative");
  let num2 = 5;

  switch (num2) {
    case 0:
      console.log("Number is zero.");
      break;
    case 1:
      console.log("Nuber is one.");
      break;
    case 2:
      console.log("Number is two.");
      break;
    default:
      console.log("Number is greater than 2.");
  }

  let num3 = 10;

  let result = num3 >= 0 ? "Positive" : "Negative";

  console.log(`The number is ${result}.`);

  for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  let j = 1;

  while (j <= 5) {
    console.log(j);
    j++;
  }
  let k = 1;

  do {
    console.log(k);
    k++;
  } while (k <= 5);
}

function testArray() {
  let a = ["HTML", "CSS", "JS"];
  let b = ["Node.js", "Expess.js"];

// Concatenate both arrays
let concateArray = a.concat(b);

console.log("Concatenated Array: ", concateArray);
a.length = 7;

console.log("After Increasing Length: ", a);

// Decrease the array length to 2
a.length = 1;
console.log("After Decreasing Length: ", a)
  // Add Element to the end of Array
  a.push("Node.js");

  // Add Element to the beginning
  a.unshift("Web Development");

  console.log(a);
// Removes and returns the last element
  let lst = a.pop();
console.log("After Removing the last: " + a);
// Removes and returns the first element
let fst = a.shift();
console.log("After Removing the First: " + a);
// Removes 2 elements starting from index 1
a.splice(1, 2);
console.log("After Removing 2 elements starting from index 1: " + a);
let s= a.toString()
console.log(s)
//The some() method checks whether at least one of the elements of the array satisfies the condition checked by the argument function.

const bCheckSome = [1, 2, 3, 4, 5];
let res = bCheckSome.some((val) => val > 4);
console.log(res);
//The map() method creates an array by calling a specific function on each element present in the parent array. It is a non-mutating method.
let aCheckMap = [4, 9, 16, 25];
let sub = aCheckMap.map(Math.sqrt);

function geeks() {
    return aCheckMap.map(Math.sqrt);
}
console.log(sub);
//filter The filter() method in JavaScript creates a new array with all elements that pass the test implemented by the provided function. It does not modify the original array.
let a1 = [1, 2, 3, 4, 5]
let a2 = a1.filter((num) => num > 1)
console.log(a2)

/*The reduce() method is used to reduce the array to a single value 
and executes a provided function for each value of the array (from left to right) and the return value of 
the function is stored in an accumulator*/
let aReduce = [88, 50, 25, 10];
let subtractResult = aReduce.reduce(geeks);

function geeks(tot, num) {
    return tot - num;
} //Given 88-50-25-10 means performing this operation on each element of the array and return the final result

console.log(subtractResult);
//The values() method returns a new Array Iterator object that contains the values for each index in the array.
const aValueOf = ["Apple", "Banana", "Cherry"];
const respValueOf = a.values();

for (const value of respValueOf) {
    console.log(value);
}

}
