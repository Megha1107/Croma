import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Torch_baseURL } from "../serverConfig/serverConfig"
import axios from "axios";
import chola_img from "../../assets/chola_torch/chola_img.svg";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import footer_img from "../../assets/chola_torch/Group 231.svg";
import circle_banner from "../../assets/chola_torch/circle banner.svg";
import item_img_torch from "../../assets/chola_torch/KingKohli_Royal-Blue_600x600.webp";
import Nav from "../Nav";
import Footer from "../Footer";
const ViewCart = () => {
  const showBackgroundImage = false;
  const [Count, setCount] = useState();
  const navigate = useNavigate();
  const [cartIteam, setIteam] = useState([])

  const [Submitbtn, setSubmitbtn] = useState(true);

  const [formData, setFormData] = useState({
    // name: "",
    email: "",
    mobile: "",
    // pincode: "",
    employeeId: "",
    // address: "",
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData, 'formDataformData')

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("EMPDL", JSON.stringify(formData));
    // formData
    // Handle form submission here
  };

  // const setQuan = (countVal, index) => {
  //   setCount(countVal)
  //   if (countVal < 1) {
  //     setCount(1)
  //     // cartIteam[index].Quantity = 0
  //   }
  // if (countVal > 10) {
  //   setCount(10)
  //    } 
  //   // if (countVal = 10) {

  //   // } else {
  //   cartIteam[index].Quantity = countVal
  //   // }


  // }
  const removeTodo = (index) => {
    const newTodos = [...cartIteam];
    newTodos.splice(index, 1);
    setIteam(newTodos);
    localStorage.setItem("cartIteam", JSON.stringify(newTodos));
  };

  const setQuan = (countVal, index) => {
    if (countVal < 1) {
      countVal = 1;
    } else if (countVal > 10) {
      countVal = 10;
    }

    setCount(countVal);


    const updatedCart = [...cartIteam];


    updatedCart[index].Quantity = countVal;

    localStorage.setItem("cartIteam", JSON.stringify(updatedCart));
  };

  function ConfirmOrder() {
    // Retrieve the array from local storage
    const cartItems = JSON.parse(localStorage.getItem("cartIteam")) || [];
    const details = JSON.parse(localStorage.getItem("EMPDL")) || [];
    const isEmailPresent = details.email !== '';
    const isMobilePresent = details.mobile !== '';
    const isEmployeeIdPresent = details.employeeId !== '';
    // console.log(isEmailPresent,'details.length')
    if (isEmailPresent && isMobilePresent && isEmployeeIdPresent) {

      const transformedData = [];

      cartItems.forEach((cartItem) => {

        // const detail = details.find((detailItem) => detailItem.Cf09257 === cartItem.Itemcode);
        // console.log(details,'details2')

        const transformedItem = {
          itemCode: cartItem.Itemcode,
          customerName: details.email,
          amount: cartItem.Quantity * cartItem.unitPrice,
          quantity: cartItem.Quantity,
          address: "1232",
          mobileNo: details.mobile,
          emailId: details.email,
          employeeCode: details.employeeId,
          size: cartItem.Size,
          pinCode: "12312312",
        };


        transformedData.push(transformedItem);
      });
      OrderPlaced(transformedData)

    } else {
      toast.error("Submit Your Employe Details For Order", {
        position: toast.POSITION.TOP_RIGHT,
      });



    }
  }

  const grandTotal = cartIteam.reduce((total, item) => {
    const itemTotal = item.Quantity * item.unitPrice;
    return total + itemTotal;
  }, 0);

  const OrderPlaced = async (transformedData) => {
    console.log(transformedData, 'transformedData')
    try {
      const raw = {

        view: "all"

      };

      const config = {
        method: "POST",
        url: Torch_baseURL + "Ct/cart/add",
        headers: {
          "Content-Type": "application/json",
        },
        data: transformedData,
      };

      const response = await axios(config);

      const l = response.data;

      const { status, message } = l;
      // console.log(DATA, 'sdksiud')
      if (status == "SUCCESS") {
        toast.success(message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        localStorage.removeItem("cartIteam");
        localStorage.removeItem("EMPDL");
        // setItemData(DATA)
      } else {
        toast.error("Somthing Went Wrong", {
          position: toast.POSITION.TOP_RIGHT,
        });
        // setUserEmail("")
      }


      // setRoute(newData);
    } catch (err) {
      toast.error("Somthing Went Wrong", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.error(err);
    }
  }

  useEffect(() => {

    const add = JSON.parse(localStorage.getItem("cartIteam") || "[]");
    console.log(add, 'addadd')
    setIteam(add)


    // const cartItems = JSON.parse(localStorage.getItem("cartIteam")) || [];
    // const isEMPDLPresent = JSON.parse(localStorage.getItem("EMPDL") || "[]");
    // if (isEMPDLPresent) {
    //   setSubmitbtn(false)
    // } else {
    //   setSubmitbtn(true)

    // }
  }, []);


  return (
    <>
      <ToastContainer />
      <div className="container-fluid p-0 bg-white">
        <div className="col-md-12 p-0">
          <section>
            {/* nav */}
            {showBackgroundImage ? (
              <section className="torch_header">

                <Nav />
              </section>
            ) : (
              <section className="no-background ">
                <Nav />
              </section>
            )}
            {cartIteam.length > 0 ? (<section className="container-fluid">
              <div>
                <form className="vc_form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="mobile">Mobile Number:</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="Enter your mobile number"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="employeeId">Employee ID:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="employeeId"
                      name="employeeId"
                      value={formData.employeeId}
                      onChange={handleInputChange}
                      placeholder="Enter your employee ID"
                      required
                    />
                  </div>
                  {Submitbtn ? <button type="submit" className="continue_shop3" >
                    Submit
                  </button> : <></>}



                </form>
              </div>
            </section>) : (
              <></>
            )}
          </section>

          {cartIteam.length > 0 ? (<> <section style={{ width: "99%", overflowX: "auto" }}>
            <table class="table viewcart_table">
              <thead>
                <tr>
                  <th scope="col">EDIT</th>
                  <th scope="col">IMAGE</th>
                  <th scope="col">Size</th>
                  <th scope="col">PRODUCT NAME</th>
                  <th scope="col">QUANTITY</th>
                  <th scope="col">UNIT PRICE</th>
                  <th scope="col">TOTAL PRICE</th>
                </tr>
              </thead>
              <tbody class="">
                {cartIteam?.map(

                  (cartData, index) => {
                    return (
                      <>
                        <tr>
                          <td><i className="bi bi-trash3" onClick={() => removeTodo(index)}></i></td>
                          <td>
                            {" "}
                            <img className="vc_images" src={item_img_torch}></img>
                          </td>
                          <td>
                            {" "}
                            <span className="text-center">{cartData.Size}</span>
                          </td>
                          <td>
                            {" "}
                            <span className="text-center">{cartData.ProductName}</span>
                          </td>
                          <td>
                            {" "}
                            <span className="d-flex justify-content-center align-items-center">
                              <i class="bi bi-patch-minus me-2" onClick={() => setQuan(cartData.Quantity - 1, index)}></i>{cartData.Quantity}
                              <i class="bi bi-patch-plus ms-2" onClick={() => setQuan(cartData.Quantity + 1, index)} ></i>
                            </span>
                          </td>
                          <td>
                            {" "}
                            <span>{cartData.unitPrice}</span>
                          </td>
                          <td>
                            {" "}
                            <span>RS. {(cartData.Quantity * cartData.unitPrice).toFixed(2)}</span>
                          </td>
                        </tr>
                      </>)
                  })

                }
                <tr>

                  <td>
                    {" "}

                  </td>
                  <td>
                    {" "}

                  </td>
                  <td>
                    {" "}

                  </td>
                  <td>
                    {" "}

                  </td>
                  <td>
                    {" "}

                  </td>
                  <td>
                    {" "}

                  </td>
                  <td scope="row" colSpan='row d-flex justify-content-end align-items-end'>
                    {" "}
                    <span className="fw-semibold">GRAND TOTAL : <span>Rs.{grandTotal !== undefined ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'INR', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(grandTotal) : 'N/A'}
                    </span></span>
                  </td>

                </tr>

              </tbody>
            </table>
            <div className="vc_footer">
              <div className="cart_btns2">

                <button className=" continue_shop"
                  onClick={ConfirmOrder}
                >CONFIRM ORDER</button>
                {/* <button className=" continue_shop2">CONFIRM PAYMENT</button> */}
              </div>
            </div>
          </section>
          </>) : (
            <>
              <div
                style={{
                  // marginLeft: "80px",
                  // marginTop: "20px",
                  // color: "black",
                  fontFamily: 'Poppins'
                }}
              >
                No Data Found

              </div>
              <div className="here_btn">
                <button className="btn prod_click"
                  onClick={() => navigate("/Believeathon#list-item-4")}>View Shopping</button>
              </div>

            </>
          )}
          <Footer
          />
        </div>
       
      </div>

    </>
  );
};

export default ViewCart;
