import { useState } from "react"
import { useRouter } from "next/router"

export default function UpdateMap({ map }) {
    const [title, setTitle] = useState(map.title)
    const [errMessage, setErrMessage] = useState("")
    const router = useRouter()

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

            router.reload()
        }
    }

    return (
        <div className="text-center mx-4 p-5">
            <h1 className="text-2xl font-bold">Update your map title below</h1>
            <form className="mt-2">
              <div className="flex justify-center items-center">
                <input
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-nonedark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600"
                  type="text"
                  value={title}
                  placeholder="Quarter 1"
                  onChange={titleChange}
                  name="title"
                />{" "}
              </div>
              <button
                className="text-white mt-2 bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                onClick={handleSubmit}
              >
                Update
              </button>
              <p>{errMessage}</p>
            </form>
        </div>
    )
}