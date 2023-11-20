import React from "react";

const UsageComponent = ({ title, price, image, addToCartHandler, buyProductHandler }) => {
    const [cart, setCart] = React.useState([]);

    const addToCart = () => {
        setCart([...cart, title]);
        addToCartHandler(title);
    };

    const buyProduct = () => {
        alert(`Compra exitosa de ${title}`);
        buyProductHandler(title);
    };
    return (
        <div className="card col-2 m-1 p-2">
            <img src={image} alt="" height="300" width="200" />
            <h5>{title}</h5>
            <h4>{price}</h4>
            <button className="btn btn-outline-info m-2 px-3" onClick={addToCart}>
                Add To Cart
            </button>
            <button className="btn btn-outline-info m-2 px-3" onClick={buyProduct}>
                Buy
            </button>
        </div>
    );
};

export default UsageComponent;