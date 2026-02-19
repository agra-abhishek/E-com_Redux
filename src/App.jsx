import Header from "./Header"
import Product from "./Product"
import { useDispatch } from "react-redux";

import { clearAllItem } from "./redux/slice";


const App = () => {
      const dispatch = useDispatch()

  return (
    <>
     
      <Header/>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition" onClick={()=>dispatch(clearAllItem())}>
       Clear Cart
                </button>
      <Product/>
      
    </>
  )
}

export default App
