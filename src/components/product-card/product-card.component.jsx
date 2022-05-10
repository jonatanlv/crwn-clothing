import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { addItemToCart } from "../../store/cart/cart.action";
import "./product-card.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const dispatch = useDispatch();
  const productItems = useSelector(selectCartItems);

  const addProductToCart = () => {
    const addItemToCartAction = addItemToCart(productItems, product);
    console.log(addItemToCartAction);
    dispatch(addItemToCartAction);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}€</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
