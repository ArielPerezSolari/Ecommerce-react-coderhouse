
import '../App.css'
import ItemList from './ItemList'
import { useGetItem } from "../hooks/useGetItem";



const ItemListContainer = ({greetings}) => {
    const items = useGetItem();

    return (
        <div className='itemListContainerMain'>
        <p>{greetings}</p>
        {!items ? (<p>Cargando productos...</p>):
        <ItemList products={items} /> }
        </div>
    )
}

export default ItemListContainer