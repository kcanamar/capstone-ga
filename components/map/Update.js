import { useState } from "react"

export default function UpdateMap({ map }) {
    const [title, setTitle] = useState(map.title)
    const [errMessage, setErrMessage] = useState("")

    const titleChange = async (e) => {
        e.preventDefault()
        setTitle(e.target.value)
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (title.length === 0) {
            setErrMessage("Title needed")
        } else {
            await fetch("/api/map", {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: map,
                    title: title,
                })
            })
        }
    }

    return (
        <div className="text-center">
            <h1>Update Map</h1>
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
        </div>
    )
}