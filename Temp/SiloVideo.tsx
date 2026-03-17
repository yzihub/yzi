import React, { useEffect, useRef, useState } from 'react';

interface SiloVideoProps {
  src: string;
  className?: string;
  opacity?: string;
}

export default function SiloVideo({ src, className = '', opacity = 'opacity-40' }: SiloVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the video container is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={videoRef} className={`absolute inset-0 overflow-hidden rounded-3xl z-0 ${className}`}>
      {isVisible && (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 mix-blend-screen ${opacity}`}
        />
      )}
      
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-vignette"></div>
      <div className="absolute inset-0 z-10 pointer-events-none bg-film-grain opacity-20 mix-blend-overlay"></div>
      
      {/* Gradient fade at the bottom to ensure text readability */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#0B0D17] via-[#0B0D17]/40 to-transparent"></div>
    </div>
  );
}
