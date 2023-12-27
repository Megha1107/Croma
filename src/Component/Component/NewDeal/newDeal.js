import React, { useState, useEffect,useRef } from 'react';
import axios from "axios";

import { useNavigate } from "react-router-dom";
function NewDeal() {
     const [list,setList] = useState('')
  const products = [
    { id: 1, name: 'ac', image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968094/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_AC_21Feb2023_azyacw.png?tr=w-1024' },
    { id: 2, name: 'audio', image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968094/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_H_E_21Feb2023_cw375r.png?tr=w-1024' },
    { id: 3, name: 'health', image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281228/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/wearable_categoryicons_sl3n0l.png?tr=w-1024' },
    { id: 4, name: 'kitchenappliances', image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281227/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/kitchenappliances_categoryicons_xulmep.png?tr=w-1024' },
    { id: 5, name: 'laptop', image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1700225992/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/CategoryNavigation_AudioSplit_Laptops_17Nov2023_wcqnvs.png?tr=w-1024' },
    { id: 6, name: 'mobile', image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968095/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_Mobile_21Feb2023_y6hsfe.png?tr=w-1024' },
    { id: 7, name: 'refrigerator', image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968094/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_Ref_21Feb2023_ztynzt.png?tr=w-1024' },
    { id: 8, name: 'tablet', image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281228/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/tablet_categoryicons_d9a5ru.png?tr=w-1024' },
    { id:9, name: 'travel', image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281228/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/wearable_categoryicons_sl3n0l.png?tr=w-1024' },
    { id: 10, name: 'tv', image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968095/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_TV_21Feb2023_repyuk.png?tr=w-1024' },
    { id: 11, name: 'washingMachine', image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281227/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/washingmachine_categoryicons_ktcdeu.png?tr=w-1024' },
   
  ];

  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -300, // Change the scroll amount as needed
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: 300, // Change the scroll amount as needed
      behavior: 'smooth',
    });
  };

  const getAvailableCat = async () => {

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

     setList(data)

      } else {

      }
    } catch (err) {

    }
  };


  useEffect(() => {
    getAvailableCat()

  }, []);


  const navigate = useNavigate();

  function productFn(item) {
    navigate('/searchResult', { state: { itemName: item.name } });
  }


  const filteredProducts = products.filter(product => list.includes(product.name));
  return (
    <div className="cp-section-home banner-spacing" data-testid="image-carousal" id="comp_00006701" style={{ padding: '0rem', margin: '1rem 0rem', overflow: 'hidden' }}>
      <div className="container scroll-banner" style={{ paddingRight: '0px', overflowX: 'hidden', display: 'flex', alignItems: 'center' }}>
        {/* Previous button */}
        <button onClick={scrollLeft}>{'<'}</button>
        <div className="sec-cont" style={{ position: 'relative', width: '100%' }}>
          <div className="swiper-main-cont width-full swiper-main-comp_000067011" style={{ position: 'relative' }}>
            <div
              className="swiper-container comp_000067011-carousel-slider scroll-banner-container swiper-container-initialized swiper-container-horizontal"
              ref={containerRef}
              style={{ display: 'flex', overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', scrollBehavior: 'smooth' }}
            >
              {/* Display products from API */}
              {filteredProducts.map((product) => (
                <div key={product.id} className="swiper-slide" style={{ width: '119.625px', marginRight: '15px' }} onClick={()=>productFn(product)} >
                  <div className="slide-img-wrap" data-device-type="desktop" device-width="1512" style={{ borderRadius: '0.8rem' }}>
                    {/* Link to a category */}
                    <a className="" target="_blank" rel="noopener noreferrer" data-testid="image-carousal-adobe">
                      {/* Image */}
                      <img src={product.image} alt={product.name} style={{ width: '80px', height: '100px', borderRadius: '50px' }} loading="lazy" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            {/* Next button */}
            <div className="swiper-button-next comp_000067011-button-next" style={{ display: 'flex', position: 'absolute', top: '50%', right: '-25px', transform: 'translateY(-50%)' }} tabIndex="0" role="button" aria-label="Next slide" aria-disabled="false">
              Next
            </div>
          </div>
        </div>
        {/* Next button */}
        <button onClick={scrollRight}>{">"}</button>
      </div>
     
    </div>
  );
}

export default NewDeal;
