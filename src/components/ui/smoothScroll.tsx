"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

interface props {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<props> = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const lenis = new Lenis();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return children;
};

export default SmoothScroll;