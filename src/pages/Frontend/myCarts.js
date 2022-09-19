import Breadcrumbs from "../../components/FrontComponent/Breadcrumbs";
import React, { useState, useEffect } from "react";
import Layout from "./Layout/Layout";
//
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  decreaseCart,
  addToCart,
  clearCart,
  getTotals,
} from "../../store/cartSlice";
import { NavLink } from "react-router-dom";

const Carts = () => {
  const [crumbs, setCrumbs] = useState(["Home", "View-Cart"]);
  const selected = (crumb) => {
    console.log(crumb);
  };

  //
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  //useffect call agian when the cart status changes like increase decrease or add
  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <Layout>
        <div id="cart">
          <div className="container">
            <Breadcrumbs crumbs={crumbs} selected={selected}></Breadcrumbs>
            <div className="section__title d-flex align-items-center justify-content-between">
              <h3>My Carts</h3>
            </div>
            <div className="cart-container">
              {cart.cartItems.length === 0 ? (
                <div className="cart-empty">
                  <p>Your cart is currently empty</p>
                  <div className="start-shopping">
                    <NavLink to="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-arrow-left me-2"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                        />
                      </svg>
                      Start Shopping
                    </NavLink>
                  </div>
                </div>
              ) : (
                <>
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
                          <div className="cart-item" key={cartItem.id}>
                            <div className="cart-product">
                              <img src={cartItem.image} alt={cartItem.name} />
                              <div>
                                <h4>{cartItem.title}</h4>
                                <p>
                                  {cartItem.description.substring(0, 100)}...
                                </p>
                                <button
                                  onClick={() => handleRemoveFromCart(cartItem)}
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                            <div className="cart-product-price">
                              ${cartItem.price}
                            </div>
                            <div className="cart-product-quantity">
                              <button
                                onClick={() => handleDecreaseCart(cartItem)}
                              >
                                -
                              </button>
                              <div className="count">
                                {cartItem.cartQuantity}
                              </div>
                              <button
                                onClick={() => handleIncreaseCart(cartItem)}
                              >
                                +
                              </button>
                            </div>
                            <div className="cart-product-total-price">
                              ${cartItem.price * cartItem.cartQuantity }
                            </div>
                          </div>
                        ))}
                    </div>
                    <div className="cart-summary pt-4 pb-4">
                      <button
                        className="clear-btn"
                        onClick={() => handleClearCart()}
                      >
                        Clear Cart
                      </button>
                      <div className="cart-checkout">
                        <div className="subtotal">
                          <span>Subtotal</span>
                          <span className="amount">
                            ${cart.cartTotalAmount.toFixed(4)}
                          </span>
                        </div>
                        <p>Taxes and shipping calculated at checkout</p>
                        <button>Check out</button>
                        <div className="continue-shopping">
                          <NavLink to="/">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="bi bi-arrow-left"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                              />
                            </svg>
                            <span>Continue Shopping</span>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Carts;
