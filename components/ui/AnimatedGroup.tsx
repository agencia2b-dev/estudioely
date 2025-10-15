'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface AnimatedGroupProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  threshold?: number;
}

export default function AnimatedGroup({ 
  children, 
  className = '', 
  delay = 0,
  stagger = 100,
  threshold = 0.1
}: AnimatedGroupProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const childElements = Array.from(container.children) as HTMLElement[];
    
    // Adicionar classes iniciais
    childElements.forEach((child, index) => {
      child.style.opacity = '0';
      child.style.transform = 'translateY(30px)';
      child.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      child.style.transitionDelay = `${index * stagger}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              childElements.forEach((child, index) => {
                setTimeout(() => {
                  child.style.opacity = '1';
                  child.style.transform = 'translateY(0)';
                }, index * stagger);
              });
            }, delay);
          }
        });
      },
      {
        threshold,
        rootMargin: '50px'
      }
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, [delay, stagger, threshold]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}