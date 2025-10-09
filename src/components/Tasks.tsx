import Task from "./Task";
import type { Task as TaskType, Difficulty, NewTask } from "../types";
import { useState, useEffect } from "react";
import TaskForm from "./TaskForm";

const initialTasks = [
    { id: "1", name: "Meditation", streak: 3, days: ["Monday", "Tuesday", "Thursday", "Friday"], completed: false, difficulty: "Hard" as Difficulty },
    { id: "2", name: "Exercise", streak: 6, days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], completed: false, difficulty: "Hard" as Difficulty }
];

const Tasks = () => {
    const [tasks, setTasks] = useState<TaskType[]>(initialTasks);
    const [formOpen, setFormOpen] = useState<boolean>(false);
    const [weekday, setWeekday] = useState<string>(
        new Date().toLocaleDateString("en-GB", { weekday: "long" })
    );

    useEffect(() => {
        const checkDayChange = () => {
            const today = new Date().toLocaleDateString("en-GB", { weekday: "long" });
            if (today !== weekday) {
                setWeekday(today);
                setTasks(tasks.map(t => t.streak > 0 && t.completed === false ?
                    { ...t, streak: 0, completed: false } :
                    { ...t, completed: false }
                ));
            }
        }
        const interval = setInterval(checkDayChange, 1000 * 60 * 60);
        return () => clearInterval(interval);
    }, [tasks, weekday]);

    const addTask = (newTask: NewTask) => {
        const task = { id: (tasks.length + 2).toString(), ...newTask };
        setTasks(tasks.concat(task));
    };

    const completeTask = (task: TaskType) => {
        const checked = task.completed;
        if (!checked) {
            setTasks(
                tasks.map(t => t.id === task.id ? 
                    { ...t, completed: !t.completed, streak: t.streak + 1 } : t)
            );
        }
        else {
            setTasks(
                tasks.map(t => t.id === task.id ? 
                    { ...t, completed: !t.completed, streak: t.streak - 1 } : t)
            );
        }
    };

    return (
        <div className="tasks-container">
            {tasks.map(task =>
                task.days.length !== 0 &&
                <p key={task.id} className="streak">{task.name} streak:
                    <span className="streak-number"> {task.streak}</span>
                </p>

            )}
            {tasks.map(task =>
                task.days.includes(weekday) &&
                <Task key={task.id} task={task} completeTask={completeTask} />
            )}
            <button 
                className="button-addTask"
                onClick={() => setFormOpen(!formOpen)}
            >+</button>
            <TaskForm 
                formOpen={formOpen} 
                setFormOpen={setFormOpen} 
                addTask={addTask}
            />
        </div>
    );
};

export default Tasks;
