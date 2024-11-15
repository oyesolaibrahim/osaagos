import React from "react";
import logo2 from "../assets/os.svg"
import { useLocation } from "react-router-dom";
// import Swal from 'sweetalert2';

const Footer = () => {
    const location = useLocation();
    const home = location.pathname
    return (
    <>
        <footer className={`bg-blue-800 ${home === "/" ? "footer" : ""} py-5 text-white`}>
            <div className="mx-10">
                <div className="flex justify-between items-center">
                    <div className="flex items-center mb-5 md:mb-0 xs:mt-5">
                     <div>
                        <  img src={logo2}/>
                        {/* <i className="fa fa-copyright sm:fa-2x mr-2" aria-hidden="true"></i> */}
                        <h3 className="sm:text-lg font-bold xs:text-xs">OSAAGOS</h3>
                    </div>   
                    </div>
                    <div className="flex items-center xs:space-x-2 sm:space-x-5 mt-5 md:mt-0">
                      <i className="fa fa-facebook-official fa-2x text-blue-600" aria-hidden="true"></i>
                      <i className="fa fa-whatsapp fa-2x text-green-600" aria-hidden="true"></i>
                      <i className="fa fa-instagram fa-2x text-pink-600" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </footer>
      </>
    );
};

export default Footer;
