
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ParallaxWrapper from '../../components/ui/ParallaxWrapper';

export default function Sobre() {
  const team = [
    {
      name: 'Ely Rodriguez',
      role: 'Diretor Criativo & Colorista Senior',
      image: 'https://readdy.ai/api/search-image?query=Professional%20colorist%20director%20in%20modern%20color%20grading%20studio%2C%20featuring%20experienced%20creative%20professional%20with%20multiple%20monitors%20and%20color%20correction%20equipment%20in%20cinematic%20lighting&width=400&height=500&seq=team1&orientation=portrait',
      bio: '15 anos de experiência em color grading para cinema e TV. Especialista em DaVinci Resolve e workflows HDR.'
    },
    {
      name: 'Maria Santos',
      role: 'Colorista & Pós-Produção',
      image: 'https://readdy.ai/api/search-image?query=Female%20colorist%20working%20on%20professional%20color%20grading%20setup%2C%20featuring%20skilled%20post-production%20specialist%20with%20color%20correction%20monitors%20in%20modern%20studio%20environment&width=400&height=500&seq=team2&orientation=portrait',
      bio: 'Especialista em correção de cor para publicidade e conteúdo digital. Focada em workflows eficientes e qualidade técnica.'
    },
    {
      name: 'João Silva',
      role: 'Editor & Colorista Junior',
      image: 'https://readdy.ai/api/search-image?query=Young%20male%20editor%20and%20colorist%20at%20editing%20workstation%2C%20featuring%20junior%20professional%20with%20video%20editing%20and%20color%20grading%20setup%20in%20contemporary%20studio&width=400&height=500&seq=team3&orientation=portrait',
      bio: 'Novo talento da equipe, especializado em motion graphics e correção de cor para redes sociais e streaming.'
    }
  ];

  const services = [
    {
      icon: 'ri-movie-2-line',
      title: 'Color Grading Cinematográfico',
      description: 'Correção e estilização de cores para filmes, séries e documentários com workflow profissional.'
    },
    {
      icon: 'ri-tv-line',
      title: 'Pós-Produção para TV',
      description: 'Finalização completa de conteúdo televisivo, desde correção básica até looks criativos.'
    },
    {
      icon: 'ri-advertisement-line',
      title: 'Publicidade & Comerciais',
      description: 'Color grading especializado para campanhas publicitárias e conteúdo comercial.'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Conteúdo Digital',
      description: 'Otimização de cores para plataformas digitais, redes sociais e streaming.'
    },
    {
      icon: 'ri-hd-line',
      title: 'Workflow HDR',
      description: 'Especialistas em High Dynamic Range para cinema premium e streaming 4K.'
    },
    {
      icon: 'ri-settings-3-line',
      title: 'Consultoria Técnica',
      description: 'Consultoria em workflows de cor, calibração de monitores e setup de estúdios.'
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      
      <div className="pt-[135px]">
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ParallaxWrapper animation="fade-right">
                <div>
                  <h1 className="text-4xl lg:text-6xl font-medium mb-6">
                    Nossa <span className="text-[#ff0000]">essência</span>
                  </h1>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Acreditamos que cada imagem carrega uma emoção a ser revelada, uma atmosfera a ser construída e uma visão a ser honrada. Para nós, o color grading nunca foi o último passo de uma produção, mas o coração da narrativa visual. É essa filosofia que nos move há mais de 25 anos: transformar imagens em sentimentos que permanecem com o público.
                  </p>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    Essa jornada é guiada pessoalmente por Ely Silva, que imprime em cada projeto a sensibilidade de um artesão. Em nosso estúdio, a mais alta tecnologia encontra o olhar humano. Mergulhamos na visão de cada diretor e produtor, cuidando de cada frame com uma dedicação que vai além do digital. É um processo colaborativo e minucioso, onde a técnica serve à arte, e não o contrário.
                  </p>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    O resultado é um trabalho que não apenas se destaca visualmente, mas que também serve à história com integridade e propósito. Cada filme, série ou campanha que passa por nossas mãos carrega um pouco da nossa paixão e do nosso compromisso com a excelência. Mais do que entregar cores, buscamos criar um legado visual que não apenas se destaca, mas que também se conecta com a sua audiência de forma autêntica e inesquecível.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <ParallaxWrapper animation="scale" delay={300}>
                      <div>
                        <h3 className="text-3xl font-medium text-[#ff0000] mb-2">Experiência</h3>
                        <p className="text-gray-400">Anos dedicados à arte</p>
                      </div>
                    </ParallaxWrapper>
                    <ParallaxWrapper animation="scale" delay={400}>
                      <div>
                        <h3 className="text-3xl font-medium text-[#ff0000] mb-2">Projetos</h3>
                        <p className="text-gray-400">Histórias contadas</p>
                      </div>
                    </ParallaxWrapper>
                  </div>
                </div>
              </ParallaxWrapper>
              <ParallaxWrapper animation="fade-left" delay={200}>
                <div className="relative">
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%20color%20grading%20studio%20interior%20with%20multiple%20high-end%20monitors%20and%20color%20correction%20equipment%2C%20featuring%20modern%20post-production%20facility%20with%20cinematic%20lighting%20and%20professional%20atmosphere&width=600&height=600&seq=studio1&orientation=squarish"
                    alt="Estúdio Ely"
                    className="w-full h-96 lg:h-[500px] object-cover object-top rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                </div>
              </ParallaxWrapper>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <ParallaxWrapper animation="fade-up">
                <h2 className="text-3xl lg:text-4xl font-medium mb-4">Nossos Serviços</h2>
              </ParallaxWrapper>
              <ParallaxWrapper animation="fade-up" delay={200}>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Oferecemos soluções completas em color grading e pós-produção para diferentes tipos de conteúdo audiovisual.
                </p>
              </ParallaxWrapper>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ParallaxWrapper key={index} animation="fade-up" delay={index * 100}>
                  <div className="bg-gray-900/50 p-8 rounded-lg hover:bg-gray-900/70 transition-colors">
                    <div className="w-12 h-12 bg-[#ff0000] rounded-lg flex items-center justify-center mb-6">
                      <i className={`${service.icon} text-white text-xl`}></i>
                    </div>
                    <h3 className="text-xl font-medium mb-4">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  </div>
                </ParallaxWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <ParallaxWrapper animation="fade-up">
                <h2 className="text-3xl lg:text-4xl font-medium mb-4">Nossa Equipe</h2>
              </ParallaxWrapper>
              <ParallaxWrapper animation="fade-up" delay={200}>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Profissionais apaixonados pela arte da cor, cada um com sua especialidade e experiência única.
                </p>
              </ParallaxWrapper>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <ParallaxWrapper key={index} animation="fade-up" delay={index * 200}>
                  <div className="text-center">
                    <div className="relative mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-48 h-60 object-cover object-top rounded-lg mx-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
                    </div>
                    <h3 className="text-xl font-medium mb-2">{member.name}</h3>
                    <p className="text-[#ff0000] mb-4">{member.role}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </ParallaxWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <ParallaxWrapper animation="fade-up">
                <h2 className="text-3xl lg:text-4xl font-medium mb-4">Nosso Processo</h2>
              </ParallaxWrapper>
              <ParallaxWrapper animation="fade-up" delay={200}>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Metodologia comprovada que garante resultados excepcionais em cada projeto.
                </p>
              </ParallaxWrapper>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Análise do Material',
                  description: 'Avaliação técnica e criativa do material bruto recebido.'
                },
                {
                  step: '02',
                  title: 'Desenvolvimento do Look',
                  description: 'Criação da paleta de cores e estilo visual único do projeto.'
                },
                {
                  step: '03',
                  title: 'Color Grading',
                  description: 'Aplicação profissional das correções e estilizações de cor.'
                },
                {
                  step: '04',
                  title: 'Entrega Final',
                  description: 'Finalização e entrega nos formatos e especificações solicitadas.'
                }
              ].map((process, index) => (
                <ParallaxWrapper key={index} animation="fade-up" delay={index * 150}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#ff0000] rounded-full flex items-center justify-center text-2xl font-medium mb-6 mx-auto">
                      {process.step}
                    </div>
                    <h3 className="text-lg font-medium mb-4">{process.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{process.description}</p>
                  </div>
                </ParallaxWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <ParallaxWrapper animation="fade-up">
              <h2 className="text-3xl lg:text-4xl font-medium mb-6">
                Pronto para dar vida às suas imagens?
              </h2>
            </ParallaxWrapper>
            <ParallaxWrapper animation="fade-up" delay={200}>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e descubra como podemos elevar a qualidade visual do seu projeto.
              </p>
            </ParallaxWrapper>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ParallaxWrapper animation="scale" delay={300}>
                <a href="/contato" className="bg-[#ff0000] hover:bg-[#cc0000] px-8 py-4 rounded-lg font-normal transition-colors cursor-pointer whitespace-nowrap">
                  <i className="ri-mail-line mr-2"></i>
                  Fale conosco
                </a>
              </ParallaxWrapper>
              <ParallaxWrapper animation="scale" delay={400}>
                <a href="/catalogo" className="border border-white/30 hover:bg-white/10 px-8 py-4 rounded-lg font-normal transition-colors cursor-pointer whitespace-nowrap">
                  Ver nosso trabalho
                </a>
              </ParallaxWrapper>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
