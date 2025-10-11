export interface Task {
    id: number;
    name: string;
    streak: number;
    days: string[];
    completed: boolean;
    difficulty: Difficulty;
}

export type NewTask = Omit<Task, "id">;

export type Difficulty = "Easy" | "Medium" | "Hard";
