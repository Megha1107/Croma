import React, { useState } from 'react';
import footer_img from "../assets/chola_torch/Group 231.svg";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Torch_baseURL } from "./serverConfig/serverConfig";
import './chola_torch.css'
const Footer = () => {
  const [userEmail, setUserEmail] = useState();
  const usefulLinks = [
    'About Croma',
    'Help And Support',
    'FAQs',
    'Buying Guide',
    'Return Policy',
    'B2B Orders',
    'Store Locator',
    'E-Waste',
    'Franchise Opportunity',
    'Site Map',
    'Careers At Croma',
    'Terms Of Use',
    'Disclaimer',
    'Privacy Policy',
    'Unboxed',
    'Gift Card'
  ];
  const productCategories = [
    'Televisions & Accessories',
    'Home Appliances',
    'Phones & Wearables',
    'Computers & Tablets',
    'Kitchen Appliances',
    'Audio & Video',
    'Health & Fitness',
    'Grooming & Personal Care',
    'Cameras & Accessories',
    'Smart Devices',
    'Gaming',
    'Accessories',
    'Top Brands'
  ];


  const handleSubmit = async () => {
    try {
      const raw = {
        emailId: userEmail,
      };

      const config = {
        method: "POST",
        url: Torch_baseURL + "Ct/subscribe/create",
        headers: {
          "Content-Type": "application/json",
        },
        data: raw,
      };

      const response = await axios(config);
      console.log(response, 'DATADATADATA');
      const l = response.data;

      const { status, DATA } = l;

      if (status == "SUCCESS") {

        toast.success("Subscribe Successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setUserEmail('')
      } else {
        toast.error("Somthing Went Wrong", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setUserEmail('')
      }


      // setRoute(newData);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <>      <ToastContainer />
      <div>
        <section className="footer">


          <footer className="footer">
            <div className="flex-section">
              <div className="left-section">
                <div className="connect-with-us">
                  <h3>CONNECT WITH US</h3>

                  <input
                    className="did-floating-input"
                    type="email"
                    placeholder=" "
                    name="email"
                  />
                </div>
                <div className="social-icons d-flex m-2">
                  <ul className="social d-flex list-unstyled" data-testid="socialLink-list">
                    <li className="social-item" data-testid="sociallink-list-item">
                      <a href="https://www.youtube.com/user/CromaRetail" target="_blank" className="bi bi-youtube mr-3"></a>
                    </li>
                    <li className="social-item" data-testid="sociallink-list-item">
                      <a href="https://www.facebook.com/CromaRetail/" target="_blank" className="bi bi-facebook mr-3"></a>
                    </li>
                    <li className="social-item" data-testid="sociallink-list-item">
                      <a href="https://www.instagram.com/croma.retail/" target="_blank" className="bi bi-instagram mr-3"></a>
                    </li>
                    {/* Add other Bootstrap icons in a similar manner */}
                  </ul>
                </div>

                <div className="footer-bottom">
                  <p>&copy; Copyright 2023 Croma. All rights reserved</p>
                </div>
              </div>
              <div className="vertical-line"></div>
              <div className="useful-links" style={{ columnCount: 2, columnGap: '20px' }}>
                <h3>USEFUL LINKS</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {usefulLinks.map((link, index) => (
                    <li key={index} style={{ color: '#fff', fontWeight: 'bold' }}>{link}</li>
                  ))}
                </ul>
              </div>


              <div className="vertical-line"></div>
              <div className="products" style={{ maxHeight: '300px', columnCount: 2, columnGap: '20px' }}>
        <h3>PRODUCTS</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {productCategories.map((category, index) => (
            <li key={index} style={{ color: '#fff', fontWeight: 'bold' }}>{category}</li>
          ))}
        </ul>
      </div>
            </div>

            

   


            {/* </div> */}

          </footer>
        </section>
      </div >
    </>
  );
};

export default Footer;