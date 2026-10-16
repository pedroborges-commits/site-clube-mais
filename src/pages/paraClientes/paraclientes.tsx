import { Link } from 'react-router';

function Clientes() {
  return (
    <div className="min-h-screen bg-base-200 p-8 flex flex-col items-center justify-center gap-4 text-[#1e3526]">
      <h1 className="text-2xl font-bold">Sou cliente</h1>
      <p className="text-[#4a6353]">Bem-vindo à página de clientes do Clube Mais!</p>
      <Link to="/" className="btn btn-sm bg-[#e4efe7] border-none text-[#1e3526]">
        ← Voltar para a Home
      </Link>
    </div>
  );
}

export default Clientes;