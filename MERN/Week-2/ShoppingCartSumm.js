/*You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard" */

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// filter: in-stock products
const filterResult = cart.filter(item => item.inStock);
console.log(filterResult);

// map: name and totalPrice
const mapResult = cart.map(item => ({ name: item.name, totalPrice: item.price * item.quantity }));
console.log(mapResult);

// reduce: grand total
const reduceResult = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
console.log(reduceResult);

// find: product named 'Mouse'
const findResult = cart.find(item => item.name === 'Mouse');
console.log(findResult);

// findIndex: position of 'Keyboard'
const findIndexResult = cart.findIndex(item => item.name === 'Keyboard');
console.log(findIndexResult);