
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-white border border-gray-200 shadow-md p-6 mb-6 rounded-2xl transition hover:shadow-xl">
      <div className="flex items-center gap-6 w-full sm:w-auto">
        <img
          src={item.image}
          alt={item.title}
          className="w-28 h-28 object-contain rounded-xl bg-gray-50 border"
        />
        <div className="flex flex-col gap-2 max-w-xs">
          <h1 className="text-xl font-bold text-gray-800 truncate">{item.title}</h1>
          <p className="text-gray-500 text-sm line-clamp-2">{item.description}</p>
          <p className="font-extrabold text-emerald-600 text-lg mt-1">₹{item.price}</p>
        </div>
      </div>
      <button
        onClick={removeFromCart}
        className="mt-4 sm:mt-0 flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 via-red-400 to-orange-400 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200"
        title="Remove from cart"
      >
        <FcDeleteDatabase className="text-2xl" />
        <span className="hidden sm:inline">Remove</span>
      </button>
    </div>
  );
};

export default CartItem;