import { useState } from "react";
import type { Difficulty, Task } from "../types";

interface TaskFormProps {
    formOpen: boolean;
    setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskForm = ({ formOpen, setFormOpen, tasks, setTasks }: TaskFormProps) => {
    const [name, setName] = useState<string>("");
    const [difficulty, setDifficulty] = useState<Difficulty>("Easy");
    const [days, setDays] = useState<string[]>([]);

    const toggleDay = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const dayElement = e.currentTarget;
        dayElement.classList.toggle("selected");
        if (days.includes(dayElement.textContent)) {
            setDays(days.filter(d => d != dayElement.textContent));
        }
        else {
            setDays([...days, dayElement.textContent]);
        }
    };

    const addTask = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (name === "") return;

        const newTask: Task = { name, streak: 0, days, completed: false, difficulty };
        setTasks([...tasks, newTask]);
        setFormOpen(false);
    };

    return (
        <div 
            className={`task-form-bg ${formOpen ? "visible" : "hidden"}`}
            onClick={() => setFormOpen(!formOpen)}
        >
            <div 
                className="task-form-container"
                onClick={(e) => e.stopPropagation()}
            >
                <form onSubmit={addTask} className="task-form">
                    <h2 className="task-form-title">Task Form</h2>
                    <div className="task-form-group">
                        <label htmlFor="name">Name:</label>
                        <input 
                            type="text" 
                            id="name"
                            onChange={({ target }) => setName(target.value)} 
                        />
                    </div>
                    <div className="task-form-group">
                        <label htmlFor="difficulty">Difficulty:</label>
                        <select id="difficulty" onChange={({ target }) => setDifficulty(target.value as Difficulty)}>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>
                    <div className="task-form-group">
                        <label>Days:</label>
                        <div className="task-form-days">
                            <button className="task-form-day" onClick={toggleDay}>
                                Monday
                            </button>
                            <button className="task-form-day" onClick={toggleDay}>
                                Tuesday
                            </button>
                            <button className="task-form-day" onClick={toggleDay}>
                                Wednesday
                            </button>
                            <button className="task-form-day" onClick={toggleDay}>
                                Thursday
                            </button>
                            <button className="task-form-day" onClick={toggleDay}>
                                Friday
                            </button>
                            <button className="task-form-day" onClick={toggleDay}>
                                Saturday
                            </button>
                            <button className="task-form-day" onClick={toggleDay}>
                                Sunday
                            </button>
                        </div>
                    </div>
                    <button type="submit" className="task-form-button">Add</button>
                </form>
            </div>
        </div>
    );
};

export default TaskForm;
