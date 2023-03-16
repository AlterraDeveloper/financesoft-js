export default class Account {
  constructor(accountNo, currency, balance = 0) {
    this.accountNo = accountNo;
    this.currency = currency;
    this.currentBalance = balance;
  }
}
