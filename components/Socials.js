import { Footer } from "flowbite-react"
import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs'

export default function Socials() {
    return (
        <Footer >
                <div className="w-4/5 flex mx-auto">
                    <div className="p-4 m-auto">
                        <Footer.Copyright
                            href="#"
                            by="Janus™"
                            year={2022}
                        />
                    </div>
                    <div className="flex p-4 m-auto">
                        <div className="p-2">
                            <Footer.Icon
                            href="https://www.linkedin.com/in/kyle-canamar/"
                            icon={BsLinkedin}
                            />
                        </div>
                        <div className="p-2">
                            <Footer.Icon
                            href="https://twitter.com/funcy_koder"
                            icon={BsTwitter}
                            />
                        </div>
                        <div className="p-2">
                            <Footer.Icon
                            href="https://github.com/kcanamar"
                            icon={BsGithub}
                            />
                        </div>
                    </div>
                </div>
        </Footer>
    )
}