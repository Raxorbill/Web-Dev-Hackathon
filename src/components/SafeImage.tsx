import React, { useState, useEffect } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
}

// Guaranteed local fallback image that exists in public/images/
const DEFAULT_FALLBACK = '/images/bespoke/bespoke-home.png';

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackSrc = DEFAULT_FALLBACK,
  className = '',
  loading = 'lazy',
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [isFailed, setIsFailed] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Sync if prop changes
  useEffect(() => {
    setCurrentSrc(src);
    setIsFailed(false);
    setIsLoaded(false);
  }, [src]);

  const handleError = () => {
    if (currentSrc !== fallbackSrc) {
      // Try reliable fallback image
      setCurrentSrc(fallbackSrc);
    } else {
      // Even fallback failed; render elegant architectural placeholder
      setIsFailed(true);
    }
  };

  if (isFailed) {
    return (
      <div
        className={`w-full h-full min-h-[140px] bg-[#102021] flex flex-col items-center justify-center p-6 text-center border border-[#23393B] select-none ${className}`}
      >
        <div className="w-10 h-10 border border-[#A7834A]/50 flex items-center justify-center mb-3">
          <span className="font-cinzel text-xs text-[#A7834A]">HFM</span>
        </div>
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#A7834A] font-sans-modern mb-1">
          HEAVEN FURNITURE MART
        </span>
        <span className="text-xs text-[#F4EFE6]/60 font-sans-modern font-light">
          {alt || 'Atelier Collection'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={handleError}
      onLoad={() => setIsLoaded(true)}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-90'} transition-opacity duration-500`}
      {...props}
    />
  );
};
