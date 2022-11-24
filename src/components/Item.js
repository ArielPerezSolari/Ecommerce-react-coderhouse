
import { useNavigate } from "react-router-dom";







const Item = ({item}) => {
    const navigate = useNavigate();

    function handleNavigate() {
        navigate(`/item/${item.id}`);
      }
    
    return (
        <div className="itemCard">
            <img src={item.img} alt={item.name}/> 
            <li>{item.name}</li>
            <p>Price: {item.price}</p>
            <button onClick={handleNavigate}>
                detail
                </button>
            </div>
    );
};

export default Item

