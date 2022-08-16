

export default function Goal({goal}) {

    return (
        <li className="flex space-x-2 justify-center">
            <div className="mt-4 pt-4">
                <div className="flex items-center h-5 ml-1 mt-2">
                    <input type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"/>
                </div>
                <div className="pt-4 text-red-800">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                </div>
            </div>
            <div className="">
                <ul>
                    <li>
                        <label className="text-sm font-medium text-gray-900 dark:text-gray-300">Goal{" "}<hr/></label>
                        <span className="font-light leading-tight">{goal.title}</span>
                    </li>
                    <li>
                        <label className="text-sm font-medium text-gray-900 dark:text-gray-300">Benchmark{" "}{goal.completedOn ? `Completed On: ${dayjs(goal.completedOn).format('MMM D, YYYY')}` : null}<hr/></label>
                        <span className="font-light leading-tight">{goal.benchmark}</span>
                    </li>
                    <li>
                        <label className="text-sm font-medium text-gray-900 dark:text-gray-300">Tactic{" "}<hr/></label>
                        <span className="font-light leading-tight">{goal.tactic}</span>
                    </li>
                    <li>
                        <label className="text-sm font-medium text-gray-900 dark:text-gray-300">Celebration{" "}<hr/></label>
                        <span className="font-light leading-tight">{goal.celebration}</span>
                    </li>
                </ul>
            </div>
        </li>
    )
}