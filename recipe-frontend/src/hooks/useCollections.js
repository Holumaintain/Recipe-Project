import { useEffect, useState } from "react";

export function useCollections(key) {
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) || [];
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(items));
  }, [items, key]);

  const toggleItem = (item) => {
    setItems((prev) =>
      prev.find((i) => i.id === item.id)
        ? prev.filter((i) => i.id !== item.id)
        : [...prev, item]
    );
  };

  return { items, toggleItem };
}
