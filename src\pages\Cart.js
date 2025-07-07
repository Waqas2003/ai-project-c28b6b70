import React, { useState } from 'react';

function Cart() {
  const [cart, setCart] = useState({});

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {Object.keys(cart).map(productId => (
          <li key={productId}>
            {cart[productId].name} x {cart[productId].quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;