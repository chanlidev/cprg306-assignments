"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");
  const [groupedByCategory, setGroupedByCategory] = useState(false);

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = groupedByCategory
    ? sortedItems.reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
      }, {})
    : null;

  const handleSortByName = () => {
    setSortBy("name");
    setGroupedByCategory(false);
  };

  const handleSortByCategory = () => {
    setSortBy("category");
    setGroupedByCategory(false);
  };

  const handleGroupByCategory = () => {
    setSortBy("category");
    setGroupedByCategory(true);
  };

  return (
    <div className="mt-4">
      <div className="flex space-x-4">
        <span className="mr-2">Sort by:</span>
        <button
          onClick={handleSortByName}
          className={`p-2 focus:outline-none ${
            sortBy === "name" && !groupedByCategory
              ? "bg-blue-500"
              : "bg-gray-300"
          }`}
        >
          Name
        </button>
        <button
          onClick={handleSortByCategory}
          className={`p-2 focus:outline-none ${
            sortBy === "category" && !groupedByCategory
              ? "bg-blue-500"
              : "bg-gray-300"
          }`}
        >
          Category
        </button>
        <button
          onClick={handleGroupByCategory}
          className={`p-2 focus:outline-none ${
            groupedByCategory ? "bg-blue-500" : "bg-gray-300"
          }`}
        >
          Grouped Category
        </button>
      </div>

      <ul className="mt-4">
        {groupedItems
          ? Object.keys(groupedItems).map((category) => (
              <li key={category} className="mt-2">
                <div className="font-bold capitalize">{category}</div>
                <ul>
                  {groupedItems[category].map((item) => (
                    <Item key={item.id} {...item} />
                  ))}
                </ul>
              </li>
            ))
          : sortedItems.map((item) => <Item key={item.id} {...item} />)}
      </ul>
    </div>
  );
}
