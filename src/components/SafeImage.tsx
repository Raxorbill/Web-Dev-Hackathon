import React, { useState, useEffect, useRef } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  priority?: boolean;
}

// Guaranteed local fallback image that exists in public/images/
const DEFAULT_FALLBACK = '/images/bespoke/bespoke-home.webp';

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackSrc = DEFAULT_FALLBACK,
  className = '',
  loading = 'lazy',
  priority = false,
  ...props
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const filename = src.split('/').pop() || '';
  const nameWithoutExt = filename.substring(0, filename.lastIndexOf('.')) || filename;

  const candidateList = React.useMemo(() => {
    const isExternal = src.startsWith('http://') || src.startsWith('https://');
    const list: string[] = [];

    if (isExternal) {
      // Map user's external uploaded images to fast local WebP/PNG copies on the same server
      if (nameWithoutExt === 'fill-space' || nameWithoutExt === 'space') {
        list.push('/images/space.webp', '/images/space.png');
      } else if (nameWithoutExt === 'sofa') {
        list.push('/images/sofa.webp', '/images/sofa.png', '/images/living/sofa.webp');
      } else if (nameWithoutExt === 'showroom') {
        list.push('/images/showroom.webp', '/images/showroom.png', '/images/showroom/showroom.webp');
      } else if (nameWithoutExt === 'group') {
        list.push('/images/group.webp', '/images/group.png', '/images/story/group.webp');
      }
      // Remote source as secondary candidate
      list.push(src);
    } else {
      // Local source: always try .webp first for 90%+ bandwidth savings and instant render
      const webpPath = src.replace(/\.(png|jpg|jpeg)$/i, '.webp');
      list.push(
        webpPath,
        src,
        `/images/${nameWithoutExt}.webp`,
        `/images/${nameWithoutExt}.png`,
        `/images/${filename}`
      );
    }

    // Finally the fallback
    list.push(fallbackSrc);

    return Array.from(new Set(list.filter(Boolean)));
  }, [src, filename, nameWithoutExt, fallbackSrc]);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFailed, setIsFailed] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setCurrentIndex(0);
    setIsFailed(false);
    setIsLoaded(false);
  }, [src]);

  const currentSrc = candidateList[currentIndex] || fallbackSrc;

  // Check if browser already has image in cache
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [currentSrc]);

  const handleError = () => {
    if (currentIndex < candidateList.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
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
      ref={imgRef}
      src={currentSrc}
      alt={alt}
      loading={priority ? 'eager' : loading}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      referrerPolicy="no-referrer"
      onError={handleError}
      onLoad={() => setIsLoaded(true)}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-95'} transition-opacity duration-300`}
      {...props}
    />
  );
};
