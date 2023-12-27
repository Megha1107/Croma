import React, { useState, useEffect } from 'react';
import chola_img from "../assets/chola_torch/chola_img.svg";
// import { useNavigate, useLocation, Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import circle_banner from "../assets/chola_torch/circle banner.svg";
import axios from "axios";
import bgtorchhead from "../assets/chola_torch/bg_torch_log.jpg"
import { ToastContainer, toast } from "react-toastify";
// import { Cookies } from 'universal-cookie';
// import { withCookies, Cookies } from 'react-cookie';
import { Torch_baseURL, accessToken } from "./serverConfig/serverConfig";
const Nav = ({ onClick }) => {
  const location = useLocation();
  const [isLoginOpen, setLoginOpen] = useState(false);
  const cartIteamLength = JSON.parse(localStorage.getItem("cartIteam"))?.length || 0;
  // const navigate = useNavigate();

  // const currentHeaderName = headerNames[location.pathname] || "Access Denied";
  const [checked, setChecked] = useState(true);
  // const cookies = new Cookies();
  // const [isLoggedIn, setIsLoggedIn] = useState(!!cookies.get('authToken'));


  const LoginOpen = () => {
    setLoginOpen(!isLoginOpen);
  };
  const handleLogout = () => {

    // cookies.remove('authToken');

    setIsLoggedIn(false);
  };
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {

    setIsLoggedIn(!!cookies.get('authToken'));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const raw = {
        userName: formData.username,
        password: formData.password
      };

      const config = {
        method: "POST",
        url: Torch_baseURL + "Ct/login/check",
        headers: {
          "Content-Type": "application/json",
        },
        data: raw,
      };

      const response = await axios(config);
      const l = response.data;

      const { status, DATA } = l;

      if (status == "SUCCESS") {
        toast.success("Login Successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setLoginOpen(false)
        setIsLoggedIn(true);
        // cookies.set('authToken', accessToken, { path: '/' });
      } else {
        toast.error("Somthing Went Wrong", {
          position: toast.POSITION.TOP_RIGHT,
        });

      }

      // setRoute(newData);
    } catch (err) {
      console.error(err);
    }


    setFormData({
      username: '',
      password: '',
    });
  };
  // const authToken = cookies.get('authToken');
  // console.log(authToken,'authToken')

  return (
    <div className=''>
      {location.pathname == "/Believeathon" && location.pathname == "/" ?
        (

          <nav class="torch_navbar navbar navbar-expand-sm text-white">
            <div>
              {" "}
              <img className="chola" src={chola_img}></img>
            </div>

            <div class="d-flex justify-content-end align-items-end ">
              {/* <a class="navbar-brand d-flex justify-cntent-end align-items-end" href="#">
  Navbar
</a> */}
              <button
                class="navbar-toggler torch_toggle me-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="bi bi-menu-up"></span>
               
              </button>
              <div
                class="torch_navbar1 collapse navbar-collapse ms-2"
                id="navbarNav"
              >
                <ul class="navbar-nav inside_nav">
                  <li class="nav-item">
                    <a
                      class="nav-link active list-group-item-action"
                      aria-current="page"
                      href="#list-item-1"
                      // onClick={() => navigate("/Believeathon#list-item-1")}
                    >
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link list-group-item-action"
                      aria-current="page"
                      href="#list-item-2"
                      // onClick={() => navigate("/Believeathon#list-item-2")}
                    >
                      Voices
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link list-group-item-action"
                      aria-current="page"
                      href="#list-item-3"
                      // onClick={() => navigate("/Believeathon#list-item-3")}
                    >
                      Gallery
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link list-group-item-action"
                      aria-current="page"
                      href="#list-item-4"
                      // onClick={() => navigate("/Believeathon#list-item-4")}
                    >
                      Store
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link list-group-item-action"
                      aria-current="page"
                      href="#list-item-5"
                      // onClick={() => navigate("/Believeathon#list-item-5")}
                    >
                      Media Updates
                    </a>
                  </li>
                  <li class="nav-item track_torch">
                    <a
                      class="nav-link"
                      href="#"
                      // onClick={() => navigate("/MapApp")}
                    >
                      Track the Torch
                    </a>
                  </li>
                  {/* <li class="nav-item">
                    <a
                      class="nav-link list-group-item-action"
                      aria-current="page"
                      // href="#list-item-5"
                      onClick={() => navigate("/ViewCart")}
                    >
                      <i class="bi bi-cart4">{''}{cartIteamLength}</i>
                    </a>
                  </li> */}

                </ul>
              </div>
            </div>
          </nav>) :

        (<nav class="torch_navbar2 navbar navbar-expand-sm text-white">
          <div>
            {" "}
            <img className="chola2 p-2" src={chola_img}></img>
          </div>

          <div class="d-flex justify-content-end align-items-end ">
            {/* <a class="navbar-brand d-flex justify-cntent-end align-items-end" href="#">
                Navbar
              </a> */}
            <button
              class="navbar-toggler me-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{boxShadow:"none"}}
            >
              {/* <span class="navbar-toggler-icon"></span> */}
              <i class="bi bi-three-dots-vertical"></i>
              {/* <span class="bi bi-x"></span> */}
            </button>
            <div
              class="torch_navbar1 collapse navbar-collapse ms-2"
              id="navbarNav"
            >
              <ul class="navbar-nav inside_nav">
                <li class="nav-item">
                  <a
                    class="nav-link active list-group-item-action"
                    aria-current="page"
                    href="#list-item-1"
                    // onClick={() => navigate("/Believeathon#list-item-1")}
                  >
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link list-group-item-action"
                    aria-current="page"
                    href="#list-item-2"
                    // onClick={() => navigate("/Believeathon#list-item-2")}
                  >
                    Voices
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link list-group-item-action"
                    aria-current="page"
                    href="#list-item-3"
                    // onClick={() => navigate("/Believeathon#list-item-3")}
                  >
                    Gallery
                  </a>
                </li>
                {/* <li class="nav-item">
                  <a
                    class="nav-link list-group-item-action"
                    aria-current="page"
                    href="#list-item-4"
                    onClick={() => navigate("/Believeathon#list-item-4")}
                  >
                    Store
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link list-group-item-action"
                    aria-current="page"
                    href="#list-item-5"
                    onClick={() => navigate("/Believeathon#list-item-5")}
                  >
                    Media Updates
                  </a>
                </li> */}

                <li class="nav-item track_torch">
                  <a
                    class="nav-link"
                    href="#"
                    // onClick={() => navigate("/MapApp")}
                  >
                    Track the Torch
                  </a>
                </li>
                {/* <li class="nav-item">
                  <a
                    class="nav-link list-group-item-action"
                    aria-current="page"
                  // href="#list-item-5"
                  >
                    <i class="bi bi-cart4">{''}{cartIteamLength}</i>
                  </a>
                </li> */}
                {/* <li class="nav-item">
                  <a
                    class="nav-link list-group-item-action"
                    aria-current="page"
                  // href="#list-item-5"
                  >

                    <div>
                      {isLoggedIn ? (<>
                        <li class="nav-item track_torch">
                          <a
                            class="nav-link"
                            href="#"
                            onClick={() => handleLogout()}
                          >
                            LogOut
                          </a>
                        </li>
                      </>) : (<>
                        <span class="bi bi-person-circle" onClick={LoginOpen} ></span></>)}

                    </div>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>)}


      {isLoginOpen && (
        <>
          <Modal
            className="border-none login_card_body_height mt-5"
            style={{ height: "600px" }}
            show={isLoginOpen}
            // onHide={setNamePopup}
            backdrop="static"
            keyboard={false}
          >
            {" "}
            <div
              className=" modal-content"
              style={{ height: "555px", overflow: "none" }}
            >
              <div className="login_popup">
                <button
                  onClick={() => setLoginOpen(false)}
                  className=" close_btn_login"
                >
                  X
                </button>

                <Modal.Body
                  className="  modal-body "
                  style={{ height: "555px" }}
                >
                  {/* <>
                    <div className="popupmodalloader">
                      <PopupLoader />
                    </div>
                  </> */}
                  <div className="torchlogin_popup">
                    <div className="card-body ">
                      <div className="mb-3 d-flex flex-column align-items-center justify-content-center">
                        <img
                          className="mb-3 login_torch"
                          src={circle_banner}
                        ></img>
                        <p className="loginheadintro">
                          Please enter your login details below
                        </p>
                      </div>
                      <form>
                        <div className=" pb-2">
                          <form
                            // onSubmit={handleSubmit}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                handleSubmit(e);
                              }
                            }}
                          >
                            <div class="did-floating-label-content">
                              <input
                                class="did-floating-input"
                                type="text"
                                placeholder=" "
                                name="username"

                                onChange={handleInputChange}
                                value={formData.username}
                              // onInput={validate}
                              // onPaste={(e) => {
                              //   e.preventDefault();
                              //   return false;
                              // }}
                              />
                              <div className="iconbox">
                                <img
                                  // src={profile}
                                  alt=""
                                />
                              </div>
                              <div
                                style={{ color: "red", marginTop: "10px" }}
                              >
                                {/* {errors.username && touched.username
                                      ? errors.username
                                      : ""} */}
                              </div>
                              <label class="did-floating-label">
                                Username
                              </label>
                            </div>
                            <div class="did-floating-label-content">
                              <input
                                class="did-floating-input"
                                type={checked ? "password" : "text"}
                                name="password"
                                placeholder=" "
                                onChange={handleInputChange}
                                // onChange={() => {
                                //   handleChange
                                //    setBackpass(values?.password)
                                // }}
                                value={formData.password}

                              />
                              <div
                                className="iconbox"
                                onClick={() => {
                                  setChecked(!checked);
                                }}
                              >
                                <img
                                  // src={checked ? lock : loac_open}
                                  alt=""
                                />
                              </div>
                              <div
                                style={{ color: "red", marginTop: "10px" }}
                              >
                                {/* {errors.password && touched.password
                                      ? errors.password
                                      : ""} */}
                              </div>
                              <label class="did-floating-label">
                                Password
                              </label>
                            </div>
                            <div class="text-end mb-4"></div>
                            <div>
                              <button
                                class="mt-3 btn Loginbtn"
                                type="button"
                                onClick={handleSubmit}
                              // disabled={submitLoading}
                              >
                                Login
                              </button>
                            </div>
                          </form>
                        </div>
                      </form>
                    </div>
                  </div>
                </Modal.Body>
              </div>
            </div>
          </Modal>
        </>
      )}

    </div>

  );
};

export default Nav;