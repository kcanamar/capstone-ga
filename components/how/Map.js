export default function MakeMap({ setHowTo }) {
    return (
        <div className="flex justify-center mb-4 p-4">
            <div>
            <svg onClick={() => {setHowTo(null)}} className="h-6" fill="" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                <div className="flex flex-col items-center mb-4 bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <div className="flex mx-4 p-4 justify-center">
                            <h5 className="mb-2 mx-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Map to where and for how long?</h5>
                        </div>
                        <p className="mb-3 p-2 font-normal text-gray-700 dark:text-gray-400">
                            Life is full of distractions, we all have that go to excuse, &quot;If only...&quot; , &quot;I would have but...&quot;, etc.
                            Janus offers a solution to elminate those excuses.
                            <br/>
                            <br/>
                            By creating a map, your in the driver seat planning out what commitments you want to keep.
                            Contrary to traditional maps Janus suggests starting with the destination.
                            <br/>
                            <br/>
                            Chosing a destination can seem daunting, but it can be as simple as &quot;I want to stop bitting my nails&quot; or &quot;I want to learn a new dance&quot; even as vauge as &quot;I want to explore my my surrondings.&quot;  
                            <br/>
                            <br/>
                            Once you have a destination in mind, you need to plan your date of arrival.
                            It is important to set a timeline that is challenging enough to keep you focused on your destination.
                            Yet loose enough to accomidate the roadblocks, that inevitably arise along the way.
                            <br/>
                            <br/>
                            If your destination is &quot;To learn something new&quot; for example, two weeks may not be enough time.
                            It is important to confront your reality in regards to how you keep commitments. Janus can assist in creating the map but ultimately your the one accountable for your progress.
                        </p>
                        <div className="flex mx-4 p-4 justify-center">
                            <h5 className="mx-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Steps to consider when making Map</h5>
                        </div>
                        <hr/>
                        <div className="flex justify-center">
                            <ul role="list" className="mt-4 space-y-4 text-gray-500 dark:text-gray-400">
                                <li className="flex space-x-2 text-center">
                                    <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    <span className="font-light leading-tight">Set A Destination</span>
                                </li>
                                <li className="flex space-x-2 text-center">
                                    <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    <span className="font-light leading-tight">Plan An Arrival Date</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}