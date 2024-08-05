import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // Step 1: Create a state variable to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Step 2: Handle changes to the <select> element
  const handleFilterChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Step 3: Filter items based on the selected category
  const filteredItems = items.filter(item => 
    selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selectedCategory} onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
