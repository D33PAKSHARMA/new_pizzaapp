import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";

const Cart = () => {
  const Dispatch = useDispatch();

  // Destructure cartItems from our state cart
  const { cartItems } = useSelector((state) => state.cart);
  let total = 0;

  // Delete item from cart
  const deleteFromCart = (product) => {
    Dispatch(removeFromCart(product));
  };

  return cartItems.length ? (
    <div className="container mx-auto lg:w-1/2 w-full pb-24">
      <h1 className="my-10 font-bold">Cart Items</h1>
      <ul>
        {cartItems.map((product) => {
          return (
            <div key={product._id}>
              <li className="mb-12">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img className="h-16" src={product.image.url} alt="" />
                    <span className="font-bold ml-4 w-48">{product.name} </span>
                  </div>
                  <div>
                    <button className="rounded-full bg-yellow-500 px-4 py-2 leading-none">
                      -
                    </button>
                    <b className="px-2">{product.cartQuantity}</b>
                    <button className="rounded-full bg-yellow-500 px-4 py-2 leading-none">
                      +
                    </button>
                  </div>
                  <span>₹{product.price}</span>
                  <button
                    className="bg-red-500 rounded-full px-4 py-2 text-white leading-none"
                    onClick={() => deleteFromCart(product)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
      <hr className="my-4" />
      <div className="text-right">
        <b>Grand Total: ₹ {0}</b>
      </div>
      <div className="text-right mt-4">
        <button className="bg-yellow-500 rounded-full px-4 py-2 leading-none">
          Order Now
        </button>
      </div>
    </div>
  ) : (
    <img
      className="mx-auto w-1/2 mt-12"
      src="/Images/empty-cart_2.png"
      alt=""
    />
  );
};

export default Cart;
