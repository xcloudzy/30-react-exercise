import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartState, cartDispatch } = useCart();
  const [copy, setCopy] = useState("");
  const codeString = `// Cart Context
import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const initialState = {
    cartItems: [],
  };

  function cartReducer(state, action) {
    // eslint-disable-next-line
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      case "UPDATE_QUANTITY":
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };

      case "REMOVE_FROM_CART":
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.id !== action.payload
          ),
        };
    }
  }

  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

// CART

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
      <div>
        <div>
          <h2>Shopping Cart</h2>
          <ul>
            {cartState.cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity}
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Product List</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                {product.name}
                <button onClick={() => addToCart(product)}>Add To Cart</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
`;

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

      {/* example code */}
      <div
        className="mt-4"
        style={{
          display: "flex",
          textAlign: "start",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            minWidth: "40%",
            backgroundColor: "#29344A",
            borderRadius: "10px",
          }}
        >
          <div className="d-flex justify-content-between px-4 text-white text-xs align-items-center">
            <p className="text-sm mt-3 ">Example Code</p>
            {copy ? (
              <button
                style={{ backgroundColor: "#29344A", outline: "none" }}
                className="mt-2 d-inline-flex align-items-center gap-1 mb-2"
              >
                <span className="text-base mt-1">
                  <ion-icon name="clipboard"></ion-icon>
                </span>
                Copied!
              </button>
            ) : (
              <button
                className="mt-2 d-inline-flex align-items-center gap-1 mb-2"
                onClick={() => {
                  navigator.clipboard.writeText(codeString);
                  setCopy(true);
                  setTimeout(() => {
                    setCopy(false);
                  }, 2000);
                }}
              >
                <span className="text-base mt-1">
                  <ion-icon name="clipboard"></ion-icon>
                </span>
                Copy Code
              </button>
            )}
          </div>
          <SyntaxHighlighter
            language="jsx"
            style={atomOneDark}
            customStyle={{
              padding: "25px",
              height: "100",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              marginBottom: 0,
            }}
            wrapLongLines={true}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
}
