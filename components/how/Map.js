export default function MakeMap({ setHowTo }) {
    return (
        <div className="flex justify-center mb-4 p-4">
            <div>
            <svg onClick={() => {setHowTo(null)}} className="h-6 float-right" fill="" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                <div className="flex flex-col items-center mb-4 bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <div className="flex mx-4 p-4 justify-center">
                            <h5 className="mb-2 mx-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Steps to consider when making a map</h5>
                        </div>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}