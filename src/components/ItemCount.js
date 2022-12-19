
import '../App.css'


//Componente contador
export const ItemCount = ({ count, handleCount }) => {


    return(
        <div className="quantityContainer">
            <div className="quantitySelector">
                <button onClick={() => handleCount("plus")}>+</button>
                <p>{count}</p>
                <button onClick={() => handleCount("minus")}>-</button>
            </div>
        </div>
    )
}

export default ItemCount
