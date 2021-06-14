import React, { createContext ,useState, useContext} from 'react'

export const CartContext = createContext(0)

export default function CartQty({ children, qty }) {

    // const CartContextQty = useContext(CartContext)
// const [quantity] = useState(qty)
//     console.log(quantity)

    return (
        <>
            {/* {qty>0 && ( */}
            <>
                <p>{qty}</p>
                <CartContext.Provider value={qty}>
                    {children}
                </CartContext.Provider>
            </>
           {/* )} */}
        </>
    )
}
