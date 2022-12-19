import '../App.css'


import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { useGetItemImg } from "../hooks/useGetItemImg";
import { ItemCount } from "./ItemCount";

const ItemDetail = ({ item }) => {
  const { addItem, isInCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [currentStock, setCurrentStock] = useState(item.stock);
  const [newStock, setNewStock] = useState(currentStock)
  const maxQuantity = currentStock;
  const img = useGetItemImg(item.img);


  

  function handleCount(type) {
    if (type === "plus" && count < maxQuantity) setCount(count + 1);
    if (type === "minus" && count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (currentStock < count) alert("No hay suficiente stock de este producto");
    else {
      setCurrentStock(currentStock - count);
      addItem(item, count);

    }
  }


  function handleCheckout() {
    navigate("/cart");
  }


console.log({item})
  

    return (
      <div className="itemCard detailed-shadow">
        <p>Name: {item.name}</p>
        <img  className='detailed-shadow' src={img} alt={item.name} />
        <p>Description: {item.description}</p>
        <p>Price: {item.price}</p>
        <p>Stock: {currentStock}</p>
        <ItemCount count={count} handleCount={handleCount} disabled={!isInCart} item={item.id} />
        <button className="quantityAdd" onClick={handleAdd} disabled={currentStock === 0} >Agregar</button>
        <button className='button'
                onClick={handleCheckout}
              >Ver en carrito</button>
      </div>
      
    );
  };export default ItemDetail;