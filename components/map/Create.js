import { useState } from "react"
import useAuth from "../../hooks/useAuth"
import DatePicker from "react-date-picker/dist/entry.nostyle";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { Button } from "flowbite-react";

export default function CreateNewMap({ fetchMaps }) {
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
            fetchMaps()
        }
    }

    return (
        <div className="mx-4 p-4 text-center flex ">
          <form className="flex flex-col justify-center">
              <div className="">
                <input
                  className=""
                  type="text"
                  value={title}
                  placeholder="Name of New Map"
                  onChange={titleChange}
                  name="title"
                />{" "}
                <legend>Start Date</legend>
                <DatePicker
                  className="p-4"
                  minDate={new Date()}
                  onChange={setStartDate}
                  value={startDate}
                />
                <legend>End Date</legend>
                <DatePicker
                  className="p-4"
                  minDate={startDate}
                  onChange={setEndDate}
                  value={endDate}
                />
                <Button className=""
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
          </form>
        </div>
    )
}