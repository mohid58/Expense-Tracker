class Ttransaction {
    constructor(type, name, amount, date) {
      this.type = type;
      this.name = name;
      this.amount = amount;
      this.date = date;
    }
  }
  
  const expenseTracker = {
    transactions: [],
    balance: 0,
    income: 0,
    expense: 0,
  
    updateUI: function () {
      document.getElementById("balance").textContent = `$${this.balance.toFixed(2)}`;
      document.getElementById("income").textContent = `$${this.income.toFixed(2)}`;
      document.getElementById("expense").textContent = `$${this.expense.toFixed(2)}`;
  
      const transactionList = document.getElementById("transactionList");
      transactionList.innerHTML = "";
  
      this.transactions.forEach((transaction) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${transaction.name}: $${transaction.amount.toFixed(2)}`;
        transactionList.appendChild(listItem);
      });
    },
  
    handleFormSubmit: function (event) {
      event.preventDefault();
  
      const form = event.target;
      const type = form.type.checked ? "Income" : "Expense";
      const name = form.name.value;
      const amount = parseFloat(form.amount.value);
      const date = form.date.value;
  
      if (isNaN(amount)) {
        alert("Please enter a valid amount.");
        return;
      }
  
      const transaction = new Ttransaction(type, name, amount, date);
  
      if (type === "Income") {
        this.income += amount;
      } else {
        this.expense += amount;
      }
  
      this.balance = this.income - this.expense;
  
      this.transactions.push(transaction);
      this.updateUI();
  
      form.reset();
    },
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    const transactionForm = document.getElementById("transactionForm");
    transactionForm.addEventListener("submit", (event) => expenseTracker.handleFormSubmit(event));
  });
  