import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.success("Item removed from Cart");
  };

  const inCart = cart.some((p) => p.id === post.id);

  return (
    <div className="flex flex-col justify-between bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-200 p-5 group">
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-lg font-bold text-gray-800 truncate">{post.title}</p>
          <span className="bg-gradient-to-r from-emerald-400 to-blue-400 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            ₹{post.price}
          </span>
        </div>
        <div className="mb-3">
          <p className="text-gray-500 text-sm line-clamp-2">{post.description}</p>
        </div>
        <div className="flex justify-center items-center mb-4">
          <img
            src={post.image}
            alt={post.title}
            className="w-32 h-32 object-contain rounded-xl bg-gray-50 border group-hover:scale-105 transition-transform duration-200"
          />
        </div>
      </div>
      <div>
        {inCart ? (
          <button
            onClick={removeFromCart}
            className="w-full mt-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 via-red-400 to-orange-400 text-white font-bold shadow-md hover:scale-105 hover:shadow-xl transition-all duration-200"
          >
            Remove from Cart
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="w-full mt-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 text-white font-bold shadow-md hover:scale-105 hover:shadow-xl transition-all duration-200"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;