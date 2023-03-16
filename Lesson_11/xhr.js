// XMLHttpRequest XHR
var request  = new XMLHttpRequest();
request.open("GET", `${baseUrl}api/Deposits/Products/AvailableCurrencies`)
request.onload = (data) => {
  console.log({data});
};
request.send();

//пример callback hell при использовании jQuery AJAX
var ajaxRequest =
$.ajax({
  url: `${baseUrl}api/Deposits/Products/AvailableCurrencies`,
  method: "GET",
  success: (currencies) => {
    console.log("Currency list response:", currencies);
    const currencyID =
      currencies[Math.floor(Math.random() * currencies.length)].CurrencyID;
    console.log("Selected currency id =", currencyID);

    const customerPhone = "+996 500 650095";
    $.ajax({
      url: `${baseUrl}api/Customers/GetInn?phone=${encodeURIComponent(
        customerPhone
      )}`,
      method: "GET",
      success: (customerData) => {
        console.log("CustomerData is", customerData);
        const customerID = customerData[0].CustomerID;
        console.log("Selected customer id =", customerID);

        $.ajax({
          url: `${baseUrl}api/Deposits/Products/AvailableProducts?customerID=${customerID}`,
          method: "GET",
          success: (depositData) => {
            console.log("Deposit data:", depositData);
            const customerOrganizationType =
              depositData.Result.CustomerOrganizationType;
            const depositProductID =
              depositData.Result.SelectableProductItems[0].Products[36]
                .ProductID;

            const openDepositModel = {
              CustomerID: customerID,
              CurrencyID: currencyID,
              Period: 24,
              ProductID: depositProductID,
              AccountNo: null,
              SumV: 1000,
              OrganizationType: customerOrganizationType,
            };

            console.log(openDepositModel);
          },
        });
      },
    });
  },
  error: (err) => {
    console.error(err);
  },
});
