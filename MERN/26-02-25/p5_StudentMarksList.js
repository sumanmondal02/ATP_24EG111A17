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

const passMarks = marks.filter(mark => mark >= 40);
console.log("Pass Marks:", passMarks);

const graceMarks = marks.map(mark => mark + 5);
console.log("Marks after adding grace marks:", graceMarks);

const highestMark = marks.reduce((max, mark) => (mark > max ? mark : max), 0);
console.log("Highest Mark:", highestMark);

const firstFailingMark = marks.find(mark => mark < 40);
console.log("First Mark below 40:", firstFailingMark);

const indexOf92 = marks.findIndex(mark => mark === 92);
console.log("Index of mark 92:", indexOf92);