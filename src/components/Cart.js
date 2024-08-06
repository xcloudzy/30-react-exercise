import React from "react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartState, cartDispatch } = useCart();

  const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
    { id: 4, name: "Product D" },
  ];

  const addToCart = (item) => {
    const existingCartItem = cartState.cartItems.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingCartItem) {
      cartDispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: item.id, quantity: existingCartItem.quantity + 1 },
      });
    } else {
      cartDispatch({ type: "ADD_TO_CART", payload: { ...item, quantity: 1 } });
    }
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity > 0) {
      cartDispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: itemId, quantity },
      });
    }
  };

  const removeFromCart = (id) => {
    cartDispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  return (
    <>
      <div
        className="d-flex"
        style={{ justifyContent: "center", textAlign: "center" }}
      >
        <div style={{ width: "25%" }}>
          <h2>Shopping Cart</h2>
          <ul className="list-group bg-body-dark" data-bs-theme="dark">
            {cartState.cartItems.map((item) => (
              <li
                className="list-group-item"
                style={{ marginRight: "20px" }}
                key={item.id}
              >
                {item.name} - {item.quantity}
                <button
                  className="mx-2"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  className="mx-2"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button
                  className="mx-2"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ width: "20%" }}>
          <h2>Product List</h2>
          <ul className="list-group bg-body-dark" data-bs-theme="dark">
            {products.map((product) => (
              <li className="list-group-item" key={product.id}>
                {product.name}
                <button
                  style={{ marginLeft: "20px" }}
                  onClick={() => addToCart(product)}
                >
                  Add To Cart
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
