import { useGetItem } from '../hooks/useGetItem';
import { useGetItemImg } from '../hooks/useGetItemImg';
import '../App.css'
import ItemDetail from "./ItemDetail";




const ItemDetailContainer = () => {
  const item = useGetItem();
  
    if (!item) {
      return <p>Cargando Producto...</p>;
    }
  
    return <ItemDetail  item={item} />;
  };
  
  export default ItemDetailContainer;