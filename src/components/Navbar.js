import CartWidget from "./CartWidget"
import '../App.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className="nav">
            <h1>
                <Link to="/">
                Dazed Shop
                </Link>
            </h1>
            <ul className="navList" >
                <li>
                    <Link
                    to="/">
                    Home
                    </Link>
                </li>
                <li>
                    <Link
                    to="/category/oil">
                    Oil Paintings
                    </Link>
                </li>
                <li>
                    <Link
                    to="/category/surreal">
                    Surreal Paintings
                    </Link>
                </li>
                <li>
                    <Link
                    to="/category/neo">
                    Neo Paintings
                    </Link>
                </li>
            </ul>
            <CartWidget  />
        </nav>
    )
}

export default Navbar