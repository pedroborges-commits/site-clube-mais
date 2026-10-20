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
    url: 'https://apps.apple.com/us/app/clube-mais-de-vantagens/id1671223473',
    iconSrc: '/assets/logos/App_store_logo.png',
  },
];

function Clientes() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center items-start text-black">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-sm p-6 sm:p-8 space-y-8">
        
        {/* Topo / Voltar */}
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-800 transition hover:bg-gray-300"
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
                className="flex items-center justify-center px-1 py-2.5 rounded-xl transition-colors"
              >
                {store.iconSrc && (
                  <img
                    src={store.iconSrc}
                    alt={store.name}
                    className="w-36 h-12 object-contain shrink-0"
                  />
                )}
              </a>
            ))}
          </div>
        </section>

        {/* Falar com canal de atendimento */}
        <section className="space-y-9">
          <h2 className="text-lg font-semibold">
            Falar com canal de atendimento
          </h2>
          <div>
            <a href="https://api.whatsapp.com/send?phone=5522997057655&text=Ol%C3%A1%21+Vim+do+site+e+tenho+d%C3%BAvidas"
            target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg cursor-pointer h-auto py-4 px-5 bg-gray-200 hover:bg-gray-300 border-none font-semibold justify-between transition-all duration-200 shadow-none">
              <span className="text-base">Canal oficial de atendimento</span>
            </a>

          </div>
        </section>

      </div>
    </div>
  );
}

export default Clientes;