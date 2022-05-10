import { useDispatch, useSelector } from "react-redux";

import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const { name, quantity, imageUrl, price } = item;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const removeItemFromCartHandler = (item) => {
    const removeAction = removeItemFromCart(cartItems, item);
    dispatch(removeAction);
  };
  const addItemToCartHandler = (item) => {
    const addAction = addItemToCart(cartItems, item);
    dispatch(addAction);
  };
  const clearItemFromCartHandler = (item) => {
    const clearAction = clearItemFromCart(cartItems, item);
    dispatch(clearAction);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow" onClick={() => removeItemFromCartHandler(item)}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => addItemToCartHandler(item)}>
          &#10095;
        </span>
      </span>
      <span className="price">{price}€</span>
      <div
        className="remove-button"
        onClick={() => clearItemFromCartHandler(item)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
