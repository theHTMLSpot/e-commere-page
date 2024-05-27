import { useState } from 'react';
import ImageScrollBar from './image-scroll-bar';
import Image1 from '../image-product-1.jpg';
import Image2 from '../image-product-2.jpg';
import Image3 from '../image-product-3.jpg';
import Image4 from '../image-product-4.jpg';
import { ReactComponent as Back } from '../icon-previous.svg';
import { ReactComponent as Next } from '../icon-next.svg';
import { ReactComponent as Exit } from '../icon-close.svg';

function LightBox({ lightboxActive , setLightboxActive}) {
  const [activeImage, setActiveImage] = useState(1);

  const images = [Image1, Image2, Image3, Image4];

  const handleNextImage = () => {
    setActiveImage((prevImage) => (prevImage === images.length ? 1 : prevImage + 1));
  };

  const handlePrevImage = () => {
    setActiveImage((prevImage) => (prevImage === 1 ? images.length : prevImage - 1));
  };

  return (
    <>
      {lightboxActive && (
        <div className="lightbox-background">
          <button id="exit" onClick={() => setLightboxActive(false)}> <Exit /> </button>
          <div id="lightbox-main">
            <button className="image-amount left" onClick={handlePrevImage}> <Back /> </button>
            {images.map((image, index) => (
              <img
                key={index}
                className={activeImage === index + 1 ? "MainImage" : "hidden"}
                src={image}
                alt={`Product ${index + 1}`}
              />
            ))}
            <button className="image-amount right" onClick={handleNextImage}> <Next />  </button>
            
          </div>

         
        </div>

        
      )}
    </>
  );
}

export default LightBox;