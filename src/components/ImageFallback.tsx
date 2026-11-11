import React, { useState } from 'react';

interface ImageFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
}

export const ImageFallback: React.FC<ImageFallbackProps> = ({
  src,
  alt,
  fallbackTitle,
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`bg-gradient-to-br from-[#10263D] to-[#202A35] flex flex-col items-center justify-center p-6 text-white text-center select-none ${className}`}
      >
        <div className="w-12 h-12 mb-3 rounded-lg bg-[#F28C28]/20 flex items-center justify-center border border-[#F28C28]/40">
          <svg
            className="w-6 h-6 text-[#F28C28]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        </div>
        <p className="text-sm font-semibold tracking-tight text-white/95">
          {fallbackTitle || alt || 'Sri Shakthi Cranes'}
        </p>
        <span className="text-xs text-[#697786] mt-1">Bangalore Industrial Lifting</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      referrerPolicy="no-referrer"
      loading="lazy"
      className={className}
      {...props}
    />
  );
};
