import { useRef } from "react";

export const useIntersectionObserver = (
  callback: () => void,
  enabled: boolean = true
) => {
  const observerRef = useRef<IntersectionObserver>();
  const elementRef = (element: HTMLDivElement | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    if (!element || !enabled) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          callback();
        }
      },
      { threshold: 0.9 }
    );
    observerRef.current.observe(element);
  };
  return elementRef;
};
