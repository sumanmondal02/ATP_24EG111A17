/*Goal: Learn object cloning & adding new property
    You are given:
        let user = {
        name: "Ravi",
        city: "Hyderabad"
      };
                        
    Tasks
        -> Create a new object updatedUser                      
        -> Copy all properties from user                      
        -> Add a new property age: 25
        -> Print both objects
                        
    ✅ Expected Output
        { name: "Ravi", city: "Hyderabad" }
        { name: "Ravi", city: "Hyderabad", age: 25 }
    👉 Original object should remain unchanged.*/

let user = {
        name: "Ravi",
        city: "Hyderabad"
      };
const updateUser={...user, age:25} // this will create a copy of the user object and add age:25 to it
console.log(user) // { name: "Ravi", city: "Hyderabad" }
console.log(updateUser) // { name: "Ravi", city: "Hyderabad", age: 25 } this will show the original values as updateUser is a copy of the user object and not a reference to it