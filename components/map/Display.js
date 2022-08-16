import dayjs from "dayjs"
import { useState, useEffect, useContext } from "react"
import { AppContext } from "../../pages/dashboard"
import GoalList from "../goal/GoalList"
import CreateGoalForm from "../goal/CreateGoalForm"

export default function MapDisplay({ map, setMapDisplay }) {
    const { fetchMaps } = useContext(AppContext)
    const [goalFormDisplay, setGoalFormDisplay] = useState(null)

    return (
        <div className="flex">
            <div className="mx-4 p-4">
            <svg onClick={() => {setMapDisplay(false)}} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                <div className="text-center mx-4 p-6">
                    <div className="flex mx-4 p-6 justify-center">
                        <h1 className="text-2xl font-bold mx-4">{map.title}</h1>
                    </div>
                    <p>Start Date:{" "}
                    <br/>{dayjs(map.start).format('MMM D, YYYY')}</p>
                    <p>End Date:{" "}
                    <br/>{dayjs(map.end).format('MMM D, YYYY')}</p>
                </div>
                <hr/>
                {goalFormDisplay ? <CreateGoalForm fetchMaps={fetchMaps} setMapDisplay={setMapDisplay} map={map}/> : null}
            </div>
                
            <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Goals for {map.title}</h5>
                <br/>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Think about what Goals you would have to set in order to complete your map in the alloted time.</p>
                <br/>
                <hr/>
                <br/>
                {/* Todo build goal model and render here */}
                <GoalList goals={map.goals} setGoalFormDisplay={setGoalFormDisplay} goalFormDisplay={goalFormDisplay} setMapDisplay={setMapDisplay}/>
            </div>
        </div>
    )
}