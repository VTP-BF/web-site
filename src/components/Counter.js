import { CountUp } from "countup.js";
import { useEffect, useRef, useState } from "react";

const Counter = ({ end, decimals }) => {
  const targetEnd = end != null ? Number(end) : 100;
  const dec = decimals != null ? Number(decimals) : 0;
  const spanRef = useRef(null);
  const [active, setActive] = useState(false);
  const instanceRef = useRef(null);

  useEffect(() => {
    const el = spanRef.current;
    if (!el || typeof window === "undefined") return;

    if (!("IntersectionObserver" in window)) {
      setActive(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!active || !spanRef.current) return;

    instanceRef.current?.reset();

    const instance = new CountUp(spanRef.current, targetEnd, {
      duration: 3,
      decimalPlaces: dec,
    });

    instanceRef.current = instance;
    if (!instance.error) {
      instance.start();
    }

    return () => {
      instance.reset();
    };
  }, [active, targetEnd, dec]);

  const placeholder = dec > 0 ? `0.${"0".repeat(dec)}` : "0";

  return (
    <span ref={spanRef}>
      {!active ? (
        <span className="counter-placeholder" aria-hidden="true">
          {placeholder}
        </span>
      ) : null}
    </span>
  );
};

export default Counter;
