class CustomerEs6 {
  constructor(id, customerName) {
    this.CustomerID = id;
    this.CustomerName = customerName;
    this.BlackListProcess = () => {
      return `Blacklist processing... ${this.CustomerName}(${this.CustomerID})`;
    }
  }

}

class PrivateCustomerEs6 extends CustomerEs6 {
  constructor(id, name, surname, otchestvo) {
    super(id, name);
    this.CustomerSurname = surname;
    this.CustomerPatronymic = otchestvo;
  }

  GetFIO() {
    return `${this.CustomerSurname} ${this.CustomerName} ${this.CustomerPatronymic}`;
  }
}

var customerEs6 = new CustomerEs6(3, "Peter");
var privateCustomerEs6 = new PrivateCustomerEs6(
  4,
  "Ivan",
  "Ivanov",
  "Ivanovich"
);

console.group("ES6");
console.log(customerEs6.BlackListProcess());
console.log(privateCustomerEs6.GetFIO());
console.log(privateCustomerEs6.BlackListProcess());
console.groupEnd();
