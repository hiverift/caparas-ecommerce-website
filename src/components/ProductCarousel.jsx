import { useCart } from "../context/CartContext";
import { mockProducts } from "./mockData";

function ProductCard({ product }) {
const { cart, addItem, removeItem } = useCart();

const cartItem = cart.find((p) => p.id === product.id);
const quantity = cartItem ? cartItem.quantity : 0;


  const discount =
    product.compareAtPrice > product.price
      ? Math.round(
          ((product.compareAtPrice - product.price) / product.compareAtPrice) * 100
        )
      : 0;

  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      <a href={`/products/${product.handle}`} className="block">
        <div className="aspect-square relative overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.src = "https://placehold.co/600x600?text=No+Image";
            }}
          />

          {discount > 0 && (
            <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              -{discount}%
            </span>
          )}
        </div>
      </a>

      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-2">
          <a href={`/products/${product.handle}`} className="hover:text-blue-600">
            {product.title}
          </a>
        </h3>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
            {product.compareAtPrice > product.price && (
              <span className="text-sm text-gray-500 line-through ml-2">
                ₹{product.compareAtPrice}
              </span>
            )}
          </div>

          {/* ⭐ Flipkart style add / counter UI */}
          {quantity === 0 ? (
            <button
              onClick={() => addItem(product)}
              disabled={!product.inStock}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-all ${
                product.inStock
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
            >
              Add
            </button>
          ) : (
            <div className="flex items-center gap-2 bg-black text-white px-2 py-1 rounded">
              <button
                className="px-2 text-lg"
                onClick={() => removeItem(product.id)}
              >
                -
              </button>

              <span className="text-sm font-semibold">{quantity}</span>

              <button
                className="px-2 text-lg"
                onClick={() => addItem(product)}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProductCarousel() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Best Sellers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
