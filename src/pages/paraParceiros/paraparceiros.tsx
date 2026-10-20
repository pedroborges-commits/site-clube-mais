import { Link } from "react-router";

export default function Parceiros() {
  return (
    <main className="mx-auto w-full max-w-[1100px] px-5 py-8 font-sans text-black sm:px-8">
      <div className="space-y-4">
        <Link
          to="/"
          className="btn btn-sm bg-gray-200 text-black hover:bg-gray-300 border-none"
        >
          ← Voltar para a página principal
        </Link>
      </div>

      <header className="mb-10">
        <h1 className="mb-8 text-3xl font-bold sm:text-4xl">
          Clube Mais de Vantagens
        </h1>

        <p className="text-lg leading-8">
          Acesse os formulários para parceiros do Clube Mais.
        </p>
      </header>

      <nav className="grid grid-cols-1 gap-3">
        <Link
          to="/alteracao-dados"
          className="bg-gray-200 px-6 py-6 text-lg font-medium transition hover:bg-gray-300"
        >
          Alterar dados do parceiro
        </Link>

        <Link
          to="/quero-ser-parceiro"
          className="bg-gray-200 px-6 py-6 text-lg font-medium transition hover:bg-gray-300"
        >
          Quero ser parceiro
        </Link>

        <Link
          to="/indicar-parceiro"
          className="bg-gray-200 px-6 py-6 text-lg font-medium transition hover:bg-gray-300"
        >
          Indicar um parceiro
        </Link>

        <a
          href="https://consulta.clubemaisdevantagens.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-200 px-6 py-6 text-lg font-medium transition hover:bg-gray-300"
        >
          Consultar clientes
        </a>
      </nav>
    </main>
  );
}
