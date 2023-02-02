/*
  Урок 1
  Дата: 31.01.2023
  Темы: 
    версии языка JavaScript (ECMAScript 5, 6 т.д.),
    переменные var, let, const
    явление Hoisting (поднятие)
    области видимости (scopes): локальная, функциональная, глобальная
    шаблонные строки (template strings)
    типы данных в JavaScript
 */

// var a = 10
// console.log(sum(a,a))

//ECMAScript - ES 2015 -> ES5
var _var;

//Hoisting (поднятие, всплытие)
console.log(_var);

_var = 5;

//ECMAScript - ES6+
let _let = 5;
const _const = 5;

function greeting() {
  var hello;
  let _let = 77;
  console.log("let in func =>", _let);
  console.log("1", hello);
  var hello = "hello";
  console.log("2", hello);
  window.someVar = 9999;
}

greeting();
// console.log("3", hello) //error

// if(true){
//   console.log("27", _var)
//   var _var = 10
//   console.log("29", _var)
// }

{
  console.log("33", _let);
  _let = 10;
  console.log("35", _let);
}
console.log("40", _let);

console.log("38", _const);

// {
//global

// function(){
// functional
// {
//     local
// }
// }

// if(){
//     local
// }
// }

let customerName = "Ivan Ivanov";
const customerAge = 50;
// customerAge++; // customerAge = customerAge + 1
console.log(customerAge);

// customerAge = 49; error
console.log("Before modify ", customerName);
customerName = [];
console.log("After modify ", customerName);

const array = [1, 2, 3];
console.log("array", array);
array.pop();
array.pop();
array.pop();
console.log("array", array);

const customer = {
  name: "ivan",
  surname: "ivanov",
};

let _customer = customer;

_customer = {};
customer.inn = "16548978949889";
// delete customer.surname;
console.log(customer);
console.log(_customer);

//1) String
const inn = "12345";
const inn2 = 9;

console.log(inn2 + inn);

const account = {
  accountNo: "678647657875456467",
  currency: "USD",
  balance: 500,
  customer: customer,
};

// const text = `evyubwienjm,vwe
// evbyiwejknlmvkwe
// evhuewiknvmklwe
// ewvbyuwenvmkwe
// ewvnbyewibnvklm;we`;
// console.log(text);

console.log(account);

const button = `    <div>
<button>Click 
me</button>
</div>`;

document.body.innerHTML = button;

console.log(`Dear, ${account.customer.surname} ${account.customer.name}.
On your account ${account.accountNo} remain ${account.balance} ${account.currency} `);

//2) Number
//3) Boolean
//4) Undefined
//5) Null
//6) Object (array, function)
//7) Symbol
//8) BigInt

const sumFunc = new Function("a,b", "return a + b");
console.log(sumFunc(100, 100));

console.log("NaN -  Not a Number is ", typeof NaN);
