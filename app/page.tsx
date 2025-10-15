'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import HeroGeometric from '../components/ui/HeroGeometric';
import ProjectSlider from '../components/ui/ProjectSlider';
import ParallaxWrapper from '../components/ui/ParallaxWrapper';
import AnimatedGroup from '../components/ui/AnimatedGroup';
import LogoCarousel from '../components/ui/LogoCarousel';

export default function Home() {
  const recentProjects = [
    {
      id: 1,
      title: "Amor da Minha Vida",
      category: "Entretenimento",
      image: "https://readdy.ai/api/search-image?query=Romantic%20drama%20movie%20scene%20with%20warm%20cinematic%20lighting%20and%20emotional%20depth%2C%20featuring%20two%20people%20in%20an%20intimate%20moment%20with%20beautiful%20color%20grading%20and%20film%20aesthetic&width=400&height=300&seq=amor1&orientation=landscape",
      year: "2024",
      description: "Uma história tocante sobre amor e redenção com cinematografia intimista"
    },
    {
      id: 2,
      title: "Expedição Ártica",
      category: "Streaming",
      image: "https://readdy.ai/api/search-image?query=Arctic%20expedition%20scene%20with%20cold%20blue%20tones%20and%20dramatic%20lighting%2C%20featuring%20explorers%20in%20snowy%20landscape%20with%20cinematic%20color%20grading&width=400&height=300&seq=arctic1&orientation=landscape",
      year: "2024",
      description: "Aventura épica de sobrevivência nas condições extremas do Ártico"
    },
    {
      id: 3,
      title: "Campanha Volkswagen",
      category: "Publicidade",
      image: "https://readdy.ai/api/search-image?query=Modern%20car%20commercial%20scene%20with%20sleek%20automotive%20cinematography%2C%20featuring%20vehicle%20in%20urban%20setting%20with%20professional%20color%20grading%20and%20commercial%20aesthetic&width=400&height=300&seq=vw1&orientation=landscape",
      year: "2024",
      description: "Campanha inovadora destacando sustentabilidade e tecnologia"
    },
    {
      id: 4,
      title: "O Suspeito",
      category: "Entretenimento",
      image: "https://readdy.ai/api/search-image?query=Noir%20thriller%20movie%20scene%20with%20dark%20moody%20lighting%20and%20suspenseful%20atmosphere%2C%20featuring%20mysterious%20character%20in%20dramatic%20shadows%20with%20cinematic%20color%20grading&width=400&height=300&seq=suspect1&orientation=landscape",
      year: "2023",
      description: "Thriller noir com atmosfera suspensiva e paleta sombria"
    },
    {
      id: 5,
      title: "Cidade Perdida",
      category: "Streaming",
      image: "https://readdy.ai/api/search-image?query=Adventure%20series%20scene%20with%20lush%20jungle%20environment%20and%20epic%20cinematography%2C%20featuring%20explorers%20discovering%20ancient%20ruins%20with%20vibrant%20color%20grading&width=400&height=300&seq=lost1&orientation=landscape",
      year: "2023",
      description: "Expedição arqueológica em busca de civilizações antigas"
    },
    {
      id: 6,
      title: "Nova Era",
      category: "Entretenimento",
      image: "https://readdy.ai/api/search-image?query=Futuristic%20sci-fi%20movie%20scene%20with%20neon%20lighting%20and%20cyberpunk%20aesthetics%2C%20featuring%20advanced%20technology%20and%20dramatic%20color%20grading%20with%20blue%20and%20purple%20tones&width=400&height=300&seq=novaera1&orientation=landscape",
      year: "2024",
      description: "Ficção científica com visual futurista e efeitos impressionantes"
    },
    {
      id: 7,
      title: "Campanha Samsung",
      category: "Publicidade",
      image: "https://readdy.ai/api/search-image?query=Modern%20tech%20commercial%20with%20sleek%20smartphone%20and%20electronic%20devices%2C%20featuring%20clean%20minimalist%20cinematography%20with%20professional%20lighting%20and%20commercial%20aesthetic&width=400&height=300&seq=samsung1&orientation=landscape",
      year: "2024",
      description: "Publicidade tecnológica com identidade visual moderna"
    },
    {
      id: 8,
      title: "Mistérios do Vale",
      category: "Streaming",
      image: "https://readdy.ai/api/search-image?query=Mystery%20drama%20series%20with%20atmospheric%20forest%20setting%20and%20moody%20lighting%2C%20featuring%20investigators%20in%20rural%20landscape%20with%20cinematic%20color%20grading&width=400&height=300&seq=misterios1&orientation=landscape",
      year: "2023",
      description: "Drama investigativo com atmosfera misteriosa e envolvente"
    },
    {
      id: 9,
      title: "Coração Selvagem",
      category: "Entretenimento",
      image: "https://readdy.ai/api/search-image?query=Wild%20adventure%20movie%20scene%20with%20natural%20landscape%20and%20dramatic%20outdoor%20cinematography%2C%20featuring%20characters%20in%20wilderness%20setting%20with%20warm%20color%20grading&width=400&height=300&seq=coracao1&orientation=landscape",
      year: "2023",
      description: "Aventura na natureza com cinematografia épica"
    },
    {
      id: 10,
      title: "Campanha Coca-Cola",
      category: "Publicidade",
      image: "https://readdy.ai/api/search-image?query=Refreshing%20beverage%20commercial%20with%20vibrant%20colors%20and%20lifestyle%20cinematography%2C%20featuring%20people%20enjoying%20drinks%20with%20bright%20and%20energetic%20color%20grading&width=400&height=300&seq=cocacola1&orientation=landscape",
      year: "2024",
      description: "Campanha refrescante com cores vibrantes e energia"
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      
      {/* Hero Section - Apenas imagem */}
      <HeroGeometric />

      {/* Studio Info Section - Conteúdo movido para baixo */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <ParallaxWrapper animation="fade-right">
              <div className="text-center lg:text-left">
                <ParallaxWrapper animation="scale" delay={200}>
                  <div className="inline-flex items-center justify-center lg:justify-start mb-6">
                    <img 
                      src="https://static.readdy.ai/image/ac7d262f8d8a24729be824a84e392878/203ecd8de2c877f63159785d1f1a4684.png" 
                      alt="Estúdio Ely" 
                      className="w-[180px] h-auto"
                    />
                  </div>
                </ParallaxWrapper>
                
                <ParallaxWrapper animation="fade-up" delay={400}>
                  <p className="text-lg md:text-xl text-gray-300 mb-8">
                    Especializado em pós-produção e color grading, oferecendo serviços com precisão técnica e sensibilidade artística, traduzindo a visão do diretor em imagens que ganham profundidade, atmosfera e significado.
                  </p>
                </ParallaxWrapper>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <ParallaxWrapper animation="fade-up" delay={600}>
                    <Link href="/sobre" className="bg-[#ff0000] hover:bg-[#cc0000] px-6 py-3 font-normal transition-colors cursor-pointer whitespace-nowrap">
                      <i className="ri-information-line mr-2"></i>
                      Sobre o Estúdio
                    </Link>
                  </ParallaxWrapper>
                  <ParallaxWrapper animation="fade-up" delay={700}>
                    <Link href="/catalogo" className="border border-white/30 hover:bg-white/10 px-6 py-3 font-normal transition-colors cursor-pointer whitespace-nowrap">
                      Ver projetos realizados
                    </Link>
                  </ParallaxWrapper>
                </div>
              </div>
            </ParallaxWrapper>

            {/* Right Column - Studio Image */}
            <ParallaxWrapper animation="fade-left" delay={300}>
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20film%20color%20grading%20studio%20interior%20with%20multiple%20high-end%20monitors%20displaying%20color%20correction%20interface%2C%20cinematographer%20working%20at%20grading%20station%20with%20professional%20equipment%20and%20warm%20atmospheric%20lighting%20in%20modern%20post-production%20facility&width=600&height=500&seq=studio1&orientation=landscape"
                  alt="Estúdio de Color Grading"
                  className="w-full h-[500px] object-cover object-top rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </ParallaxWrapper>
          </div>
        </div>
      </section>

      {/* Project Slider */}
      <ProjectSlider />

      {/* Recent Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ParallaxWrapper animation="fade-up">
            <h2 className="text-3xl font-medium mb-12">Projetos recentes</h2>
          </ParallaxWrapper>
          
          <AnimatedGroup 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3"
            stagger={80}
            delay={200}
          >
            {recentProjects.map((project) => (
              <Link key={project.id} href={`/obra/${project.title.toLowerCase().replace(/\s+/g, '-')}`} className="group cursor-pointer">
                <div className="relative overflow-hidden bg-gray-900">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300 opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/0 group-hover:from-black/80 to-transparent transition-all duration-300"></div>
                  <div className="absolute top-2 right-2">
                    <span className="text-white text-xs px-2 py-1 rounded-full opacity-50 group-hover:bg-[#ff0000] group-hover:text-white group-hover:opacity-100 transition-all duration-300">
                      {project.category.toUpperCase()}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-normal text-sm mb-1">{project.title}</h3>
                    <p className="text-gray-400 text-xs">{project.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </AnimatedGroup>
          
          <ParallaxWrapper animation="scale" delay={800}>
            <div className="text-center mt-12">
              <Link href="/catalogo" className="inline-flex items-center bg-[#ff0000] hover:bg-[#cc0000] px-8 py-3 font-normal transition-colors cursor-pointer whitespace-nowrap">
                <i className="ri-grid-line mr-2"></i>
                Ver mais projetos
              </Link>
            </div>
          </ParallaxWrapper>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background with animated particles */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#ff0000]/20 to-black">
          <div className="absolute inset-0 opacity-30">
            {/* Animated geometric shapes */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#ff0000]/20 rotate-45 animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-[#ff0000]/30 rotate-12 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-[#ff0000]/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-[#ff0000]/25 transform rotate-45 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-2 h-2 bg-[#ff0000] rounded-full animate-float" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
          <div className="absolute w-1 h-1 bg-[#ff0000] rounded-full animate-float" style={{ top: '60%', left: '80%', animationDelay: '2s' }}></div>
          <div className="absolute w-3 h-3 bg-[#ff0000] rounded-full animate-float" style={{ top: '80%', left: '15%', animationDelay: '4s' }}></div>
          <div className="absolute w-1.5 h-1.5 bg-[#ff0000] rounded-full animate-float" style={{ top: '30%', right: '20%', animationDelay: '6s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Animated title */}
            <ParallaxWrapper animation="fade-up">
              <h2 className="text-2xl md:text-4xl font-medium mb-8 leading-tight">
                <span className="inline-block">Sua visão,</span>{' '}
                <span className="inline-block text-[#ff0000]">nossa expertise</span>{' '}
                <span className="inline-block">em cor.</span>
              </h2>
            </ParallaxWrapper>
            
            {/* Animated description */}
            <ParallaxWrapper animation="fade-up" delay={200}>
              <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
                Acreditamos que a colaboração é a alma de um grande projeto. Se você busca um parceiro com mais de 25 anos de experiência e um cuidado minucioso em cada frame, vamos conversar. Ely Silva está à disposição para entender suas necessidades e desenhar a paleta de cores perfeita para seu filme, série ou publicidade.
              </p>
            </ParallaxWrapper>

            {/* Animated CTA button with glow effect */}
            <ParallaxWrapper animation="scale" delay={400}>
              <Link 
                href="/contato" 
                className="group relative inline-flex items-center bg-gradient-to-r from-[#ff0000] to-[#cc0000] hover:from-[#cc0000] hover:to-[#990000] px-12 py-5 text-lg font-normal transition-all duration-300 cursor-pointer whitespace-nowrap overflow-hidden"
              >
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff0000] to-[#cc0000] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                
                {/* Button content */}
                <div className="relative flex items-center gap-3">
                  <i className="ri-cup-line text-xl group-hover:rotate-12 transition-transform duration-300"></i>
                  <span>Agendar um café com Ely</span>
                  <i className="ri-arrow-right-line text-xl group-hover:translate-x-2 transition-transform duration-300"></i>
                </div>

                {/* Hover ripple effect */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
              </Link>
            </ParallaxWrapper>
          </div>
        </div>

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Category Navigation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ParallaxWrapper animation="fade-up">
            <h2 className="text-3xl font-medium mb-12 text-center">Veja também</h2>
          </ParallaxWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[80vh]">
            <ParallaxWrapper animation="fade-left" delay={200}>
              <Link href="/catalogo?tipo=Publicidade" className="group cursor-pointer">
                <div className="relative h-full overflow-hidden">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Professional%20advertising%20production%20set%20with%20cameras%20and%20lighting%20equipment%2C%20featuring%20commercial%20shoot%20environment%20with%20modern%20studio%20setup%20and%20professional%20cinematography&width=600&height=800&seq=pub1&orientation=portrait"
                    alt="Publicidade"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-2xl font-medium mb-2">Publicidade</h3>
                      <p className="text-gray-300">Campanhas e comerciais</p>
                    </div>
                  </div>
                </div>
              </Link>
            </ParallaxWrapper>
            
            <ParallaxWrapper animation="fade-up" delay={300}>
              <Link href="/catalogo?tipo=Entretenimento" className="group cursor-pointer">
                <div className="relative h-full overflow-hidden">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Film%20production%20scene%20with%20movie%20cameras%20and%20director%20equipment%2C%20featuring%20cinema%20set%20with%20dramatic%20lighting%20and%20professional%20filmmaking%20atmosphere&width=600&height=800&seq=film1&orientation=portrait"
                    alt="Entretenimento"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-2xl font-medium mb-2">Entretenimento</h3>
                      <p className="text-gray-300">Filmes e documentários</p>
                    </div>
                  </div>
                </div>
              </Link>
            </ParallaxWrapper>
            
            <ParallaxWrapper animation="fade-right" delay={400}>
              <Link href="/catalogo?tipo=Streaming" className="group cursor-pointer">
                <div className="relative h-full overflow-hidden">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Television%20series%20production%20with%20multiple%20monitors%20and%20editing%20suites%2C%20featuring%20TV%20show%20post-production%20environment%20with%20professional%20color%20grading%20setup&width=600&height=800&seq=series1&orientation=portrait"
                    alt="Streaming"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-2xl font-medium mb-2">Streaming</h3>
                      <p className="text-gray-300">Séries e conteúdo digital</p>
                    </div>
                  </div>
                </div>
              </Link>
            </ParallaxWrapper>
          </div>
        </div>
      </section>

      {/* Software Tools Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <LogoCarousel
            logos={[
              {
                src: "https://static.readdy.ai/image/ac7d262f8d8a24729be824a84e392878/59bca0e55d6b2d15bb3bd9018878be41.png",
                alt: "DaVinci Resolve"
              },
              {
                src: "https://static.readdy.ai/image/ac7d262f8d8a24729be824a84e392878/de51bd589dff086a743bebad8e4ac303.png",
                alt: "Adobe Premiere Pro"
              },
              {
                src: "https://static.readdy.ai/image/ac7d262f8d8a24729be824a84e392878/4503623d2fb6ff554563bdd7fa8d6c4a.png",
                alt: "Adobe After Effects"
              },
              {
                src: "https://static.readdy.ai/image/ac7d262f8d8a24729be824a84e392878/14f510f84c49627a3ed71c3742248646.png",
                alt: "Final Cut Pro"
              },
              {
                src: "https://static.readdy.ai/image/ac7d262f8d8a24729be824a84e392878/6c0d4ace19645c2ee6875d08edc656b9.png",
                alt: "Avid Media Composer"
              }
            ]}
            speed={25}
            direction="left"
            className="w-full"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
