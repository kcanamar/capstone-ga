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
                <input
                  className="h-8 mx-4"
                  type="text"
                  value={title}
                  placeholder="Name of New Map"
                  onChange={titleChange}
                  name="title"
                />{" "}
                <p>Start Date:</p>{" "}
                <DatePicker
                  className="p-4"
                  minDate={new Date()}
                  onChange={setStartDate}
                  value={startDate}
                />
                <div className="flex content-center">
                  <p>End Date:</p>{" "}
                  <DatePicker
                    className="p-4 mx-4"
                    minDate={startDate}
                    onChange={setEndDate}
                    value={endDate}
                  />
                </div>
                <Button className=""
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
          </form>
        </div>
    )
}