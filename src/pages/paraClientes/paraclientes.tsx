import { Link } from 'react-router';

const APP_STORES = [
  {
    id: 'googlePlay',
    name: 'Google Play',
    url: 'https://play.google.com/store/apps/details?id=br.com.plano.mais&hl=pt_BR',
    iconSrc: '/assets/logos/Google_Play_logo.png',
  },
  {
    id: 'appStore',
    name: 'App Store',
    url: 'https://apps.apple.com/us/app/clube-mais-vantagens/id1670229780',
    iconSrc: '/assets/logos/App_store_logo.png',
  },
];

function Clientes() {
  return (
    <div className="min-h-screen bg-base-200 py-10 px-4 flex justify-center items-start text-black">
      <div className="w-full max-w-2xl bg-base-100 shadow-sm p-6 sm:p-8 space-y-8">
        
        {/* Topo / Voltar */}
        <div className="space-y-4">
          <Link
            to="/"
            className="btn btn-sm bg-gray-200 text-black hover:bg-gray-300 border-none"
          >
            ← Voltar para a página inicial
          </Link>
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-bold">Bem-vindo à página de clientes do Clube Mais!</h1>
            <p className="text-gray-700">
              Aqui você encontra todas as informações e recursos destinados aos nossos clientes.
            </p>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Baixar o aplicativo do clube */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">
            Baixar o aplicativo do Clube
          </h2>
          <div className="flex flex-wrap items-center gap-4 pt-1">
            {APP_STORES.map((store) => (
              <a
                key={store.id}
                href={store.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 px-4 py-2.5 rounded-xl transition-colors"
              >
                {store.iconSrc && (
                  <img
                    src={store.iconSrc}
                    alt={store.name}
                    className="w-36 h-10 object-contain shrink-0"
                  />
                )}
              </a>
            ))}
          </div>
        </section>

        {/* Falar com canal de atendimento */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">
            Falar com canal de atendimento
          </h2>
          <div>
            <a
              href="#canalAtendimento"
              className="btn bg-gray-200 text-black hover:bg-gray-300 border-none"
            >
              Canal oficial de atendimento
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Clientes;