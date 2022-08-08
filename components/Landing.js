import Image from 'next/image'
import { Button } from 'flowbite-react'
import landingImage from "../public/images/_road.jpeg"

export default function Landing() {
    return (
        <div className='container mx-auto my-auto align-center px-10 overflow-auto p-8'>
          <div className="" style={{display: "flex", alignItems: "center"}}>
            <div className="w-1/2 p-4 flex flex-col align-center">
              <Image
                src={landingImage}
                alt="The path to sucess"
              />
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Photo Credit: <a href="https://www.artmajeur.com/en/ucagunje/artworks/11967386/road-to-nowhere" target="_blank" rel="noreferrer">Dejan Gulicoski</a>
              </p>
            </div>
            <div className="p-4 m-10 max-w-md">
              <div className="p-4  text-left flex flex-col justify-center">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-thPrimary">
                  Let's create some landmark goals and set a path to hit all of them.
                </h1>
                <br/>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Using our platform you will be able to create a map to success on your terms. You set the goals, we help you identify the gaps.
                  <br/>
                  <br/>
                  We want you to succeed, partner with us to build a unique custom strategy to complete each goal.
                  Then set the benchmarks to create the accountablitiy and check each one off as you step ever closer to completing your goal.
                  <br/>
                  <br/>
                  Reached your goal?! Great Work! Time to enjoy the celebration we planned.
                  So what are you waiting for signup now a see what a map can do for you.
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