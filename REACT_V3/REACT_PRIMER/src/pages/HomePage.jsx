import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="container mt-5 bg-light-subtle " style={{ boxShadow: '0 0 10px rgba(23, 32, 42)' }}>
    <div className="row">
      <div className= "d-flex flex-column justify-content-center align-items-center gap-2 p-4 ">
        <h5 className="display-6">Welcome to P-Shop</h5>
        <h5 className="lead">Quality and style meet in our jackets</h5>
        <p>
          Discover the perfect blend of quality and style with P-Shop, your ultimate destination for fashionable jackets. At P-Shop, we curate a collection of high-quality jackets that not only keep you warm but also elevate your style. Our commitment to excellence is reflected in every piece we offer. Whether you're looking for a classic leather jacket, a trendy winter coat, or something in between, P-Shop has you covered. Explore our wide variety of styles and find the perfect jacket to suit your unique taste.
        </p>
      </div>
    </div>
  </div>
);
export default HomePage;
