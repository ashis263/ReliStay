// components/Counter.tsx
"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface CounterProps {
  targetNumber: number;
  duration?: number;
}

export default function Counter({ targetNumber, duration = 500 }: CounterProps) {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const increment = targetNumber / (duration / 16);
    const step = () => {
      start += increment;
      if (start < targetNumber) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(targetNumber);
      }
    };
    requestAnimationFrame(step);
  }, [inView, targetNumber, duration]);

  return (
    <div ref={ref} className="text-4xl lg:text-6xl font-bold text-primary">
      {count}+
    </div>
  );
}
