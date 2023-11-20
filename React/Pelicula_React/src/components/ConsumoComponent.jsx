import React from "react";

const ConsumoComponent = ({ title, description, price, image }) => {
  return (
    <div className="card col-3 m-1 p-4">
      <img src={image} alt="" height="300" width="200"/>
      <h1> {title} </h1>
      <p>{description} </p>
      <h4>{price}</h4>
    </div>
  );
};
export default ConsumoComponent;