import { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";
import { useLocalStorage } from "../hooks/useHooks";
import { COUPONS, computeTotals } from "../data/shop";

const AppContext = createContext(null);

let toastId = 0;
const MAX_RECENT = 8;

export function AppProvider({ children }) {
  const [darkMode, setDarkMode] = useLocalStorage("mm-dark-mode", false);
  const [cart, setCart] = useLocalStorage("mm-cart", []);
  const [wishlist, setWishlist] = useLocalStorage("mm-wishlist", []);
  const [couponCode, setCouponCode] = useLocalStorage("mm-coupon", null);
  const [recentlyViewed, setRecentlyViewed] = useLocalStorage("mm-recent", []);
  const [orders, setOrders] = useLocalStorage("mm-orders", []);
  const [user, setUser] = useLocalStorage("mm-user", null);
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

  const clearCart = useCallback(() => {
    setCart([]);
    setCouponCode(null);
  }, [setCart, setCouponCode]);

  // ── Wishlist ────────────────────────────────────────────
  const isWishlisted = useCallback((id) => wishlist.some((i) => i.id === id), [wishlist]);

  const toggleWishlist = useCallback(
    (product) => {
      // Decide the action from current state, THEN fire side effects once.
      // The state updater stays pure so Strict Mode's double-invoke can't
      // duplicate the toast.
      const exists = wishlist.some((i) => i.id === product.id);
      if (exists) {
        setWishlist((prev) => prev.filter((i) => i.id !== product.id));
        addToast("Removed from wishlist", "info");
      } else {
        setWishlist((prev) => [...prev, product]);
        addToast(`${product.name} added to wishlist`, "success");
      }
    },
    [wishlist, setWishlist, addToast]
  );

  // ── Coupons ─────────────────────────────────────────────
  const coupon = couponCode ? COUPONS[couponCode] : null;

  const applyCoupon = useCallback(
    (code) => {
      const key = (code || "").trim().toUpperCase();
      if (!key) return false;
      if (!COUPONS[key]) {
        addToast("Invalid coupon code", "error");
        return false;
      }
      setCouponCode(key);
      addToast(`Coupon ${key} applied — ${COUPONS[key].label}`, "success");
      return true;
    },
    [setCouponCode, addToast]
  );

  const removeCoupon = useCallback(() => {
    setCouponCode(null);
    addToast("Coupon removed", "info");
  }, [setCouponCode, addToast]);

  const totals = computeTotals(cart, coupon);

  // ── Recently viewed ─────────────────────────────────────
  const addRecentlyViewed = useCallback(
    (product) => {
      if (!product?.id) return;
      setRecentlyViewed((prev) => {
        const next = [product, ...prev.filter((p) => p.id !== product.id)];
        return next.slice(0, MAX_RECENT);
      });
    },
    [setRecentlyViewed]
  );

  // ── Orders ──────────────────────────────────────────────
  const placeOrder = useCallback(
    (customer) => {
      const id = `MM${Date.now().toString(36).toUpperCase().slice(-7)}`;
      const order = {
        id,
        items: cart,
        customer,
        totals: computeTotals(cart, coupon),
        coupon: couponCode,
        createdAt: Date.now(),
      };
      setOrders((prev) => [order, ...prev]);
      clearCart();
      addToast("Order placed successfully!", "success");
      return id;
    },
    [cart, coupon, couponCode, setOrders, clearCart, addToast]
  );

  const getOrder = useCallback(
    (id) => orders.find((o) => o.id?.toUpperCase() === (id || "").trim().toUpperCase()) || null,
    [orders]
  );

  // ── Auth (lightweight mock — persisted to localStorage) ──
  const login = useCallback(
    ({ name, email }) => {
      const u = { name: name || email.split("@")[0], email };
      setUser(u);
      addToast(`Welcome back, ${u.name}!`, "success");
      return u;
    },
    [setUser, addToast]
  );

  const register = useCallback(
    ({ name, email }) => {
      const u = { name, email };
      setUser(u);
      addToast(`Welcome to Mohan-Maya, ${u.name}!`, "success");
      return u;
    },
    [setUser, addToast]
  );

  const logout = useCallback(() => {
    setUser(null);
    addToast("You've been logged out", "info");
  }, [setUser, addToast]);

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
    // shopping experience
    coupon,
    couponCode,
    applyCoupon,
    removeCoupon,
    totals,
    recentlyViewed,
    addRecentlyViewed,
    orders,
    placeOrder,
    getOrder,
    // auth
    user,
    login,
    register,
    logout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within an AppProvider");
  return ctx;
}
