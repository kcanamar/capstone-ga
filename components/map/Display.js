import dayjs from "dayjs"
import UpdateMap from "./Update"
import { useState, useEffect } from "react"

export default function MapDisplay({ map }) {
    

    return (
        <div className="flex">
            <div className="mx-4 p-4">
                <div className="text-center mx-4 p-6">
                    <div className="flex mx-4 p-6">
                        <h1 className="text-2xl font-bold mx-4">{map.title}</h1>
                        
                    </div>
                    <p>Start Date:{" "}
                    <br/>{dayjs(map.start).format('MMM D, YYYY')}</p>
                    <p>End Date:{" "}
                    <br/>{dayjs(map.end).format('MMM D, YYYY')}</p>
                </div>
            </div>
                
            <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Landmarks for {map.title}</h5>
                <br/>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Think about what Goals you would have to set in order to complete your map in the alloted time.</p>
                <br/>
                <hr/>
                <br/>
                {/* Todo build goal model and render here */}
            </div>
        </div>
    )
}