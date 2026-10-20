import { useState, type FormEvent } from "react";
import { Link } from "react-router";

const opcoes = [
  ["situacao_cadastral_cnpj", "Situação cadastral (CNPJ)"],
  ["endereco", "Endereço"],
  ["telefone_contato", "Telefone de contato"],
  ["email", "E-mail"],
  ["desconto", "Desconto"],
  ["forma_pagamento", "Forma de pagamento"],
  ["descricao_app", "Descrição do app"],
  ["horario_funcionamento", "Horário de funcionamento"],
] as const;

const inputClass =
  "w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm font-normal outline-none transition focus:border-gray-500 focus:ring-2 focus:ring-gray-200";

const labelClass = "flex flex-col gap-2 text-sm font-medium text-gray-800";

export default function AlteracaoDados() {
  const [campos, setCampos] = useState<string[]>([]);
  const [mensagem, setMensagem] = useState("");

  function alternarCampo(valor: string) {
    setCampos((atuais) =>
      atuais.includes(valor)
        ? atuais.filter((campo) => campo !== valor)
        : [...atuais, valor],
    );
    setMensagem("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (campos.length === 0) {
      setMensagem("Selecione pelo menos um dado que deseja alterar.");
      return;
    }

    const form = event.currentTarget;
    const dados = Object.fromEntries(new FormData(form).entries());

    const dadosCompletos = {
      ...dados,
      campos,
    };

    console.log("Solicitação de alteração:", dadosCompletos);

    setMensagem("Formulário preenchido com sucesso! (Demonstração)");

    form.reset();
    setCampos([]);
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:py-12">
      <div className="mx-auto w-full max-w-3xl">
        <Link
          to="/parceiro"
          className="mb-5 inline-flex items-center rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-800 transition hover:bg-gray-300"
        >
          ← Voltar para os formulários
        </Link>

        <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
          <header className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Alteração de dados
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
              Preencha os dados do estabelecimento e selecione as informações
              que deseja alterar.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <label className={labelClass}>
              Nome do estabelecimento
              <input
                name="nome_estabelecimento"
                type="text"
                maxLength={150}
                required
                className={inputClass}
              />
            </label>

            <label className={labelClass}>
              CNPJ
              <input
                maxLength={18}
                name="cnpj"
                type="text"
                inputMode="numeric"
                placeholder="00.000.000/0000-00"
                required
                className={inputClass}
              />
            </label>

            <label className={labelClass}>
              Nome do responsável
              <input
                name="nome_responsavel"
                type="text"
                maxLength={150}
                required
                className={inputClass}
              />
            </label>

            <label className={labelClass}>
              E-mail para retorno
              <input
                name="email_retorno"
                type="email"
                required
                className={inputClass}
              />
            </label>

            <label className={labelClass}>
              WhatsApp com DDD
              <input
                name="whatsapp"
                type="tel"
                placeholder="(22) 99999-9999"
                required
                className={inputClass}
              />
            </label>

            <fieldset className="min-w-0 border-0 p-0">
              <legend className="mb-3 text-sm font-medium text-gray-800">
                Quais dados deseja alterar? *
              </legend>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {opcoes.map(([valor, texto]) => {
                  const selecionado = campos.includes(valor);

                  return (
                    <label
                      key={valor}
                      className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-colors ${
                        selecionado
                          ? "border-gray-800 bg-gray-100"
                          : "border-gray-300 bg-white hover:bg-gray-50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selecionado}
                        onChange={() => alternarCampo(valor)}
                        className="h-4 w-4 shrink-0 accent-black"
                      />

                      <span className="text-sm leading-5 text-gray-800">
                        {texto}
                      </span>
                    </label>
                  );
                })}
              </div>

              {campos.length === 0 && (
                <p className="mt-2 text-xs text-gray-500">
                  Selecione pelo menos uma opção.
                </p>
              )}
            </fieldset>

            <label className={labelClass}>
              Observações (opcional)
              <textarea
                name="observacoes"
                rows={4}
                className={`${inputClass} resize-none`}
              />
            </label>

            <button
              type="submit"
              className="mt-2 w-full rounded-md bg-gray-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
            >
              Enviar formulário
            </button>

            {mensagem && (
              <p
                role="status"
                className="rounded-md bg-gray-100 p-3 text-sm text-gray-700"
              >
                {mensagem}
              </p>
            )}
          </form>
        </section>
      </div>
    </div>
  );
}
