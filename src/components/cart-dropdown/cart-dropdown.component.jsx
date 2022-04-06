import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { CartContext } from "../../contexts/cart.context";

import { CartDropdownContainer, EmptyMessage } from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems, toggleCart } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = (e) => {
    toggleCart();
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <EmptyMessage>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
        {}
      </EmptyMessage>
      <Button onClick={goToCheckoutHandler}>Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
