// src/context/CartContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (payload) => {
    const { id, quantity = 1, ...rest } = payload;

    setCart((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing) {
        const newQty = existing.quantity + quantity;
        if (newQty <= 0) return prev.filter((i) => i.id !== id);
        return prev.map((i) =>
          i.id === id ? { ...i, quantity: newQty } : i
        );
      }
      if (quantity <= 0) return prev;
      return [...prev, { id, ...rest, quantity }];
    });
  };

  const removeItem = (id) => setCart((prev) => prev.filter((i) => i.id !== id));
  const clearCart = () => setCart([]);

  const totalQuantity = cart.reduce((a, i) => a + i.quantity, 0);
  const totalAmount = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, totalQuantity, totalAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};