import {validateTitle, validatePriority, validateDueDate} from './validator.js';

let tasks = [];

// 1. Add new task
function addTask(title, priority, date) {
    // Validate using imported functions
    if(validateTitle(title) && validateDueDate(date) && validatePriority(priority)){
        //push taskObj to tasks to array
        tasks.push({title,priority,date})
        return "Success"
    }return "Invalid Task"
    // If valid, add to tasks array
    // Return success/error message
}

// 2. Get all tasks
function getAllTasks() {
    console.log(tasks)
}

// 3. Mark task as complete
function completeTask(taskInd) {
    tasks[taskInd].completed = true;
}

export {addTask, getAllTasks, completeTask}