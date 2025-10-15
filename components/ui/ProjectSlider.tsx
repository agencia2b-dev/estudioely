
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ProjectSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: "AMOR DA MINHA VIDA",
      subtitle: "1 Temporada | 10 Episódios | 30 min | color grading",
      description: "\"Amor da Minha Vida\" é uma viagem sexy e bem-humorada pelos encontros e desencontros da relação de Bia (Bruna Marquezine) e Victor (Sérgio Malheiros), amigos inseparáveis que ainda não sabem que são o amor da vida um do outro.",
      image: "https://readdy.ai/api/search-image?query=Romantic%20drama%20series%20with%20warm%20cinematic%20lighting%20and%20emotional%20depth%2C%20featuring%20young%20couple%20in%20intimate%20romantic%20scene%20with%20beautiful%20color%20grading%20and%20film%20aesthetic%2C%20professional%20cinematography&width=1200&height=600&seq=slider1&orientation=landscape",
      link: "/obra/amor-da-minha-vida"
    },
    {
      id: 2,
      title: "EXPEDIÇÃO ÁRTICA",
      subtitle: "1 Temporada | 8 Episódios | 45 min | color grading",
      description: "Uma expedição científica no Ártico se transforma em uma luta pela sobrevivência. A série utiliza tons frios e contrastes extremos para retratar a beleza hostil do ambiente ártico e a resistência humana.",
      image: "https://readdy.ai/api/search-image?query=Arctic%20expedition%20dramatic%20scene%20with%20cold%20blue%20tones%20and%20harsh%20lighting%2C%20featuring%20explorers%20in%20snowy%20landscape%20with%20cinematic%20color%20grading%20and%20survival%20atmosphere%2C%20professional%20cinematography&width=1200&height=600&seq=slider2&orientation=landscape",
      link: "/obra/expedicao-artica"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative h-96 overflow-hidden group">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${project.image}')` }}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500"></div>
                
                <div className="relative z-10 h-full flex items-center px-16">
                  <div className="max-w-2xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                    <h2 className="text-2xl md:text-3xl font-medium mb-4 text-white">{project.title.toUpperCase()}</h2>
                    
                    <div className="flex items-center gap-4 text-gray-300 text-sm mb-4">
                      <span>{project.subtitle}</span>
                    </div>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-xl">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <Link 
                        href={project.link}
                        className="bg-[#ff0000] hover:bg-[#cc0000] px-5 py-2 font-semibold transition-colors cursor-pointer whitespace-nowrap flex items-center"
                      >
                        <i className="ri-information-line mr-2"></i>
                        Saiba mais sobre o projeto
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-12 h-1 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentSlide ? 'bg-[#ff0000]' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => goToSlide((currentSlide - 1 + projects.length) % projects.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors cursor-pointer z-20"
          >
            <i className="ri-arrow-left-line text-lg"></i>
          </button>
          
          <button
            onClick={() => goToSlide((currentSlide + 1) % projects.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors cursor-pointer z-20"
          >
            <i className="ri-arrow-right-line text-lg"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
