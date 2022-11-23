import { useState } from "react"
import '../App.css'
import Swal from 'sweetalert2'


//Componente contador
const ItemCount = () =>{
    const stock = 3
    //Estado del contador inicializado en 0
    const [counter, setCounter] = useState(0)

    //Funcion que incrementa el contador
    const increment = () => {
        if(counter < stock){
            setCounter(counter + 1)
        }else{
            Swal.fire(
                'No puedes superar el stock',
                '',
                'warning'
            )
        }
        
    }

    //Funcion que reduce el contador
    const decrement = () => {
        if (counter >  0){
            setCounter(counter - 1)
        } else {
            setCounter(0)
        }
        
    }
    //Funcion que añade la cantidad seleccionada y dispara un alerta avisandole al usuario despues reinicia el state del contador
    const onAdd = () =>{
        if(counter > 0){
            Swal.fire(
                'Agregaste un producto',
                '',
                'success'
              )
        setCounter(0)
        }
        
    }

    return(
        <div className="quantityContainer">
            <div className="quantitySelector">
                <button onClick={increment}>+</button>
                <p>{counter}</p>
                <button onClick={decrement}>-</button>
            </div>
            <button className="quantityAdd" onClick={onAdd} >Agregar</button>
        </div>
    )
}

export default ItemCount
