import Nav from "./nav"
import Socials from "./Socials"


export default function Layout({ children, home }) {

    return (
        <div>
            <header></header>
            <main>
                <Nav className="top-0"/>
                <div className="flex justify-center h-screen m-auto" style={{height: 100 + 'vh'}}>
                    {children}
                </div>
                <Socials className="bottom-0"/>
            </main>
        </div>
    )
}