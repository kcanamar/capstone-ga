import { Navbar } from "flowbite-react"

export default function Nav() {
    return (
        <Navbar
        fluid={true}
        rounded={true}
      >
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://via.placeholder.com/350x150"
            className="mr-3 h-6 sm:h-9"
            alt="Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Logo
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            href="/navbars"
            active={true}
          >
                Login
          </Navbar.Link>
          <Navbar.Link href="/navbars">
                Logout
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>      
    )
}