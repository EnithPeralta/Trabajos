import React from 'react';

const CardComponent = ({ name, description, img, datetime, genus }) => {
  const viewOnline = () => {
    alert(`Watching online: ${name}`);
  };
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top " alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">{datetime}</p>
        <p className="card-text">Genus: {genus}</p>
        <button className="btn btn-primary" onClick={viewOnline}>
          See online
        </button>
      </div>
    </div>
  );
};

export default CardComponent;


