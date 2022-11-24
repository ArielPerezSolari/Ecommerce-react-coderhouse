import '../App.css'
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {

    return (
      <div className="itemCard">
        <p>Name: {item.name}</p>
        <img src={item.img} alt={item.name} />
        <p>Description: {item.description}</p>
        <p>Price: {item.price}</p>
        <p>Stock: {item.stock}</p>
        <ItemCount />
      </div>
      
    );
  };
  
  export default ItemDetail;