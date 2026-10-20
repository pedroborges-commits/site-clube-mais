import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "o-que-e-o-clube", label: "O que é o Clube?" },
  { id: "como-funciona", label: "Como funciona?" },
  { id: "quais-beneficios-encontro", label: "Benefícios" },
  { id: "onde-consultar-os-parceiros", label: "Consultar parceiros" },
];

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [seccaoAtiva, setSeccaoAtiva] = useState<string>("");

  const handleClick = (seccao: string) => {
    setSeccaoAtiva(seccao);
    setMenuAberto(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="relative flex items-center justify-between w-full px-4 sm:px-8 h-20">
        
        {/* logo */}
        <img
          src="/assets/logos/clubemais.png"
          alt="Logo_clube-mais"
          className="w-auto h-16 shrink-0"
        />
        
        {/* links de navegação (tela desktop centrados) */}
<div className="hidden lg:flex items-center gap-10 xl:gap-14 absolute left-1/2 -translate-x-1/2">
          {NAV_ITEMS.map((item) => {
            const isAtivo = seccaoAtiva === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleClick(item.id)}
                className={`
                  flex items-center cursor-pointer whitespace-nowrap transition-all duration-300
                  text-base font-medium border-b-4 pb-1
                  ${
                    isAtivo
                      ? "border-gray-500 text-gray-500"
                      : "border-transparent text-gray-800 hover:text-gray-500 hover:border-gray-500/50"
                  }
                `}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* botão menu mobile */}
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="lg:hidden text-gray-800 z-50 relative ml-auto"
          aria-label="Abrir menu"
        >
          {menuAberto ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* dropdown do menu mobile */}
      {menuAberto && (
        <nav className="lg:hidden absolute top-20 left-0 w-full bg-white flex flex-col items-center gap-0 shadow-xl border-t border-gray-100 z-50">
          {NAV_ITEMS.map((item) => {
            const isAtivo = seccaoAtiva === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleClick(item.id)}
                className={`
                  w-full text-center py-4 text-lg font-medium transition-all duration-300
                  border-l-4 
                  ${
                    isAtivo
                      ? "border-gray-500 text-gray-500 bg-gray-50"
                      : "border-transparent text-gray-800 hover:text-gray-500 hover:bg-gray-50"
                  }
                `}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
}