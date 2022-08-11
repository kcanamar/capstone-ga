import dayjs from "dayjs"
import { AppContext } from "../../pages/dashboard"
import { useContext } from "react"
import { Button } from "flowbite-react"
import CreateMap from "./Create"
import { getMapIds } from "../../lib/map"

export default function MapList({ mapList, user}) {
    const { handleMapDelete, fetchMaps } = useContext(AppContext)
    // let pathIds = []
    // if (mapList) {
    //     let mapIds = mapList.map((map) => {return {params: {id: map._id}}})
    //     pathIds = mapIds
    // }
    // let bob = getMapIds()
    // console.log(bob)
    return (
        <div>
            {
                mapList.length >= 1 
                ? mapList.map((map) => {
                    return user.email === map.user 
                        ? (
                            <div key={map._id}className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{map.title}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Start Date:{" "}{dayjs(map.start).format('MMM D, YYYY')}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">End Date:{" "}{dayjs(map.end).format('MMM D, YYYY')}</p>
                                <a href={`/map/${map._id}`} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Inspect
                                </a>
                                <Button onClick={(e) => {
                                    e.preventDefault()
                                    handleMapDelete(map)
                                }}>
                                    DELETE
                                </Button>
                            </div>
                        )
                        : ""
                }) : ""
            }
            <CreateMap fetchMaps={fetchMaps}/>
        </div>
    )
}
