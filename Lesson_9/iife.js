if (!vm.TransferData.OperationID()) {
  (() => {
    vm.TransferData.TransferSumm(null);
    vm.TransferData.DirectionTypeID(1);
    vm.TransferData.TransferAccountNo(null);
    vm.TransferData.TransferAccountCurrencyID(null);
    vm.TransferData.TransferCurrencyID(null);
    vm.TransferData.ConvertedTransferSum(null);
    vm.TransferData.TotalCommission(0);
    vm.TransferData.ContragentCountryID(null);
    vm.TransferData.GoldenCrownContragentCountryID(null);
    vm.TransferData.GoldenCrownContragentCityID(null);
    vm.TransferData.GoldenCrownContactPhone(null);
    vm.TransferData.SberPayBeneficiaryPhone(null);
    vm.TransferData.SberPayBeneficiaryPan(null);
  })();
}
