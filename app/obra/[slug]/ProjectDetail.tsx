
'use client';

import { useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import ParallaxWrapper from '../../../components/ui/ParallaxWrapper';

interface ProjectDetailProps {
  projectSlug: string;
}

export default function ProjectDetail({ projectSlug }: { projectSlug: string }) {
  const [activeModal, setActiveModal] = useState<'assistir' | 'galeria' | 'informacoes' | null>(null);

  const projectData: { [key: string]: any } = {
    'amor-da-minha-vida': {
      title: 'Amor da Minha Vida',
      category: 'Entretenimento',
      duration: '2h 15min',
      director: 'Maria Silva',
      genre: 'Drama Romântico',
      image: "https://readdy.ai/api/search-image?query=Romantic%20drama%20movie%20scene%20with%20warm%20cinematic%20lighting%20and%20emotional%20depth%2C%20featuring%20couple%20in%20intimate%20moment%20with%20beautiful%20color%20grading%20and%20film%20aesthetic&width=800&height=450&seq=detail1&orientation=landscape",
      trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      synopsis: 'Uma história tocante sobre dois jovens que se encontram em um momento crucial de suas vidas. Com uma paleta de cores quentes e cinematografia intimista, o filme explora temas universais de amor, perda e redenção.',
      awards: ['Melhor Fotografia - Festival de Gramado 2024', 'Prêmio Especial do Júri - Mostra de Cinema de SP 2024'],
      curiosities: [
        'O filme foi rodado em apenas 28 dias em locações reais do Rio de Janeiro',
        'A paleta de cores foi inspirada nos quadros de Edward Hopper',
        'Utilizamos técnicas de color grading inovadoras para criar diferentes atmosferas emocionais'
      ],
      gallery: [
        "https://readdy.ai/api/search-image?query=Romantic%20drama%20movie%20behind%20the%20scenes%20with%20warm%20cinematic%20lighting%2C%20showing%20film%20crew%20and%20actors%20during%20intimate%20scene%20production%20with%20professional%20color%20grading%20equipment&width=400&height=300&seq=gallery1&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Movie%20set%20romantic%20scene%20with%20golden%20hour%20lighting%20and%20cinematic%20atmosphere%2C%20featuring%20couple%20in%20emotional%20moment%20with%20beautiful%20color%20grading%20and%20film%20aesthetic&width=300&height=400&seq=gallery2&orientation=portrait",
        "https://readdy.ai/api/search-image?query=Color%20grading%20suite%20with%20professional%20equipment%20and%20monitors%20showing%20romantic%20drama%20scenes%2C%20featuring%20colorist%20working%20on%20warm%20tones%20and%20emotional%20color%20correction&width=500&height=300&seq=gallery3&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Romantic%20drama%20movie%20production%20stills%20with%20intimate%20lighting%20and%20warm%20color%20palette%2C%20showing%20actors%20in%20emotional%20scenes%20with%20cinematic%20depth&width=350&height=500&seq=gallery4&orientation=portrait",
        "https://readdy.ai/api/search-image?query=Film%20equipment%20and%20camera%20setup%20for%20romantic%20drama%20with%20professional%20lighting%2C%20showing%20cinematography%20tools%20and%20color%20grading%20monitors%20in%20movie%20production&width=400&height=250&seq=gallery5&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Romantic%20movie%20scene%20close-up%20with%20warm%20color%20grading%20and%20emotional%20lighting%2C%20featuring%20actors%20in%20intimate%20moment%20with%20beautiful%20cinematic%20atmosphere&width=300&height=300&seq=gallery6&orientation=squarish"
      ],
      technicalSpecs: {
        format: '4K Digital',
        colorSpace: 'Rec. 2020',
        grading: 'DaVinci Resolve Studio',
        audio: 'Dolby Atmos 7.1',
        cameras: 'RED Komodo 6K, Sony FX9',
        lenses: 'Zeiss Master Prime Series'
      },
      team: [
        { role: 'Diretor', name: 'Maria Silva' },
        { role: 'Colorista', name: 'João Santos' },
        { role: 'Diretor de Fotografia', name: 'Ana Costa' },
        { role: 'Editor', name: 'Pedro Lima' },
        { role: 'Produtor', name: 'Carla Mendes' }
      ]
    },
    'expedicao-artica': {
      title: 'Expedição Ártica',
      category: 'Streaming',
      duration: '8 episódios',
      director: 'João Santos',
      genre: 'Aventura/Drama',
      image: "https://readdy.ai/api/search-image?query=Arctic%20expedition%20dramatic%20scene%20with%20cold%20blue%20tones%20and%20harsh%20lighting%2C%20featuring%20explorers%20in%20snowy%20landscape%20with%20cinematic%20color%20grading&width=800&height=450&seq=detail2&orientation=landscape",
      trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      synopsis: 'Uma expedição científica no Ártico se transforma em uma luta pela sobrevivência. A série utiliza tons frios e contrastes extremos para retratar a beleza hostil do ambiente ártico.',
      awards: ['Melhor Série Dramática - Emmy Internacional 2024'],
      curiosities: [
        'Filmada em condições extremas na Groenlândia',
        'A equipe desenvolveu novas técnicas de proteção para os equipamentos em temperaturas de -30°C',
        'O color grading enfatiza a progressão emocional dos personagens através da mudança de temperatura das cores'
      ],
      gallery: [
        "https://readdy.ai/api/search-image?query=Arctic%20expedition%20behind%20the%20scenes%20with%20cold%20blue%20lighting%20and%20harsh%20winter%20conditions%2C%20showing%20film%20crew%20working%20in%20extreme%20snowy%20environment&width=400&height=300&seq=arctic1&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Arctic%20series%20production%20with%20icy%20blue%20color%20grading%20and%20dramatic%20lighting%2C%20featuring%20explorers%20in%20harsh%20snowy%20landscape%20with%20cinematic%20atmosphere&width=300&height=400&seq=arctic2&orientation=portrait",
        "https://readdy.ai/api/search-image?query=Color%20grading%20suite%20showing%20arctic%20scenes%20with%20cold%20blue%20tones%2C%20featuring%20professional%20colorist%20working%20on%20icy%20color%20correction%20and%20dramatic%20winter%20atmosphere&width=500&height=300&seq=arctic3&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Arctic%20expedition%20filming%20equipment%20in%20snowy%20conditions%20with%20professional%20cameras%2C%20showing%20specialized%20gear%20for%20extreme%20weather%20cinematography&width=350&height=500&seq=arctic4&orientation=portrait",
        "https://readdy.ai/api/search-image?query=Arctic%20series%20dramatic%20scene%20with%20cold%20lighting%20and%20blue%20color%20grading%2C%20featuring%20actors%20in%20winter%20survival%20situation%20with%20cinematic%20depth&width=400&height=250&seq=arctic5&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Arctic%20landscape%20cinematography%20with%20icy%20blue%20tones%20and%20harsh%20lighting%2C%20showing%20vast%20snowy%20terrain%20with%20professional%20color%20grading%20and%20dramatic%20atmosphere&width=300&height=300&seq=arctic6&orientation=squarish"
      ],
      technicalSpecs: {
        format: '6K Digital',
        colorSpace: 'Rec. 709',
        grading: 'DaVinci Resolve Studio',
        audio: 'Dolby Digital 5.1',
        cameras: 'ARRI Alexa Mini LF, RED Monstro 8K',
        lenses: 'Cooke S7/i Series'
      },
      team: [
        { role: 'Diretor', name: 'João Santos' },
        { role: 'Colorista', name: 'Maria Silva' },
        { role: 'Diretor de Fotografia', name: 'Carlos Nunes' },
        { role: 'Editor', name: 'Ana Rodrigues' },
        { role: 'Produtor Executivo', name: 'Rafael Costa' }
      ]
    },
    'campanha-volkswagen': {
      title: 'Campanha Volkswagen',
      category: 'Publicidade',
      duration: '30 seg',
      director: 'Ana Costa',
      genre: 'Comercial',
      image: "https://readdy.ai/api/search-image?query=Modern%20car%20commercial%20scene%20with%20sleek%20automotive%20cinematography%2C%20featuring%20vehicle%20in%20urban%20setting%20with%20professional%20color%20grading%20and%20commercial%20aesthetic&width=800&height=450&seq=detail3&orientation=landscape",
      trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      synopsis: 'Campanha publicitária que destaca a inovação e sustentabilidade dos novos modelos elétricos. Visual moderno com contrastes vibrantes e movimento dinâmico.',
      awards: ['Leão de Bronze - Cannes Lions 2024', 'Prêmio CCSP - Melhor Filme Publicitário 2024'],
      curiosities: [
        'Utilizamos drones especializados para capturar os movimentos do veículo',
        'A paleta de cores foi desenvolvida especificamente para destacar as linhas do carro',
        'Processo de color grading realizado em 8K para máxima qualidade na pós-produção'
      ],
      gallery: [
        "https://readdy.ai/api/search-image?query=Car%20commercial%20behind%20the%20scenes%20with%20professional%20automotive%20cinematography%2C%20showing%20film%20crew%20capturing%20vehicle%20in%20urban%20setting%20with%20commercial%20lighting&width=400&height=300&seq=vw1&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Volkswagen%20commercial%20production%20with%20sleek%20car%20and%20professional%20lighting%20setup%2C%20featuring%20vehicle%20in%20modern%20urban%20environment%20with%20commercial%20aesthetic&width=300&height=400&seq=vw2&orientation=portrait",
        "https://readdy.ai/api/search-image?query=Automotive%20color%20grading%20suite%20with%20car%20commercial%20scenes%20on%20monitors%2C%20showing%20colorist%20working%20on%20vibrant%20vehicle%20colors%20and%20modern%20commercial%20look&width=500&height=300&seq=vw3&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Car%20commercial%20filming%20with%20professional%20camera%20equipment%2C%20showing%20specialized%20automotive%20cinematography%20gear%20and%20lighting%20for%20vehicle%20shoot&width=350&height=500&seq=vw4&orientation=portrait",
        "https://readdy.ai/api/search-image?query=Modern%20car%20in%20urban%20setting%20with%20commercial%20lighting%20and%20color%20grading%2C%20featuring%20sleek%20vehicle%20design%20with%20professional%20automotive%20cinematography&width=400&height=250&seq=vw5&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Volkswagen%20commercial%20storyboard%20and%20production%20materials%2C%20showing%20creative%20process%20and%20planning%20for%20automotive%20advertising%20campaign&width=300&height=300&seq=vw6&orientation=squarish"
      ],
      technicalSpecs: {
        format: '8K Digital',
        colorSpace: 'Rec. 2020',
        grading: 'DaVinci Resolve Studio',
        audio: 'Stereo Mix',
        cameras: 'RED Monstro 8K, ARRI Alexa 65',
        lenses: 'Master Anamorphic Series'
      },
      team: [
        { role: 'Diretor', name: 'Ana Costa' },
        { role: 'Colorista', name: 'Pedro Santos' },
        { role: 'Diretor de Fotografia', name: 'Lucas Martins' },
        { role: 'Editor', name: 'Júlia Lima' },
        { role: 'Diretor Criativo', name: 'Roberto Silva' }
      ]
    }
  };

  const project = projectData[projectSlug] || projectData['amor-da-minha-vida'];

  const renderModalContent = () => {
    switch (activeModal) {
      case 'assistir':
        return (
          <div className="relative w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden">
            <iframe
              src={project.trailer}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        );
      
      case 'galeria':
        return (
          <div className="w-full max-w-6xl max-h-[80vh] overflow-y-auto bg-gray-900 rounded-lg p-6">
            <h3 className="text-2xl font-medium mb-6 text-white">Galeria do Projeto</h3>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
              {project.gallery?.map((image: string, index: number) => (
                <div key={index} className="break-inside-avoid">
                  <img
                    src={image}
                    alt={`${project.title} - Galeria ${index + 1}`}
                    className="w-full rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'informacoes':
        return (
          <div className="w-full max-w-4xl max-h-[80vh] overflow-y-auto bg-gray-900 rounded-lg p-6">
            <h3 className="text-2xl font-medium mb-6 text-white">Mais Informações</h3>
            <div className="space-y-8">
              {/* Especificações Técnicas */}
              <div>
                <h4 className="text-xl font-medium mb-4 text-[#ff0000]">Especificações Técnicas</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(project.technicalSpecs || {}).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center bg-gray-800/50 p-3 rounded-lg">
                      <span className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="text-white font-medium">{value as string}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipe */}
              <div>
                <h4 className="text-xl font-medium mb-4 text-[#ff0000]">Equipe Principal</h4>
                <div className="space-y-3">
                  {project.team?.map((member: any, index: number) => (
                    <div key={index} className="flex justify-between items-center bg-gray-800/50 p-3 rounded-lg">
                      <span className="text-gray-300">{member.role}</span>
                      <span className="text-white font-medium">{member.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curiosidades */}
              {project.curiosities && (
                <div>
                  <h4 className="text-xl font-medium mb-4 text-[#ff0000]">Curiosidades</h4>
                  <div className="space-y-3">
                    {project.curiosities.map((curiosity: string, index: number) => (
                      <div key={index} className="flex gap-3 bg-gray-800/50 p-4 rounded-lg">
                        <div className="w-6 h-6 bg-[#ff0000] rounded-full flex items-center justify-center text-white font-medium text-xs flex-shrink-0 mt-1">
                          {index + 1}
                        </div>
                        <p className="text-gray-300 leading-relaxed">{curiosity}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      
      <div className="pt-[135px]">
        {project ? (
          <>
            {/* Hero Section */}
            <section className="py-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-8rem)]">
                {/* Left - Imagem do projeto */}
                <ParallaxWrapper animation="fade-right">
                  <div className="relative bg-gray-900 h-full min-h-[400px] lg:min-h-[600px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    
                    {/* Botão play no centro da imagem */}
                    <button
                      onClick={() => setActiveModal('assistir')}
                      className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                    >
                      <div className="w-20 h-20 bg-[#ff0000] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <i className="ri-play-fill text-white text-2xl ml-1"></i>
                      </div>
                    </button>
                  </div>
                </ParallaxWrapper>

                {/* Right - Details */}
                <ParallaxWrapper animation="fade-left" delay={200}>
                  <div className="p-8 lg:p-12 flex flex-col justify-center h-full">
                    <div className="max-w-lg">
                      <ParallaxWrapper animation="fade-up" delay={300}>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="bg-[#ff0000] text-xs px-3 py-1 rounded-full">
                            {project.category.toUpperCase()}
                          </span>
                        </div>
                      </ParallaxWrapper>
                      
                      <ParallaxWrapper animation="fade-up" delay={400}>
                        <h1 className="text-4xl lg:text-5xl font-medium mb-6">{project.title}</h1>
                      </ParallaxWrapper>
                      
                      <div className="space-y-4 mb-8">
                        <ParallaxWrapper animation="fade-up" delay={500}>
                          <div className="flex items-center gap-4 text-gray-300">
                            <i className="ri-time-line w-5 h-5 flex items-center justify-center"></i>
                            <span>{project.duration}</span>
                          </div>
                        </ParallaxWrapper>
                        <ParallaxWrapper animation="fade-up" delay={600}>
                          <div className="flex items-center gap-4 text-gray-300">
                            <i className="ri-user-line w-5 h-5 flex items-center justify-center"></i>
                            <span>Direção: {project.director}</span>
                          </div>
                        </ParallaxWrapper>
                        <ParallaxWrapper animation="fade-up" delay={700}>
                          <div className="flex items-center gap-4 text-gray-300">
                            <i className="ri-movie-line w-5 h-5 flex items-center justify-center"></i>
                            <span>{project.genre}</span>
                          </div>
                        </ParallaxWrapper>
                      </div>

                      <ParallaxWrapper animation="fade-up" delay={800}>
                        <p className="text-gray-300 leading-relaxed mb-8">
                          {project.synopsis}
                        </p>
                      </ParallaxWrapper>

                      {/* Tab Navigation */}
                      <ParallaxWrapper animation="fade-up" delay={900}>
                        <div className="flex bg-gray-900 p-1 mb-8 rounded-full">
                          <button
                            onClick={() => setActiveModal('assistir')}
                            className="px-4 py-2 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap rounded-full bg-[#ff0000] text-white hover:bg-[#cc0000]"
                          >
                            <i className="ri-play-line mr-2"></i>
                            Assistir
                          </button>
                          <button
                            onClick={() => setActiveModal('galeria')}
                            className="px-4 py-2 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap rounded-full text-gray-300 hover:text-white hover:bg-gray-700"
                          >
                            <i className="ri-image-line mr-2"></i>
                            Galeria
                          </button>
                          <button
                            onClick={() => setActiveModal('informacoes')}
                            className="px-4 py-2 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap rounded-full text-gray-300 hover:text-white hover:bg-gray-700"
                          >
                            <i className="ri-information-line mr-2"></i>
                            Mais Informações
                          </button>
                        </div>
                      </ParallaxWrapper>

                      <ParallaxWrapper animation="fade-up" delay={1000}>
                        <Link href="/catalogo" className="inline-flex items-center text-[#ff0000] hover:text-[#cc0000] transition-colors cursor-pointer">
                          <i className="ri-arrow-left-line mr-2"></i>
                          Voltar ao catálogo
                        </Link>
                      </ParallaxWrapper>
                    </div>
                  </div>
                </ParallaxWrapper>
              </div>
            </section>

            {/* Awards Section */}
            {project.awards && project.awards.length > 0 && (
              <section className="py-20 bg-gray-900/50">
                <div className="container mx-auto px-4">
                  <ParallaxWrapper animation="fade-up">
                    <h2 className="text-3xl font-medium mb-12 text-center">Premiações</h2>
                  </ParallaxWrapper>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {project.awards.map((award: string, index: number) => (
                      <ParallaxWrapper key={index} animation="fade-up" delay={index * 200}>
                        <div className="flex items-center gap-4 bg-gray-900 p-6 rounded-lg">
                          <div className="w-12 h-12 bg-[#ff0000] rounded-lg flex items-center justify-center">
                            <i className="ri-trophy-line text-white text-xl"></i>
                          </div>
                          <span className="text-gray-300">{award}</span>
                        </div>
                      </ParallaxWrapper>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </>
        ) : (
          <div className="py-32 text-center">
            <h1 className="text-3xl font-medium mb-4">Projeto não encontrado</h1>
            <p className="text-gray-400 mb-8">O projeto que você está procurando não existe.</p>
            <Link href="/catalogo" className="bg-[#ff0000] hover:bg-[#cc0000] px-6 py-3 font-normal transition-colors cursor-pointer whitespace-nowrap">
              Ver todos os projetos
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}