import { useState } from "react";
import type { Task as TaskType } from "../types";

interface TaskProps {
    task: TaskType;
};

const Task = (props: TaskProps) => {
    const [task, setTask] = useState<TaskType>(props.task);

    const completeTask = () => {
        if (!task.completed) {
            setTask({ ...task, streak: task.streak + 1, completed: true});
        }
        else {
            setTask({ ...task, streak: task.streak - 1, completed: false});
        }
    };

    return (
        <div className="task-container">
            <div 
                className={`checkbox ${task.completed ? "checked" : ""}`}
                onClick={completeTask}
            />
            <span className={`${task.completed ? "completed" : ""}`}
            >{task.name}</span>
        </div>
    );
};

export default Task;
