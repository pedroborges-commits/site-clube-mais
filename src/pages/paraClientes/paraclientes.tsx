import { Link } from 'react-router';

function Clientes() {
  return (
    <div className="min-h-screen bg-base-200 p-8 flex flex-col items-center justify-center gap-4 text-[#1e3526]">
      <h1 className="text-2xl font-bold">Sou cliente</h1>
      <p className="text-[#4a6353]">Bem-vindo à página de clientes do Clube Mais!</p>
      <Link to="/" className="btn btn-sm bg-[#e4efe7] border-none text-[#1e3526]">
        ← Voltar para a Home
      </Link>

      <section> {/* baixar o aplicativo do clube */}

        <h2>Baixar o aplicativo do Clube:</h2>
            <div>
                <Link to="https://play.google.com/store/apps/details?id=br.com.plano.mais&hl=pt_BR" className="btn btn-sm bg-[#e4efe7] border-none text-[#1e3526]">
                    GooglePlay
                </Link>
            </div>
            <div>
                <Link to="https://apps.apple.com/us/app/clube-mais-vantagens/id1670229780" className="btn btn-sm bg-[#e4efe7] border-none text-[#1e3526]">
                    AppStore
                </Link>
            </div>
      </section>
      <section>  {/* consultar parceiros regionais */}

        <h2>Consultar parceiros regionais</h2>
            <div>
                <Link to="https://planomais.com.br/wp-content/uploads/2022/07/GUIA-DE-CONVENIO-2022-Atualizado.pdf" className="btn btn-sm bg-[#e4efe7] border-none text-[#1e3526]">
                    Confira
                </Link>
            </div>
      </section>
      <section>  {/* Falar com canal de atendimento */}

        <h2>Falar com canal de atendimento</h2>
            <div>
                <Link to="#canalAtendimento" className="btn btn-sm bg-[#e4efe7] border-none text-[#1e3526]">
                    Canal oficial de atendimento
                </Link>
            </div>
      </section>
    </div>
  );
}

export default Clientes;