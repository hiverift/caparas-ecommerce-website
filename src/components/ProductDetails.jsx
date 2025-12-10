import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSearch } from "../context/SearchContext";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import fallbackImage from "../assets/diffuser.png";

export default function ProductDetails() {
  const { id } = useParams();
  const { allWebsiteProducts } = useSearch();
  const { addItem } = useCart();

  const [product, setProduct] = useState(null);
  const [activeImg, setActiveImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (allWebsiteProducts.length > 0) {
      const found = allWebsiteProducts.find((item) => item._id === id);

      if (found) {
        const mapped = {
          id: found._id,
          title: found.Name,
          salePrice: found.SalesPrice,
          Stock: found.Stock,
          originalPrice: found.Price,
          images: found.imageUrls || [],
        };

        setProduct(mapped);
      }
    }
  }, [allWebsiteProducts, id]);

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.salePrice,
      image: product.images[0],
      quantity: quantity,
    });
  };

  if (!product) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Loading product...
      </div>
    );
  }

  // Calculate discount percentage
  const discountPercentage = Math.round(
    ((product.originalPrice - product.salePrice) / product.originalPrice) * 100
  );
 console.log("PRODUCT STOCK =>", product.Stock);
  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* LEFT - IMAGE GALLERY */}
        <div className="space-y-6">
          {/* Main Image */}
          <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
            <img
              src={product.images[activeImg] || fallbackImage}
              onError={(e) => (e.target.src = fallbackImage)}
              className="w-full h-full object-cover"
              alt={product.title}
            />
          </div>

          {/* Thumbnail Images */}
          <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImg(index)}
                className={`aspect-square rounded-lg overflow-hidden border-2 ${
                  activeImg === index
                    ? "border-teal-500"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <img
                  src={img || fallbackImage}
                  onError={(e) => (e.target.src = fallbackImage)}
                  className="w-full h-full object-cover"
                  alt={`${product.title} view ${index + 1}`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT - PRODUCT INFO */}
        <div className="space-y-6">
          {/* Product Title */}
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>

          {/* Price Section */}
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <p className="text-3xl font-bold text-teal-600">
                ₹{product.salePrice?.toLocaleString()}
              </p>
              <p className="line-through text-gray-500 text-xl">
                ₹{product.originalPrice?.toLocaleString()}
              </p>
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-semibold">
                {discountPercentage}% OFF
              </span>
            </div>
            <p className="text-green-600 font-medium">
              You Save: ₹
              {(product.originalPrice - product.salePrice)?.toLocaleString()} (
              {discountPercentage}%)
            </p>
          </div>

          {/* Stock Countdown */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            {product.Stock < 2 ? (
              <p className="text-orange-800 font-semibold">
                ⚠️ Hurry! Only <span className="text-red-600">{product.Stock}</span>{" "}
                Left in Stock!
              </p>
            ) : (
              <p className="text-green-800 font-semibold">
                In Stock: <span className="text-green-600">{product.Stock}</span> items
                available
              </p>
            )}
          </div>
          {/* Quantity Selector */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => handleQuantityChange("decrement")}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="px-4 py-2 border-l border-r border-gray-300 min-w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange("increment")}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
          {/* ADD TO CART + BUY NOW (Side by Side) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-teal-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19.884,21.897c-0.124,0.124-0.271,0.186-0.439,0.186h-15c-0.169,0-0.315-0.062-0.439-0.186c-0.124-0.124-0.186-0.271-0.186-0.439v-15c0-0.169,0.062-0.315,0.186-0.439c0.124-0.124,0.271-0.186,0.439-0.186h3.75c0-1.028,0.368-1.911,1.104-2.646c0.735-0.735,1.618-1.104,2.646-1.104s1.911,0.368,2.646,1.104c0.735,0.736,1.104,1.618,1.104,2.646h3.75c0.169,0,0.315,0.062,0.439,0.186c0.124,0.124,0.186,0.271,0.186,0.439v15C20.069,21.627,20.008,21.773,19.884,21.897z M18.819,7.083h-3.125v2.5c0,0.169-0.062,0.316-0.186,0.439c-0.124,0.124-0.271,0.186-0.439,0.186s-0.315-0.062-0.439-0.186c-0.124-0.124-0.186
-0.27-0.186-0.439v-2.5h-5v2.5c0,0.169-0.062,0.316-0.186,0.439c-0.124,0.124-0.271,0.186-0.439,0.186s-0.315-0.062-0.439-0.186c-0.124-0.124-0.186-0.27-0.186-0.439v-2.5H5.069v13.75h13.75V7.083z M10.177,4.065C9.688,4.554,9.444,5.143,9.444,5.833h5c0-0.69-0.244-1.279-0.732-1.768s-1.077-0.732-1.768-0.732S10.665,3.577,10.177,4.065z"
                />
              </svg>
              Add To Cart
            </button>

            {/* Buy Now */}
            <Link to="/checkout">
              <button className="w-full bg-gray-900 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
                Buy it now
              </button>
            </Link>
          </div>

          {/* Product Badges/Features */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
            {[
              "Premium Quality",
              "Microwave Safe",
              "Dishwasher Safe",
              "Eco Friendly",
              "Perfect for Gifting",
              "1 Year Warranty",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PRODUCT DESCRIPTION */}
      <div className="mt-16 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold mb-6">Product Information</h2>
        <div className="prose max-w-none">
          <p>
            <strong>Premium Ceramic Combo Set</strong>: Includes 2 snack bowls
            (500ML each) and 6 tea cups (160ML each), perfect for everyday use
            or special occasions.
          </p>
          <p>
            <strong>Versatile Usage</strong>: Enjoy tea, coffee, or other
            beverages in the cups, while bowls are ideal for serving fruits,
            sweets, biscuits, soups, and snacks.
          </p>
          <p>
            <strong>Microwave & Dishwasher Safe</strong>: Designed for
            convenience, this set is easy to use, heat, and clean—ideal for
            modern kitchens.
          </p>
          <p>
            <strong>Elegant & Durable</strong>: Crafted from high-quality
            ceramic with a smooth finish, these pieces add a touch of
            sophistication to any table setting.
          </p>
          <p>
            <strong>Perfect for Home, Office & Gifting</strong>: Ideal for
            family gatherings, entertaining guests, daily use at home or work,
            and makes a thoughtful gift for birthdays, housewarmings, festivals,
            or corporate occasions.
          </p>
        </div>
      </div>
    </div>
  );
}
