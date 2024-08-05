import React, { useState } from "react";

function Item({ name, category }) {
  // State to track if the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Event handler to toggle the cart state
  const toggleCart = () => {
    setInCart(!inCart);
  };

  return (
    <>
      {inCart ? (
        <li className="in-cart">
          {/* the item is in the cart */}
          <span>{name}</span>
          <span className="category">{category}</span>
          <button onClick={toggleCart}>
            Remove From Cart
          </button>
        </li>
      ) : (
        <li className="">
          {/* the item is NOT in the cart */}
          <span>{name}</span>
          <span className="category">{category}</span>
          <button onClick={toggleCart}>
            Add to Cart
          </button>
        </li>
      )}
    </>
  );
}

export default Item;
