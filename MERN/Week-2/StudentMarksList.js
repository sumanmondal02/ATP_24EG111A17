/*Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92*/

const marks = [78, 92, 35, 88, 40, 67];

// filter: passing marks (>=40)
const passMarks = marks.filter(m => m >= 40);
console.log('Pass Marks:', passMarks);

// map: add 5 grace marks to each
const graceMarks = marks.map(m => m + 5);
console.log('Marks after adding grace marks:', graceMarks);

// reduce: highest mark
const highestMark = marks.reduce((max, m) => (m > max ? m : max), -Infinity);
console.log('Highest Mark:', highestMark);

// find: first mark below 40
const firstFailingMark = marks.find(m => m < 40);
console.log('First Mark below 40:', firstFailingMark);

// findIndex: index of mark 92
const indexOf92 = marks.findIndex(m => m === 92);
console.log('Index of mark 92:', indexOf92);