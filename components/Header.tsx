
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('pt');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className={`bg-black/70 h-[50px] transition-all duration-300 fixed top-0 left-0 right-0 z-[60] ${isScrolled ? 'hidden' : ''}`}>
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-end h-full">
            {/* Todos os itens alinhados à direita */}
            <div className="flex items-center gap-6">
              {/* Links */}
              <div className="flex items-center gap-6 text-sm text-gray-300">
                <Link href="#" className="hover:text-white transition-colors cursor-pointer">
                  Conheça o Estúdio
                </Link>
                <Link href="#" className="hover:text-white transition-colors cursor-pointer">
                  Nossos Serviços
                </Link>
                <Link href="#" className="hover:text-white transition-colors cursor-pointer">
                  Fale Conosco
                </Link>
              </div>

              {/* Theme Toggle */}
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="w-8 h-8 bg-gray-800/50 flex items-center justify-center hover:bg-[#ff0000] transition-colors cursor-pointer rounded"
                title={isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
              >
                <i className={`${isDarkMode ? 'ri-sun-line' : 'ri-moon-line'} text-white text-sm`}></i>
              </button>

              {/* Language Selector */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLanguage('pt')}
                  className={`flex items-center gap-1 px-2 py-1 rounded transition-colors cursor-pointer ${
                    language === 'pt' ? 'bg-[#ff0000] text-white' : 'hover:bg-gray-800'
                  }`}
                >
                  <img 
                    src="https://readdy.ai/api/search-image?query=Brazil%20flag%20icon%20small%20rectangular%20flag%20symbol%20clean%20minimalist%20design&width=24&height=16&seq=brazil-flag&orientation=landscape" 
                    alt="Brasil" 
                    className="w-4 h-3 object-cover rounded-sm"
                  />
                  <span className="text-xs">PT</span>
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`flex items-center gap-1 px-2 py-1 rounded transition-colors cursor-pointer ${
                    language === 'en' ? 'bg-[#ff0000] text-white' : 'hover:bg-gray-800'
                  }`}
                >
                  <img 
                    src="https://readdy.ai/api/search-image?query=United%20States%20USA%20flag%20icon%20small%20rectangular%20flag%20symbol%20clean%20minimalist%20design&width=24&height=16&seq=usa-flag&orientation=landscape" 
                    alt="USA" 
                    className="w-4 h-3 object-cover rounded-sm"
                  />
                  <span className="text-xs">EN</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`bg-black/70 backdrop-blur-sm border-b border-gray-800/50 transition-all duration-300 fixed left-0 right-0 z-50 ${
        isScrolled ? 'top-0 h-[60px] shadow-lg' : 'top-[50px] h-[85px]'
      }`}>
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo - Alinhado à esquerda */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <img 
                  src="https://static.readdy.ai/image/ac7d262f8d8a24729be824a84e392878/680000d35b8b0c7371d3c6c1543411f4.png" 
                  alt="Estúdio Ely" 
                  className={`w-auto transition-all duration-300 ${isScrolled ? 'h-6' : 'h-8'}`}
                />
              </Link>
            </div>

            {/* Navigation Menu - Centralizado */}
            <nav className={`hidden lg:flex items-center gap-12 text-base absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
              isScrolled ? 'text-sm gap-8' : ''
            }`}>
              <Link href="/publicidade" className="text-gray-300 hover:text-white transition-colors cursor-pointer font-normal whitespace-nowrap">
                Publicidade
              </Link>
              <Link href="/entretenimento" className="text-gray-300 hover:text-white transition-colors cursor-pointer font-normal whitespace-nowrap">
                Entretenimento
              </Link>
              <Link href="/streaming" className="text-gray-300 hover:text-white transition-colors cursor-pointer font-normal whitespace-nowrap">
                Streaming
              </Link>
              <Link href="/biblioteca" className="text-gray-300 hover:text-white transition-colors cursor-pointer font-normal whitespace-nowrap">
                Biblioteca Ely
              </Link>
            </nav>

            {/* Right Side - Search and Social - Alinhado à direita */}
            <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
              {/* Search Bar - Dropdown Style */}
              <div 
                className="relative"
                onMouseEnter={() => setIsSearchOpen(true)}
                onMouseLeave={() => setIsSearchOpen(false)}
              >
                {/* Search Icon */}
                <button className="w-10 h-10 bg-gray-800/50 flex items-center justify-center hover:bg-[#ff0000] transition-colors cursor-pointer">
                  <i className="ri-search-line text-white"></i>
                </button>
                
                {/* Dropdown Search Input */}
                {isSearchOpen && (
                  <div className="absolute top-full right-0 mt-2 w-80 bg-black/95 backdrop-blur-sm border border-gray-700 shadow-lg z-10">
                    <div className="p-4">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Pesquisar projetos, categorias..."
                          className="bg-gray-800/50 border border-gray-700 px-4 py-3 pr-10 text-white placeholder-gray-400 focus:outline-none focus:border-[#ff0000] transition-colors w-full"
                          autoFocus
                        />
                        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors cursor-pointer">
                          <i className="ri-search-line"></i>
                        </button>
                      </div>
                      <div className="mt-3 text-xs text-gray-400">
                        Pressione Enter para pesquisar
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Social Icons - Ocultos quando sticky */}
              {!isScrolled && (
                <div className={`flex items-center gap-3 transition-all duration-300`}>
                  <a href="#" className="w-10 h-10 bg-gray-800/50 flex items-center justify-center hover:bg-[#ff0000] transition-colors cursor-pointer">
                    <i className="ri-instagram-line text-white"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800/50 flex items-center justify-center hover:bg-[#ff0000] transition-colors cursor-pointer">
                    <i className="ri-linkedin-line text-white"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800/50 flex items-center justify-center hover:bg-[#ff0000] transition-colors cursor-pointer">
                    <i className="ri-vimeo-line text-white"></i>
                  </a>
                </div>
              )}

              {/* Language Selector for Sticky Header */}
              {isScrolled && (
                <>
                  {/* Theme Toggle in Sticky Header */}
                  <button 
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="w-10 h-10 bg-gray-800/50 flex items-center justify-center hover:bg-[#ff0000] transition-colors cursor-pointer"
                    title={isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
                  >
                    <i className={`${isDarkMode ? 'ri-sun-line' : 'ri-moon-line'} text-white`}></i>
                  </button>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setLanguage('pt')}
                      className={`flex items-center gap-1 px-2 py-1 rounded transition-colors cursor-pointer ${
                        language === 'pt' ? 'bg-[#ff0000] text-white' : 'hover:bg-gray-800'
                      }`}
                    >
                      <img 
                        src="https://readdy.ai/api/search-image?query=Brazil%20flag%20icon%20small%20rectangular%20flag%20symbol%20clean%20minimalist%20design&width=24&height=16&seq=brazil-flag&orientation=landscape" 
                        alt="Brasil" 
                        className="w-3 h-2 object-cover rounded-sm"
                      />
                      <span className="text-xs">PT</span>
                    </button>
                    <button
                      onClick={() => setLanguage('en')}
                      className={`flex items-center gap-1 px-2 py-1 rounded transition-colors cursor-pointer ${
                        language === 'en' ? 'bg-[#ff0000] text-white' : 'hover:bg-gray-800'
                      }`}
                    >
                      <img 
                        src="https://readdy.ai/api/search-image?query=United%20States%20USA%20flag%20icon%20small%20rectangular%20flag%20symbol%20clean%20minimalist%20design&width=24&height=16&seq=usa-flag&orientation=landscape" 
                        alt="USA" 
                        className="w-3 h-2 object-cover rounded-sm"
                      />
                      <span className="text-xs">EN</span>
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className="ri-menu-line text-2xl"></i>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-black border-t border-gray-800 z-50">
              <nav className="flex flex-col py-4">
                <Link href="/publicidade" className="px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors cursor-pointer">
                  Publicidade
                </Link>
                <Link href="/entretenimento" className="px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors cursor-pointer">
                  Entretenimento
                </Link>
                <Link href="/streaming" className="px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors cursor-pointer">
                  Streaming
                </Link>
                <Link href="/biblioteca" className="px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors cursor-pointer">
                  Biblioteca Ely
                </Link>
                
                {/* Mobile Theme Toggle */}
                <button 
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  <i className={`${isDarkMode ? 'ri-sun-line' : 'ri-moon-line'} mr-3`}></i>
                  {isDarkMode ? 'Modo claro' : 'Modo escuro'}
                </button>
                
                {/* Mobile Search */}
                <div className="px-4 py-3">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Pesquisar..."
                      className="bg-gray-800/50 border border-gray-700 px-4 py-2 pr-10 text-white placeholder-gray-400 focus:outline-none focus:border-[#ff0000] transition-colors w-full"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors cursor-pointer">
                      <i className="ri-search-line"></i>
                    </button>
                  </div>
                </div>

                {/* Mobile Social */}
                <div className="flex items-center gap-3 px-4 py-3">
                  <a href="#" className="w-10 h-10 bg-gray-800/50 flex items-center justify-center hover:bg-[#ff0000] transition-colors cursor-pointer">
                    <i className="ri-instagram-line text-white"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800/50 flex items-center justify-center hover:bg-[#ff0000] transition-colors cursor-pointer">
                    <i className="ri-linkedin-line text-white"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800/50 flex items-center justify-center hover:bg-[#ff0000] transition-colors cursor-pointer">
                    <i className="ri-vimeo-line text-white"></i>
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}