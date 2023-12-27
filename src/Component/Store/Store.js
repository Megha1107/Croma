import React, { useState, useEffect } from 'react';
import item_img_torch from '../../assets/chola_torch/KingKohli_Royal-Blue_600x600.webp'
import Modal from "react-bootstrap/Modal";
import { Torch_baseURL } from "../serverConfig/serverConfig"
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import ViewCart from './ViewCart';
import { Navigate, useLocation } from 'react-router';
import { navigate } from "@reach/router"
function Store() {
    const location = useLocation();
    const [cartIteam, setIteam] = useState([])
    let getCart = JSON.parse(localStorage.getItem("cartIteam") || "[]");
    // const navigation = useNavigation();
    const [ItemData, setItemData] = useState([]);
    const [isCartOpen, setCartOpen] = useState(false);
    const [AddCart, setAddCart] = useState([]);
    const [Count, setCount] = useState(0);
    const [SizeVal, setSize] = useState('');
    // const [productName, setProductName] = useState('');
    // const [unitPriceVal, setunitPrice] = useState('');
    const [shopping, setShopping] = useState([]);
    const [viewBag, setViewBag] = useState(true);

    if (Count < 1) {
        setCount(1)
    } if (Count > 10) {
        setCount(10)
    }
    // const [Minus, setMinus] = useState(0);
    const ContinueShopping = (productName, unitPriceVal, icode) => {
        setCartOpen(!isCartOpen);
    
        const itemObj = {
            Itemcode: icode,
            Quantity: Count,
            ProductName: productName,
            unitPrice: unitPriceVal,
            Size: SizeVal,
        };
    

        const updatedCart = [...getCart];
    
        const existingItemIndex = updatedCart.findIndex((item) => item.Itemcode === icode);
    
        if (existingItemIndex !== -1) {
            if (updatedCart[existingItemIndex].Size !== SizeVal) {
                updatedCart.push(itemObj);
            } else {

                updatedCart[existingItemIndex].Quantity = Count;
                updatedCart[existingItemIndex].Size = SizeVal;
            }
        } else {
            updatedCart.push(itemObj);
        }
    
 
        setShopping(updatedCart);
        localStorage.setItem("cartIteam", JSON.stringify(updatedCart));
        setCount(0);
    };
    
    const ViewShopping = (productName, unitPriceVal, icode) => {

        setCartOpen(!isCartOpen);
    

        const itemObj = {
            Itemcode: icode,
            Quantity: Count,
            ProductName: productName,
            unitPrice: unitPriceVal,
            Size: SizeVal,
        };
    

        setShopping(itemObj);

        setViewBag(false);
    
  
        const existingCart = JSON.parse(localStorage.getItem("cartIteam")) || [];
    
   
        const updatedCart = [...existingCart];
    

        const existingItemIndex = updatedCart.findIndex((item) => item.Itemcode === icode);
    
        if (existingItemIndex !== -1) {
  
            if (updatedCart[existingItemIndex].Size !== SizeVal) {
             
                updatedCart.push(itemObj);
            } else {
               
                updatedCart[existingItemIndex].Quantity += Count;
            }
        } else {
       
            updatedCart.push(itemObj);
        }
    
        setShopping(updatedCart);
    
        localStorage.setItem("cartIteam", JSON.stringify(updatedCart));
    };
    

    
    const openCart = async (code) => {
        setCartOpen(!isCartOpen);

        const filteredItem = ItemData.filter((el) => el.itemcode === code);
        setAddCart(filteredItem);

        const cartFromLocalStorage = JSON.parse(localStorage.getItem("cartIteam")) || [];

        
        const cartItem = cartFromLocalStorage.find((item) => item.Itemcode === code);

        
        setCount(cartItem ? cartItem.Quantity : 1);

       
        setSize(cartItem ? cartItem.Size : '');
    };


    // const handleChangeSize = (e) => {
    //     setSize(e.target.value);
    // };

    const handleChangeSize = (e) => {
        setSize(e.target.value);

    };


    const IteamList = async () => {

        try {
            const raw = {

                view: "all"

            };

            const config = {
                method: "POST",
                url: Torch_baseURL + "Ct/item/master/list",
                headers: {
                    "Content-Type": "application/json",
                },
                data: raw,
            };

            const response = await axios(config);

            const l = response.data;

            const { status, DATA } = l;
            console.log(DATA, 'sdksiud')
            if (status == "SUCCESS") {

                setItemData(DATA)
            } else {
                toast.error("Somthing Went Wrong", {
                    position: toast.POSITION.TOP_RIGHT,
                });
                // setUserEmail("")
            }


            // setRoute(newData);
        } catch (err) {
            console.error(err);
        }
    }


    useEffect(() => {
        IteamList()
        const add = JSON.parse(localStorage.getItem("cartIteam") || "[]");
        setIteam(add)
    }, [Count]);


    return (
        viewBag ? (

            <div>

                <section
                    className="store scrollspy-example"
                    data-bs-spy="scroll"
                    data-bs-target="#list-example"
                    data-bs-smooth-scroll="true"
                    tabindex="0"
                >
                    <h3 className="store_head" id="list-item-4">
                        STORE
                    </h3>
                    <div className="col-md-12 p-0">
                        <div className="row m-2 allcart_items">

                            {ItemData.map((data, index) => {
                                return (
                                    <>
                                        <div className="col-md-3 col-sm-6 p-1">
                                            <div className="card_torch">
                                                <div className="icon">
                                                    <img className="store_images" src={item_img_torch}></img>
                                                </div>

                                                <div className="title store_price_data">
                                                    <span className="item_name_torch">
                                                        {data.itemname}
                                                    </span>
                                                    <span className="item_price_torch">
                                                        Rs. <span className="amount_torch">{data.amount}</span>
                                                    </span>
                                                </div>


                                                <div className="text">
                                                    <div className="addtocart">
                                                        <button
                                                            className="btn addtocart_btn"
                                                            // onClick={openCart}
                                                            onClick={() => openCart(data.itemcode)}
                                                        >
                                                            <i class="bi bi-cart-plus"></i> ADD TO CART
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })
                            }




                        </div>
                    </div>
                </section>
                

                {isCartOpen && (
                    // setProductName(AddCart[0].itemname),
                    // setunitPrice(AddCart[0].amount),
                    <>
                        <Modal
                            className="border-none modal_of_viewcart"
                            size="md"
                            show={isCartOpen}
                            // onHide={setNamePopup}
                            backdrop="static"
                            keyboard={false}
                        >
                            {" "}
                            <div className="cart_top modal-content">
                                <button
                                    onClick={() => setCartOpen(false)}
                                    className=" close_btn_cart"
                                >
                                    X
                                </button>

                                <Modal.Body className=" vc_inside_height modal-approval view-sys-modal-body ">
                                    {/* <>
                    <div className="popupmodalloader">
                      <PopupLoader />
                    </div>
                  </> */}
                                    <div className="col-md-12 cart_popup p-0">
                                        <div className="row m-0 row_class">
                                            <div className="col-md-6 viewcart_left p-0">
                                                <span className="added_cart ms-2">Added to the cart Successfully !</span>
                                                <img
                                                    className="cart_images"
                                                    src={item_img_torch}
                                                ></img>
                                                <div className="cart_price_data">
                                                    <span className="item_name_torch">
                                                        {AddCart[0].itemname}
                                                    </span>


                                                    <span className="item_price_torch">
                                                        TOTAL PRICE Rs. <span className="amount_torch"> {AddCart[0].amount}</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mt-5 viewcart_right p-0">
                                                <div className="cart_right_side">
                                                    <span className="cart_item_head">
                                                        There are <span>X</span> Items in your cart
                                                    </span>
                                                    <span className="sub_total">
                                                        SUB TOTAL:{" "}
                                                        <span className="sub_total_amount">{(AddCart[0].amount * Count).toFixed(2)}</span>
                                                    </span>
                                                </div>
                                                <div className="cart_btns">
                                                    <span className="item_name_torch d-flex justify-content-center align-items-center pb-2">
                                                        QUANTITY : <span className=" ms-2 d-flex justify-content-center align-items-center">
                                                            <i class="bi bi-patch-minus me-2" onClick={() => setCount(Count - 1)} ></i>{Count}
                                                            <i class="bi bi-patch-plus ms-2" onClick={() => setCount(Count + 1)}></i>
                                                        </span>
                                                    </span>
                                                    <span className="item_name_torch d-flex justify-content-center align-items-center">
                                                        <span className="me-2">SIZE </span>
                                                        <select class="form-select form-select-sm" aria-label="Small select example" onChange={handleChangeSize} value={SizeVal}>
                                                            <option value="">CHOOSE</option>
                                                            <option value="S">S</option>
                                                            <option value="M">M</option>
                                                            <option value="L">L</option>
                                                            <option value="XL">XL</option>
                                                            <option value="XXL">XXL</option>
                                                        </select>
                                                    </span>
                                                    <button className=" continue_shop" onClick={() => {
                                                        ContinueShopping(AddCart[0].itemname, AddCart[0].amount, AddCart[0].itemcode)

                                                    }
                                                    }>CONTINUE SHOPPING</button>
                                                    <button className=" continue_shop2"
                                                        onClick={() => {
                                                            ViewShopping(AddCart[0].itemname, AddCart[0].amount, AddCart[0].itemcode)
                                                            // setProductName()
                                                            // setunitPrice()
                                                        }
                                                        }
                                                    //  onClick={ViewShopping}
                                                    //  setProductName(AddCart[0].itemname)
                                                    >VIEW SHOPPING BAG</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Modal.Body>
                            </div>
                        </Modal>
                    </>
                )}
            </div>

        ) : (<>
            <Navigate to={'/ViewCart'} />
        </>)


    );
}

export default Store;