"use client";

import React, { useState, useRef } from "react";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="md:min-h-[500px] min-h-[300px] bg-black">
      <div className="container">
        <div className="w-full h-auto flex justify-center items-center md:py-20 py-10">
          <div className="relative">
            <video
              ref={videoRef}
              className="sm:min-w-96 min-w-full sm:min-h-96 min-h-full h-full w-full rounded-lg shadow-lg"
              src="https://www.dropbox.com/scl/fi/33rti7g98s7grmxldalet/Video-1-Horizontal.mp4?rlkey=vypjb58iv1j2fhc2q2emsvhsw&st=iacuhnpu&raw=1"
              loop
              // muted
              playsInline
            />
            {!isPlaying && (
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={handlePlay}
              >
                <div className="w-20 h-20 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
