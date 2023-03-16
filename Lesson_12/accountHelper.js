import Account from "./DomainModels/Account";

const createAccount = () => {
  const balanceGroupCounter = {};
  return {
    build: function (balanceGroup, currency = "KGS") {
      let c = balanceGroupCounter[balanceGroup] || 0;
      if (c === 0) balanceGroupCounter[balanceGroup] = 1;
      else balanceGroupCounter[balanceGroup] = c + 1;
      const accountNo =
        balanceGroup +
        balanceGroupCounter[balanceGroup].toString().padStart(11, "0");
      return new Account(accountNo, currency, getRandomInt(100, 1_000));
    },
    getInfo: () => balanceGroupCounter,
  };
};

const withdrawAccount = function (account, sum) {
  if (account.currentBalance - sum < 0) throw new Error("Not enought minerals");
  account.currentBalance -= sum;
};

const replenishAccount = function (account, sum) {
  account.currentBalance += sum;
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { createAccount, withdrawAccount, replenishAccount, getRandomInt };
