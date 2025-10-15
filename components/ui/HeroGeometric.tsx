
'use client';

import { useEffect, useRef } from 'react';

interface HeroGeometricProps {
  badge?: string;
  title1?: string;
  title2?: string;
  description?: string;
  children?: React.ReactNode;
}

export default function HeroGeometric({ 
  badge = "Estúdio Ely",
  title1 = "",
  title2 = "",
  description = "Especializado em pós-produção e color grading, oferecendo serviços com precisão técnica e sensibilidade artística, traduzindo a visão do diretor em imagens que ganham profundidade, atmosfera e significado.",
  children 
}: HeroGeometricProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(console.error);
      // Definir velocidade bem lenta
      video.playbackRate = 0.3;
    }
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://nanotechdobrasil.com.br/wp-content/uploads/2025/08/video-1.mp4" type="video/mp4" />
      </video>
      
      {/* Gradient overlay - black from bottom to top */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
    </div>
  );
}
