"use client";

import { useEffect, useState, useRef } from "react";

export function CatCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const catPosRef = useRef({ x: -100, y: -100 });
  const [catPos, setCatPos] = useState({ x: -100, y: -100 });
  const [isDead, setIsDead] = useState(false);
  const [flip, setFlip] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const reqRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Set initial position to center of screen to start
    setMousePos({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    catPosRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (isDead) {
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
      return;
    }

    const ease = 0.06;

    const animate = () => {
      if (isHovered) {
        // Stop moving when hovered so it's easier to double-click
        reqRef.current = requestAnimationFrame(animate);
        return;
      }

      let { x, y } = catPosRef.current;
      
      // Target position is offset from mouse to avoid blocking normal clicks
      const targetX = mousePos.x + 30;
      const targetY = mousePos.y + 30;

      const dx = targetX - x;
      const dy = targetY - y;
      
      // Only flip if moving significantly on X axis
      if (Math.abs(dx) > 2) {
        setFlip(dx < 0);
      }

      x += dx * ease;
      y += dy * ease;

      catPosRef.current = { x, y };
      setCatPos({ x, y });

      reqRef.current = requestAnimationFrame(animate);
    };

    reqRef.current = requestAnimationFrame(animate);
    return () => {
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
    };
  }, [mousePos, isDead, isHovered]);

  const handleDoubleClick = () => {
    if (!isDead) {
      setIsDead(true);
    }
  };

  if (typeof window === "undefined") return null;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onDoubleClick={handleDoubleClick}
      className="fixed z-[9999] pointer-events-auto cursor-crosshair flex items-center justify-center p-2"
      style={{
        left: 0,
        top: 0,
        transform: `translate(${catPos.x}px, ${catPos.y}px) scaleX(${flip ? -1 : 1})`,
        fontSize: "2.5rem",
        userSelect: "none",
        lineHeight: 1,
      }}
      title={isDead ? "RIP 🐈" : "Double click to defeat the cat!"}
    >
      {isDead ? (
        <div className="absolute transition-all duration-[2000ms] ease-in-out opacity-0 translate-y-[100px] rotate-[-180deg] grayscale scale-150 blur-sm">
          💀
        </div>
      ) : (
        <div 
          className={`transition-all duration-200 ${
            isHovered ? "scale-125 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" : ""
          }`}
        >
          🐈
        </div>
      )}
    </div>
  );
}
