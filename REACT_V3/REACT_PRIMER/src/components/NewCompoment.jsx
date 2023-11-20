import React from 'react';
import { Link } from 'react-router-dom';
import { RiLoginCircleLine } from "react-icons/ri";
import { RiHomeOfficeLine } from "react-icons/ri";
import { RiShoppingCartLine } from "react-icons/ri";
import { RiProfileLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";



const NewCompoment = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link
                    className="navbar-brand">
                    P-Shop
                </Link>
                <button className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="./RegisterPage"
                                className="nav-link active"
                                aria-current="page">
                                <RiLoginCircleLine className='text-info ' />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/HomePage"
                                className="nav-link active"
                                aria-current="page">
                                <RiHomeOfficeLine className='text-info ' />
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Category
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to="./KidsPage" className="dropdown-item" >Kids</Link></li>
                                <li><Link to="./GirlsPage" className="dropdown-item" >Women</Link></li>
                                <li><Link to="./AdultsPage" className="dropdown-item" >Men</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item ">
                            <Link to="./CartPage"
                                className="nav-link active"
                                aria-current="page">
                                <RiShoppingCartLine className='text-info' />
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link 
                                className="nav-link dropdown-toggle"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <RiProfileLine className='text-info' />
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to="./ProfilePage" className="dropdown-item" >About ust</Link></li>
                                <li><Link to="./SettingPage" className="dropdown-item" >Settings & Privacy</Link></li>
                                <li className="text-center mt-3">
                                    <Link to="./HomePage" className="card-link">Log out</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item ">
                            <Link to="./UsagePage"
                                className="nav-link active"
                                aria-current="page">
                                Usage
                            </Link>
                        </li>
                    </ul>
                        <ul className="nav-item">
                            <Link to="/PerfilPage"
                                className="nav-link active"
                                aria-current="page">
                            < CgProfile className='text-info ' />
                            </Link>
                        </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2"
                            type="search" placeholder="Search"
                            aria-label="Search" />
                        <button className="btn btn-outline-success"
                            type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    )
}

export default NewCompoment;
