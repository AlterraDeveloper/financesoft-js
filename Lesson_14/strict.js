"use strict";

try {
  console.group("Strict");

  // delete Array.prototype;

  var user = {
    login: "7894",
    password: "4848",
    ID: 1,
  };

  var user2 = {};
  Object.defineProperty(user2, "login", { value: "7894" });
  Object.defineProperty(user2, "password", { get: (value) => "4848" });
  Object.defineProperty(user2, "ID", { value: 1 });

  console.log(Object.getOwnPropertyDescriptors(user));
  console.log(Object.getOwnPropertyDescriptors(user2));

  user.password = "123";
  // user2.password = "123"; //Error: read-only field

  for (const key in user) {
    console.log(key);
  }
  for (const key in user2) {
    console.log(key);
  }

  delete user.ID;
  // delete user2.ID; //Error: removing non-configurable

  // console.log({ user, user2 });

  var customer = {
    name: "john",
    surname: "doe",
  };

  customer.inn = "5648648489";

  Object.preventExtensions(customer);

  // customer.ID = 155;

  // console.log({ customer });
} catch (error) {
  console.error(error);
} finally {
  console.groupEnd();
}

class User {
  #id = 7;

  constructor(userId, login, password) {
    this.Login = login;
    this.Password = password;
  }

  get ID() {
    return 7;
  }
}

const _user = new User(1, "789", "147");
const _user2 = new User(2, "789", "147");

// console.log({ _user, _user2 });

var _customer = {
  ID: 14,
  name: "john",
  surname: "doe",
  passport: {
    series: "AN",
    docNo: "123456",
    expiryDate: "01-01-2023",
    issuedBy: "MKK 01-01",
  },
  verification: {
    riskLevel: "low",
    desc: "trust customer",
  },
  incomes: [
    {
      work: "programmer",
      salary: "1000",
      curency: "USD",
    },
    {
      work: "programmer",
      salary: "20000",
      curency: "KGS",
    },
  ],
};

var _customerGrs = {
  name: "john",
  surname: "doe",
  passport: {
    series: "ID",
    docNo: "88888",
    expiryDate: "05-05-2030",
    issuedBy: "UVD KR",
  },
  marritalStatus: "married",
  inn: "22425611561891",
};

console.log({ Before: _customer });
// Object.assign(_customer, _customerGrs); //ES5
_customer = { ..._customer, ..._customerGrs };
console.log({ After: _customer });

const div = document.querySelector("div");
setTimeout(() => {
  var newStyles = {
    color: "green",
    fontSize: "60px",
  };
  Object.assign(div.style, newStyles);
}, 2000);
