
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Carrito from '../Imagen/Cart/carrito-de-compras.png';

const CardComponent = ({ name, price, img, buyProduct }) => {
  const [isHovered, setIsHovered] = useState(false);

  const styleCarrito = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    color: isHovered ? 'red' : 'black',
    transition: 'color 0.3s',
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="col-sm-6 mb-3 mb-sm-0 card m-3 container_card" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Pricen: {price}</p>
        <div className='row justify-content-center gap-3 '>
          <div class="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-outline-primary" onClick={() => buyProduct(name)}>Buy</button>
          </div>
        </div>
        <Link to="/CartPage">
          <img
            src={Carrito}
            alt="Carrito de compras"
            style={styleCarrito}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </Link>
      </div>
    </div>
  );
};
export default CardComponent;

