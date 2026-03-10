/*Goal: Learn array copying with spread
      You are given:
      let fruits = ["apple", "banana"];
      
      Tasks
            -> Create a new array moreFruits
            -> Copy all fruits from fruits
            -> Add "orange" at the end using spread
            -> Print both arrays
      
            ✅ Expected Output
                  ["apple", "banana"]
                  ["apple", "banana", "orange"]
                  👉 Original array should NOT change.*/

let fruits = ["apple", "banana"];
const moreFruits=[...fruits,"orange"] // this will create a copy of the fruits array and add "orange" to it
console.log(fruits) // ["apple", "banana"]
console.log(moreFruits) // ["apple", "banana", "orange"] this will show the original values as moreFruits is a copy of the fruits array and not a reference to it

