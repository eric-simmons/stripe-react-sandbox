import Button from 'react-bootstrap/Button'
import { CartContext } from '../CartContext'
import { useContext } from 'react'
import { getProductData } from '../productStore'
const CartProduct = ({ id, quantity }) => {
    const cart = useContext(CartContext)
    const productData = getProductData(id)


    return (
        <>
            <h3>{productData.title}</h3>
            <p>{quantity} total</p>
            <p>$ {quantity* productData.price}</p>
            <Button size = "sm" onClick= {() => cart.deleteFromCart(id)}>Remove</Button>
            <hr></hr>
        </>
    )
}

export default CartProduct