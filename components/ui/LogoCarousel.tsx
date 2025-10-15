
'use client';

import { useEffect, useRef } from 'react';

interface LogoCarouselProps {
  logos: Array<{
    src: string;
    alt: string;
  }>;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

export default function LogoCarousel({ 
  logos, 
  speed = 30,
  direction = 'left',
  className = '' 
}: LogoCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const scrollerInner = scroller.querySelector('[data-scroller-inner]') as HTMLElement;
    if (!scrollerInner) return;

    const scrollerContent = Array.from(scrollerInner.children);
    
    // Criar múltiplas cópias para garantir loop infinito suave
    for (let i = 0; i < 3; i++) {
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute('aria-hidden', 'true');
        scrollerInner.appendChild(duplicatedItem);
      });
    }

    // Configurar a animação
    scroller.setAttribute('data-animated', 'true');
    
    const animationDirection = direction === 'left' ? 'scroll-left' : 'scroll-right';
    scrollerInner.style.animation = `${animationDirection} ${speed}s linear infinite`;

  }, [direction, speed]);

  return (
    <div 
      ref={scrollerRef}
      className={`scroller overflow-hidden mask-gradient ${className}`}
      data-speed={speed}
      data-direction={direction}
    >
      <div 
        data-scroller-inner
        className="scroller__inner flex gap-12 items-center w-max"
      >
        {logos.map((logo, index) => (
          <div 
            key={index}
            className="scroller__item flex-shrink-0 w-32 h-32 flex items-center justify-center group"
          >
            <img 
              src={logo.src}
              alt={logo.alt}
              className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .mask-gradient {
          mask: linear-gradient(
            90deg,
            transparent,
            white 10%,
            white 90%,
            transparent
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent,
            white 10%,
            white 90%,
            transparent
          );
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .scroller[data-animated="true"] {
          overflow: hidden;
        }

        .scroller[data-animated="true"] .scroller__inner {
          width: max-content;
          flex-wrap: nowrap;
          animation-timing-function: linear;
        }

        .scroller__inner:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
