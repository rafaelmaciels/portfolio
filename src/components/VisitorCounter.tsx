"use client";

import { useEffect, useState } from "react";

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Chama a API para contar a visita assim que carrega
    fetch('/api/visits')
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(null));
  }, []);

  if (!count) return null; // Não mostra nada enquanto carrega

  return (
    <div className="mt-2 text-xs text-zinc-400">
      Visitas: <span className="font-bold text-zinc-600 dark:text-zinc-300">{count}</span>
    </div>
  );
}