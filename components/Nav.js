import { Navbar } from "flowbite-react"
import Exit from "./Exit"
import useAuth from "../hooks/useAuth"

export default function Nav() {
    const { user } = useAuth()
    return (
        <Navbar
        fluid={true}
      >
        <Navbar.Brand>
          {/* <img
            src="https://via.placeholder.com/350x150"
            className="mr-3 h-6 sm:h-9"
            alt="Logo"
          /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Janus
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          { !user ? (<Navbar.Link
            href="/login"
          >
                Login
          </Navbar.Link>) :
          <Navbar.Link >
                <Exit/>
          </Navbar.Link>}
        </Navbar.Collapse>
      </Navbar>      
    )
}