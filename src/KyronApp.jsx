import React, { useState } from "react";
import kyronLogo from "./assets/kyron.png";

const PRODUCTS = [
  { id: 1, name: "Kyron T-Shirt", price: 999, image: kyronLogo },
  { id: 2, name: "Kyron Cap", price: 499, image: kyronLogo },
  { id: 3, name: "Kyron Hoodie", price: 1999, image: kyronLogo },
];

export default function KyronApp() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ fontFamily: "sans-serif", background: "#000", color: "#fff" }}>
      
      {/* NAVBAR */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        borderBottom: "1px solid #333"
      }}>
        <h2>KYRON</h2>
        <div>Cart: {cart.length}</div>
      </div>

      {/* HERO */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "60px",
        flexWrap: "wrap"
      }}>
        <div>
          <h1 style={{ fontSize: "48px" }}>KYRON STREETWEAR</h1>
          <p style={{ color: "#aaa" }}>
            Wear Your Identity 🚀
          </p>
        </div>

        <img src={kyronLogo} style={{ width: "300px" }} />
      </div>

      {/* PRODUCTS */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
        gap: "20px",
        padding: "40px"
      }}>
        {PRODUCTS.map((p) => (
          <div key={p.id} style={{
            border: "1px solid #333",
            padding: "20px",
            textAlign: "center"
          }}>
            <img src={p.image} style={{ width: "100%" }} />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button
              onClick={() => addToCart(p)}
              style={{
                padding: "10px",
                background: "#ff0000",
                border: "none",
                color: "#fff",
                cursor: "pointer"
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* CART */}
      <div style={{ padding: "20px", borderTop: "1px solid #333" }}>
        <h2>Cart</h2>
        {cart.map((item, i) => (
          <div key={i}>{item.name} - ₹{item.price}</div>
        ))}
        <h3>Total: ₹{total}</h3>

        <button
          onClick={() => alert("Razorpay integration next step 💰")}
          style={{
            padding: "12px",
            background: "#fff",
            color: "#000",
            border: "none",
            marginTop: "10px"
          }}
        >
          Checkout
        </button>
      </div>

      {/* FOOTER */}
      <div style={{
        textAlign: "center",
        padding: "20px",
        borderTop: "1px solid #333"
      }}>
        © 2026 KYRON
      </div>

    </div>
  );
}
