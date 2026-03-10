import { addTask, getAllTasks, completeTask } from "./task.js";
addTask("eating", "high", '2024-12-12')
addTask("SLEEPING", "high", '2024-12-12')
addTask("to", "low", '2024-12-12')
addTask("Walk", "medium", '2011-02-30')
getAllTasks()
completeTask(2)
completeTask(0)
getAllTasks()