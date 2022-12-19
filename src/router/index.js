import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Cart from '../views/cart'
import CategoryView from '../views/category'
import Checkout from "../views/checkout";
import ItemView from '../views/Item'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: "/category/:category",
        element: <CategoryView />
    },
    {
        path: "/item/:id",
        element: <ItemView />
    },
    {
        path: "/cart",
        element: <Cart />
    },
    {
        path: "/checkout",
        element: <Checkout />
    }
])