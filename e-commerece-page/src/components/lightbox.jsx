import { useState } from 'react';
import classNames from 'classnames'
import Image1 from '../image-product-1.jpg';
import Image2 from '../image-product-2.jpg'
import Image3 from '../image-product-3.jpg'
import Image4 from '../image-product-4.jpg';


function LightBox()
{
    const [lightboxActive, setLightboxActive] = useState(true);
    const [activeImage, setActiveImage] = useState(1);
    return(
        <>
            {lightboxActive ? (
                <div className="lightbox-background">
                    <button id='exit' onClick={(e) => setLightboxActive(false)}> X </button>
                    <div id='lightbox-main'>
                        <img className={activeImage === 1 ? "MainImage" : 'hidden'} src={Image1} alt="1" />
                        <img className={activeImage === 2 ? "MainImage" : 'hidden'}  src={Image2} alt='2'/>
                        <img className={activeImage === 3 ? "MainImage" : 'hidden'}  src={Image3} alt="3" />
                        <img className={activeImage === 4 ? "MainImage" : 'hidden'}  src={Image4} alt='4'/>
                    </div>
                    
                </div>
            ) : (
                <></>
            )}
        </>
    );
}

export default LightBox;