"use client";

import { useState, useEffect } from "react";
import NewItem from "./new-item.js";
import ItemList from "./item-list.js";
import MealIdeas from "./meal-ideas.js";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(""); 

  // Function to load items from Firestore
  const loadItems = async () => {
    try {
      // Fetching shopping list items for the current user
      const user = supabase.auth.user();
      if (user) {
        const userItems = await getItems(user.id); 
        setItems(userItems); 
      }
    } catch (error) {
      console.error("Error loading items:", error);
    }
  };


  useEffect(() => {
    loadItems(); 
  }, []);

  const handleAddItem = async (newItem) => {
    try {

      const user = supabase.auth.user();
      if (user) {
        const newItemId = await addItem(user.id, newItem); 
        setItems(prevItems => [...prevItems, { id: newItemId, ...newItem }]); 
      }
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

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
        {selectedItemName && <MealIdeas ingredient={selectedItemName} />} 
      </div>
    </div>
  );
}

