const accounts = [
  {
    accountNo: "1161589498489489",
    currencyID: 417,
  },
  {
    accountNo: "1161589498489489",
    currencyID: 840,
  },
  {
    accountNo: "1161589498489489",
    currencyID: 978,
  },
  {
    accountNo: "1161589498489489",
    currencyID: 643,
  },
];

accounts.forEach((a) => {
  a.toString = function () {
    return "".concat(this.accountNo, "_", this.currencyID);
  };
});

var kgsAccount = accounts.find((account) => account.currencyID === 417);

kgsAccount.openDate = "2023-02-02";

var kgsAccountIndex = accounts.findIndex(
  (account) => account.currencyID === 417
);

console.log(`accounts[${kgsAccountIndex}] = ${kgsAccount}`);

//remove item from array
// accounts.splice(kgsAccountIndex, 1)
// console.log(accounts.length);

//remove item from array
// accounts[kgsAccountIndex] = undefined;
// console.log(accounts.length);

// join, includes

console.log([1, 2, 3, 4, 5].join(" <- "));

function validateInn(inn) {
  return (
    Array.from(inn).every((x) => x >= "0" && x <= "9") &&
    inn.length === 14 &&
    // (inn[0] === "0" || inn[0] === "1" || inn[0] === "2")
    [0, 1, 2].includes(Number(inn[0]))
  );
}

console.log(validateInn("20101199912345"));

function myEvery(array, callback) {
  for (const item of array) {
    if (!callback(item)) return false;
  }
  return true;
}

function mySome(array, callback) {
  for (const item of array) {
    if (callback(item)) return true;
  }
  return false;
}

//push, pop, shift, unsift

const numbers = [1, 2, 3, 4, 5];
console.log("numbers push = ", numbers.push(6, 7, 8));
console.log("Last removed item = ", numbers.pop());

// numbers.length = 0;

// while(numbers.length){
//     numbers.pop();
// }

console.log("Reverse:", accounts.reverse());
console.log("After reverse:", accounts);

const randomNumbers = [4, 25, 1, 7, 6, 5, 2];

console.log(randomNumbers.sort((a, b) => a - b));

// var arrayForFlat = [1, 2, 3, [4, 5, [6, 7]], 8, 9];
var arrayForFlat = [
  { a: 5, b: 6 },
  { a: 7, b: 8 },
];

console.log(arrayForFlat.flat(2));

const set = new Set();

const currency = {
  Symbol: "KGS",
  Code: 417,
};
const currency2 = currency;

console.log(Array.from(new Set("49494949494949494".split(""))));
