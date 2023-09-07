import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
    addToCart,
    clearCart,
    decreaseCart,
    getTotals,
    removeFromCart,
} from "../../features/cartSlice";
import { Link } from "react-router-dom"; //
const Cart = () => {
    const cart = useSelector((state) => state.storecart); //njb el carte kemla 5tr fiha kol chy teba3 el carte : qte..
    const dispatch = useDispatch();
    const computeTotal = useCallback(() => {
        dispatch(getTotals());
    }, [cart, dispatch])
    useEffect(() => {
        computeTotal()
    }, [computeTotal])
    const handleAddToCart = useCallback((product) => {
        dispatch(addToCart(product));
    }, [dispatch])
    const handleDecreaseCart = useCallback((product) => {
        dispatch(decreaseCart(product));
    }, [dispatch])
    const handleRemoveFromCart = useCallback((product) => {

        dispatch(removeFromCart(product));
    }, [dispatch])
    const handleClearCart = useCallback(() => {
        dispatch(clearCart());
    }, [dispatch])
    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            {cart.cartItems.length === 0 ? ( //panier vide
                <div className="cart-empty">
                    <p>Panier Vide</p>
                    <div className="start-shopping"> {/*//lien bech narje3 lel liste des articles 5tr panier vide */}
                        <Link to="/articlescard">
                            <span>Start Shopping</span>
                        </Link>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="titles">
                        <h3 className="product-title">Product</h3>
                        <h3 className="price">Price</h3>
                        <h3 className="quantity">Quantity</h3>
                        <h3 className="total">Total</h3>
                    </div>
                    <div className="cart-items">
                        {cart.cartItems &&
                            cart.cartItems.map((cartItem) => (
                                <div className="cart-item" key={cartItem._id}>
                                    <div className="cart-product">
                                        <img src={`${cartItem.imageart}`} alt={cartItem.designation} />
                                        <div>
                                            <h3>{cartItem.designation}</h3>
                                            <p>{cartItem.reference}</p>
                                            {/* //Bouton remove pour supprimer l'article */}
                                            <button onClick={() => handleRemoveFromCart(cartItem)}>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                    <div className="cart-product-price"> {cartItem.prix} TND</div>
                                    <div className="cart-product-quantity">
                                        <button onClick={() => handleDecreaseCart(cartItem)}>
                                            -
                                        </button>
                                        <div className="count">{cartItem.cartQuantity}</div>
                                        <button onClick={() => handleAddToCart(cartItem)}>+</button>

                                    </div>
                                    <div className="cart-product-total-price">
                                        {/* //toFixed(3) : 3 chiffres aprè la virgule */}
                                        {(cartItem.prix * cartItem.cartQuantity).toFixed(3)} TND
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className="cart-summary">
                        <button className="clear-btn" onClick={() => handleClearCart()}>
                            Clear Cart
                        </button>
                        <div className="cart-checkout">
                            <div className="subtotal">
                                <span>Subtotal</span>
                                <span className="amount">{cart.cartTotalAmount.toFixed(3)}
                                    TND</span>
                            </div>
                            <p>Taxes and shipping calculated at checkout</p>

                            <button onClick={() => { dispatch(clearCart()) }}>
                                {<Link to={"/pay/" + cart.cartTotalAmount}
                                    style={{ "color": "yellow" }}>
                                    Validate and Pay
                                </Link>
                                }
                            </button>

                            <button>Check out</button>
                            <div className="continue-shopping">
                                <Link to="/">
                                    <span>Continue Shopping</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Cart;