import cart from '../assets/cart.png'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { CartContext } from "../context/cartContext";
import { useContext} from "react";




const CartWidget = () => {
  const { productsAdded } = useContext(CartContext);
  const navigate = useNavigate()
  

  let count = productsAdded.length;



    return (
    <>
        <button className='cartWidget' onClick={() => navigate("/cart")} ><img src={cart} alt="cart widget" />{count}</button>
      </>
    )
    
    

    
}

export default CartWidget