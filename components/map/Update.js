import { useState, useContext } from "react"
import { AppContext } from "../../pages/dashboard"

export default function UpdateMap({ map, setShow }) {
    const { fetchMaps } = useContext(AppContext)
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

            fetchMaps()
            setShow(false)
        }
    }

    return (
        <div className="text-center mx-4 p-5">
            <svg onClick={() => {setShow(false)}} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            <h1 className="text-2xl font-bold">Update your map&apos;s destination below</h1>
            <form className="mt-4">
              <div className="flex justify-center items-center">
                <input
                  className="block py-2.5 text-center px-0 w-1/2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-nonedark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600"
                  type="text"
                  value={title}
                  placeholder="What is your destination?"
                  onChange={titleChange}
                  name="title"
                />{" "}
              </div>
              <button
                className="text-white mt-4 bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                onClick={handleSubmit}
              >
                Update
              </button>
              <p>{errMessage}</p>
            </form>
        </div>
    )
}