import React from "react";
import "./Product.css";
import { useStateValue } from '../StateProvider';

const Product = ({ id, title, price, rating, image }) => {
    const [{},dispatch]=useStateValue();
    const addToBasket=()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                rating:rating,
                price:price,
            }
        })
    };

    return (
        <div className="product">
            <img src={image} alt={title} />
            <div className="product__info">
                <p>{title}</p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p>⭐</p>
                            ))
                    }
                </div>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    );
};

export default Product;
