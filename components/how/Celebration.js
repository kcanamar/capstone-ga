export default function MakeCelebration({ setHowTo }) {
    return (
        <div className="flex justify-center mb-4 p-4">
            <div>
            <svg onClick={() => {setHowTo(null)}} className="h-6" fill="" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                <div className="flex flex-col items-center mb-4 bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <div className="flex mx-4 p-4 justify-center">
                            <h5 className="mb-2 mx-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">W.I.I.F.M. (What&apos;s In It For Me) </h5>
                        </div>
                        <p className="mb-3 p-2 font-normal text-gray-700 dark:text-gray-400">
                            Explination of why a X is useful, the overarching philosophy.
                            <br/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                            quia. 
                            <br/>
                            <br/>
                            Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                            recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
                            minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
                            quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
                            fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
                            consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                            doloremque. Quaerat provident commodi consectetur veniam similique ad 
                            earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
                            fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
                            suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
                            modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
                            totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
                            quasi aliquam eligendi, placeat qui corporis! 
                        </p>
                        <div className="flex mx-4 p-4 justify-center">
                            <h5 className="mx-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Steps to consider when making X</h5>
                        </div>
                        <hr/>
                        <div className="flex justify-center">
                            <ul role="list" className="mt-4 space-y-4 text-gray-500 dark:text-gray-400">
                                <li className="flex space-x-2">
                                    <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    <span className="font-light leading-tight">Dynamic reports and dashboards</span>
                                </li>
                                <li className="flex space-x-2">
                                    <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    <span className="font-light leading-tight">Templates for everyone</span>
                                </li>
                                <li className="flex space-x-2">
                                    <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    <span className="font-light leading-tight">Development workflow</span>
                                </li>
                                <li className="flex space-x-2">
                                    <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    <span className="font-light leading-tight">Limitless business automation</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}