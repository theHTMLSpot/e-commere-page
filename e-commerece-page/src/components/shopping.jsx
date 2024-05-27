import { useEffect, useState } from "react";
import { ReactComponent as Minus } from '../icon-minus.svg';
import { ReactComponent as Plus } from '../icon-plus.svg';

function Shopping({ price, discount }) {
    const [discountedPrice, setDiscountedPrice] = useState(0);
    const [amount, setAmount] = useState(1);

    const SetAmount = (operation) => {
        setAmount((prevAmount) => {
            const newAmount = operation === '-' ? prevAmount - 1 : prevAmount + 1;
            return newAmount < 1 ? 1 : newAmount; // Prevent amount from going below 1
        
        });
        
    };

    useEffect(() => {
        const calculateDiscountedPrice = () => {
            const discountAmount = (price * discount) / 100;
            const newPrice = price - discountAmount;
            setDiscountedPrice(newPrice);
        };

        calculateDiscountedPrice();
    }, [price, discount]);

    return (
        <div className="shopping-main">
            <div className="text">
                <p>Sneaker Company</p>
                <h1>Fall Limited Edition Sneakers</h1>
                <p>
                    These low-profile sneakers are your perfect casual wear companion. Featuring a durable outer rubber sole, they will withstand everything the weather can offer.
                </p>
                <div className="pricing">
                    <h4>
                        ${discount === 0 ? price.toFixed(2) * amount.toFixed(2) : discountedPrice.toFixed(2) * amount.toFixed(2)}
                    </h4>
                    <p className={discount === 0 ? 'hidden' : 'discount'}>
                        {discount}%
                    </p>
                </div>
                <h5 className={discount === 0 ? 'hidden' : 'strikethrough'}>
                    ${price.toFixed(2)  * amount.toFixed(2)}
                </h5>
                <div className="actions">
                    <div className="amount">
                        <button className="plus-minus" onClick={() => SetAmount('-')} id='minus'> <Minus /></button>
                        <p>{amount}</p>
                        <button className="plus-minus" onClick={() => SetAmount('+')} id='plus'> <Plus /> </button>
                        <button className="add-to-cart">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg> add to cart
                    </button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Shopping;