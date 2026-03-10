/*Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000*/

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

const credit=transactions.filter(tx=>tx.type==="credit");
console.log("Credit Transactions:", credit);

const amounts=transactions.map(tx=>tx.amount);
console.log("Transaction Amounts:", amounts);

const balance=transactions.reduce((acc, tx)=>{
  return tx.type==="credit"?acc+tx.amount:acc-tx.amount;
}, 0);
console.log("Final Account Balance:", balance);

const firstDebit = transactions.find(tx => tx.type === "debit");
console.log("First Debit Transaction:", firstDebit);

const indexOf10000 = transactions.findIndex(tx => tx.amount === 10000);
console.log("Index of transaction with amount 10000:", indexOf10000);