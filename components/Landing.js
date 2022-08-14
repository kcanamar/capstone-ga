import Image from 'next/image'
import { Button } from 'flowbite-react'
import landingImage from "../public/images/_road.jpeg"

export default function Landing() {
    return (
        <div className='flex container mx-auto mt-4 align-center px-10 overflow-auto p-8 justify-center'>
          <div className="mt-4" style={{display: "flex", alignItems: "center"}}>
            <div className="w-1/2 mt-4 p-4 flex flex-col align-center">
              <Image
                className='rounded'
                src={landingImage}
                alt="The path to sucess"
              />
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Photo Credit: <a href="https://www.artmajeur.com/en/ucagunje/artworks/11967386/road-to-nowhere" target="_blank" rel="noreferrer">Dejan Gulicoski</a>
              </p>
            </div>
            <div className="p-4 mx-4 max-w-lg">
              <div className="p-4 mx-4 w-full text-left flex flex-col justify-center">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-thPrimary">
                  Goals are just dreams until you have a Janus.
                </h1>
                <br/>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Introducing Janus, a time managment solution. 
                  The Romans, one of the most influential civilizations in western history, trusted Janus the god of beginnings, transitions, and ends to guide their endeavors.
                  <br/>
                  <br/>
                  Today, we use Janus to illuminate our path to business and perosnal succes.
                  You choose the goal and Janus will use its power to advise you on how to make the next move your best move. It achomplishes this by providing insights on how to construct effective tactics, benchmarks, and celebrations. Everyone deserves to celebrate more.
                  <br/>
                  <br/>
                  Are you ready to start living on purpose with purpose? Register below and find out how Janus can change your life.
                </p>
                <div className="p-5 m-auto">
                  <Button href='/login'>
                    Register
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}