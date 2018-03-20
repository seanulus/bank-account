

function BankAccount(name, initialDeposit) {
  this.name = name;
  this.balance = initialDeposit;
};

function NewTransaction(deposit, withdrawal) {
  this.deposit = deposit;
  this.withdrawal = withdrawal;
};

NewTransaction.prototype.deposit = function() {
  return BankAccount.balance + this.deposit;
}

NewTransaction.prototype.withdrawal = function() {
  return BankAccount.balance - this.withdrawal;
}

// function deposit(initialDeposit) {
//
// }
// function BankAccount(name, balance) {
//   this.name = name;
//   this.balance = balance;
// }
var account = { "Name", 0 }

$(document).ready(function() {
  $("form#register").submit(function(event) {
    event.preventDefault();
    var name = $("input#accountName").val();
    var firstDeposit = parseInt($("input#initialDeposit").val());

    var newAccount = new BankAccount(name, firstDeposit);
    $(".account-name").text(newAccount.name);
    $(".balance-money").text("$" + newAccount.balance);

    $("#firstAccount").hide();
    $("#current-balance").show();
  });
  $("form#atm").submit(function(event) {
    event.preventDefault();
    var deposit = parseInt($("input#deposit").val());
    var withdrawal = parseInt($("input#withdrawal").val());
    var transaction = new NewTransaction(deposit, withdrawal)

    $(".balance-money").text("$" + newAccount.balance);
  });
});
