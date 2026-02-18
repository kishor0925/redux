import React from 'react'

import { addToCart, removeCart } from '../Slice/CartSlice'
import { useDispatch, useSelector } from 'react-redux'

const Cartpage = () => {

    const { cartItems } = useSelector((state) => state.cart)
    const dispatch = useDispatch();

    return (
        <div>
            <div style={{ padding: "20px" }}>
                <h2>🛒 Your Cart</h2>

                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <>
                        <table
                            style={{
                                width: "100%",
                                borderCollapse: "collapse",
                                marginBottom: "20px",
                            }}
                        >
                            <thead>
                                <tr>
                                    <th style={{ borderBottom: "2px solid #ccc" }}>Image</th>
                                    <th style={{ borderBottom: "1px solid #ccc" }}>Product</th>
                                    <th style={{ borderBottom: "1px solid #ccc" }}>Price</th>
                                    <th style={{ borderBottom: "1px solid #ccc" }}>Quantity</th>
                                    <th style={{ borderBottom: "1px solid #ccc" }}>Total</th>
                                    <th style={{ borderBottom: "1px solid #ccc" }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>
                                                <img
                                                    src={item.img}
                                                    alt={item.title}
                                                    style={{
                                                        width: "80px",
                                                        height: "80px",
                                                        objectFit: "cover",
                                                        borderRadius: "8px"
                                                    }}
                                                />
                                            </td>

                                            <td>{item.title}</td>

                                            <td>₹{item.price}</td>

                                            <td>{item.quantity}</td>

                                            <td>₹{item.price * item.quantity}</td>

                                            <td>
                                                <button
                                                    onClick={() => dispatch(removeCart(item.id))}
                                                    style={{
                                                        padding: "5px 10px",
                                                        background: "red",
                                                        color: "#fff",
                                                        border: "none",
                                                        borderRadius: "5px",
                                                        cursor: "pointer"
                                                    }}
                                                >
                                                    ❌ Remove
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </>
                )}
            </div>
        </div>
    )
}

export default Cartpage
