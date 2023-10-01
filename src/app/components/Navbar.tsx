import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const Navbar: React.FC = () => {
    return (
        <nav className="md:container mx-auto bg-white shadow-navbar h-16">
        <div className="pl-10 pr-10 mx-auto px-4 h-full flex items-center justify-between">
          <Link href="../"
          className="flex-shrink-0 text-3xl font-bold text-gray-900 cursor-pointer">
            Placeholder
          </Link>
          <div className="flex-grow">
            <ul className="flex items-center justify-center space-x-10 text-lg">
              <li>
                <Link href="../pages/products"
                className="text-black font-semibold transition duration-300 ease-in-out hover:text-gray-500 hover:cursor-pointer">
                  Placeholder
                </Link>
              </li>
              <li>
                <Link href="../pages/products" 
                className="text-black font-semibold transition duration-300 ease-in-out hover:text-gray-500 hover:cursor-pointer">
                  Placeholder
                </Link>
              </li>
              <li>
                <Link href="../pages/products"
                className="text-black font-semibold transition duration-300 ease-in-out hover:text-gray-500 hover:cursor-pointer">
                  Placeholder
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-shrink-0">
            <FaShoppingCart className="text-black text-2xl transition duration-300 ease-in-out hover:text-gray-500 hover:cursor-pointer" />
          </div>
        </div>
      </nav>
    );
    }

export default Navbar;