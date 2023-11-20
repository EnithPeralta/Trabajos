import React from 'react';
import CardComponent from '../components/CardComponent';
import K1 from '../Imagen/Kids/K1.jpg';
import K2 from '../Imagen/Kids/K2.jpg';
import K3 from '../Imagen/Kids/K3.jpg';
import K4 from '../Imagen/Kids/K4.jpg';

const KidsPage = () => {

  const buyProduct = (productName) => {
    alert(`Compra exitosa de ${productName}`);
  };

  return (
    <div className="d-flex justify-content-around mt-5 gap-3">
      <CardComponent name="SOLY HUX" price="$110.000" img={K1}  buyProduct={buyProduct} />
      <CardComponent name="SWEATSHIRT" price="$65.400" img={K2}  buyProduct={buyProduct} />
      <CardComponent name="FARVALUE" price="$118.800" img={K3}  buyProduct={buyProduct} />
      <CardComponent name="FARVALUE" price="$196.100" img={K4}  buyProduct={buyProduct} />
    </div>
  );
};

export default KidsPage;
