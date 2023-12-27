import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import username_pop from "../assets/chola_torch/profile-circle.svg";
import date_time_pop from "../assets/chola_torch/clock.svg";
import pop_location from "../assets/chola_torch/location.svg";
import axios from "axios";
import { Torch_baseURL } from "./serverConfig/serverConfig"
import { ToastContainer, toast } from "react-toastify";
const Popuptorch = () => {
  const date = new Date().toJSON();
  const [isMobileOpen, setMobileOpen] = useState(false);
  const currentDate = date.replace("T00:00:00.000Z", "")
  const [EventData, setEventData] = useState([]);
  const [userEmail, setUserEmail] = useState();
  const [startDate, setStartDate] = useState(currentDate);
  const MobileOpen = () => {
    setMobileOpen(!isMobileOpen);
  };
  const eventList = async (ZoneVal) => {

    try {
      const raw = {
        startDate: startDate,
        endDate: startDate,
        zone: ZoneVal,
        // view: "all"

      };

      const config = {
        method: "POST",
        url: Torch_baseURL + "Ct/event/list",
        headers: {
          "Content-Type": "application/json",
        },
        data: raw,
      };

      const response = await axios(config);

      const l = response.data;

      const { status, DATA } = l;
      console.log(status, 'sdksiud')
      if (status == "SUCCESS") {

        setEventData(DATA)
      } else {
        toast.error("Somthing Went Wrong", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setUserEmail("")
      }


      // setRoute(newData);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div>
         <Modal
    className=""
    size="sm"
    show={isMobileOpen}
    // onHide={setNamePopup}
    backdrop="static"
    keyboard={false}
    // aria-labelledby="contained-modal-title-vcenter"
    // centered
  >
    {" "}
    <div className="">

      <div className="map_mobile_header">
        <div className="pop_header_data">
          {/* <span className="zone_data">Zone Name</span> */}
          <span className="zone_name_data"> 
          {/* {ZoneVal} */}
          </span>
        </div>
        <div>
          <input type='date' min='2023-11-06' max='2023-11-10'
            // onChange={handleStartDateChange}

          ></input>
        </div>
        <button
          onClick={() => setMobileOpen(false)}
          className=" close_btn_popup"
        >
          X
        </button>
      </div>

      <Modal.Body  className="mobile_modal_body">

<div className=" mobile_body_torch p-0  ">
        <div className="col-md-12 p-0">
          <div className="col-md-4 p-0 mobile_leftside">
            <div className="d-flex flex-column bg_warning">
              <div className="mobile_date_pops">
                <div className="d-flex flex-column justify-content-center align-items-center pt-3 pb-3">
                  <span className="pop_month">NOV</span>
                  <span className="date_pop">25</span>
                  <span className="pop_year">2023</span>
                </div>
              </div>
              <div></div>
            </div>
            <div className="mobile_pop_img"></div>
          </div>
          <div className="col-md-8 mobile_pop_data_img">

            {
              EventData.map((data) => {
                return (
                  <>
                    <div className="thepop_data">
                      <span className="date_time_pop">
                        <img className="me-1" src={date_time_pop}></img>
                        <span className="date_time_pop_data1" >Saturday <span className="date_time_pop_data2">@ 2 PM - 5 PM</span></span>
                      </span>
                      <span className="pop_location">
                        <img className="me-1" src={pop_location}></img>

                        <span className="pop_location_data">{data.branch}    <span className="state_city">{data.state}</span></span>  </span>

                      <span>
                        <img src={username_pop}></img> {data.torch_user}{" "}
                      </span>
                    </div>

                    <br />
                  </>
                );
              })
            }
            <button className="mobile_pop_upnextbtn btn border">Next</button>
          </div>
        </div>

        </div>
      </Modal.Body>
    </div>
  </Modal>
    </div>
  )
}

export default Popuptorch