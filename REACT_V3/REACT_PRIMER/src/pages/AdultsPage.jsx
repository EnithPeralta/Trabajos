import React from 'react';
import CardComponenet from '../components/CardComponent';
import H from '../Imagen/Men/H.jpg';
import H2 from '../Imagen/Men/H2_.jpg';
import H3 from '../Imagen/Men/H3.jpg';
import H4 from '../Imagen/Men/H4.jpg';

const AdultsPage = () => {
  const buyProduct = (productName) => {
    alert(`Compra exitosa de ${productName}`);
  };
  return (
    <div className="d-flex justify-content-around mt-5 gap-3">
      <CardComponenet name="URBANFIND" price="$107.000" img={H}  buyProduct={buyProduct} />
      <CardComponenet name="TACVASEV" price="$190.300" img={H2}  buyProduct={buyProduct} />
      <CardComponenet name="TACVASEV" price="$115.850" img={H3}  buyProduct={buyProduct} />
      <CardComponenet name="SOVTEMP" price="$86.200" img={H4}  buyProduct={buyProduct} />
    </div>
  );
}

export default AdultsPage;
