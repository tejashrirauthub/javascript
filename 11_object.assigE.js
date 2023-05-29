let sbiBank = {
  bankName: "State Bank of india",
  location: "Sangola",
  accountNo: 12345678910,
  ifsc: "SBI00004133",
  interestRate: "5%",
  showDetails: function () {
    console.log(
      `Bank name:${this.bankName},location: ${this.location},Account Number: ${this.accountNo},Ifsc code:${this.ifsc},Interest rate: ${this.interestRate}`
    );
  },
};

let axisBank = {
  axisBank: "Axis bank",
  axisLocation: "Pandharpur",
  axisAccountNo: 89743712340,
  axisIfsc: "AXIS00004455",
  axisInterestRate: "6%",
  showDetails: function () {
    console.log(
      `Bank name:${this.axisBank},location: ${this.axisLocation},Account Number: ${this.axisAccountNo},Ifsc code:${this.axisIfsc},Interest rate: ${this.axisInterestRate}`
    );
  },
};
let hdfcBank = {
  hdfcBank: "HDFC bank",
  hdfcLocation: "solapur",
  hdfcAccountNo: 12906430000,
  hdfcIfsc: "HDFC00004455",
  hdfcInterestRate: "6.35%",
  showDetails: function () {
    console.log(
      `Bank name:${this.hdfcBank},location: ${this.hdfcLocation},Account Number: ${this.hdfcAccountNo},Ifsc code:${this.hdfcIfsc},Interest rate: ${this.hdfcInterestRate}`
    );
  },
};

let yesBank = {
  yesBank: "Yes bank",
  yesLocation: "Pune",
  yesAccountNo: 13479082307,
  yesIfsc: "Yes024589",
  yesInterestRate: "8%",
  showDetails: function () {
    console.log(
      `Bank name:${this.yesBank},location: ${this.yesLocation},Account Number: ${this.yesAccountNo},Ifsc code:${this.yesIfsc},Interest rate: ${this.yesInterestRate}`
    );
  },
};

sbiBank.showDetails();
axisBank.showDetails();
hdfcBank.showDetails();
yesBank.showDetails();
