import { useState } from 'react';
import LightBox from './lightbox';
import '../image-product-1.jpg'; // Importing the image directly is unnecessary here, but you can keep it if needed

function Images() {
  const [lightboxActive, setLightboxActive] = useState(false);

  const handleImageClick = () => {
    setLightboxActive(true); // Activate the lightbox when the image is clicked
  };

  return (
    <>
      <div id='image-container' onClick={handleImageClick}>
        <img src="../image-product-1.jpg" alt="" />
      </div>
      {/* Render the lightbox component conditionally based on lightboxActive state */}
      {lightboxActive && <LightBox lightboxActive={true} setLightboxActive={setLightboxActive}/>}
    </>
  );
}

export default Images;