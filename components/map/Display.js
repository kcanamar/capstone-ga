import dayjs from "dayjs"
import UpdateMap from "./Update"
import { useState, useEffect } from "react"

export default function MapDisplay({ map }) {
    const [show, setShow] = useState(false)

    return (
        <div className="flex">
            <div className="mx-4 p-4">
                <div className="text-center mx-4 p-6">
                    <div className="flex mx-4 p-6">
                        <h1 className="text-2xl font-bold mx-4">{map.title}</h1>
                        {!show ? (<svg onClick={() => {setShow(true)}} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>) :
                        (<svg onClick={() => {setShow(false)}} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>)}
                    </div>
                    <p>Start Date:{" "}
                    <br/>{dayjs(map.start).format('MMM D, YYYY')}</p>
                    <p>End Date:{" "}
                    <br/>{dayjs(map.end).format('MMM D, YYYY')}</p>
                </div>
                {show && <UpdateMap map={map}/>}
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