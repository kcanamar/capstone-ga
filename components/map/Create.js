import { useState } from "react"
import useAuth from "../../hooks/useAuth"
import DatePicker from "react-date-picker/dist/entry.nostyle";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

export default function CreateNewMap({ fetchMaps }) {
    const {user, loading} = useAuth()
    const [title, setTitle] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [errMessage, setErrMessage] = useState("")

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
        <form>
          <div className="flex justify-center items-center">
			    <label htmlFor="map" className="invisible">Name of Map</label>
            <input
              className="w-72 h-12 border p-4 border-blue-100"
              type="text"
              value={title}
              placeholder="Quarter 1"
              onChange={titleChange}
              name="title"
            />{" "}
            <div className="my-8">
            <legend>Start Date</legend>
              <DatePicker
                className="p-4"
                minDate={new Date()}
                onChange={setStartDate}
                value={startDate}
              />
            </div>
            <fieldset className="my-8">
                <legend>End Date</legend>
              <DatePicker
                className="p-4"
                minDate={startDate}
                onChange={setEndDate}
                value={endDate}
              />
            </fieldset>
          </div>{" "}
          <button
            className="focus:outline-none focus:ring focus:border-blue-800
						px-6 py-2 rounded-xl bg-blue-500 text-blue-50 hover:bg-blue-800 
						font-semibold"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <p>{errMessage}</p>
        </form>
    )
}