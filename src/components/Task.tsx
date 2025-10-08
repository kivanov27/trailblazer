import { useState } from "react";
import type { Task as TaskType } from "../types";

interface TaskProps {
    task: TaskType;
};

const Task = (props: TaskProps) => {
    const [task, setTask] = useState<TaskType>(props.task);

    return (
        <div className="task-container">
            <div 
                className={`checkbox ${task.completed ? "checked" : ""}`}
                onClick={() => setTask({ ...task, completed: !task.completed })}
            />
            <span className={`${task.completed ? "completed" : ""}`}>{task.name}</span>
        </div>
    );
};

export default Task;
