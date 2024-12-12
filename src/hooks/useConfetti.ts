import { useEffect } from "react";
import confetti from "canvas-confetti";

export const useConfetti = (options: confetti.Options = {}) => {
  useEffect(() => {
    const wasConfettiShown = sessionStorage.getItem("confettiShown");

    if (!wasConfettiShown) {
      const defaultOptions = {
        particleCount: 200,
        spread: 360,
        origin: { x: 0.5, y: 0.5 },
      };

      const confettiOptions = { ...defaultOptions, ...options };

      confetti(confettiOptions);

      sessionStorage.setItem("confettiShown", "true");
    }
  }, []);
};
