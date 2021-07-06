import React from 'react'
import './CartProduct.css'
import { useStateValue } from '../StateProvider'

const CartProduct = ({id,title,image,price,rating}) => {
    const [{basket},dispatch]=useStateValue();

    const removeFromCart=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })
    }
    return (
        <div className="cartProduct">
            <img src={image} alt="" />
            <div className="cartProduct__info">
                <h3>{title}</h3>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p>⭐</p>
                            ))
                    }
                </div>
                <p>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <button onClick={removeFromCart}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CartProduct
