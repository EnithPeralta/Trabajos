import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container p-5 text-light  ">
      <div className=" align-items-center justify-content-center">
        <div className="col-md-12">
          <h1>Welcome to Disney World!</h1>
          <p>Step into the enchanting world of Disney, where magic and wonder collide. Explore a myriad of captivating movies and series that have brought joy to millions of hearts.</p>
          <p>Embark on a magical journey through our vast collection of timeless classics and modern tales, each promising adventure, laughter, and heartfelt moments.</p>
          <p>Explore the magic of Disney here.</p>
          <div className="row">
            <div className="col-md-3">
              <Link to="/PeliculaPage" className="btn btn-outline-light btn-lg">
                Discover Movies
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/SeriePage" className="btn btn-outline-primary btn-lg">
                Explore Series
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
