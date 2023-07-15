import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navigation() {
  const product = useSelector((state) => state.cart);
  console.log(product);

  const cartstyle = {
    // background: "yellow",
    display: "flex",
    borderRadius: "50px",
  };

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <img className="mt-2 h-12" src="/Images/logo.png" alt="logo" />
        </Link>

        <ul className="flex">
          <li className="font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="ml-3 font-bold">
            <Link to="/getpizza">Products</Link>
          </li>
          <li className="ml-3 font-bold">
            <Link to="/Cart">
              <div style={cartstyle} className="bg-yellow-500 px-2">
                <span className="font-bold">{product.cartItems.length}</span>
                <img className="ml-1 " src="/Images/cart.png" alt="cart" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
