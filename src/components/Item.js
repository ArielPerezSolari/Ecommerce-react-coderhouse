
import { useNavigate } from "react-router-dom";
import { useGetItemImg } from "../hooks/useGetItemImg";







export const Item = ({product, quantityAdded}) => {
    const navigate = useNavigate();
    const img = useGetItemImg(product.img)
    
    function handleNavigate() {
        navigate(`/item/${product.id}`);
    }
    
    return (
        <div className="itemCard">
            <img src={img} alt={product.name}/> 
            <li>{product.name}</li>
            <p>Price: $ {product.price}</p>
            {quantityAdded > 0 && <p>Cantidad en carrito: {quantityAdded}</p>}
            
            <button className="button" onClick={handleNavigate}>
                detail
                </button>
            </div>
    );
};

export default Item

