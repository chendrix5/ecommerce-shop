import React from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";

export const Cart = () => {
    const { cartItems } = useContext(ShopContext);
    return (
        <div className="cart">
            <div>
                <h1>
                    Your Cart items
                </h1>
            </div>
            <div className="cartItems">
            {PRODUCTS.map((product) =>{
                if (cartItems[product.id] !== 0) {
                    return <CartItem data={product} />
                }
            })}
            </div>
        </div>
    )
}