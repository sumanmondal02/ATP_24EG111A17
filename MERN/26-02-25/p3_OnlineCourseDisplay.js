/*Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"8*/

const courses = ["javascript", "react", "node", "mongodb", "express"];

const filterR=courses.filter((element)=>element.length>5)
console.log(filterR)

const mapR=courses.map((element)=>element.toUpperCase())
console.log(mapR)

const reduceR=mapR.reduce((acc,element)=>acc+'|' + element)
console.log(reduceR)

const findR=courses.find((element)=>element==='react')
console.log(findR)

const findIR=courses.findIndex((element)=>element==='node')
console.log(findIR)