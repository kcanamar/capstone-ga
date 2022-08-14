import Goal from "./Goal"

export default function GoalList({ map }) {

    const goal = {title: "Goal", benchmark: "MVP project apoiunvp apodkjn poaunv aosjnvou njxnp aposnanvjnl c", celebration: "Day Off and I want a new bycile and a pony", tactic: "Time Managment"}
    return (
        <div>
            <div className="flex">
                <h1 className="mx-auto mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Landmarks</h1>
                <button className="mx-auto mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">+</button>
            </div>
            <ul role="list" className="mt-4 space-y-4 text-gray-500 dark:text-gray-400">
                <Goal goal={goal}/>
            </ul>
        </div>
    )
}