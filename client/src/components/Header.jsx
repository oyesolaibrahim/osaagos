import React from "react";
import logo from "../assets/osaagoslogo.png"
import { Link } from "react-router-dom";
// import Swal from 'sweetalert2';

const Header = () => {
    return (
    <>
        <header className="sticky -top-28 z-30">
            <div className="bg-blue-800 mb-3 text-white py-3">
                <ul className=" mx-10 flex items-center justify-end space-x-5 my-5">      
                    <Link><li className="bg-orange-400 px-5 py-3 rounded-lg">Login</li></Link>
                    <Link><li>Register</li></Link>
                </ul>
            </div>
            <div className="flex justify-between px-10 bg-white items-center mx-10">
                <div className="flex flex-col justify-start items-start">
                    <img src={logo} alt='logo'/>
                    <h1 className="text-2xl">OSAAGOS</h1>
                </div>
                <div>
                    <ul className="flex space-x-5">
                        <Link><li>Home</li></Link>
                        <Link><li>About Us</li></Link>
                        {/* <ul>Alumni Profiles</ul> */}
                        {/* <ul>Networking</ul> */}
                        <Link><li>Events</li></Link>
                        <Link><li>News & Announcements</li></Link>
                        <Link><li>Job Board</li></Link>
                        <Link><li>Donations</li></Link>
                        {/* <ul>Media Gallery</ul> */}
                        <Link><li>Contact Us</li></Link>
                        <Link><li>Admin Dashboard</li></Link>
                    </ul>
                </div>
            </div>
            
        </header>
      </>
    );
};

export default Header;
