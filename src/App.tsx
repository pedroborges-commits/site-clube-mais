import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/home/home";
import Clientes from "./pages/paraClientes/paraclientes";
import Parceiros from "./pages/paraParceiros/paraparceiros";
import AlteracaoDados from "./pages/paraParceiros/AlteraçãoDados";
import QueroSerParceiro from "./pages/paraParceiros/QueroSerParceiro";
import IndicarParceiro from "./pages/paraParceiros/IndicarParceiro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cliente" element={<Clientes />} />
        <Route path="/parceiro" element={<Parceiros />} />

        <Route path="/alteracao-dados" element={<AlteracaoDados />} />
        <Route path="/quero-ser-parceiro" element={<QueroSerParceiro />} />
        <Route path="/indicar-parceiro" element={<IndicarParceiro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
