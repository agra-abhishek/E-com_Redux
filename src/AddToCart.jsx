import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

function AddToCart() {
    const [open, setOpen] = useState(false);

    const cartItems = useSelector((state) => state.cart.items)
    const CartLength = (cartItems.length)

    return (
        
            <div className="relative">
                <Link to='/cart'>
                <div className="relative cursor-pointer" onClick={() => setOpen(!open)}>
                    <FaShoppingCart className="w-6 h-6 text-gray-700 hover:text-indigo-600 transition" />
                    {/* Cart Badge */}
                    <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs px-2 py-0.5 rounded-full">
                        {CartLength}
                    </span>
                </div>
                </Link>
                {/* {open &&(
                    <div className="absolute right-0 mt-4 w-80 bg-white shadow-xl rounded-xl p-4 z-50">
          {CartLength === 0 ? (
            <p className="text-center text-gray-500">Cart is Empty</p>
          ) :
                (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 mb-4 border-b pb-3"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />

                <div className="flex-1">
                  <h3 className="text-sm font-semibold line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-green-600 font-bold text-sm">
                    $ {item.price}
                  </p>
                </div>
              </div>
            ))
        )}
            </div>
                )} */}
        </div>
    );}

export default AddToCart;
