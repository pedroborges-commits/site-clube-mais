import { Link } from 'react-router';

interface InfoSection {
  title: string;
  description: string;
}

// dados das seções informativas da Home
const INFO_SECTIONS: InfoSection[] = [
  {
    title: 'O que é o Clube?',
    description:
      'Apresentação da proposta, das vantagens e da relação com o Plano Mais.',
  },
  {
    title: 'Como funciona?',
    description:
      'Quem pode utilizar, como acessar e como aproveitar os benefícios nos parceiros.',
  },
  {
    title: 'Quais benefícios encontro?',
    description:
      'Destaques das categorias e vantagens oferecidas, com conteúdo aprovado pelo Clube.',
  },
  {
    title: 'Onde consultar os parceiros?',
    description: 'Parceiros regionais no PDF. Rede nacional no aplicativo.',
  },
];

// rotas/links de redirecionamento

const ROUTES = {
  cliente: '/cliente',
  parceiro: '/parceiro',
  planoMaisVendas: '#', // URL da página de vendas existente
  cupomClube: 'a definir',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-base-200 py-10 px-4 flex justify-center items-start">
      {/* Card principal seguindo a estética da referência */}
      <div className="w-full max-w-2xl bg-base-100 rounded-2xl border border-[#d4e2d7] shadow-sm overflow-hidden">
        
        {/* HOME */}
        
        {/* Corpo da Página */}
        <div className="p-6 sm:p-8 space-y-8 text-[#264130]">
          
          {/* Título Principal */}
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1e3526]">
            Clube Mais de Vantagens
          </h1>

          {/* Lista de Seções Informativas */}
          <div className="space-y-6">
            {INFO_SECTIONS.map((section) => (
              <section key={section.title} className="space-y-1">
                <h2 className="text-lg font-semibold text-[#264130]">
                  {section.title}
                </h2>
                <p className="text-sm sm:text-base text-[#4a6353] leading-relaxed">
                  {section.description}
                </p>
              </section>
            ))}
          </div>

          {/* Botões de Redirecionamento: Sou Cliente & Sou / Quero ser Parceiro */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <Link
              to={ROUTES.cliente}
              className="btn h-auto py-4 px-5 bg-[#e4efe7] hover:bg-[#d3e5d8] border-none text-[#1e3526] font-semibold justify-between rounded-xl transition-all duration-200 shadow-none"
            >
              <span className="text-base">Sou cliente</span>
              <span aria-hidden="true" className="text-lg">↓</span>
            </Link>

            <Link
              to={ROUTES.parceiro}
              className="btn h-auto py-4 px-5 bg-[#e4efe7] hover:bg-[#d3e5d8] border-none text-[#1e3526] font-semibold justify-between rounded-xl transition-all duration-200 shadow-none"
            >
              <span className="text-base">Sou / quero ser parceiro</span>
              <span aria-hidden="true" className="text-lg">↓</span>
            </Link>
          </div>

          {/* divisor */}
          <hr className="border-[#e4efe7]" />

          {/* Seção: Conheça o Plano Mais */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1e3526]">
              Conheça o Plano Mais
            </h2>

            <p className="text-sm sm:text-base text-[#4a6353] leading-relaxed">
              Contrate pelo canal do Clube e use o cupom exclusivo para ter
              desconto na adesão.
            </p>

            {/* destaque do Cupom */}
            <div className="text-sm sm:text-base text-[#4a6353]">
              <span className="font-medium">Cupom do Clube:</span>{' '}
              <span className="badge bg-[#e4efe7] text-[#1e3526] border-none font-semibold px-3 py-3">
                {ROUTES.cupomClube}
              </span>
            </div>

            {/* chamada : Conhecer o plano e contratar */}
            <div className="pt-2">
              <a
                href={ROUTES.planoMaisVendas}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-col items-start focus:outline-none"
              >
                <span className="inline-flex items-center gap-1.5 text-lg font-bold text-[#1e3526] group-hover:text-[#356346] group-hover:underline transition-colors">
                  Conhecer o plano e contratar
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </span>
              </a>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}