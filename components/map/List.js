import dayjs from "dayjs"
import { AppContext } from "../../pages/dashboard"
import { useContext, useState } from "react"
import { Button } from "flowbite-react"
import { getMapIds } from "../../lib/map"
import Display from './Display'
import CreateNewMap from "./Create"
import UpdateMap from "./Update"

export default function MapList({ mapList, user}) {
    const { handleMapDelete, fetchMaps } = useContext(AppContext)
    const [mapDisplay, setMapDisplay] = useState(null)
    const [mapUpdate, setMapUpdate] = useState(null)
    const [show, setShow] = useState(false)

    const editToggle = (map, show) => {
        setShow(!show)
        setMapUpdate(map)
    }
    const updateMap = (map) => {
        return <UpdateMap map={map}/>
    }
    return (
        <div>
            <div>
                {mapDisplay && <Display map={mapDisplay}/>}
            </div>
            <div>
                <div className="flex flex-wrap">
                    {
                        mapList.length >= 1
                        ? mapList.map((map) => {
                            return user.email === map.user
                                ? (
                                    <div key={map._id} className=" text-center p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                        <div className="flex justify-center">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{map.title}</h5>
                                            {!show ? (<svg onClick={() => {editToggle(map, show)}} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>) :
                                            (<svg onClick={() => {editToggle(map, show)}} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>)}
                                        </div>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Start Date:{" "}{dayjs(map.start).format('MMM D, YYYY')}</p>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">End Date:{" "}{dayjs(map.end).format('MMM D, YYYY')}</p>
                                        <div className="flex mt-4 justify-center">
                                            <div className="mx-4">
                                                <Button onClick={() => {setMapDisplay(map)}}>
                                                    Inspect
                                                </Button>
                                            </div>
                                            <div className="mx-4 bg-red-700">
                                                <Button onClick={(e) => {
                                                    e.preventDefault()
                                                    handleMapDelete(map)
                                                }}>
                                                    DELETE
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                )
                                : ""
                        }) : ""
                    }
                </div>
                <div className="flex">
                    <CreateNewMap fetchMaps={ fetchMaps }/>
                    {show && updateMap(mapUpdate)}
                </div>
            </div>
        </div>
    )
}
