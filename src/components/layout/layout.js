import Navbar from "../Navbar"
import '../../App.css'

export const Layout = ({children}) => {
    return(
        <main>
            <Navbar />
            {children}
        </main>
    )
}