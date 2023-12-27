import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import './style.css';

const TrendingDeal = () => {
    const [list, setList] = useState([]);
    const [startIndex, setStartIndex] = useState(0);

    const getDeal = async () => {
        try {
            const config = {
                method: 'GET',
                url: 'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?sort={"rating":-1}',
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
    }, []);

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
        <div className="carousel-container">

            <p className="Deal-title">{"Top Trending Deals"}</p>

            <div className="swiper-slide swiper-slide-active card-container">
                <button className="arrow-button" style={{ background: "#242424" }} onClick={handleBackward}>
                    {'<'}
                </button>
                {Array.isArray(list) && list.length > 0 ? (
                    list.slice(startIndex, startIndex + 4).map((product, index) => (
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

                <button className="arrow-button" onClick={handleForward} style={{ background: "#242424" }}>
                    {'>'}
                </button>
            </div>

        </div>
    );
};

export default TrendingDeal;
