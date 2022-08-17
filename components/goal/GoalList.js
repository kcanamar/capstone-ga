import Goal from "./Goal"
import { useContext } from "react"
import { AppContext } from "../../pages/dashboard"

export default function GoalList({ goals, setGoalFormDisplay, goalFormDisplay, setMapDisplay }) {
    const { fetchMaps } = useContext(AppContext)

    const handleGoalDelete = async (selectedGoal) => {
        await fetch("/api/goal", {
            method: "DELETE",
            body: selectedGoal._id
        })
        await fetchMaps()
        setMapDisplay(null)
    }

    return (
        <div>
            <div className="flex">
                {/* <h1 className="mx-auto mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Add More</h1> */}
                <button onClick={() => {setGoalFormDisplay(!goalFormDisplay)}} className="mx-auto mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Create a Goal +</button>
            </div>
            <ul role="list" className="mt-4 space-y-4 text-gray-500 dark:text-gray-400">
                {
                    // <Goal goal={goal}/>
                    goals.length >= 1
                     ? goals.map((goal, idx) => {
                        return <Goal key={idx} goal={goal} handleGoalDelete={handleGoalDelete}/>
                     })
                     : "No goals yet, click the + above to create your first goal"
                }
            </ul>
        </div>
    )
}