import dayjs from "dayjs"
import { AppContext } from "../../pages/dashboard"
import { useContext, useState } from "react"
import { getMapIds } from "../../lib/map"
import Display from './Display'
import CreateNewMap from "./Create"
import UpdateMap from "./Update"
import MakeBenchmark from "../how/Benchmark"
import MakeMap from "../how/Map"
import MakeGoal from "../how/Goal"
import MakeCelebration from "../how/Celebration"

export default function MapList({ mapList, user}) {
    const { handleMapDelete, fetchMaps } = useContext(AppContext)
    const [mapDisplay, setMapDisplay] = useState(null)
    const [mapUpdate, setMapUpdate] = useState(null)
    const [show, setShow] = useState(false)
    const [createShow, setCreateShow] = useState(false)
    const [howTo, setHowTo] = useState(null)

    const editToggle = (map, show) => {
        setShow(!show)
        setMapUpdate(map)
    }
    const updateMap = (map) => {
        return <UpdateMap map={map}/>
    }
    return (
        <div className="w-screen">
            <div className="flex flex-col">
                <div className="text-center mb-4">
                    <button onClick={() => {!howTo ? (setHowTo(<MakeMap setHowTo={setHowTo}/>)) : setHowTo(null)}} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">How to make a Map</button>
                    <button onClick={() => {!howTo ? (setHowTo(<MakeGoal setHowTo={setHowTo}/>)) : setHowTo(null)}} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">How to make a Goal</button>
                    <button onClick={() => {!howTo ? (setHowTo(<MakeBenchmark setHowTo={setHowTo}/>)) : setHowTo(null)}} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">How to make a Benchmark</button>
                    <button onClick={() => {!howTo ? (setHowTo(<MakeCelebration setHowTo={setHowTo}/>)) : setHowTo(null)}} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">How to Celebrate</button>
                </div>
                <div className="text-center">{howTo}</div>
                <hr/>
                <div className="mb-4 mt-4">
                    {mapDisplay && <Display map={mapDisplay} setMapDisplay={setMapDisplay}/>}
                </div>
            </div>
            {mapDisplay && <hr/>}
            <div className="mt-4">
                <div className="flex flex-wrap justify-center overflow-auto">
                    {
                        mapList.length >= 1
                        ? mapList.map((map) => {
                            return user.email === map.user
                                ? (
                                    <div key={map._id} className="mx-4 text-center p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                        <div className="flex justify-center">
                                        
                                            <h5 className="mb-2 mx-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{map.title}</h5>
                                            {!show ? (<svg onClick={() => {editToggle(map, show)}} className="w-6 h-6" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg>) :
                                            (<svg onClick={() => {editToggle(map, show)}} className="w-6 h-6" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg>)}
                                        </div>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Start Date:{" "}{dayjs(map.start).format('MMM D, YYYY')}</p>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">End Date:{" "}{dayjs(map.end).format('MMM D, YYYY')}</p>
                                        <div className="flex mt-4 justify-center">
                                            <div className="mx-4">
                                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => {setMapDisplay(map)}}>
                                                    Inspect
                                                </button>
                                            </div>
                                            <div className="mx-4 ">
                                                <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={(e) => {
                                                    e.preventDefault()
                                                    handleMapDelete(map)
                                                }}>
                                                    DELETE
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                                : ""
                        }) : ""
                    }
                </div>
                <div className="">
                    {!createShow ? (<div className="flex" onClick={() => {setCreateShow(true)}}><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg><p>Create a New Map</p></div>) :
                    (<div className="flex" onClick={() => {setCreateShow(false)}}><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg><p>Create a New Map</p></div>)}
                    <div>
                        {createShow && <CreateNewMap fetchMaps={ fetchMaps } setCreateShow={setCreateShow}/>}
                        {show && updateMap(mapUpdate)}
                    </div>
                </div>
            </div>
        </div>
    )
}
