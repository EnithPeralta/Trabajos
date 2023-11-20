import React, { useState } from 'react';
import M4 from '../Imagen/Girls/M4.jpg';

const CartPage = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 197;
  const total = (quantity * pricePerItem).toFixed(2);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  };  
  return (

    <div className="container col-2 mt-4 bg-light-subtle " style={{ boxShadow: '0 0 10px rgba(23, 32, 42)' }}>
      <h2 className='justify-content-center'>Shopping cart</h2>
      <ul>
        <img src={M4} alt="Producto 1" />
        <div className="detalles">
          <h3>Cachet</h3>
          <p>Price: $197,000</p>
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>
      </ul>
      <div className="total p-2 ">
        <p>Total: ${total}</p>
        <button>Go to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;




