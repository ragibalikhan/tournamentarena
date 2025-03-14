import { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Hero() {
  const [hideHero, setHideHero] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { scrollY } = useScroll();

  // ✅ Correct usage: Call `useMotionValueEvent` directly inside the component
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setHideHero(true);
    }
  });

  if (hideHero) return null; // Once hidden, do not render anything

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute w-full h-full"
      >
        <motion.video
          ref={videoRef}
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}
