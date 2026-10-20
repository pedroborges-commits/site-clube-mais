import { Link } from "react-router";

export default function Parceiros() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:py-12 text-black">
      <main className="mx-auto w-full max-w-3xl rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8 font-sans">
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-800 transition hover:bg-gray-300 mb-2"
          >
            ← Voltar para a página principal
          </Link>
        </div>

        <header className="mb-8 mt-4">
          <h1 className="mb-3 text-2xl font-bold sm:text-3xl tracking-tight text-gray-900">
            Clube Mais de Vantagens
          </h1>
          <p className="text-sm leading-6 text-gray-600 sm:text-base">
            Acesse os formulários para parceiros do Clube Mais.
          </p>
        </header>

        <nav className="grid grid-cols-1 gap-3">
          <Link
            to="/alteracao-dados"
            className="rounded-lg bg-gray-100 px-6 py-4 text-base font-medium text-gray-800 transition hover:bg-gray-200 border border-gray-200"
          >
            Alterar dados do parceiro
          </Link>

          <Link
            to="/quero-ser-parceiro"
            className="rounded-lg bg-gray-100 px-6 py-4 text-base font-medium text-gray-800 transition hover:bg-gray-200 border border-gray-200"
          >
            Quero ser parceiro
          </Link>

          <Link
            to="/indicar-parceiro"
            className="rounded-lg bg-gray-100 px-6 py-4 text-base font-medium text-gray-800 transition hover:bg-gray-200 border border-gray-200"
          >
            Indicar um parceiro
          </Link>

          <a
            href="https://consulta.clubemaisdevantagens.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-gray-100 px-6 py-4 text-base font-medium text-gray-800 transition hover:bg-gray-200 border border-gray-200"
          >
            Consultar clientes
          </a>
        </nav>
      </main>
    </div>
  );
}