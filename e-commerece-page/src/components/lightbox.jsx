import { useState } from 'react';
import Image1 from '../image-product-1.jpg';
import Image2 from '../image-product-2.jpg';
import Image3 from '../image-product-3.jpg';
import Image4 from '../image-product-4.jpg';

function LightBox() {
  const [lightboxActive, setLightboxActive] = useState(true);
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
          <button id="exit" onClick={() => setLightboxActive(false)}> X </button>
          <div id="lightbox-main">
            <button className="image-amount left" onClick={handlePrevImage}> - </button>
            {images.map((image, index) => (
              <img
                key={index}
                className={activeImage === index + 1 ? "MainImage" : "hidden"}
                src={image}
                alt={`Product ${index + 1}`}
              />
            ))}
            <button className="image-amount right" onClick={handleNextImage}> + </button>
          </div>
        </div>
      )}
    </>
  );
}

export default LightBox;