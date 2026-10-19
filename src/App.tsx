import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/home/home';
import Clientes from './pages/paraClientes/paraclientes';
import Parceiros from './pages/paraParceiros/paraparceiros';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* rota Home */}
        <Route path="/" element={<Home />} />

        {/* rota Clientes */}
        <Route path="/cliente" element={<Clientes />} />

        {/* rota Parceiros */}
        <Route path="/parceiro" element={<Parceiros />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;