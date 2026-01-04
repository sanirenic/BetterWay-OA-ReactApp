import { useEffect, useState } from "react";

export function useCart() {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      const item = prev.find(i => i.id === product.id);

      if (item) {
        if (item.qty < product.stock) {
          return prev.map(i =>
            i.id === product.id ? { ...i, qty: i.qty + 1 } : i
          );
        }
        return prev;
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const updateQty = (id, qty, stock) => {
    if (qty < 1 || qty > stock) return;

    setCart(prev =>
      prev.map(i => (i.id === id ? { ...i, qty } : i))
    );
  };

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.qty * i.price, 0);

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQty,
    totalItems,
    totalPrice
  };
}
