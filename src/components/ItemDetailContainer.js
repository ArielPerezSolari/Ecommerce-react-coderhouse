import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../App.css'
import ItemDetail from "./ItemDetail";
import {products} from '../mocks/item.mock'



const ItemDetailContainer = () => {
  const {id} = useParams()
    const [item, setItem] = useState(undefined);
  
    useEffect(() => {
      new Promise((resolve) =>
        
        setTimeout(() => resolve(products.find((item) => item.id === id)), 1000)
      ).then((data) => setItem(data));
    }, [id]);
  
    if (!item) {
      return <p>Cargando Producto...</p>;
    }
  
    return <ItemDetail  item={item} />;
  };
  
  export default ItemDetailContainer;