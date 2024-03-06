// Chapter No 1
console.log("Practice exercise 1.1");

let practice = "Syed Abrar";

console.log(practice);

let age = "25";

console.log(age + 5);
console.log(25 + 5);
console.log("25" + 5);
console.log("25 + 5");
console.log("age + 5");
console.log(age + "5");

// Chapter No 2

let str1 = "Laurence";
let str2 = "Svekis";
let val1 = undefined;
let val2 = null;
let myNum = 1000;

console.log(str1, typeof str1);
console.log(str2, typeof str2);
console.log(val1, typeof val1);
console.log(val2, typeof val2);
console.log(myNum, typeof myNum);

// Addition
let nr1 = 12;
let nr2 = 14;
let result1 = nr1 + nr2;

console.log(result1);

let str3 = "We are ";
let str4 = "Connect";
let result2 = str3 + str4;

console.log(result2);

// Practice exercise 2.2

// Subtraction
let subtr1 = 20;
let subtr2 = 4;
let subtrStr1 = "Hi";
let subtr3 = 3;
let subtrResult1 = subtr1 - subtr2;
let subtrResult2 = subtrStr1 - subtr3;
console.log(subtrResult1, subtrResult2);

// Multiplication
let multi1 = 15;
let multi2 = 10;
let multStr1 = "Hi";
let multi3 = 3;
let multiResult1 = multi1 * multi2;
let multiResult2 = multStr1 * multi3;
console.log(multiResult1, multiResult2);

// Division
let div1 = 30;
let div2 = 5;
let divResult1 = div1 / div2;
console.log(divResult1);

// Exponentiation
let expo1 = 2;
let expo2 = 3;
let expoResult = expo1 ** expo2;
console.log(expoResult);

// Modulus
let mod1 = 10;
let mod2 = 3;
let modResult1 = mod1 % mod2;
console.log(`${mod1} % ${mod2} = ${modResult1}`);
let mod3 = 8;
let mod4 = 2;
let modResult2 = mod3 % mod4;
console.log(`${mod3} % ${mod4} = ${modResult2}`);
let mod5 = 15;
let mod6 = 4;
let modResult3 = mod5 % mod6;
console.log(`${mod5} % ${mod6} = ${modResult3}`);

// Unary operators: increment and decrement
let una1 = 4;
una1++;
console.log(una1);
let una2 = 4;
una2--;
console.log(una2);

// Prefix and postfix operators
let pos = 2;
console.log(pos++);
console.log(pos);

let pre = 2;
console.log(++pre);

let prePos1 = 4;
let prePos2 = 5;
let prePos3 = 2;
console.log(prePos1++ + ++prePos2 * prePos3++);

// Practice exercise 2.3

// Assignment operators

let x = 2;
let assiResult1 = (x += 2);
console.log(assiResult1);

let assiResult2 = (x -= 2);
console.log(assiResult2);

let assiResult3 = x *= 6;
console.log(assiResult3);

let assiResult4 = x /= 3;
console.log(assiResult4);

let assiResult5 = x **= 2;
console.log(assiResult5);

let assiResult6 = x %= 3;
console.log(assiResult6);

// Practice exercise 2.4

// Comparison operators

// Equal
let y = 5;
let z = "5";
console.log(y === z);

// Not equal
let a = 5;
let b = "5";
console.log(a !== b);

// Greater than and smaller than
let c = 5;
let d = 6;
console.log(c > d);
console.log(c > c)
console.log(c >= c)

console.log(c < d);
console.log(y <= y);

// Logical operators

// And
let g = 1;
let h = 2;
let i = 3;

console.log(g < h && h < i);
console.log(g > h && h > i);

// Or
console.log(g > h || h < i);
console.log(g > h || h > i);

// Not
let f = false;
console.log(!f);

let m = 1;
let n = 2;
console.log(!(m < n));
