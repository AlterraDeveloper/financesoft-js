function Customer(id, customerName) {
  this.CustomerID = id;
  this.CustomerName = customerName;
}

Customer.prototype.BlackListProcess = function() {
  return `Blacklist processing... ${this.CustomerName}(${this.CustomerID})`;
};

function PrivateCustomer(id, customerName, surname, otchestvo) {
  Customer.call(this, id, customerName);
  this.CustomerSurname = surname;
  this.CustomerPatronymic = otchestvo;
}

function User(id, fullname, username) {
  this.UserID = id;
}

PrivateCustomer.prototype = Object.create(Customer.prototype);
PrivateCustomer.prototype.constructor = PrivateCustomer;
// PrivateCustomer.prototype = Object.create(User.prototype);

PrivateCustomer.prototype.GetFIO = function () {
  return `${this.CustomerSurname} ${this.CustomerName} ${this.CustomerPatronymic}`;
};

var customer = new Customer(1, "Peter");
var privateCustomer = new PrivateCustomer(2, "Ivan", "Ivanov", "Ivanovich");

var obj = new Object();
obj.a = 5;
obj.b = true;

console.group("ES5");
console.log(customer.BlackListProcess());
console.log(privateCustomer.GetFIO());
console.log(privateCustomer.BlackListProcess());
console.groupEnd();
