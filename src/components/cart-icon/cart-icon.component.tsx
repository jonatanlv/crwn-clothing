import { useDispatch, useSelector } from "react-redux";

import { toggleCart } from "../../store/cart/cart.action";
import { selectCartCount } from "../../store/cart/cart.selector";

import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);

  const toggleCartHandler = () => {
    dispatch(toggleCart());
  };

  return (
    <CartIconContainer onClick={toggleCartHandler}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
