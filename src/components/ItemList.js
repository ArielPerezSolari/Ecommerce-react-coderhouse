import React from "react"
import Item from "./Item"
import '../App.css'




const ItemList = ({items}) => {
    return (
        <ul className="cardHolder">
            {items.map((item) => (
            <Item item={item} /> ))}
        </ul>
        
    )
}

export default ItemList