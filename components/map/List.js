import dayjs from "dayjs"
import { AppContext } from "../../pages/dashboard"
import { useContext, useState } from "react"
import { Button } from "flowbite-react"
import { getMapIds } from "../../lib/map"
import Display from './Display'

export default function MapList({ mapList, user}) {
    const { handleMapDelete, fetchMaps } = useContext(AppContext)
    const [show, setShow] = useState(false)

    const handleToggle = (map) => {
        if (!show) {

        }
    }
    return (
        <div>
            <div className="flex flex-col">
                {
                    mapList.length >= 1
                    ? mapList.map((map) => {
                        return user.email === map.user
                            ? (
                                <div key={map._id} className=" text-center p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{map.title}</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Start Date:{" "}{dayjs(map.start).format('MMM D, YYYY')}</p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">End Date:{" "}{dayjs(map.end).format('MMM D, YYYY')}</p>
                                    <div className="flex mt-4 justify-center">
                                        <div className="mx-4">
                                            <Button >
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
            <div>
                {show && <Display map={map}/>}
            </div>
        </div>
    )
}
