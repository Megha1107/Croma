import React, { useState, useEffect } from "react";
import axios from "axios";
import Lightbox from "react-image-lightbox";
import { Torch_baseURL } from "../serverConfig/serverConfig";
import "react-image-lightbox/style.css";
import img_1 from "../../assets/chola_torch/img_1.jpeg";
import img_2 from "../../assets/chola_torch/img_2.jpeg";
import img_3 from "../../assets/chola_torch/img_3.jpg";
import img_4 from "../../assets/chola_torch/img_4.jpg";
function GalleryPage() {
  const GET_DMS = ""
  const [index, setIndex] = useState(-1);
  const [dmsImg, setDmsImg] = useState("");
  const [isPdf, setIsPdf] = useState(false)
  const [imageUrls, setImageUrls] = useState([]);
  const [itemZone, setitem] = useState('All');


 
  const [images, setImages] = useState([])
 

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;
  const handleClick = (index, item) => {
    console.log(index, "index");
     setIndex(index);
  };
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);



  // const handlegetDmsID = async (itemZone) => {
  //   console.log(itemZone, 'itemZoneitemZone')
  //   try {
  //     const raw = {
  //       status: "Y",
  //       zone: itemZone,
  //     };

  //     const config = {
  //       method: "POST",
  //       url: Torch_baseURL + "Ct/file/status/list",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       data: raw,
  //     };

  //     const response = await axios(config);
  //     console.log(response, "DATADATADATA");
  //     const l = response.data;

  //     const { status, DATA } = l;
  //     console.log(DATA.dms_id, "sdksiud");
  //     if (status == "SUCCESS") {
  //       const filtered = DATA.filter(function (el) {
  //         return el.zone == itemZone;
  //       });
  //       // filterZone=
  //       DATA.forEach((item) => {
  //         console.log(item.dms_id);
  //         handleCallDmsImg(item.dms_id);
  //       });
  //     } else {
  //       // toast.error("Somthing Went Wrong", {
  //       //   position: toast.POSITION.TOP_RIGHT,
  //       // });
  //       // setUserEmail("");
  //     }

  //     // setRoute(newData);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };


  const [fetchedImages, setFetchedImages] = useState([]);

  // const handleCallDmsImg = async (dmsId) => {

  //   try {
  //     if (dmsId) {
  //       const payload = {
  //         id: dmsId,
  //       };

  //       const response = await axios.post(`${GET_DMS}`, payload, {
  //         headers: tokenHEADER,
  //       });

  //       const imageUrl = response.data;

  //       // Check if the image is already fetched
  //       if (!fetchedImages.includes(imageUrl)) {
  //         // Create an object with required properties
  //         const imageObj = {
  //           id: images.length + 1,
  //           src: imageUrl,
  //           width: 900,
  //           height: 400,
  //           date: "", // Add the extracted date
  //           extension: "", // Add the extracted extension
  //         };

  //         // Update the fetched images list
  //         setFetchedImages([...fetchedImages, imageUrl]);

  //         // Reset the images state with the newly fetched image
  //         setImages([imageObj]);
  //       }

  //       return imageUrl; // Return the image URL if needed
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     // Handle errors if needed
  //     throw error;
  //   }
  // };

  // const handleCallDmsImg = async (dmsId) => {
  //   try {
  //     if (dmsId) {
  //       const payload = {
  //         id: dmsId,
  //       };

  //       const response = await axios.post(`${GET_DMS}`, payload, {
  //         headers: tokenHEADER,
  //       });

  //       let imageUrls = response.data;

  //       // Convert single URL response to an array to iterate through
  //       if (!Array.isArray(imageUrls)) {
  //         imageUrls = [imageUrls];
  //       }

  //       // Create an array to store image objects
  //       const imageObjects = [];

  //       // Loop through each image URL in the response
  //       imageUrls.forEach((imageUrl, index) => {
  //         // Check if the image is already fetched
  //         if (!fetchedImages.includes(imageUrl)) {
  //           // Create an object with required properties
  //           const imageObj = {
  //             id: images.length + index + 1,
  //             src: imageUrl,
  //             width: 900,
  //             height: 400,
  //             date: "", // Add the extracted date
  //             extension: "", // Add the extracted extension
  //           };
  //           // Push the image object to the array
  //           imageObjects.push(imageObj);
  //         }
  //       });

  //       // Update the images state with the newly fetched images
  //       setImages((prevImages) => [...prevImages, ...imageObjects]);

  //       // Update the fetched images list
  //       // setFetchedImages((prevImages) => [...prevImages, ...imageUrls]);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     // Handle errors if needed
  //     throw error;
  //   }
  // };
  // const handleCallDmsImg = async (item) => {
  //   try {
  //     if (item.dms_id) {
  //       const payload = {
  //         id: item.dms_id,
  //       };

  //       const response = await axios.post(`${GET_DMS}`, payload, {
  //         headers: tokenHEADER,
  //       });

  //       let imageUrls = response.data;

  //       if (!Array.isArray(imageUrls)) {
  //         imageUrls = [imageUrls];
  //       }

  //       const imageObjects = [];

  //       imageUrls.forEach((imageUrl, index) => {
  //         if (!fetchedImages.includes(imageUrl)) {
  //           const imageObj = {
  //             id: images.length + index + 1,
  //             src: imageUrl,
  //             width: 900,
  //             height: 400,
  //             date: "", // Add the extracted date
  //             extension: "", // Add the extracted extension
  //           };
  //           imageObjects.push(imageObj);
  //         }
  //       });

  //       // Store imageObjects in localStorage based on itemZone
  //       // localStorage.setItem(item.itemZone, JSON.stringify(imageObjects));

  //       // // Remove duplicate src values from prevImages and imageObjects
  //       // const updatedPrevImages = prevImages.filter(
  //       //   (prevImg) => !imageObjects.some((newImg) => newImg.src === prevImg.src)
  //       // );

  //       // const updatedImageObjects = imageObjects.filter(
  //       //   (newImg) => !prevImages.some((prevImg) => prevImg.src === newImg.src)
  //       // );

  //       // // Set the images state with the merged unique image objects
  //       // setImages([...updatedPrevImages, ...updatedImageObjects]);
  //       // localStorage.setItem(item.itemZone, JSON.stringify(imageObjects));

  //       // Remove duplicate src values from images and imageObjects
  //       const updatedPrevImages = images.filter(
  //         (prevImg) => !imageObjects.some((newImg) => newImg.src === prevImg.src)
  //       );

  //       const updatedImageObjects = imageObjects.filter(
  //         (newImg) => !images.some((prevImg) => prevImg.src === newImg.src)
  //       );

  //       // Set the images state with the merged unique image objects
  //       setImages([...updatedPrevImages, ...updatedImageObjects]);
  //       // localStorage.setItem(item.zone, JSON.stringify([...updatedPrevImages, ...updatedImageObjects]));
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     // Handle errors if needed
  //     throw error;
  //   }
  // };





  const [dataItems, setDataItems] = useState([]);
  // console.log(images, 'iehoiahdhadmsImg')
  const handleButtonClick = async (itemZone) => {

    try {
      const raw = {
        status: "Y",
        zone: itemZone,
        limit:100,
      };

      const config = {
        method: "POST",
        url: Torch_baseURL + "Ct/file/list/view",
        headers: {
          "Content-Type": "application/json",
        },
        data: raw,
      };

      const response = await axios(config);
      const l = response.data;

      const { status, DATA } = l;
      if (status === "SUCCESS") {
        console.log(DATA,'DATADATA22')
        setCurrentPage(1)
        setImages(DATA)
        // const filtered = DATA.filter((el) => el.zone === itemZone);
        // filtered.forEach((item) => {
        //   handleCallDmsImg(item);
        // });
      } else {
        // Handle error or set state accordingly
      }
    } catch (err) {
      // Handle error
    }
  };

  // useEffect(() => {
  //   const handlegetDmsID = async () => {
  //     try {
  //       const raw = {
  //         status: "Y",
  //         zone: itemZone,
  //       };

  //       const config = {
  //         method: "POST",
  //         url: Torch_baseURL + "Ct/file/status/list",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         data: raw,
  //       };

  //       const response = await axios(config);
  //       const l = response.data;

  //       const { status, DATA } = l;
  //       if (status === "SUCCESS") {
  //         const filtered = DATA.filter((el) => el.zone === itemZone);
  //         filtered.forEach((item) => {
  //           handleCallDmsImg(item);
  //         });
  //       } else {
  //         // Handle error or set state accordingly
  //       }
  //     } catch (err) {
  //       // Handle error
  //     }
  //   };

  //   handlegetDmsID();
  // }, []);

  // useEffect(() => {
  //   const removeDuplicates = (images) => {
  //     return images.filter((image, index, self) =>
  //       index === self.findIndex((i) => i.src === image.src)
  //     );
  //   };

  //   const imagesDupRemoved = removeDuplicates(imagesCopy);
  //   setImagesoriginal(imagesDupRemoved);
  // }, [imagesCopy]);
  // Update images whenever dmsImg or dataItems change
  // useEffect(() => {
  //   const imageUrls = dmsImg.split(',');
  //   const imageElements = imageUrls.map((url, index) => (
  //     // <img key={index} src={url} alt={`Image ${index}`} />
  //       {
  //           id: index + 1,
  //           src: url,
  //           width: 900,
  //           height: 400,
  //         }
  //   ));
  //   // setImages(imageElements)

  // //   const updatedImages = dataItems.map((data, index) => ({
  // //     id: index + 1,
  // //     src: dmsImg,
  // //     width: 900,
  // //     height: 400,
  // //   }));

  // //   console.log(updatedImages); // Log the updated images array

  // //   // Use updatedImages as needed in your component
  // //   // For example, set it in state or use it for rendering
  // }, []);

  // useEffect(() => {
  //   const imageUrls = dmsImg.split(','); 
  //   console.log(imageUrls,'imageUrls')
  //   const imageElements = imageUrls.map((url, index) => ({
  //     id: index + 1,
  //     src: url,
  //     width: 900,
  //     height: 400,
  //   }));


  //   console.log(imageElements,'imageElements'); // Log the generated image elements array

  //   // For example, you can set the image elements in state
  //   setImages(imageElements); // Assuming you have a state variable 'images' to store the image elements

  // }, [dmsImg]);
  // useEffect(() => {
  //   if (Array.isArray(dmsImg) && dmsImg.length > 0) {
  //     const imageElements = dmsImg.map((url, index) => ({
  //       id: index + 1,
  //       src: url,
  //       width: 900,
  //       height: 400,
  //     }));
  //     console.log(imageElements,'imageElements')
  //     setImages(imageElements);
  //   }
  // }, [dmsImg]);

  useEffect(() => {
    handleButtonClick('')
   
  }, []);
  // useEffect(() => {

  //   // Split the string into an array using newline as the delimiter
  //   const urlsArray = dmsImg?.split('\n');

  //   // Set the state with the array of URLs
  //   setImageUrls(urlsArray);
  // }, []);

  // console.log(images, 'imageUrlsimageUrls')

  const ITEMS_PER_PAGE = 6; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);

  // Paginate the images to display based on the current page
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = images.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  
  console.log(images, 'fetchedImagesfetchedImages')
  return (
    <div>
      <section
        className="gallery scrollspy-example"
        data-bs-spy="scroll"
        data-bs-target="#list-example"
        data-bs-smooth-scroll="true"
        tabindex="0"
      >
        <div className="head_data" id="list-item-3">
          <h1 className="fw-bold">GALLERY</h1>
          <h5>
            Watch the action as the Believe Torch travels the length &
            breadth of the nation.
          </h5>
          <div className="d-flex justify-content-center pt-4">
            {/* <span className="photo">PHOTO</span> */}
            {/* <span className="middle">|</span>
                <span className="video">VIDEO</span> */}
          </div>
        </div>
        <div className="col-md-12 d-flex flex-column justify-content-center align-items-center flex-unwrap">
          <div className="" style={{position:"relative"}}>
          <div className="gal_zone_filter">
                      <button  value="ALL" className="gal_zone" onClick={() => handleButtonClick('')}>ALL</button>
                      <button  value="South" className="gal_zone" onClick={() => handleButtonClick('South')}>South</button>
                      <button  value="North" className="gal_zone" onClick={() => handleButtonClick('North')}>North</button>
                      <button  value="East" className="gal_zone" onClick={() => handleButtonClick('East')}>East</button>
                      <button value="West" className="gal_zone" onClick={() => handleButtonClick('West')}>West</button>
                    </div>
          </div>
                    
                    <div className="gallery_imgs">
                
           
          {
          
          currentItems.length>0? 
         ( currentItems.map((item, index) => {
            const itemIndex = indexOfFirstItem + index;
            return (
              <div key={itemIndex} onClick={() => handleClick(itemIndex)}>
                <img className="gallery_img" src={item.dmsUrl} alt={`Image ${itemIndex}`} />
              </div>
            );
          })):<><p>No Images Found</p></>
          
          }
        </div>
        <div>
        <ul className="pagination mt-5">
          {Array.from({ length: totalPages }).map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
              <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
        </div>
                  </div>
                 

      
                  {!!currentImage && (
          <Lightbox
            mainSrc={currentImage.dmsUrl}
            imageTitle={currentImage.caption}
            mainSrcThumbnail={currentImage.dmsUrl}
            nextSrc={nextImage.dmsUrl}
            nextSrcThumbnail={nextImage.dmsUrl}
            prevSrc={prevImage.dmsUrl}
            prevSrcThumbnail={prevImage.dmsUrl}
            onCloseRequest={handleClose}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
          />
        )}

      </section>
    </div>
  );
}

export default GalleryPage;