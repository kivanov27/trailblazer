import Task from "./Task";
import type { Difficulty } from "../types";
import { useState } from "react";
import TaskForm from "./TaskForm";

const tasks = [
    { name: "Meditation", streak: 3, days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], completed: false, difficulty: "Hard" as Difficulty },
    { name: "Exercise", streak: 6, days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], completed: false, difficulty: "Hard" as Difficulty }
];

const Tasks = () => {
    const [formOpen, setFormOpen] = useState<boolean>(false);

    return (
        <div className="tasks-container">
            {tasks.map(task =>
                <Task task={task} key={task.name} />
            )}
            <button 
                className="button-addTask"
                onClick={() => setFormOpen(!formOpen)}
            >
                +
            </button>
            <TaskForm formOpen={formOpen} setFormOpen={setFormOpen} />
        </div>
    );
};

export default Tasks;
