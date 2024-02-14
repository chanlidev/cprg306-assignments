"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !quantity) {
      alert("Please provide a name and quantity.");
      return;
    }

    console.log(name, quantity, category);
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "300px",
        }}
      >
        <div className="m-4" style={{ width: "100%" }}>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Item Name"
            style={{
              color: "black",
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
            }}
            required
          />
        </div>
        <div
          className="m-4"
          style={{ display: "flex", gap: "10px", width: "100%" }}
        >
          <input
            id="quantity"
            type="number"
            value={quantity}
            min="1"
            max="99"
            onChange={(event) => setQuantity(Number(event.target.value))}
            style={{
              color: "black",
              width: "50%",
              padding: "10px",
              borderRadius: "8px",
            }}
            required
          />

          <select
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            style={{
              color: "black",
              width: "50%",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="m-4" style={{ width: "100%" }}>
          <button
            type="submit"
            style={{
              background: "blue",
              color: "white",
              padding: "10px",
              fontSize: "16px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            +
          </button>
        </div>
      </form>
    </main>
  );
}
