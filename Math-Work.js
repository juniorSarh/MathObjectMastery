

const num1 = 4.789;
const num2 = 12.345;
const num3 = -8.5;

console.log("1.1 Rounded (nearest):", Math.round(num1));         
console.log("1.2 Rounded down:", Math.floor(num2));              
console.log("1.3 Rounded up:", Math.ceil(num3));                 


const NumberSet = [14, 2, -5, 101, 35, 8];


console.log("2.1 Highest number:", Math.max(...NumberSet));     
console.log("2.2 Lowest number:", Math.min(...NumberSet));  

const base = 5;
const exponent = 3;
const numberForSqrt = 64;

console.log("3.1 Power:", Math.pow(base, exponent));             
console.log("3.2 Square root:", Math.sqrt(numberForSqrt));       


console.log("4.1 Random decimal:", Math.random());
console.log("4.2 Random integer:", Math.floor(Math.random() * 10) + 1);

const radius = 7;
const area = Math.PI * Math.pow(radius, 2);

console.log("5.1 Circle area:", area);                           
console.log("5.2 Area rounded to 2 decimals:", area.toFixed(2)); 