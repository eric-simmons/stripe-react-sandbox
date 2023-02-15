import { createContext, useState } from "react";
import { productsArr, getProductData } from "./productStore";

const CartContext = createContext({
    items: [],
    getProductQuantity: () => { },
    addOneToCart: () => { },
    removeOneFromCart: () => { },
    deleteFromCart: () => { },
    getTotalCost: () => { }
})

export function CartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([])


    getProductQuantity = (id) => {
        cartProducts.find(product => product.id === id)?.quantity
        if (quantity === undefined) {
            return 0
        }
        return quantity
    }
    addOneToCart = (id) => {
        const quantity = getProductQuantity(id)
        if (quantity === 0) {
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id,
                        quantity: 1
                    }
                ]
            )
        } else {
            setCartProducts(
                cartProducts.map(product => {
                    product.id === id
                        ? {
                            ...product,
                            quantity: product.quantity + 1
                        }
                        : product
                })
            )

        }

    }
    deleteFromCart = (id) => {
        setCartProducts(
            cartProducts =>
                cartProducts.filter(product => {
                    return product.id != id
                })
        )
    }
    removeOneFromCart = (id) => {
        const quantity = getProductQuantity(id)
        if (quantity == 1) {
            deleteFromCart(id)
        } else {
            setCartProducts(
                cartProducts.map(product => {
                    product.id === id
                        ? {
                            ...product,
                            quantity: product.quantity - 1
                        }
                        : product
                })
            )
        }
    }
    getTotalCost = () => {
        let totalCost = 0
        cartProducts.map(product => {
            const productData = getProductData(product.id)
            totalCost += (productData.price * product.quantity)
        })
        return totalCost
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider