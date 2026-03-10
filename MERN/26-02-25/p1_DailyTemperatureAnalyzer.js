/*Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40    
    5. findIndex() of temperature 28*/

const temperatures = [32, 35, 28, 40, 38, 30, 42];
const filterResult=temperatures.filter((element)=>element>35)
console.log(filterResult)

const mapResult=temperatures.map((element)=>(element*(9/5))+32)
console.log(mapResult)

const reduceResult=temperatures.reduce((accumulator, element)=>accumulator+element)
console.log(reduceResult/temperatures.length)

const findResult=temperatures.find((element)=>element===40)
console.log(findResult)

const findIndResult=temperatures.findIndex((element)=>element===28)
console.log(findIndResult)