import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="p-4 bg-green-200 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">MiniShop</Link>
      <div>
        <Link to="/cart" className="relative">
          Cart 🛒
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white px-2 rounded-full text-xs">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

