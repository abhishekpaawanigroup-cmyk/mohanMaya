import { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";
import { useLocalStorage } from "../hooks/useHooks";

const AppContext = createContext(null);

let toastId = 0;

export function AppProvider({ children }) {
  const [darkMode, setDarkMode] = useLocalStorage("mm-dark-mode", false);
  const [cart, setCart] = useLocalStorage("mm-cart", []);
  const [wishlist, setWishlist] = useLocalStorage("mm-wishlist", []);
  const [cartAnimating, setCartAnimating] = useState(false);
  const [toasts, setToasts] = useState([]);
  const animTimer = useRef(null);

  // Apply the dark class to <html> so Tailwind's dark: variants work app-wide.
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [darkMode]);

  const toggleDarkMode = useCallback(() => setDarkMode((d) => !d), [setDarkMode]);

  // ── Toasts ──────────────────────────────────────────────
  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback(
    (message, type = "success") => {
      const id = ++toastId;
      setToasts((prev) => [...prev, { id, message, type }]);
      setTimeout(() => removeToast(id), 3000);
    },
    [removeToast]
  );

  // ── Cart ────────────────────────────────────────────────
  const triggerCartBounce = useCallback(() => {
    setCartAnimating(true);
    clearTimeout(animTimer.current);
    animTimer.current = setTimeout(() => setCartAnimating(false), 600);
  }, []);

  const addToCart = useCallback(
    (product, qty = 1) => {
      setCart((prev) => {
        const existing = prev.find((i) => i.id === product.id);
        if (existing) {
          return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + qty } : i));
        }
        return [...prev, { ...product, qty }];
      });
      triggerCartBounce();
      addToast(`${product.name} added to cart`, "success");
    },
    [setCart, triggerCartBounce, addToast]
  );

  const removeFromCart = useCallback(
    (id) => {
      setCart((prev) => prev.filter((i) => i.id !== id));
      addToast("Removed from cart", "info");
    },
    [setCart, addToast]
  );

  const updateQty = useCallback(
    (id, qty) => {
      if (qty < 1) return;
      setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
    },
    [setCart]
  );

  const clearCart = useCallback(() => setCart([]), [setCart]);

  // ── Wishlist ────────────────────────────────────────────
  const isWishlisted = useCallback((id) => wishlist.some((i) => i.id === id), [wishlist]);

  const toggleWishlist = useCallback(
    (product) => {
      setWishlist((prev) => {
        const exists = prev.some((i) => i.id === product.id);
        if (exists) {
          addToast("Removed from wishlist", "info");
          return prev.filter((i) => i.id !== product.id);
        }
        addToast(`${product.name} added to wishlist`, "success");
        return [...prev, product];
      });
    },
    [setWishlist, addToast]
  );

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  const value = {
    darkMode,
    toggleDarkMode,
    cart,
    cartCount,
    addToCart,
    removeFromCart,
    updateQty,
    clearCart,
    cartAnimating,
    wishlist,
    isWishlisted,
    toggleWishlist,
    toasts,
    addToast,
    removeToast,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within an AppProvider");
  return ctx;
}
