import React from 'react'
import './Checkout.css'
import { useStateValue } from '../StateProvider'
import CartProduct from './CartProduct'
import Subtotal from './Subtotal'
import CurrencyFormat from 'react-currency-format'
const Checkout = () => {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                {
                    basket?.length === 0 ? (
                        <div className="checkout__title">
                            <h2>Your Cart is Empty</h2>
                            <p>There is no item in your cart. So first you can add item in cart</p>
                        </div>
                    ) : (
                        <div >
                            <h2 className="checkout__title">Your Shopping cart</h2>
                            {basket?.map(item => (
                                <CartProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    )
                }
            </div>
            {
                basket.length>0 &&(
                    <div className="checkout__right">
                        <Subtotal/>
                    </div>
                )
            }
        </div>
    )
}

export default Checkout
