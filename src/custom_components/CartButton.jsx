import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CartButton = () => {
  const cart = useSelector((state) => state.cart.cart); 

  const cartCount = cart.length;


  return (
    <Link
    to='/cart'
      className="relative flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
    >
      <FaShoppingCart className="mr-2 text-lg" />
      
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </Link>
  );
};

export default CartButton;
