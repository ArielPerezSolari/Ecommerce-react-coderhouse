import { useEffect, useState } from 'react'
import '../App.css'
import ItemList from './ItemList'
import {products} from '../mocks/item.mock'
import {useParams} from 'react-router-dom'




const ItemListContainer = ({greetings}) => {
    const {category} = useParams()
    const [items, setItems] = useState([])
    const [show, setShow] = useState(false)



    useEffect(() => {
        new Promise((resolve) => 
            setTimeout(() => {
            resolve(products);
            },2000)).then((data) => {
                if(category) {
                const categories = data.filter(
                    (product) => product.category === category
                );
                    setItems(categories)
                }else{
                    setItems(data)
                }
                
            }) 
            .then((data) => setShow(!data))

        },[category])




    

    return (
        <div className='itemListContainerMain'>
        <p>{greetings}</p>
        {!show ? (<p>Cargando productos...</p>):
        <ItemList items={items} /> }

        
        
        </div>



    )
}

export default ItemListContainer