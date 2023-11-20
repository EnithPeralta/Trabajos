import React from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  return (
    <div className="container mt-5 bg-light-subtle" style={{boxShadow: '0 0 10px rgba(23, 32, 42)' }}>
      <div className="row">
        <div className="col">
          <h1 className="display-4">P-Shop</h1>
          <p className="lead">"Quality and style come together in our jackets"</p>
          <p>
            P-Shop is your ultimate destination to find high-quality fashion jackets to suit your style and needs. Our store is proud to offer a wide variety of jackets for men and women, from classic leather jackets to stylish winter coats.
          </p>
          <p>
            With over a decade of experience in the fashion industry, we are committed to bringing you the latest trends and timeless designs that will enhance your closet.
          </p>
        </div>
      </div>
      <div className="row gap-2 p-4">
        <div className="col">
          <h2>Securities</h2>
          <ul>
            <li>Sustainable Fashion: We strive to offer high-quality jackets that are designed to last, thus promoting sustainable fashion and reducing environmental impact.</li>
            <li>Variety of Styles: We understand that fashion is personal, so we offer a wide range of styles, from classic to avant-garde, to satisfy the preferences of all our customers.</li>
            <li>Outstanding Customer Service: Our team is committed to providing exceptional service and helping you find the perfect jacket for every occasion.</li>
            <li>Uncompromising Quality: Every jacket in our store goes through strict quality checks to ensure you get only the highest quality products.</li>
          </ul>
        </div>
        <div className="col">
          <h2>Location</h2>
          <p>Address: Calle de la Moda, Number 123</p>
          <p>Town: Fashionville</p>
          <p>Country: Colombia</p>
        </div>
        <div className="col">
          <h2>Hours of Operation</h2>
          <p>Monday - Friday: 10:00 AM - 8:00 PM</p>
          <p>Saturdays: 11:00 AM - 6:00 PM</p>
          <p>Sundays: Closed</p>
        </div>
      </div>
      <div className="row gap-4 p-4">
        <div className="col">
          <h2>Contact us</h2>
          <p>Phone: +57-321-473-7089</p>
          <p>E-mail: info@P-Shop.com</p>
          <p>Web Site: <Link to="https://www.p-shop.com">www.p-shop.com</Link></p>
        </div>
        <div className="col">
          <h2>Social Networking</h2>
          <ul className="list-unstyled">
            <li>
              Facebook: <Link to="https://www.facebook.com/P-Shop">@P-Shop</Link>
            </li>
            <li>
              Instagram: <Link to="https://www.instagram.com/P-ShopOfficial">@P-ShopOfficial</Link>
            </li>
            <li>
              Twitter: <Link to="https://twitter.com/P-ShopTrends">@P-Shop</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
