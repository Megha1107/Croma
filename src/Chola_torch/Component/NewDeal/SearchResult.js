import React, { useState, useEffect, useRef, createContext } from 'react';
import axios from 'axios';

import './style.css';
import { useLocation } from 'react-router-dom';
import Nav from '../../Nav';



const SearchResult = ({ children }) => {
    const [list, setList] = useState([]);
    const [startIndex, setStartIndex] = useState(0);

    const location = useLocation();
    const { itemName } = location.state || {};
    console.log(itemName, 'children');
    const [searchQuery, setSearchQuery] = useState('');

    // Function to update the search query
    const updateSearchQuery = (query) => {
        setSearchQuery(query);
    };

    const getDeal = async () => {
        try {
            const config = {
                method: 'GET',
                url: `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory": "${itemName}"}`,
                headers: {
                    projectId: 'b4j0aeyd1jd1',
                },
            };

            const response = await axios(config);
            const l = response.data;

            const { status, data } = l;
            if (status === 'success') {
                setList(data);
            } else {
                // Handle error
            }
        } catch (err) {
            // Handle error
        }
    };

    useEffect(() => {
        getDeal();
    }, [itemName]);

    const handleForward = () => {
        if (startIndex + 4 < list.length) {
            setStartIndex(startIndex + 4);
        }
    };

    const handleBackward = () => {
        if (startIndex - 4 >= 0) {
            setStartIndex(startIndex - 4);
        }
    };
    const renderStars = (rating) => {
        const stars = [];
        const totalStars = 5;

        for (let i = 1; i <= totalStars; i++) {
            if (i <= rating) {
                stars.push(<span key={i} className="MuiRating-root MuiRating-readOnly" role="img" aria-label={`${i} Stars`}>&#9733;</span>);
            } else {
                stars.push(<span key={i} className="MuiRating-root MuiRating-readOnly" role="img" aria-label={`${i} Stars`}>&#9734;</span>);
            }
        }

        return <div>{stars}</div>;
    };
    return (
        // <SearchContext.Provider value={{ searchQuery, updateSearchQuery }}>
        <>
        <Nav/>
        <div className="carousel-container">
            <p className="Deal-title" style={{marginRight: '50%'}}>{"Results for  "}"{itemName}" {" ("}{list.length}{")"}</p>

            <div className="swiper-slide swiper-slide-active card-container" style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '20px'
            }}>
                {Array.isArray(list) && list.length > 0 ? (
                    list.map((product, index) => (
                        <div className="cp-product" key={index}>
                            <div className="product-img">
                                <img alt={product.name} src={product.displayImage} />
                                <button className="wishlistBtn">
                                    <span className="icon icon-wishlist"></span>
                                </button>
                            </div>
                            <div className="product-info comp_0000A7A82_carousal">
                                <p className="product-title">{product.name}</p>
                                <div className="cp-price">
                                    <span className="new-price">
                                        <span className="amount">₹{product.price}</span>
                                    </span>
                                    <span className="old-price">
                                        <span className="amount">₹{Number(product.price) + 1000}</span>
                                    </span>
                                </div>
                                <div className="cp-rating">
                                    <fieldset className="MuiBox-root jss329">
                                        {/* Render stars based on the product's rating */}
                                        {renderStars(Number(product.ratings))}
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products found</p>
                )}

            </div>

        </div>
        </>
        // </SearchContext.Provider>
    );
};

export default SearchResult;
