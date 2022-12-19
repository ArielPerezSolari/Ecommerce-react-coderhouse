import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import  {Item}  from "../components/Item";
import { Layout } from "../components/layout/layout";
import { TrashWidget } from "../components/TrashWidget";
import { CartContext } from "../context/cartContext";
import './cart.css'


const CartView = () => {
  const navigate = useNavigate();
  const { productsAdded: items, totalAmount, clear } = useContext(CartContext);


  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <Layout>
      <div>
        {items.length === 0 ? (
          <div>
            <h2 >No has agregado productos</h2>
            <button className="button"
              onClick={() => navigate("/")}
              
            >
              Ir al Inicio
            </button>
          </div>
        ) : (
          <div>
            <div className="card-container">
              {items.map((product) => {
                const quantityAdded = product.quantityAdded;

                return (
                  <div className="item-cart itemCard">
                    <Item
                      product={product.item}
                      quantityAdded={quantityAdded}
                    />
                    <TrashWidget itemId={product.item.id} />
                  </div>
                );
              })}
            </div>
            <div>
              <div>
                <span>
                  Total a pagar: <strong>${totalAmount}</strong>
                </span>
                </div>
                <div>
                <button
                  onClick={goToCheckout}
                  className="button"
                >
                  Ir al Checkout
                </button>
                <button
                className="button"
                onClick={() => clear()}>Vaciar carrito</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartView