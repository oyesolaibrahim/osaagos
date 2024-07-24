import React from "react";
import logo from "../../assets/osaagoslogo.png"
import logo2 from "../../assets/os.svg"
import eventImg from "../../assets/laptop.jpg"
import hugImg from "../../assets/hug.jpg"
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Main from "./Main";
// import Swal from 'sweetalert2';

const HomePage = () => {
    return (
    <>
        <Header/>
        <Main/>
        <Footer/>
      </>
    );
};

export default HomePage;
