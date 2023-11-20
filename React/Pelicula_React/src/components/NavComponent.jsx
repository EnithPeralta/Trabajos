import React from 'react';
import { Link } from 'react-router-dom';
import { TbBrandDisney } from "react-icons/tb";
import { IoHome } from "react-icons/io5";
import { RiLoginCircleLine } from "react-icons/ri";
import { RiMovie2Fill } from "react-icons/ri";
import { IoStar } from "react-icons/io5";

const NavComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary gap-6">
      <div className="container-fluid">
        <Link to="/HomePage" className="navbar-brand">
          <TbBrandDisney />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse"
          id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/LoginPage"
                className="nav-link active"
                aria-current="page">
                <RiLoginCircleLine />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/HomePage"
                className="nav-link">
                <IoHome />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/PeliculaPage"
                className="nav-link">
                <RiMovie2Fill /> Film
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/SeriePage"
                className="nav-link">
                <IoStar /> Series
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Genus
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="AventuraPage"
                    className="dropdown-item">
                    Adventure
                  </Link>
                </li>
                <li>
                  <Link to="AnimacionPage"
                    className="dropdown-item">
                    Animation
                  </Link>
                </li>
                <li>
                  <Link to="CienciaPage"
                    className="dropdown-item">
                    Science fiction
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/ConsumoPage"
                className="nav-link">
                Consumption
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavComponent;
