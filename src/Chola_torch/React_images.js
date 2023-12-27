import React, { useState } from 'react';
import "./chola_torch.css"
 
const PopupComponent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupImageSrc, setPopupImageSrc] = useState('');
 
  const handleImageClick = (src) => {
    setPopupImageSrc(src);
    setShowPopup(true);
  };
 
  const closePopup = () => {
    setShowPopup(false);
  };
 
  return (
<div>
<div className="popup">
<img
          src="http://images.entertainment.ie/images_content/rectangle/620x372/success-kid.jpg"
          alt="Image 1"
          onClick={() => handleImageClick("http://images.entertainment.ie/images_content/rectangle/620x372/success-kid.jpg")}
        />
<img
          src="https://pbs.twimg.com/media/CX1PAZwVAAANemW.jpg"
          alt="Image 2"
          onClick={() => handleImageClick("https://pbs.twimg.com/media/CX1PAZwVAAANemW.jpg")}
        />
<img
          src="http://images5.fanpop.com/image/photos/30900000/beautiful-pic-different-beautiful-pictures-30958249-1600-1200.jpg"
          alt="Image 3"
          onClick={() =>
            handleImageClick(
              "http://images5.fanpop.com/image/photos/30900000/beautiful-pic-different-beautiful-pictures-30958249-1600-1200.jpg"
            )
          }
        />
</div>
 
      {showPopup && (
<div className="show">
<div className="overlay" onClick={closePopup}></div>
<div className="img-show">
<span onClick={closePopup}>&times;</span>
<img src={popupImageSrc} alt="Popup Image" />
</div>
</div>
      )}
</div>
  );
};
 
export default PopupComponent;