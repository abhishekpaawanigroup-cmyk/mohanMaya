import { useState, useEffect, useCallback } from "react";

/**
 * Tracks the vertical scroll position of the window.
 * Uses requestAnimationFrame to avoid layout thrashing on scroll.
 */
export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let frame = null;
    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        frame = null;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return scrollY;
}

/**
 * Returns the page scroll progress as a value between 0 and 1.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = null;
    const update = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(height > 0 ? Math.min(scrollTop / height, 1) : 0);
        frame = null;
      });
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return progress;
}

/**
 * Persists a piece of state to localStorage so it survives reloads.
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const stored = window.localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setStored = useCallback(
    (next) => {
      setValue((prev) => {
        const resolved = typeof next === "function" ? next(prev) : next;
        try {
          window.localStorage.setItem(key, JSON.stringify(resolved));
        } catch {
          /* ignore write errors (private mode / quota) */
        }
        return resolved;
      });
    },
    [key]
  );

  return [value, setStored];
}

/**
 * Debounces a fast-changing value (e.g. a search input).
 */
export function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);

  return debounced;
}
