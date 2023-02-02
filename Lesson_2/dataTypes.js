//Operators
// унарные
// бинарные
// тернарный

//1) String
//Operators
// унарные
// бинарные +

const customerName = "Artem";
const customerSurname = "Smirnov";
const customerFullName = `${customerSurname} ${customerName}`;

const filePath = "C:\\CommonStorage\\Content\\OnlineBank";
console.log(filePath);

const stringFromNumber = String(45);
console.log("stringFromNumber", stringFromNumber);
console.log(typeof "", "completed");

//2) Number
//Operators
// унарные - +
// бинарные + - * / % **

let age = 30;
let pi = 3.141548978416;

let zeroDivideResult = -age / 0;
console.log("is finite", isFinite(zeroDivideResult));
let nanValue = zeroDivideResult - zeroDivideResult; // Infinity - Infinity
console.log(zeroDivideResult);
//NaN - Not a Number
console.log("is NaN using func", isNaN(nanValue));
console.log("is NaN using ==", nanValue == NaN);

console.log("number from string", +"qwerty");
console.log("number from string", Number("789"));
console.log("number from boolean", Number(true));
console.log("number from undefined", Number(undefined));
console.log("number from null", Number(null));
console.log("number from empty array", Number([]));
console.log("number from array", Number([1, 2, 3]));
console.log("number from object", Number({}));
console.log("negative zero", -0);

//3) Boolean
//Operators
// унарные ! !!
// бинарные && & || |
// Сравнения == === >= <= != !== > <

const num1 = 5;
const num2 = "5";
console.log("num1 == num2", num1 == num2);
console.log("num1 === num2", num1 === num2);
console.log("num1 != num2", num1 != num2);
console.log("num1 !== num2", num1 !== num2);

let inn = "5010119901234";

function check1(inn) {
  const result = inn.length === 14;
  if (!result) console.log("error inn length");
  return result;
}

function check2(inn) {
  const result = ["0", "1", "2"].includes(inn[0]);
  if (!result) console.log("error inn first char error");
  return result;
}

if (check1(inn) & check2(inn)) {
  //...
}
console.log("-".repeat(20));

if (!check1(inn) | check2(inn)) {
  //...
}

//Truthy
//Falsy (ложноподобные): false, 0, -0, NaN, "", undefined, null, document.all
let customerId;
console.log(customerId || -1); //Falsy
console.log(customerId ?? -1); //null undefined

let string;
console.log(string?.length); //как C#
console.log(string && string.length); //как JS

//тернарный оператор
const isResident = "0";
console.log( isResident ? "Резидент" : "Не резидент");
customerId = 500;
console.log( customerId ? "Клиент в БД" : "Новый клиент");

//4) Undefined
//5) Null

//6) Object (array, function)
//7) Symbol
//8) BigInt
