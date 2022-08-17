import { useState } from "react";

export default function CreateGoalForm({ map, fetchMaps, setMapDisplay }) {
    const [formInput, setFormInput] = useState({
        title: "",
        benchmark: "",
        tactic: "",
        celebration: "",
    })

    const handleChange = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await fetch("/api/goal", {
                method: "POST",
                body: JSON.stringify({
                    title: formInput.title,
                    benchmark: formInput.benchmark,
                    tactic: formInput.tactic,
                    celebration: formInput.celebration,
                    map: map._id,
                })
            })
            setFormInput({
                title: "",
                benchmark: "",
                tactic: "",
                celebration: "",
            })
            setMapDisplay(null)
            await fetchMaps()

        } catch (err) {
            return console.log(err)
        }
    }

    return (
        <div className="mx-4 p-4 text-center">
            <h1 className="text-2xl font-bold mx-4 mb-4 py-2">Create A New Goal</h1>
            <form onSubmit={handleSubmit} >
                    <div className="flex flex-col">
                        <input
                            type="text"
                            name="title"
                            value={formInput.title}
                            placeholder="What is your goal?"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="benchmark"
                            value={formInput.benchmark}
                            placeholder="What would be the benchmark?"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="tactic"
                            value={formInput.tactic}
                            placeholder="Describe the tactic that will be used."
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="celebration"
                            value={formInput.celebration}
                            placeholder="How do you plan to celebrate?"
                            onChange={handleChange}
                        />
                    </div>{" "}
                    <div className="mt-4">
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
}