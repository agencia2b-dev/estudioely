
'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ParallaxWrapperProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'fade-in';
  delay?: number;
  threshold?: number;
}

export default function ParallaxWrapper({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1
}: ParallaxWrapperProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
          }
        });
      },
      {
        threshold,
        rootMargin: '50px'
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [delay, threshold]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-left':
        return 'parallax-element fade-left';
      case 'fade-right':
        return 'parallax-element fade-right';
      case 'scale':
        return 'parallax-element scale';
      case 'fade-in':
        return 'parallax-element';
      default:
        return 'parallax-element';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
}
