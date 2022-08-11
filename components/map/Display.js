import dayjs from "dayjs"
import UpdateMap from "./Update"
import { useState, useEffect } from "react"

export default function MapDisplay({ map }) {
    
    return (
        <div className="flex">
            <div className="">
                <div className="">
                    <h1>{map.title}</h1>
                    <p>Start Date:{" "}{dayjs(map.start).format('MMM D, YYYY')}</p>
                    <p>End Date:{" "}{dayjs(map.end).format('MMM D, YYYY')}</p>
                </div>
            </div>
            <div>
                <UpdateMap map={map}/>
            </div>
        </div>
    )
}