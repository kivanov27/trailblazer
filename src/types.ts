export interface Task {
    name: string;
    streak: number;
    days: string[];
    completed: boolean;
    difficulty: Difficulty;
}

export type Difficulty = "Easy" | "Medium" | "Hard";
