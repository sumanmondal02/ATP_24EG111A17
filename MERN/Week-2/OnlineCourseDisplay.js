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

// filter: course names longer than 5
const filterR = courses.filter(c => c.length > 5);
console.log(filterR);

// map: convert to uppercase
const mapR = courses.map(c => c.toUpperCase());
console.log(mapR);

// reduce: join into a single string separated by |
const reduceR = mapR.reduce((acc, c) => acc + ' | ' + c);
console.log(reduceR);

// find: 'react'
const findR = courses.find(c => c === 'react');
console.log(findR);

// findIndex: 'node'
const findIR = courses.findIndex(c => c === 'node');
console.log(findIR);