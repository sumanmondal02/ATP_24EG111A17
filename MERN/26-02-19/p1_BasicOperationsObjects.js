const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];

/*1.Insert new Emp at 2nd position
2.Remove an emp with name "Kiran"
3.Change the last mark 95 to 75 of emp "Sneha"*/

console.log(employees)
//1.Insert new Emp at 2nd position
employees.splice(1,0,{eno:106,name:"Rahul",marks:[80,85,90]})
console.log(employees)
//2. Remove an emp with name "Kiran"
for(let v in employees){
  if(employees[v].name==="Kiran"){
    console.log(employees[v])
    employees.splice(v,1)
  }
}
console.log(employees)
//3. Change the last mark 95 to 75 of emp "Sneha"
for(let v in employees){
  if(employees[v].name==="Sneha"){
    for(let i in employees[v].marks){
      if(employees[v].marks[i]===95)
        employees[v].marks[i]=75
    }
  }
}
console.log(employees)
