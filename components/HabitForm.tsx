import { Button } from "./Button";

export function HabitForm() {
    return (
        <form className="flex gap-2">
            <input className="flex-1 rounded-lg bg-zinc-800 text-zinc-300 placeholder:text-zinc-500 border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="What are you tracking?" />
            <Button>Add Habit</Button>
        </form>
    )
}