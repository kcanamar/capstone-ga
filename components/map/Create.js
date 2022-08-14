import { useState } from "react"
import useAuth from "../../hooks/useAuth"
import DatePicker from "react-date-picker/dist/entry.nostyle";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { Button } from "flowbite-react";

export default function CreateNewMap({ fetchMaps, setCreateShow }) {
    const {user, loading} = useAuth()
    const [title, setTitle] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    const titleChange = async (e) => {
        e.preventDefault()
        setTitle(e.target.value)
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (title.length === 0) {
            setErrMessage("Title, Celebration, Start, End needed")
        } else {
            await fetch("/api/map", {
                method: "POST",
                body: JSON.stringify({
                    user: user.email,
                    title: title,
                    start: startDate,
                    end: endDate,
                })
            })
            setTitle("")
            setStartDate("")
            setEndDate("")
            setCreateShow(false)
            fetchMaps()
        }
    }

    return (
        <div className="mx-4 p-4 text-center flex ">
          <svg onClick={() => {setCreateShow(false)}} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          <form className="flex content-center">
                <div className="flex flex-col content-center">
                  <p>Where do you want to get to?</p>
                  <input
                    className="h-8 mx-4 mt-4"
                    type="text"
                    value={title}
                    placeholder="Destination"
                    onChange={titleChange}
                    name="title"
                  />{" "}
                </div>
                <div className="flex flex-col content-center">
                  <p>Start Date:</p>{" "}
                  <DatePicker
                    className="p-4"
                    minDate={new Date()}
                    onChange={setStartDate}
                    value={startDate}
                  />
                </div>
                <div className="flex flex-col content-center">
                  <p>Arrival Date:</p>{" "}
                  <DatePicker
                    className="p-4 mx-4"
                    minDate={startDate}
                    onChange={setEndDate}
                    value={endDate}
                  />
                </div>
                <div className="mt-4">
                  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 h-10 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
          </form>
        </div>
    )
}