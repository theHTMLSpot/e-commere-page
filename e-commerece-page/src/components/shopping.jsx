import { useEffect, useState } from "react";

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
                        ${discount === 0 ? price.toFixed(2) : discountedPrice.toFixed(2)}
                    </h4>
                    <p className={discount === 0 ? 'hidden' : 'discount'}>
                        {discount}%
                    </p>
                </div>
                <h5 className={discount === 0 ? 'hidden' : 'strikethrough'}>
                    ${price.toFixed(2)}
                </h5>
                <div className="actions">
                    <div className="amount">
                        <button className="plus-minus" onClick={() => SetAmount('-')} id='minus'> - </button>
                        <p>{amount}</p>
                        <button className="plus-minus" onClick={() => SetAmount('+')} id='plus'> + </button>
                        <button className="add-to-cart">
                        add to cart
                    </button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Shopping;