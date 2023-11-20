import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import CardComponent from '../components/CardComponent';
import M from '../Imagen/Girls/M.jpg';
import M2 from '../Imagen/Girls/M2.jpg';
import M3 from '../Imagen/Girls/M3.jpg';
import M4 from '../Imagen/Girls/M4.jpg';

const GirlsPage = () => {
  const buyProduct = (productName) => {
    alert(`Compra exitosa de ${productName}`);
  };
  return (
    <div className="d-flex justify-content-around mt-5 gap-3">
      <CardComponent name="BELLE POQUE" price="'$93,000" img={M} buyProduct={buyProduct} />
      <CardComponent name="ZSHOW" price="$148,500" img={M2} buyProduct={buyProduct} />
      <CardComponent name="SCUSTY" price="$112,800" img={M3} buyProduct={buyProduct} />
      <CardComponent name="TACVASEV" price="$197,000" img={M4} buyProduct={buyProduct} />
    </div>
  );
};

export default GirlsPage;