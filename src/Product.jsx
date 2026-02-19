import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./redux/slice";
import { useEffect } from "react";
import { fetchProducts } from "./redux/productSlice";
function Product() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts())
    }, []);
    const Productselector =useSelector((state) => state.product.items)

    console.log(Productselector);
    const cartItems = useSelector((state) => state.cart.items)
    const CartLength = (cartItems.length)
    return (
    <>
        <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        🛍 Product Store
      </h1>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">            {
             Productselector.length && Productselector.map((item) =>(
                   <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="font-semibold text-lg line-clamp-1">
                {item.title}
              </h2>

              <p className="text-sm text-gray-500 capitalize">
                {item.category}
              </p>

              <div className="flex justify-between items-center mt-3">
                <span className="text-green-600 font-bold text-lg">
                  $ {item.price}
                </span>

                <span className="text-yellow-500 text-sm">
                  ⭐ {item.rating}
                </span>
              </div>

{
cartItems.find(cartItem=>cartItem.id === item.id) ?
<button className="mt-4 w-full bg-green-400 text-white py-2 rounded-xl hover:bg-gray-800 transition" >
                Added to Cart
              </button>
              : <button className="mt-4 w-full bg-blue-400 text-white py-2 rounded-xl hover:bg-gray-800 transition" onClick={()=>dispatch(addItem(item))}>
                Add to Cart
              </button>
}
              
            </div>
          </div>
             ))   
            }
            </div>
            </div>
</>
       
    );
}

export default Product;


