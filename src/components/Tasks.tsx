import Task from "./Task";
import type { Task as TaskType, Difficulty } from "../types";
import { useState } from "react";
import TaskForm from "./TaskForm";

const initialTasks = [
    { name: "Meditation", streak: 3, days: ["Monday", "Tuesday", "Thursday", "Friday"], completed: false, difficulty: "Hard" as Difficulty },
    { name: "Exercise", streak: 6, days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], completed: false, difficulty: "Hard" as Difficulty }
];

const Tasks = () => {
    const [tasks, setTasks] = useState<TaskType[]>(initialTasks);
    const [formOpen, setFormOpen] = useState<boolean>(false);
    const weekday = new Date().toLocaleDateString("en-GB", { weekday: "long" });

    return (
        <div className="tasks-container">
            {tasks.map(task =>
                task.days.length !== 0 &&
                <p key={task.name} className="streak">{task.name} streak:
                    <span className="streak-number"> {task.streak}</span>
                </p>

            )}
            {tasks.map(task =>
                task.days.includes(weekday) &&
                <Task task={task} key={task.name} />
            )}
            <button 
                className="button-addTask"
                onClick={() => setFormOpen(!formOpen)}
            >+</button>
            <TaskForm 
                formOpen={formOpen} 
                setFormOpen={setFormOpen} 
                tasks={tasks} 
                setTasks={setTasks} 
            />
        </div>
    );
};

export default Tasks;
