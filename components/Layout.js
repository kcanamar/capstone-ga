import Nav from "./nav"
import Socials from "./Socials"


export default function Layout({ children, home }) {

    return (
        <div>
            <header></header>
            <main className="h-screen">
                <Nav className="top-0"/>
                <div className="m-auto flex flex-col overflow-hidden overflow-y-auto overscroll-contain" style={{height: 100 + 'vh', padding: 3 + "rem", alignItems: "center"}}>
                    {children}
                </div>
                <Socials className="bottom-0 flex-grow"/>
            </main>
        </div>
    )
}