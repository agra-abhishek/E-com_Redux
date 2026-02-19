import AddToCart from "./AddToCart";

function Header() {
  return (
    <>
   <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600 cursor-pointer">
          MyShop
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li className="hover:text-indigo-600 cursor-pointer transition">
            Home
          </li>
          <li className="hover:text-indigo-600 cursor-pointer transition">
            Products
          </li>
          <li className="hover:text-indigo-600 cursor-pointer transition">
            Sales
          </li>
        </ul>

        {/* Add To Cart Component */}
        <AddToCart />

      </div>
    </nav>
    </>
  );
}

export default Header;
