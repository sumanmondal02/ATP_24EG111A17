/* Demonstrates basic array/object operations on an `employees` list. */

const employees = [
  { eno: 101, name: "Ravi", marks: [78, 82, 91] },
  { eno: 102, name: "Bhanu", marks: [65, 70, 68] },
  { eno: 103, name: "Sneha", marks: [88, 92, 95] },
  { eno: 104, name: "Kiran", marks: [55, 60, 58] },
  { eno: 105, name: "Anitha", marks: [90, 85, 87] },
];

// 1) Insert a new employee at 2nd position (index 1)
console.log('Before insert:', employees.map(e => e.name));
employees.splice(1, 0, { eno: 106, name: "Rahul", marks: [80, 85, 90] });
console.log('After insert:', employees.map(e => e.name));

// 2) Remove an employee with name "Kiran"
// Use findIndex for clearer intent
const kiranIndex = employees.findIndex(e => e.name === "Kiran");
if (kiranIndex !== -1) {
  employees.splice(kiranIndex, 1);
}
console.log('After remove (if existed):', employees.map(e => e.name));

// 3) Change the last mark 95 to 75 for employee "Sneha"
const sneha = employees.find(e => e.name === "Sneha");
if (sneha) {
  const lastMarkIndex = sneha.marks.lastIndexOf(95);
  if (lastMarkIndex !== -1) sneha.marks[lastMarkIndex] = 75;
}
console.log('Final employees with marks:', employees);
