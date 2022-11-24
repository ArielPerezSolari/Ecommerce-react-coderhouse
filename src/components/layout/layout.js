import Navbar from "../Navbar"

export const Layout = ({children}) => {
    return(
        <main>
            <Navbar />
            {children}
        </main>
    )
}