import React, { createContext, useState, useContext } from 'react'

export const CartContext = createContext()

export default function CartQty({ children, qty }) {

    // const CartContextQty = useContext(CartContext)
    // const [quantity , setQuantity] = useState(qty)
    // console.log(quantity)
// const quantity = qty.toString()
    return (
        <>
          
                 <p>{qty}</p>
                <CartContext.Provider value={qty}>
                   
                    {children}
                </CartContext.Provider>
           
        </>
    )
}
