import React from "react";
import logo from "../assets/osaagoslogo.png"
import { Link, useLocation } from "react-router-dom";
import logo2 from "../assets/os.svg"
// import Swal from 'sweetalert2';

const Header = () => {
    const location = useLocation();
    const dashboard = location.pathname == "/dashboard"
    
    return (
    <>
        <header className="sticky -top-28 z-30">
            <div className={`bg-blue-800 flex justify-between ${dashboard || "mb-3"} text-white py-3`}>
                <Link to="/">
                    <div className={`${!dashboard && "hidden"} mx-10 `}>
                        <img className='' src={logo2}/>
                        <h1 className="text-2xl font-bold">OSAAGOS</h1>
                    </div>
                </Link>
                <ul className=" mx-10 flex items-center justify-end space-x-5 my-5">      
                    <Link><li className="bg-orange-400 px-5 py-3 rounded-lg">Login</li></Link>
                    <Link><li>Register</li></Link>
                </ul>
            </div>
            <div className={`flex justify-between px-10 ${dashboard && "hidden"} bg-white items-center mx-10`}>
                <Link to="/">
                    <div className="flex flex-col justify-start items-start">
                        <img src={logo} alt='logo'/>
                        <h1 className="text-2xl">OSAAGOS</h1>
                    </div>
                </Link>
                <div>
                    <ul className="flex space-x-5">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/aboutus"><li>About Us</li></Link>
                        {/* <ul>Alumni Profiles</ul> */}
                        {/* <ul>Networking</ul> */}
                        <Link><li>Events</li></Link>
                        <Link><li>News & Announcements</li></Link>
                        <Link><li>Job Board</li></Link>
                        <Link><li>Donations</li></Link>
                        {/* <ul>Media Gallery</ul> */}
                        <Link><li>Contact Us</li></Link>
                        <Link to="/dashboard"><li>Admin Dashboard</li></Link>
                    </ul>
                </div>
            </div>
            
        </header>
      </>
    );
};

export default Header;
