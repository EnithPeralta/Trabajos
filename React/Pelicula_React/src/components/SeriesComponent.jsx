import React from 'react';

const SeriesComponent = ({ name, description, img, estado, episodios, duracion, año }) => {
  const verSerie = () => {
    alert(`Watching the series: ${name}`);
  };
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">{estado}</p>
        <p className="card-text">{episodios}</p>
        <p className="card-text">{duracion}</p>
        <p className="card-text"> {año}</p>
        <button className="btn btn-primary" onClick={verSerie}>
          See Serie
        </button>
      </div>
    </div>
  );
};

export default SeriesComponent;
