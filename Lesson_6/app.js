function someFn() {
  console.log("Function this = ", this);
}

const account = {
  accountNo: "1561561899",
  currencyID: 417,
  balance: 1000,
  toString: function () {
    return `${this.accountNo}_${this.currencyID}`;
  },
  accountFn: someFn,
  accountFnArrow: () => {
    console.log("Arrow this = ", this);
  },
  withdraw: function (sum) {
    this.balance -= sum;
  },
};

someFn();
account.accountFn();
account.accountFnArrow();

const account2 = {
  accountNo: "98989898989",
  currencyID: 840,
  balance: 0,
};

console.log(account.toString.bind(account2)());
console.log(account.toString.call(account2));
console.log(account.toString.apply(account2));

// account.withdraw.call(account2, 100);
account.withdraw.apply(account2, [100]);
console.log(account.balance);
console.log(account2.balance);

var array = [5, 4, 8, 7, 5];

console.log("Array max = ", Math.max.apply(null, array));

const logger = function () {
  const dateNow = new Date().toDateString("dd/MM/YYYY");
  console.log(dateNow, JSON.stringify(this));
};

logger.call(account);
logger.call(account2);

class Account {
  constructor(accountNo, currencyID = 417, balance = 0) {
    //   this = {}
    this.accountNo = accountNo;
    this.currencyID = currencyID;
    this.balance = balance;
  }

  //   this.withdraw = (sum) => {
  //     const currentBalance = this.balance - sum;
  //     if (currentBalance < 0) return false;
  //     this.balance = currentBalance;
  //     return true;
  //   };
  openInCurrencies(...currs) {
    const accounts = [];
    currs = Array.from(new Set(currs));
    currs.forEach((c) => accounts.push(new Account(this.accountNo, c)));
    accounts.push(this);
    return accounts;
  }
  //   return this;
  withdraw(sum) {
    const currentBalance = this.balance - sum;
    if (currentBalance < 0) return false;
    this.balance = currentBalance;
    return true;
  }
}

const account3 = new Account("10102000000001", 417, 1000);
console.log(account3.withdraw(100));
console.log(account3.balance);
// const [account3_1, , account3_3] = [
//   ...account3.openInCurrencies(840, 639, 978, 840),
// ];

// console.log(account3);
// console.log(account3_1);
// // console.log(account3_2);
// console.log(account3_3);

Object.prototype.logJson = function () {
  return JSON.stringify(this);
};

console.log(account.logJson());
console.log({}.logJson());
console.log([1, 2, 3].logJson());
// console.log([1, 2, 3].withdraw(100));

const cardAccount = Object.create(account3);
cardAccount.cards = [120, 145, 452];

Array.prototype.FirstOrDefault = function (callback) {
  return this.filter(callback)[0] || null;
};

Array.ofRange = (start, end, step = 1) => {
  const array = [];
  for (let i = start; i <= end; i += step) array.push(i);
  return array;
};

Array.prototype.filter = () => false;
