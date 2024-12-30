import React, { useRef } from "react";

export const useIntersectionObserver = (
  callback: () => void,
  enabled: boolean = true
) => {
  const observerRef = useRef<IntersectionObserver>();
  const elementRef = React.useCallback(
    (element: HTMLDivElement | null) => {
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
    },
    [callback, enabled]
  );
  return elementRef;
};
