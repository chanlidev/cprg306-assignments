"use client";

import React, { useState } from "react";
import NewItem from "./new-item.js";
import ItemList from "./item-list.js";
import MealIdeas from "./meal-ideas.js";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(""); 

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName.replace(/,.*|(\d+\s*([a-zA-Z]+\s*)?)|(\p{Emoji_Presentation})/gu, '').trim();
    setSelectedItemName(cleanedItemName);
  };

  return (
    <div className="flex">
      <div className="p-4">
        <h1 className="m-4 text-3xl font-bold">Shopping List</h1>
        <NewItem onAddItem={(newItem) => setItems((prevItems) => [...prevItems, newItem])} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      <div className="p-4 mt-10">
        {selectedItemName && <MealIdeas ingredient={selectedItemName} />} {/* Pass selectedItemName as a prop */}
      </div>
    </div>
  );
}

