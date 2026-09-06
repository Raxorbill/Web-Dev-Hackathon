import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RotateCcw, Sparkles } from 'lucide-react';
import { SafeImage } from './SafeImage';

interface HeroVideoProps {
  posterSrc?: string;
  directVideoSrc?: string;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({
  posterSrc = '/images/bespoke/bespoke-home.png',
  directVideoSrc = 'https://res.cloudinary.com/xsz2cpge/video/upload/Hevean_furniture.mp4'
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isSmoothReady, setIsSmoothReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const [progress, setProgress] = useState(0);

  // Buffer and readiness handler
  const handleCanPlayThrough = () => {
    if (!isSmoothReady) {
      setIsSmoothReady(true);
      if (videoRef.current) {
        // Start playback smoothly once data buffer is verified
        videoRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Autoplay may be restricted if unmuted; muted ensures it succeeds
            setIsPlaying(true);
          });
      }
    }
  };

  // Fallback timer: in case browser buffers without firing canplaythrough immediately
  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current && videoRef.current.readyState >= 3 && !isSmoothReady) {
        handleCanPlayThrough();
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, [isSmoothReady]);

  // Handle Video Time Update
  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setProgress((current / duration) * 100);
    }
  };

  // Handle Video Completion - explicitly do NOT loop, hold final frame
  const handleEnded = () => {
    setIsPlaying(false);
    setHasEnded(true);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Replay handler for user
  const handleReplay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setHasEnded(false);
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      });
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none">
      {/* 1. Static Poster Frame (instant render while buffer initializes) */}
      <div className="absolute inset-0 w-full h-full">
        <SafeImage
          src={posterSrc}
          alt="Heaven Furniture Mart Bespoke Luxury Masterpiece"
          className="w-full h-full object-cover object-center lg:object-right filter brightness-90 contrast-105"
        />
      </div>

      {/* 2. Direct Cloudinary Native Video - plays strictly ONCE without loop */}
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        loop={false}
        poster={posterSrc}
        onCanPlayThrough={handleCanPlayThrough}
        onLoadedData={() => {
          if (videoRef.current && videoRef.current.readyState >= 3) {
            handleCanPlayThrough();
          }
        }}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        className={`absolute inset-0 w-full h-full object-cover object-center lg:object-right transition-opacity duration-1000 ${
          isSmoothReady ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src={directVideoSrc} type="video/mp4" />
      </video>

      {/* 3. Architectural Bespoke Skeleton Loader */}
      <AnimatePresence>
        {!isSmoothReady && (
          <motion.div
            key="skeleton-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-10 w-full h-full bg-[#102021] flex flex-col justify-end p-8 sm:p-12 lg:p-16 overflow-hidden"
          >
            {/* Subtle architectural background grid */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, rgba(167, 131, 74, 0.4) 1px, transparent 0)',
                backgroundSize: '40px 40px',
              }}
            />

            {/* Blueprint Crosshairs in 4 corners */}
            <div className="absolute top-8 left-8 text-[#A7834A]/40 font-mono text-[10px] tracking-widest pointer-events-none">
              + 22°19'09"N 91°49'08"E
            </div>
            <div className="absolute top-8 right-8 text-[#A7834A]/40 font-mono text-[10px] tracking-widest pointer-events-none">
              + ATELIER_FRAME_01
            </div>

            {/* Skeleton Silhouette Geometry representing the Furniture Reveal */}
            <div className="relative w-full max-w-2xl ml-auto mb-16 hidden lg:block opacity-60">
              {/* Sofa silhouette block */}
              <div className="relative w-full h-64 bg-[#14282A] border border-[#23393B]/70 overflow-hidden">
                {/* Shimmer sweep */}
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A7834A]/15 to-transparent w-1/2"
                />
                {/* Architectural drafting marks */}
                <div className="absolute bottom-3 left-4 text-[9px] font-mono text-[#A7834A]/60 tracking-wider">
                  MASTER SUITE • SCALE 1:20 • SOLID TEAK & BOUCLÉ
                </div>
              </div>

              {/* Coffee table companion block */}
              <div className="mt-4 flex gap-4">
                <div className="relative w-48 h-12 bg-[#172D2F] border border-[#23393B]/50 overflow-hidden">
                  <motion.div
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2.2, delay: 0.3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A7834A]/15 to-transparent w-full"
                  />
                </div>
                <div className="relative flex-1 h-12 bg-[#142628] border border-[#23393B]/40 overflow-hidden">
                  <motion.div
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2.2, delay: 0.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A7834A]/15 to-transparent w-full"
                  />
                </div>
              </div>
            </div>

            {/* Status & Shimmering Calibration Pill */}
            <div className="relative z-10 self-end lg:self-end flex flex-col items-end gap-1.5 sm:gap-2 bg-[#122324]/85 border border-[#23393B] backdrop-blur-md px-3.5 sm:px-5 py-2.5 sm:py-3.5 shadow-xl">
              <div className="flex items-center gap-2 sm:gap-2.5 text-[9px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#E5DDCF] font-sans-modern">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#A7834A] animate-pulse" />
                <span>CALIBRATING ATELIER REVEAL</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#A7834A] animate-ping" />
              </div>

              {/* Continuous micro loading bar */}
              <div className="w-36 sm:w-48 h-[2px] bg-[#23393B] overflow-hidden">
                <motion.div
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-full h-full bg-gradient-to-r from-transparent via-[#A7834A] to-transparent"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Quiet Luxury Lighting & Directional Negative Space Gradients */}
      {/* Mobile-dedicated contrast overlay to guarantee flawless text legibility */}
      <div className="absolute inset-0 bg-[#102021]/60 lg:hidden z-[2] pointer-events-none" />

      {/* Left-to-right dark gradient ensuring editorial text on the left is legible */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#102021] via-[#102021]/80 to-transparent w-full lg:w-3/4 z-[2] pointer-events-none" />

      {/* Top-to-bottom subtle gradient for navigation and bottom edge seamlessly melting into next section */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#102021]/70 via-transparent to-[#102021] z-[2] pointer-events-none" />

      {/* Subtle warm gold ambient vignette in corner */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#A7834A]/10 blur-3xl pointer-events-none z-[2]" />

      {/* 5. Minimalist Progress Indicator & Replay Control when finished */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-10 lg:right-10 z-20 flex items-center gap-3">
        {/* Subtle timeline hairline when playing */}
        {isPlaying && (
          <div className="hidden sm:flex items-center gap-2 bg-[#102021]/70 backdrop-blur-sm border border-[#23393B]/70 px-3 py-1.5 text-[10px] tracking-widest text-[#E5DDCF]/70 font-sans-modern">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A7834A] animate-pulse" />
            <span>CINEMATIC REVEAL</span>
            <div className="w-16 h-[2px] bg-[#23393B] overflow-hidden ml-1">
              <div
                className="h-full bg-[#A7834A] transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Replay action badge when video finishes */}
        <AnimatePresence>
          {hasEnded && (
            <motion.button
              key="replay-btn"
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={handleReplay}
              title="Replay cinematic reveal"
              className="group flex items-center gap-2 px-3.5 py-2 bg-[#122325]/90 hover:bg-[#182E30] border border-[#A7834A]/40 hover:border-[#A7834A] text-[10px] uppercase tracking-[0.25em] text-[#E5DDCF] hover:text-[#A7834A] transition-all shadow-lg backdrop-blur-md cursor-pointer"
            >
              <RotateCcw className="w-3 h-3 text-[#A7834A] transition-transform duration-500 group-hover:-rotate-90" />
              <span>REPLAY REVEAL</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};


