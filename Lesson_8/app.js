//Closures - замыкания

function createAccount(_balanceGroup) {
  const balanceGroup = _balanceGroup;
  let counter = 1;
  return function (currency) {
    const accountNo = balanceGroup + counter.toString().padStart(11, "0");
    counter++;
    console.log(this);
    return {
      AccountNo: accountNo,
      Currency: currency,
    };
  };
}

const createAccount10101 = createAccount("10101");
const createAccount10102 = createAccount("10102");
const createAccount10103 = createAccount("10103");

// console.log(createAccount10101("KGS"));
// console.log(createAccount10101("KGS"));
// console.log(createAccount10101("KGS"));

// console.log(createAccount10102("USD"));
// console.log(createAccount10102("USD"));
// console.log(createAccount10102("USD"));

const callMe = counterFunc();

callMe(); // -> 1
callMe(); // -> 2
callMe(); // -> 3
callMe(); // -> 4

function counterFunc() {
  let counter = 0;
  return function () {
    console.log(++counter);
  };
}

function _createAccount() {
  const balanceGroupCounter = {};
  return {
    build: function (balanceGroup, currency) {
      let c = balanceGroupCounter[balanceGroup] || 0;
      if (c === 0) balanceGroupCounter[balanceGroup] = 1;
      else balanceGroupCounter[balanceGroup] = c + 1;
      const accountNo =
        balanceGroup +
        balanceGroupCounter[balanceGroup].toString().padStart(11, "0");
      return {
        AccountNo: accountNo,
        Currency: currency,
        CurrentBalance: getRandomInt(100, 1_000_000),
      };
    },
    getInfo: () => balanceGroupCounter,
  };
}

const { getInfo, build: buildAccount } = { ..._createAccount() };

console.log(buildAccount("10101", "KGS"));
console.log(buildAccount("10102", "KGS"));
console.log(buildAccount("10103", "KGS"));
console.log(buildAccount("10101", "KGS"));
console.log(buildAccount("10101", "KGS"));
console.log(buildAccount("52505", "KGS"));

const numbers = [
  1, 4, 5, 8, 5, 7, 4, 15, 65, 18, 96, 165, 15, 61, 94, 89, 981, 61, 6,
];

function inBetween(start, end = null) {
  return function (value) {
    return value > start && (!end || value < end);
  };
}

function inBetweenStrict(start, end = null) {
  return function (value) {
    return value >= start && (!end || value <= end);
  };
}

console.log("Numbers between 1 and 10", numbers.filter(inBetween(1, 10)));
console.log(
  "Numbers between 1 and 10 strict",
  numbers.filter(inBetweenStrict(1, 10))
);
console.log("Numbers greater than 100", numbers.filter(inBetweenStrict(100)));
console.log(
  "Numbers between 1 and 10",
  numbers.filter((value) => {
    return value > 1 && value < 10;
  })
);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const accounts = [
  buildAccount(10103, "KGS"),
  buildAccount(10104, "KGS"),
  buildAccount(10105, "KGS"),
  buildAccount(10106, "KGS"),
  buildAccount(10104, "KGS"),
  buildAccount(10102, "KGS"),
  buildAccount(10102, "KGS"),
  buildAccount(10102, "KGS"),
  buildAccount(10102, "KGS"),
  buildAccount(10102, "KGS"),
  buildAccount(10102, "KGS"),
];

function ByField(fieldName) {
  return function (object) {
    return object[fieldName];
  };
}

function SortDesc(fieldSelector) {
  return function (a, b) {
    return fieldSelector(a) < fieldSelector(b) ? 1 : -1;
  };
}

function SortAsc(fieldSelector) {
  return function (a, b) {
    return fieldSelector(a) > fieldSelector(b) ? 1 : -1;
  };
}

function arrayCopy1(original) {
  return [...original];
}

function arrayCopy2(original) {
  return original.map((x) => x);
}

function arrayCopy3(original) {
  return original.filter((x) => true);
}

const accounts2 = arrayCopy3(accounts);
console.log("Array == copy", accounts == accounts2);
console.log("Array === copy", accounts === accounts2);

console.log(accounts.map(ByField("Currency")));
console.log("Desc", accounts.sort(SortDesc(ByField("CurrentBalance"))));
console.log("Asc", accounts2.sort(SortAsc(ByField("CurrentBalance"))));

//High-order functions - функции высшего порядка

function observableKo(initialValue) {
  let currentValue = initialValue;
  return function (newValue) {
    if (arguments.length === 0) return currentValue; //get
    //set
    currentValue = newValue;
  };
}

function observable(initialValue) {
  let currentValue = initialValue;
  return {
    get: function () {
      return currentValue;
    },
    set: function (newValue) {
      currentValue = newValue;
    },
  };
}

const vmCustomer = {};

vmCustomer.isResident = observableKo(false);
console.log(vmCustomer.isResident());
vmCustomer.isResident(true);
console.log(vmCustomer.isResident());

const { get: getCustomerID, set: setCustomerID } = { ...observable(0) };
// console.log(vmCustomer.CustomerID.get());

console.log(getCustomerID());
setCustomerID(150);
console.log(getCustomerID());

//получение статистики по балансовым группам
Object.entries(getInfo()).sort(SortDesc(ByField(1)))
