/*Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"*/

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// filter: students with marks >= 40 (pass)
const filterR = students.filter(s => s.marks >= 40);
console.log(filterR);

// map: add grade field based on marks
const mapR = students.map(s => {
  const grade = s.marks >= 90 ? 'A' : s.marks >= 75 ? 'B' : s.marks >= 60 ? 'C' : 'D';
  return { ...s, grade };
});
console.log(mapR);

// reduce: average marks
const reduceR = students.reduce((sum, s) => sum + s.marks, 0) / students.length;
console.log(reduceR);

// find: student with marks 92
const findR = students.find(s => s.marks === 92);
console.log(findR);

// findIndex: student named 'Kiran'
const findIR = students.findIndex(s => s.name === 'Kiran');
console.log(findIR);