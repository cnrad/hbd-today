//thanks ian
import confetti from "canvas-confetti";
import { useEffect, useRef } from "react";

export default function ConfettiExplode({
  count = 25,
  velocity = 75,
  spread = 120,
  angle,
  children
}) {
  const ref = useRef();

  useEffect(() => {
    const center = {
      x:
        (ref.current?.firstChild?.offsetLeft ?? 0) +
        (ref.current?.firstChild?.offsetWidth ?? 0) / 2,
      y: ref.current?.firstChild?.offsetTop ?? 0,
    };

    confetti({
      disableForReducedMotion: true,
      particleCount: count,
      startVelocity: velocity,
      spread: spread,
      angle: angle,
      origin: {
        x: center.x / window.innerWidth,
        y: center.y / window.innerHeight,
      },
      ticks: 300
    });
  }, []);

  return (
    <div ref={ref} className="confetti">
      {children}
    </div>
  );
}