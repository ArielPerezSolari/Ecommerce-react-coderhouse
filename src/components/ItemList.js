import React from "react"
import Item from "./Item"
import '../App.css'




const ItemList = ({products}) => {
    return (
        <ul className="cardHolder">
            {products.map((product) => (
            <Item  product={product}  key={product.id} /> ))}
        </ul>
        
    )
}

export default ItemList