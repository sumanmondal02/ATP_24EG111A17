/*Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"*/

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// filter: employees in IT department
const itEmp = employees.filter(emp => emp.department === 'IT');
console.log('Employees in IT Department:', itEmp);

// map: add netSalary (salary + 10% bonus)
const netSalary = employees.map(emp => ({ ...emp, netSalary: emp.salary * 1.1 }));
console.log('Employees with Net Salary:', netSalary);

// reduce: total salary payout
const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log('Total Salary Payout:', total);

// find: employee with salary 30000
const emp30000 = employees.find(emp => emp.salary === 30000);
console.log('Employee with salary 30000:', emp30000);

// findIndex: index of 'Neha'
const iNeha = employees.findIndex(emp => emp.name === 'Neha');
console.log('Index of employee Neha:', iNeha);