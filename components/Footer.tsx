
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://static.readdy.ai/image/ac7d262f8d8a24729be824a84e392878/680000d35b8b0c7371d3c6c1543411f4.png" 
                  alt="Estúdio Ely" 
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-400 text-sm">
                Especialistas em color grading cinematográfico para filmes, séries e publicidade.
              </p>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Navegação</h4>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Início
                </Link>
                <Link href="/catalogo" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Catálogo
                </Link>
                <Link href="/sobre" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Sobre
                </Link>
                <Link href="/contato" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Contato
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Serviços</h4>
              <div className="space-y-2">
                <Link href="/catalogo?tipo=Entretenimento" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Entretenimento
                </Link>
                <Link href="/catalogo?tipo=Streaming" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Streaming
                </Link>
                <Link href="/catalogo?tipo=Publicidade" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Publicidade
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>contato@estudioely.com</p>
                <p>(11) 99901-6812</p>
                <div className="flex gap-3 mt-4">
                  <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#ff0000] transition-colors cursor-pointer">
                    <i className="ri-instagram-line text-white"></i>
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#ff0000] transition-colors cursor-pointer">
                    <i className="ri-linkedin-line text-white"></i>
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#ff0000] transition-colors cursor-pointer">
                    <i className="ri-youtube-line text-white"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2024 Estúdio Ely Color Grading. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}