const sum = new Function("a,b", "return a + b;");

console.log(sum(5, 5));
console.log(typeof sum);
console.log(sum.apply(null, [5, 5]));
console.log(sum.call(null, 5, 5));

console.log(getMin(5, 4));

//function declaration - определение функции
function getMin(a, b) {
  return a > b ? b : a;
}

//function expression - функциональное выражение
const getMax = function (a, b) {
  return a > b ? a : b;
};
console.log(getMax(25, 4));

//named function expression - именованное функциональное выражение
const fib = function qwerty(n) {
  return n === 0 || n === 1 ? 1 : n * qwerty(n - 1);
};

console.log(fib(5));
// console.log(qwerty(5)); //error

//arrow function - стрелочные функции
const mean = (a, b) => {
  return (a + b) / 2;
};

function mean2() {
  console.log("mean args:", arguments);
  console.log("Args is array", Array.isArray(arguments));
  let sum = 0;
  for (const arg of arguments) {
    sum += arg;
  }
  return sum / arguments.length;
}

const getOnlineBankVersion = () => "1.0.0.256";

const getOnlineBankContext = () => ({
  UserID: 25,
  CountryOD: 1,
  BankName: "Bakai",
  DateOD: "07.02.2023",
});

console.log(mean(5, 10, 3));
console.log(mean2(5, 10, 3, 4, 7));

function openAccountInOtherCurr() {
  var accountNo = arguments[0];
  var currencies = Array.from(arguments).slice(1);
  var accounts = [];
  for (const currency of currencies) {
    accounts.push({
      accountNo,
      currency,
    });
  }
  return accounts;
}

console.log(openAccountInOtherCurr("1123456789", "USD", "EUR", "KZT"));

const openAccountInOtherCurrArrow = (accountNo, ...currencies) => {
  var accounts = [];
  console.log("Curr is array =>", Array.isArray(currencies));
  for (const currency of currencies) {
    accounts.push({
      accountNo,
      currency,
    });
  }
  return accounts;
};

const currs = ["RUB", "KGS", "KZT"];
console.log(openAccountInOtherCurrArrow("1123456789"));
console.log(openAccountInOtherCurrArrow("1123456789", currs));
// [1,2,3] -> ...[1,2,3] -> 1,2,3
console.log(openAccountInOtherCurrArrow("1123456789", ...currs));

const arr = [5, 4, 8, 54, 5, 7];
console.log("Math.max =>", Math.max.apply(null, arr)); //ES5
console.log("Math.max =>", Math.max(...arr)); //ES6+

const HideSymbol = "%";
const getHideSymbolFromBackend = () => null;

const isRequired = (fieldName) => {
  throw new Error(`${fieldName} is required`);
  console.error(`${fieldName} is required`);
};

function maskCardPan(
  cardPan = isRequired("cardPan"),
  hideSymbol = getHideSymbolFromBackend() ?? HideSymbol //ES6+
) {
  //   hideSymbol = hideSymbol || "*"; //ES5
  const leftPart = cardPan.substring(0, 6);
  const rightPart = cardPan.substring(cardPan.length - 4);
  return leftPart + hideSymbol.repeat(cardPan.length - 10) + rightPart;
}

console.log(maskCardPan());
