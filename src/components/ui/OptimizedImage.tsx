'use client';

import NextImage, { ImageProps as NextImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<NextImageProps, 'alt'> {
  alt: string;
  className?: string;
}

export default function OptimizedImage({ alt, ...props }: OptimizedImageProps) {
  return (
    <NextImage
      {...props}
      alt={alt}
      loading={props.priority ? 'eager' : 'lazy'}
      quality={90}
      sizes={props.sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
      className={`${props.className || ''} transition-opacity duration-300`}
      onLoad={(event) => {
        const img = event.target as HTMLImageElement;
        img.style.opacity = '1';
      }}
      style={{ opacity: 0, ...props.style }}
    />
  );
} 