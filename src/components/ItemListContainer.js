import { useState } from 'react'
import '../App.css'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

const products = [
{id: "1", name: "Neo Alien", description: "Alien bla bla bla", category: "Neo", price: 200, stock: 3, img: require('../assets/neoalien.png')},
{id: "2", name: "Neo Alien2", description: "Alien bla bla bla", category: "Neo", price: 500, stock: 1, img: require('../assets/neoalien2.png')},
{id: "3", name: "Oil Alien", description: "Alien bla bla bla", category: "Oil", price: 150, stock: 2, img: require('../assets/oilalien.png')},
{id: "4", name: "Oil Alien 2", description: "Alien bla bla bla", category: "Oil", price: 200, stock: 5, img: require('../assets/oilalien2.png')},
{id: "5", name: "Surreal Alien", description: "Alien bla bla bla", category: "Surreal", price: 300, stock: 2, img: require('../assets/surrealalien.png')},
{id: "6", name: "Surreal Alien 2", description: "Alien bla bla bla", category: "Surreal", price: 250, stock: 1, img: require('../assets/surrealalien2.png')}

]


const ItemListContainer = ({greetings}) => {
   const [items, setItems] = useState([])

    const productList = new Promise((resolve) => 
        setTimeout(() => {
            resolve(products);
        },2000))

productList.then((data) => setItems(data))


    

    return (
        <div className='itemListContainerMain'>
        <p>{greetings}</p>
        <ItemList items={items} />
        <ItemCount />
        
        
        </div>



    )
}

export default ItemListContainer