/*Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };
🎯 Task
    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t*/

const user = {
    id: 101,
    name: "Ravi",
    preferences: {
        theme: "dark",
        language: "en"
    }
}
const copyUser={...user}
copyUser.name="Suman"
copyUser.preferences.theme="Light"
console.log(user) //in the original user object we observed that even after changing the first properties in the copy object the 
//name remains original as using the shallow copy or the spread operator creates a new copy and changing anything within the copy object 
//doesnt reflect the first properties but importantly spread operator has its own problem of copying only the first properties and 
//not the nested object hence the reference of the object is create in the copy and not the entire copy of it
console.log(copyUser)

