import React from 'react';

function Checkout() {
  return (
    <div>
      <h1>Checkout</h1>
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" />
        </label>
        <br />
        <label>
          Address:
          <input type="text" />
        </label>
        <br />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;