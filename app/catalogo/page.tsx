
'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import ParallaxWrapper from '../../components/ui/ParallaxWrapper';

function CatalogContent() {
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const tipo = searchParams.get('tipo');
    if (tipo) {
      setActiveFilter(tipo);
    }
  }, [searchParams]);

  const projects = [
    {
      id: 1,
      title: "Amor da Minha Vida",
      category: "Entretenimento",
      year: "2024",
      image: "https://readdy.ai/api/search-image?query=Romantic%20drama%20movie%20poster%20with%20warm%20cinematic%20lighting%20and%20emotional%20depth%2C%20featuring%20couple%20in%20intimate%20moment%20with%20beautiful%20color%20grading%20and%20film%20aesthetic&width=600&height=400&seq=cat1&orientation=landscape",
      duration: "2h 15min"
    },
    {
      id: 2,
      title: "Expedição Ártica",
      category: "Streaming",
      year: "2024",
      image: "https://readdy.ai/api/search-image?query=Arctic%20expedition%20series%20poster%20with%20cold%20blue%20tones%20and%20dramatic%20lighting%2C%20featuring%20explorers%20in%20snowy%20landscape%20with%20cinematic%20color%20grading&width=600&height=400&seq=cat2&orientation=landscape",
      duration: "8 episódios"
    },
    {
      id: 3,
      title: "Campanha Volkswagen",
      category: "Publicidade",
      year: "2024",
      image: "https://readdy.ai/api/search-image?query=Modern%20car%20commercial%20poster%20with%20sleek%20automotive%20cinematography%2C%20featuring%20vehicle%20in%20urban%20setting%20with%20professional%20color%20grading%20and%20commercial%20aesthetic&width=600&height=400&seq=cat3&orientation=landscape",
      duration: "30 sec"
    },
    {
      id: 4,
      title: "O Suspeito",
      category: "Entretenimento",
      year: "2023",
      image: "https://readdy.ai/api/search-image?query=Noir%20thriller%20movie%20poster%20with%20dark%20moody%20lighting%20and%20suspenseful%20atmosphere%2C%20featuring%20mysterious%20character%20in%20dramatic%20shadows%20with%20cinematic%20color%20grading&width=600&height=400&seq=cat4&orientation=landscape",
      duration: "1h 58min"
    },
    {
      id: 5,
      title: "Cidade Perdida",
      category: "Streaming",
      year: "2023",
      image: "https://readdy.ai/api/search-image?query=Adventure%20series%20poster%20with%20lush%20jungle%20environment%20and%20epic%20cinematography%2C%20featuring%20explorers%20discovering%20ancient%20ruins%20with%20vibrant%20color%20grading&width=600&height=400&seq=cat5&orientation=landscape",
      duration: "12 episódios"
    },
    {
      id: 6,
      title: "Revolução Digital",
      category: "Publicidade",
      year: "2023",
      image: "https://readdy.ai/api/search-image?query=Futuristic%20tech%20commercial%20poster%20with%20neon%20lights%20and%20digital%20elements%2C%20featuring%20modern%20technology%20showcase%20with%20vibrant%20blue%20and%20purple%20color%20grading&width=600&height=400&seq=cat6&orientation=landscape",
      duration: "45 sec"
    },
    {
      id: 7,
      title: "Horizonte Azul",
      category: "Entretenimento",
      year: "2023",
      image: "https://readdy.ai/api/search-image?query=Ocean%20adventure%20movie%20poster%20with%20beautiful%20seascape%20and%20maritime%20cinematography%2C%20featuring%20sailing%20vessel%20on%20vast%20blue%20ocean%20with%20stunning%20color%20grading&width=600&height=400&seq=cat7&orientation=landscape",
      duration: "2h 32min"
    },
    {
      id: 8,
      title: "Memórias de Guerra",
      category: "Streaming",
      year: "2022",
      image: "https://readdy.ai/api/search-image?query=War%20drama%20series%20poster%20with%20intense%20battlefield%20scenes%20and%20historical%20cinematography%2C%20featuring%20soldiers%20in%20dramatic%20wartime%20setting%20with%20desaturated%20color%20grading&width=600&height=400&seq=cat8&orientation=landscape",
      duration: "16 episódios"
    },
    {
      id: 9,
      title: "Campanha Nike",
      category: "Publicidade",
      year: "2022",
      image: "https://readdy.ai/api/search-image?query=Athletic%20sportswear%20commercial%20poster%20with%20dynamic%20sports%20action%20and%20energetic%20cinematography%2C%20featuring%20athletes%20in%20motion%20with%20bold%20color%20grading%20and%20commercial%20style&width=600&height=400&seq=cat9&orientation=landscape",
      duration: "60 sec"
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'Todos' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      
      <div className="pt-[135px]">
        {/* Texto Introdutório */}
        <div className="container mx-auto px-4 py-12">
          <ParallaxWrapper animation="fade-up">
            <div className="text-left">
              <p className="text-lg text-gray-300 leading-relaxed">
                Da intensidade de um filme à dinâmica da publicidade, cada formato exige um olhar único. Navegue por nossos projetos e descubra como aplicamos nossa paixão pelo color grading para dar vida, emoção e personalidade a diferentes narrativas. Cada trabalho aqui é um reflexo do nosso cuidado artesanal, independentemente da tela.
              </p>
            </div>
          </ParallaxWrapper>
        </div>

        {/* Toolbar */}
        <div className="sticky top-[135px] z-40 bg-black/90 backdrop-blur-sm border-b border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <ParallaxWrapper animation="fade-up">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96">
                  <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  <input
                    type="text"
                    placeholder="Buscar projetos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#ff0000]"
                  />
                </div>
                
                <div className="flex bg-gray-900 p-1">
                  {['Todos', 'Publicidade', 'Entretenimento', 'Streaming'].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-3 py-2 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                        activeFilter === filter
                          ? 'bg-[#ff0000] text-white'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            </ParallaxWrapper>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => (
              <ParallaxWrapper key={project.id} animation="fade-up" delay={index * 100}>
                <Link href={`/obra/${project.title.toLowerCase().replace(/\s+/g, '-')}`} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg bg-gray-900">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute top-2 right-2">
                      <span className="bg-[#ff0000] text-xs px-2 py-1">
                        {project.year}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-normal text-sm mb-1 text-white">{project.title}</h3>
                      <p className="text-gray-300 text-xs mb-1">{project.category}</p>
                      <p className="text-gray-400 text-xs">{project.duration}</p>
                    </div>
                  </div>
                </Link>
              </ParallaxWrapper>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <ParallaxWrapper animation="fade-up">
              <div className="text-center py-20">
                <i className="ri-search-line text-4xl text-gray-600 mb-4"></i>
                <h3 className="text-xl text-gray-400 mb-2">Nenhum projeto encontrado</h3>
                <p className="text-gray-600">Tente ajustar sua busca ou filtros</p>
              </div>
            </ParallaxWrapper>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default function Catalogo() {
  return (
    <Suspense fallback={
      <div className="bg-black min-h-screen text-white flex items-center justify-center">
        <div className="text-center">
          <i className="ri-loader-4-line text-4xl text-[#ff0000] animate-spin mb-4"></i>
          <p className="text-gray-400">Carregando catálogo...</p>
        </div>
      </div>
    }>
      <CatalogContent />
    </Suspense>
  );
}
