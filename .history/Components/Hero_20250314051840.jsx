import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SHero from "./Secondhero";

export default function Hero() {
  const [isHidden, setIsHidden] = useState(
    sessionStorage.getItem("heroHidden") === "true"
  );
  const [showThumbnail, setShowThumbnail] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowThumbnail(true);
        if (videoRef.current) {
          videoRef.current.pause();
        }
      } else {
        setShowThumbnail(false);
        if (videoRef.current) {
          videoRef.current.play();
        }
      }

      if (window.scrollY > 300) {
        setIsHidden(true);
        sessionStorage.setItem("heroHidden", "true");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ensure the video plays when loaded
  useEffect(() => {
    if (!isHidden && videoRef.current) {
      videoRef.current.play().catch((err) => console.error("Video play error:", err));
    }
  }, [isHidden]);

  const handlePlay = () => {
    setShowThumbnail(false);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  if (isHidden) {
    return <SHero />; // Show SHero component when Hero is hidden
  }

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute w-full h-full"
      >
        {showThumbnail ? (
          <motion.img
            src="/heroimg.png"
            alt="Hero Thumbnail"
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        ) : (
          <motion.video
            ref={videoRef}
            src="/hero-video.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            onCanPlay={() => videoRef.current?.play()} // Ensure the video plays once loaded
          />
        )}
      </motion.div>
      {showThumbnail && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <Button
            onClick={handlePlay}
            className="bg-white text-black px-4 py-2 rounded-md shadow-lg"
          >
            Play
          </Button>
        </motion.div>
      )}
    </div>
  );
}
