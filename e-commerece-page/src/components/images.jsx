import { useState } from 'react';
import ImageScrollBar from './image-scroll-bar';
import LightBox from './lightbox';
import Image1 from '../image-product-1.jpg';
import Image2 from '../image-product-2.jpg';
import Image3 from '../image-product-3.jpg';
import Image4 from '../image-product-4.jpg';

function Images() {
  const [activeImage, setActiveImage] = useState(1);
  const [lightboxActive, setLightboxActive] = useState(false);
  
  const images = [Image1, Image2, Image3, Image4];

  const handleImageClick = () => {
    setLightboxActive(true);
  };

  return (
    <>
      <div id='image-container' onClick={handleImageClick}>
        {images.map((image, index) => (
          <img 
            key={index}
            src={image} 
            className={activeImage === index + 1 ? 'active-image' : 'hidden'} 
            alt={`Product image ${index + 1}`} 
          />
        ))}
        <ImageScrollBar id='lightbox-image-scroll-bar'/>
      </div>
      {lightboxActive && <LightBox lightboxActive={true} setLightboxActive={setLightboxActive} />}

      
    </>
  );
}

export default Images;