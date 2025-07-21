import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="p-4">
      {
        cart.length > 0 ? (
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-2/3">
              {
                cart.map((item, index) => (
                  <CartItem key={item.id} item={item} itemIndex={index} />
                ))
              }
            </div>
            <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded">
              <div className="text-2xl font-bold mb-4">Your Cart</div>
              <div className="text-xl font-semibold mb-2">Summary</div>
              <p className="mb-2">
                <span>Total Items: {cart.length}</span>
              </p>
              <p className="mb-4">Total Amount: ₹{totalAmount}</p>
              <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                CheckOut Now
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center mt-20">
            <h1 className="text-2xl font-bold mb-4">Cart Empty</h1>
            <Link to="/">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Shop Now
              </button>
            </Link>
          </div>
        )
      }
    </div>
  );
};

export default Cart;