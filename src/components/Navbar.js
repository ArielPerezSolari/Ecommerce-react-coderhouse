import CartWidget from "./CartWidget"
import '../App.css'

const Navbar = () => {
    return(
        <nav className="nav">
            <h1>Dazed Shop</h1>
            <ul className="navList" >
                <li><a href="#">Home</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default Navbar