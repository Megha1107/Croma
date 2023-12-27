import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import ReactPlayer from "react-player";
import "./chola_torch.css"



import Nav from "./Nav";
import Footer from "./Footer";

import "react-datepicker/dist/react-datepicker.css";
import Home from "./Component/home";


const Chola_Torch = () => {

  return (
    <>
      <div className="container-fluid p-0 bg-white cssClas">

        <Nav />

        <Home />
        <Footer/>
      </div>
    </>
  );
};

export default Chola_Torch;
