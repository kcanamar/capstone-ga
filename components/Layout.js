import Nav from "./nav"
import Socials from "./Socials"

export default function Layout({ children, home }) {
    return (
        <div>
            <header></header>
            <main>
                <Nav />
                {children}
                <Socials />
            </main>
        </div>
    )
}