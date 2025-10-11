import type { Task as TaskType } from "../types";

interface TaskProps {
    task: TaskType;
    completeTask: (task: TaskType) => void;
};

const Task = ({ task, completeTask }: TaskProps) => {
    return (
        <div className="task-container">
            <div 
                className={`checkbox ${task.completed ? "checked" : ""}`}
                onClick={() => completeTask(task)}
            />
            <span className={`${task.completed ? "completed" : ""}`}
            >{task.name}</span>
        </div>
    );
};

export default Task;
