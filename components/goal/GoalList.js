import Goal from "./Goal"

export default function GoalList({ goals }) {

    return (
        <div>
            <div className="flex">
                {/* <h1 className="mx-auto mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Add More</h1> */}
                <button className="mx-auto mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Create a Goal +</button>
            </div>
            <ul role="list" className="mt-4 space-y-4 text-gray-500 dark:text-gray-400">
                {
                    // <Goal goal={goal}/>
                    goals.length >= 1
                     ? goals.map((goal, idx) => {
                        return <Goal key={idx} goal={goal}/>
                     })
                     : "create a goal form"
                }
            </ul>
        </div>
    )
}