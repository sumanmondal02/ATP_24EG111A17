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

const filterResult=cart.filter((element)=>element.inStock===true)
console.log(filterResult)

//const mapResult=cart.map((element)=>element.name && element.totalPrice) //check this
const mapResult = cart.map((element) => ({
    name: element.name,
    totalPrice: element.price * element.quantity
}));
console.log(mapResult)

const reduceResult=cart.reduce(((accumulator, element)=>accumulator+element.price*element.quantity), 0)
console.log(reduceResult)

const findResult=cart.find((element)=>element.name==='Mouse')
console.log(findResult)

const findIndexResult=cart.findIndex((ELEMENT)=>ELEMENT.name==='Keyboard')
console.log(findIndexResult)