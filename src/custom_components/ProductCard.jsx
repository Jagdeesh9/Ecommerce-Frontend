import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ id, title, image, price, rating, product }) => {
  const dispatch = useDispatch();

   const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Item added to cart!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  return (
    <Card className="w-64 h-80 cursor-pointer hover:shadow-xl transition-shadow rounded-2xl overflow-hidden flex flex-col justify-between">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <CardContent className="p-4 flex flex-col justify-between flex-grow">
        <h2 className="text-lg font-semibold truncate">{title}</h2>
        <p className="text-gray-600">${price}</p>
        <div className="flex items-center gap-1 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill={i < rating ? "#facc15" : "none"} />
          ))}
        </div>
        <div className="flex justify-between mt-3">
          <button
            className="p-2 rounded-full hover:bg-gray-200 transition"
            aria-label="Add to Wishlist"
          >
            <Heart size={20} className="text-red-500" />
          </button>
          <button
            className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition flex items-center gap-2"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
