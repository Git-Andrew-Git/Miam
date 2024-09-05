import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import classes from "./cart.module.css";
import { removeProduct } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let totalPrice = 0;
  products.map((product) => (totalPrice += product.quantity * product.price));

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct({ _id: id }));
  };

  const handleOrder = () => {
    if (products.length > 0) {
      navigate("/checkout");
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          {products.length > 0 ? (
            products.map((product) => (
              <div className={classes.product} key={product._id}>
                <div
                  className={classes.closeBtn}
                  onClick={() => handleRemoveProduct(product._id)}
                >
                  <AiOutlineClose></AiOutlineClose>
                </div>
                <img
                  src={`https://miam.onrender.com/images/${product.img}`}
                  alt=""
                  className={classes.img}
                />
                <div className={classes.productData}>
                  <h3 className={classes.title}>{product.title}</h3>
                  <div className={classes.productAndQuantity}>
                    <span className={classes.quantity}>
                      {product.quantity} x{" "}
                    </span>
                    <span className={classes.price}>
                      <span>$</span>
                      {product.price}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className={classes.noProducts}>No products in the cart.</h1>
          )}
        </div>
        <div className={classes.right}>
          <div className={classes.totalProductMsg}>
            Total products: {products.length}
          </div>
          <div className={classes.subtotalCheckoutBtns}>
            <span className={classes.subtotal}>Subtotal: ${totalPrice}</span>
            <span
              onClick={handleOrder}
              disabled={products.length === 0}
              className={classes.orderNowBtn}
            >
              Order Now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
