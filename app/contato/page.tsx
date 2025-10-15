
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ParallaxWrapper from '../../components/ui/ParallaxWrapper';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    tipoServico: '',
    orcamento: '',
    prazo: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        tipoServico: '',
        orcamento: '',
        prazo: '',
        mensagem: ''
      });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      
      <div className="pt-[135px]">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <ParallaxWrapper animation="fade-up">
              <h1 className="text-4xl lg:text-6xl font-medium mb-6">
                Fale <span className="text-[#ff0000]">conosco</span>
              </h1>
            </ParallaxWrapper>
            <ParallaxWrapper animation="fade-up" delay={200}>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Pronto para dar vida ao seu projeto? Entre em contato e vamos discutir como podemos ajudar.
              </p>
            </ParallaxWrapper>
          </div>
        </section>

        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ParallaxWrapper animation="fade-right">
              <div className="bg-gray-900/50 p-8 rounded-lg">
                <h2 className="text-2xl font-medium mb-6">Solicite um orçamento</h2>
                
                {submitStatus === 'success' && (
                  <div className="bg-green-600/20 border border-green-600 text-green-400 p-4 mb-6">
                    <i className="ri-check-line mr-2"></i>
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </div>
                )}

                <form id="contato-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ParallaxWrapper animation="fade-up" delay={100}>
                      <div>
                        <label className="block text-sm font-medium mb-2">Nome *</label>
                        <input
                          type="text"
                          name="nome"
                          value={formData.nome}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#ff0000]"
                          placeholder="Seu nome completo"
                        />
                      </div>
                    </ParallaxWrapper>
                    <ParallaxWrapper animation="fade-up" delay={200}>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#ff0000]"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </ParallaxWrapper>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ParallaxWrapper animation="fade-up" delay={300}>
                      <div>
                        <label className="block text-sm font-medium mb-2">Telefone</label>
                        <input
                          type="tel"
                          name="telefone"
                          value={formData.telefone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#ff0000]"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                    </ParallaxWrapper>
                    <ParallaxWrapper animation="fade-up" delay={400}>
                      <div>
                        <label className="block text-sm font-medium mb-2">Empresa</label>
                        <input
                          type="text"
                          name="empresa"
                          value={formData.empresa}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#ff0000]"
                          placeholder="Nome da empresa"
                        />
                      </div>
                    </ParallaxWrapper>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ParallaxWrapper animation="fade-up" delay={500}>
                      <div>
                        <label className="block text-sm font-medium mb-2">Tipo de Serviço</label>
                        <select
                          name="tipoServico"
                          value={formData.tipoServico}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-[#ff0000] pr-8"
                        >
                          <option value="">Selecione um serviço</option>
                          <option value="entretenimento">Color Grading - Entretenimento</option>
                          <option value="streaming">Color Grading - Streaming</option>
                          <option value="publicidade">Color Grading - Publicidade</option>
                          <option value="digital">Conteúdo Digital</option>
                          <option value="consultoria">Consultoria Técnica</option>
                          <option value="outro">Outro</option>
                        </select>
                      </div>
                    </ParallaxWrapper>
                    <ParallaxWrapper animation="fade-up" delay={600}>
                      <div>
                        <label className="block text-sm font-medium mb-2">Orçamento Estimado</label>
                        <select
                          name="orcamento"
                          value={formData.orcamento}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-[#ff0000] pr-8"
                        >
                          <option value="">Selecione uma faixa</option>
                          <option value="ate-5k">Até R$ 5.000</option>
                          <option value="5k-15k">R$ 5.000 - R$ 15.000</option>
                          <option value="15k-50k">R$ 15.000 - R$ 50.000</option>
                          <option value="acima-50k">Acima de R$ 50.000</option>
                          <option value="a-definir">A definir</option>
                        </select>
                      </div>
                    </ParallaxWrapper>
                  </div>

                  <ParallaxWrapper animation="fade-up" delay={700}>
                    <div>
                      <label className="block text-sm font-medium mb-2">Prazo do Projeto</label>
                      <select
                        name="prazo"
                        value={formData.prazo}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-[#ff0000] pr-8"
                      >
                        <option value="">Selecione um prazo</option>
                        <option value="urgente">Urgente (até 1 semana)</option>
                        <option value="rapido">Rápido (1-2 semanas)</option>
                        <option value="normal">Normal (2-4 semanas)</option>
                        <option value="flexivel">Flexível (acima de 1 mês)</option>
                      </select>
                    </div>
                  </ParallaxWrapper>

                  <ParallaxWrapper animation="fade-up" delay={800}>
                    <div>
                      <label className="block text-sm font-medium mb-2">Mensagem *</label>
                      <textarea
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        required
                        maxLength={500}
                        rows={5}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#ff0000] resize-none"
                        placeholder="Descreva seu projeto, necessidades específicas, material disponível, referências visuais, etc."
                      ></textarea>
                      <div className="text-right text-sm text-gray-500 mt-1">
                        {formData.mensagem.length}/500 caracteres
                      </div>
                    </div>
                  </ParallaxWrapper>

                  <ParallaxWrapper animation="scale" delay={900}>
                    <button
                      type="submit"
                      disabled={isSubmitting || formData.mensagem.length > 500}
                      className="w-full bg-[#ff0000] hover:bg-[#cc0000] disabled:bg-gray-600 disabled:cursor-not-allowed px-6 py-3 font-semibold transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {isSubmitting ? (
                        <>
                          <i className="ri-loader-4-line animate-spin mr-2"></i>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <i className="ri-send-plane-fill mr-2"></i>
                          Enviar mensagem
                        </>
                      )}
                    </button>
                  </ParallaxWrapper>
                </form>
              </div>
            </ParallaxWrapper>

            {/* Contact Info */}
            <div className="space-y-8">
              <ParallaxWrapper animation="fade-left" delay={200}>
                <div className="bg-gray-900/30 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold mb-6">Informações de Contato</h3>
                  <div className="space-y-4">
                    <ParallaxWrapper animation="fade-up" delay={300}>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-[#ff0000] rounded-full flex items-center justify-center">
                          <i className="ri-mail-line text-white"></i>
                        </div>
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-gray-400">contato@estudioely.com</p>
                        </div>
                      </div>
                    </ParallaxWrapper>
                    <ParallaxWrapper animation="fade-up" delay={400}>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-[#ff0000] rounded-full flex items-center justify-center">
                          <i className="ri-phone-line text-white"></i>
                        </div>
                        <div>
                          <p className="font-medium">Telefone</p>
                          <p className="text-gray-400">(11) 99901-6812</p>
                        </div>
                      </div>
                    </ParallaxWrapper>
                    <ParallaxWrapper animation="fade-up" delay={500}>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-[#ff0000] rounded-full flex items-center justify-center">
                          <i className="ri-map-pin-line text-white"></i>
                        </div>
                        <div>
                          <p className="font-medium">Endereço</p>
                          <p className="text-gray-400">Rua Cayowaá, 580 - conj 36<br/>Sumaré, São Paulo - SP<br/>05018-000</p>
                        </div>
                      </div>
                    </ParallaxWrapper>
                  </div>
                </div>
              </ParallaxWrapper>

              <ParallaxWrapper animation="fade-left" delay={400}>
                <div className="bg-gray-900/30 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold mb-6">Horário de Funcionamento</h3>
                  <div className="space-y-2">
                    <ParallaxWrapper animation="fade-up" delay={500}>
                      <div className="flex justify-between">
                        <span>Segunda - Sexta</span>
                        <span className="text-gray-400">9:00 - 20:00</span>
                      </div>
                    </ParallaxWrapper>
                    <ParallaxWrapper animation="fade-up" delay={600}>
                      <div className="flex justify-between">
                        <span>Sábado</span>
                        <span className="text-gray-400">Fechado</span>
                      </div>
                    </ParallaxWrapper>
                    <ParallaxWrapper animation="fade-up" delay={700}>
                      <div className="flex justify-between">
                        <span>Domingo</span>
                        <span className="text-gray-400">Fechado</span>
                      </div>
                    </ParallaxWrapper>
                  </div>
                </div>
              </ParallaxWrapper>

              <ParallaxWrapper animation="fade-left" delay={600}>
                <div className="bg-gray-900/30 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold mb-6">Nos siga nas redes</h3>
                  <div className="flex gap-4">
                    <ParallaxWrapper animation="scale" delay={700}>
                      <a href="#" className="w-12 h-12 bg-gray-800 flex items-center justify-center hover:bg-[#ff0000] transition-colors cursor-pointer">
                        <i className="ri-instagram-line text-white text-xl"></i>
                      </a>
                    </ParallaxWrapper>
                    <ParallaxWrapper animation="scale" delay={800}>
                      <a href="#" className="w-12 h-12 bg-gray-800 flex items-center justify-center hover:bg-[#ff0000] transition-colors cursor-pointer">
                        <i className="ri-linkedin-line text-white text-xl"></i>
                      </a>
                    </ParallaxWrapper>
                    <ParallaxWrapper animation="scale" delay={900}>
                      <a href="#" className="w-12 h-12 bg-gray-800 flex items-center justify-center hover:bg-[#ff0000] transition-colors cursor-pointer">
                        <i className="ri-youtube-line text-white text-xl"></i>
                      </a>
                    </ParallaxWrapper>
                    <ParallaxWrapper animation="scale" delay={1000}>
                      <a href="#" className="w-12 h-12 bg-gray-800 flex items-center justify-center hover:bg-[#ff0000] transition-colors cursor-pointer">
                        <i className="ri-behance-line text-white text-xl"></i>
                      </a>
                    </ParallaxWrapper>
                  </div>
                </div>
              </ParallaxWrapper>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
