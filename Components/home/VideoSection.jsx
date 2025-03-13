"use client";

import React, { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

const VideoSection = ({ withPagination = false }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.currentTime = 0; // Reset to start
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => console.error("Playback error:", error));
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="relative aspect-video rounded-lg overflow-hidden group">
          {/* Video Element */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src="/hero-video.mp4" // Ensure this file exists in public folder
            type="video/mp4"
            loop
            playsInline
          ></video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity group-hover:bg-opacity-40"></div>

          {/* Play/Pause Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={togglePlay}
              className="bg-green-700 text-black w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform"
            >
              {isPlaying ? <Pause size={24} className="ml-1" /> : <Play size={24} className="ml-1" />}
            </button>
          </div>

          {/* Pagination */}
          {withPagination && (
            <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
              {[...Array(6)].map((_, i) => (
                <span
                  key={i}
                  className={`inline-block h-1.5 rounded-full transition-all duration-300 ${
                    i === 0 ? "w-6 bg-white" : "w-1.5 bg-gray-600"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
