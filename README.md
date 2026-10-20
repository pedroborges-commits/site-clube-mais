# Clube Mais de Vantagens

Repositório oficial do **Clube Mais de Vantagens**, uma aplicação web para apresentar as vantagens, planos, canais de atendimento e formulários interativos voltados para clientes e parceiros.

## Tecnologias utilizadas

Este projeto foi construído utilizando tecnologias de desenvolvimento web:

* **React** (com TypeScript) para a construção dos componentes e lógica de interface.
* **React Router** para a gestão de rotas e navegação entre páginas.
* **Tailwind CSS** para a estilização responsiva e customização de layouts.
* **Lucide React** para iconografia moderna e leve.

## Estrutura do projeto

O projeto está organizado em páginas modulares e componentes de navegação:

* `home.tsx` — Página inicial principal da aplicação, contendo a apresentação do Clube, secções informativas e links rápidos.
* `HomeHeader.tsx` — Cabeçalho fixo (*sticky*) responsivo, com navegação por âncoras centralizada no desktop e menu dropdown interativo no mobile.
* `paraclientes.tsx` — Página dedicada aos clientes, contendo links para download do aplicativo nas lojas oficiais e acesso direto ao canal de atendimento via WhatsApp.
* `paraparceiros.tsx` — Hub de navegação para os parceiros com acesso rápido a todos os formulários disponíveis.

### Formulários interativos:
* `QueroSerParceiro.tsx` — Formulário de interesse em parceria com seleção de segmentos e validações de dados.
* `AlteracaoDados.tsx` — Formulário para solicitação de alteração de dados cadastrais de estabelecimentos parceiros.
* `IndicarParceiro.tsx` — Formulário para indicação de novos potenciais parceiros com verificação de contacto.

## Executar o projeto localmente

Siga os passos abaixo para clonar e executar o projeto na sua máquina:

1. **Pré-requisitos:** Certifique-se de ter o **Node.js** e um gestor de pacotes (`npm`, `pnpm` ou `yarn`) instalados.
2. **Instalar dependências:**
   ```bash
   npm install
   ```
3. **Executar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
4. **Acessar a aplicação:** Abra o seu navegador e aceda ao endereço fornecido pelo terminal (geralmente `http://localhost:5173`).

## Funcionalidades de Destaque

* **Design Responsivo:** Adaptado perfeitamente para telemóveis, tablets e computadores de secretária.
* **Validação de Formulários:** Campos essenciais validados diretamente no cliente com feedback visual dinâmico.