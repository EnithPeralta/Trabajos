import React from "react";
import { Link } from "react-router-dom";
import { RiTwitterLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiFacebookCircleLine } from "react-icons/ri"

const PerfilPage = () => (
    <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
        <div className="card p-4">
            <div className="image d-flex flex-column justify-content-center align-items-center">
                <button className="btn btn-light">
                    <img src="https://png.pngtree.com/background/20230524/original/pngtree-anime-girl-with-red-eyes-picture-image_2707198.jpg" height="100" width="100" alt="Profile" />
                </button>
                <span className="name mt-3">Maria Peralta</span>
                <span className="idd">@mariaperalta</span>
                <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                    <span className="idd1">MariaPeralta</span>
                    <span><i className="fa fa-copy"></i></span>
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                    <span className="number">1069 <span className="follow">Followers</span></span>
                </div>
                <Link className="btn btn-info" to="/EditPage">
                    Edit Profile
                </Link>

                <div className="text mt-3">
                    <span>Maria Peralta is a software programmer and digital artwork.<br /><br /> Artist/Creative Director of Día #NFT minting@ with FND night.
                    </span>
                </div>
                <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">

                    <Link>
                        <RiTwitterLine className="text-info" />
                    </Link>
                    <Link>
                        <RiFacebookCircleLine className="text-info" />
                    </Link>
                    <Link>
                        <RiInstagramLine className="text-info" />
                    </Link>
                </div>
                <div className="px-2 rounded mt-4 date">
                    <span className="join">Joined May, 2021</span>
                </div>
            </div>
        </div>
    </div>
);

export default PerfilPage;
