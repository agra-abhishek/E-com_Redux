import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity,clearAllItem, removeItem  } from "./redux/slice"
import { useNavigate } from "react-router-dom";

const CartList = () => {
    const dispatch = useDispatch();
    const cartSelector = useSelector((state) => state.cart.items);
    const navigate = useNavigate();

const handleCheckout = () => {
  if (cartSelector.length === 0) return;

  alert("Order Placed Successfully ✅");

  dispatch(clearAllItem());

  navigate("/");
};
    return (
        <div className="min-h-screen bg-gray-100 p-6">

            {/* Heading */}
            <div className="max-w-4xl mx-auto mb-6 flex flex-row justify-center items-center gap-60">
                <h2 className="text-2xl font-bold text-gray-800">
                    🛒 Your Cart Items
                </h2>
                <span className="text-2xl font-bold text-gray-800">{cartSelector.length} Items</span>
            </div>

            {/* Cart Container */}
            <div className="max-w-4xl mx-auto space-y-4">
                {cartSelector.length > 0 ? (
                    cartSelector.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl shadow-md p-4 flex justify-between items-center hover:shadow-lg transition"
                        >

                            {/* Left Section */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="w-20 h-20 object-cover rounded-xl"
                                />

                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                        {item.brand}
                                    </p>
                                </div>
                            </div>

                            {/* Right Section */}
                            <div className="flex items-center gap-6">
                                <span className="text-lg font-bold text-green-600">
                                    $ {item.price}
                                </span>
{/* Quantity Controls */}
          <div className="flex items-center gap-3">

            <button
              onClick={() => dispatch(decreaseQuantity(item.id))}
              className="bg-red-500 text-white px-3 py-1 rounded-lg"
            >
              -
            </button>

            <span className="font-semibold text-lg">
              {item.quantity}
            </span>

            <button
              onClick={() => dispatch(increaseQuantity(item.id))}
              className="bg-green-500 text-white px-3 py-1 rounded-lg"
            >
              +
            </button>

          </div>



                                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition" onClick={() => dispatch(removeItem(item.id))}>
                                    Remove Item
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-500 text-lg mt-10">
                        Your cart is empty.
                    </div>
                )}
            </div>

          {/* Total price */}
{cartSelector.length > 0 && (
  <div className="max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-2xl p-6">

    <div className="flex justify-between items-center mb-4">
      <span className="text-lg text-gray-600">
        Subtotal ({cartSelector.length} items)
      </span>

      <span className="text-2xl font-bold text-green-600">
        $ {cartSelector
          .reduce((sum, item) => sum + item.price * item.quantity, 0)
          .toFixed(2)}
      </span>
    </div>

    <button
      onClick={handleCheckout}
      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition"
    >
      Proceed to Checkout
    </button>

  </div>
)}
  </div>
  );
};
   

export default CartList;
