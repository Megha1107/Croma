import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style/nav.css"
const Nav = ({ onClick }) => {
  const navigate = useNavigate();
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('');
  const [subMenu, setSubMenu] = useState([]);
  const [search, setSearch] = useState('');

  
  const handleClick = () => {
    setShowSubmenu(!showSubmenu);
  };

  const handleSubMenuClick = (menu) => {
    setSelectedMenu(menu);

    navigate('/searchResult', { state: { itemName: menu } });
   
  };

  const getMenu = async () => {

    try {


      const config = {
        method: "GET",
        url: "https://academics.newtonschool.co/api/v1/ecommerce/electronics/categories",
        headers: {
          projectId: 'b4j0aeyd1jd1',
        },

      };

      const response = await axios(config);
      const l = response.data;

      const { status, data } = l;
      if (status === "success") {
        console.log(data, 'DATADATA22')

        setSubMenu(data)

      } else {

      }
    } catch (err) {

    }
  };

  const handleSearchInputChange = (event) => {
    const { value } = event.target;
    setSearch(value)
    // updateSearchQuery(value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
    
      // console.log('Search:', search);
      navigate('/searchResult', { state: { itemName: search } });
    }
  };

  useEffect(() => {
    getMenu()

  }, []);
  return (

    <div>
      <div style={{ marginRight: '50px', color: 'white' }}>
      </div>
      {/* Top Bar */}
      <div id="sznavbar" className="navbar" style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000', position: 'relative' }}>
        {/* Logo */}
        <div className="navbar-item" id="szlogo" style={{ marginRight: '20px' }}>
          <div id="szlo">
            <a href="index.html">
              <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://www.croma.com/assets/images/croma_logo_dark.png/mxw_192,f_auto" alt="Croma Logo" />
            </a>
          </div>
        </div>

        <div style={{ width: '20px' }}></div> {/* This spacer will create a 20px space between the logo and the search bar */}

        <div className="navbar-item" id="szmenu" style={{ position: 'relative' }}>
          <button id="active" onClick={handleClick}>
            <i className="fas fa-bars"></i>
            <div id="szsubmenu" style={{ display: showSubmenu ? 'block' : 'none', position: 'absolute', top: '100%', left: 0, backgroundColor: '#fff', zIndex: 1 }}>
              {subMenu.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleSubMenuClick(item)}
                  className="submenu-item"
                  style={{ backgroundColor: '#fff' }} // Set your desired background color here
                >
                  {item}
                </div>
              ))}
            </div>
          </button>
        </div>
        {/* Logo */}

        <div style={{ width: '40px' }}></div> {/* This spacer will create a 20px space between the logo and the search bar */}
        {/* Search Bar */}
        <div className="navbar-item" id="searchBar" style={{ position: 'relative' }}>
          <div id="szsearch" style={{ display: 'flex', alignItems: 'center' }}>
            <div id="szframe" style={{ position: 'relative' }}>


              <input
                id="searchV2"
                type="text"
                maxLength="500"
                name="search"
                className="MuiAutocomplete-input MuiAutocomplete-inputFocused search-field"
                placeholder="What are you looking for ?"
                style={{
                  width: '100%',
                  minWidth: '100%',
                  maxWidth: '48rem',
                  border: '0',
                  fontSize: '1.4rem',
                  padding: '1.135rem 2rem 1.135rem 2.5rem',
                  borderRadius: '0.5rem',
                  paddingRight: '30px',
                  height: '45px',

                  // Decrease the font size of the placeholder text
                  // Adjust font size as per your requirement
                  '::placeholder': {
                    fontSize: '0.8em', // You can modify the size here
                  },
                }}
                value={search}
                aria-autocomplete="list"
                autoComplete="off"
                autoCapitalize="none"
                spellCheck="false"
                onChange={handleSearchInputChange}
                onKeyPress={handleKeyPress}
              />
              <div id="szsearch-btn" style={{ position: 'absolute', right: '5px', top: '50%', transform: 'translateY(-50%)' }}>
                <button type="submit" style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}><i className="fa fa-search"></i></button>
              </div>
            </div>
          </div>
        </div>
        {/* Pin Code Icon with Text */}
        <div className="navbar-item" id="pinCode">
          <div style={{ marginLeft: '50px', color: 'white' }}>

          </div>
        </div> {/* Pin Code Icon with Text */}
        <div className="navbar-item" id="pinCode">
          <div style={{ marginLeft: '20px', color: 'white', display: 'flex', alignItems: 'center' }}>
            {/* Pin Code Icon */}
            <i className="fas fa-map-pin"></i>
            {/* Mumbai, 400049 */}
            <span style={{ marginLeft: '5px' }}>Mumbai, 400049</span>
          </div>
        </div>

        <div style={{ marginLeft: '50px', color: 'white' }}>
        </div>
        {/* <div id="szcart">
          <a href="cart.html" style={{ color: 'white', textDecoration: 'none' }}>
            <i className="fas fa-shopping-cart"></i>
            <div id="cartValue">5</div>
          </a>
        </div> */}
        <div className="navbar-item" id="cartContainer" style={{ marginRight: '20px' }}>
          <div id="szcart" style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
            <a href="cart.html" style={{ color: 'white', textDecoration: 'none', position: 'relative' }}>
              <i className="fas fa-shopping-cart" style={{ fontSize: '24px' }}></i>
              <div id="cartValue" style={{ position: 'absolute', top: '-10px', right: '-10px', backgroundColor: '#045804', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' ,fontSsize: '14px'}}>5</div>
            </a>
          </div>
          <div style={{ marginLeft: '70px', color: 'white' }}>
          </div>
          </div>

        </div>
      </div>




      );
};

      export default Nav;