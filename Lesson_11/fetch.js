
const baseUrl = "https://10.152.45.12/OnlineBank.IntegrationService/";

(async () => {
  // var ajaxRequest = $.ajax({
  //   url: `${baseUrl}api/Deposits/Products/AvailableCurrencies`,
  //   method: "GET",
  //   beforeSend: (request) => {
  //     console.log("Start request...");
  //   },
  //   success: (response) => {
  //     console.log("Currency list response:", response);
  //     $.ajax;
  //   },
  //   error: (err) => {
  //     console.error(err);
  //   },
  //   complete: () => {
  //     console.log("End request...");
  //   },
  // });
  // var getCurr = Promise.resolve(ajaxRequest);
  // console.log("AJAX", await getCurr);
})();
//Asynchronous Javascript And Xml

(async () => {
  // const currencies = await (
  //   await fetch(`${baseUrl}api/Deposits/Products/AvailableCurrencies`)
  // ).json();
  // console.log(currencies);
  //   const customerPhone = "+996 500 650095";
  //   const customerData = await (
  //     await fetch(
  //       `${baseUrl}api/Customers/GetInn?phone=${encodeURIComponent(
  //         customerPhone
  //       )}`
  //     )
  //   ).json();
  //   console.log(customerData);
  //   const depositProducts = await (
  //     await fetch(
  //       `${baseUrl}api/Deposits/Products/AvailableProducts?customerID=${customerData[0].CustomerID}`
  //     )
  //   ).json();
  //   console.log(depositProducts);
  const openDepositModel = {
    CustomerID: customerData[0].CustomerID,
    CurrencyID: currencies[Math.floor(Math.random()) * currencies.length],
    Period: 24,
    ProductID: 3273,
    AccountNo: null,
    SumV: 1000,
    OrganizationType: 7,
  };
  // const openDepositResponse = await (
  //   await fetch(`${baseUrl}api/Deposits/OpenDeposit`, {
  //     method: "POST",
  //     headers: {
  //       Accept: "*/*",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(openDepositModel),
  //   })
  // ).json();
  // console.log("Open deposit:", openDepositResponse);
})();


var openDepositAwaitAjax = async () => {
  try {
    var currencies = await $.ajax({
      url: `${baseUrl}api/Deposits/Products/AvailableCurrencies`,
      method: "GET",
    });
    // console.log(typeof req, req);
    //   const getCurrenciesRequest = Promise.resolve(req)
    //   const currencies = await getCurrenciesRequest;
    const currencyID =
      currencies[Math.floor(Math.random() * currencies.length)].CurrencyID;

    const customerPhone = "+996 500 650095";
    const getCustomerByPhoneRequest = Promise.resolve(
      $.ajax({
        url: `${baseUrl}api/Customers/GetInn?phone=${encodeURIComponent(
          customerPhone
        )}`,
        method: "GET",
      })
    );
    const customerID = (await getCustomerByPhoneRequest)[0].CustomerID;

    const getDepositProductsDataRequest = Promise.resolve(
      $.ajax({
        url: `${baseUrl}api/Deposits/Products/AvailableProducts?customerID=${customerID}`,
        method: "GET",
      })
    );
    var depositData = (await getDepositProductsDataRequest).Result;

    const openDepositModel = {
      CustomerID: customerID,
      CurrencyID: currencyID,
      Period: 24,
      ProductID: depositData.SelectableProductItems[0].Products[36].ProductID,
      AccountNo: null,
      SumV: 1000,
      OrganizationType: depositData.CustomerOrganizationType,
    };
    console.log("AJAX AS PROMISE", openDepositModel);
  } catch (error) {
    console.warn(error);
  }
};

openDepositAwaitAjax();

const openDepositFetch = async () => {
  // const c = await (
  //   await fetch(`${baseUrl}api/Deposits/Products/AvailableCurrencies`)
  // ).json();
  // console.log(c);

  const customerPhone = "+996 500 650095";
  fetch(
    `${baseUrl}api/Customers/GetInn?phone=${encodeURIComponent(customerPhone)}`
  )
    .then((response) => response.json())
    .then((customerData) => {
      console.log("FETCH API:", customerData);
      return customerData[0].CustomerID;
    })
    .then((customerID) =>
      fetch(
        `${baseUrl}api/Deposits/Products/AvailableProducts?customerID=${customerID}`
      )
    )
    .then((depositProductsResponse) => depositProductsResponse.json())
    .then((depositProducts) => {});
};

openDepositFetch();
