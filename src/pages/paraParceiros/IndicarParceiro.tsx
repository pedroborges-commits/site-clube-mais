import { useState, type FormEvent } from "react";
import { Link } from "react-router";

const estados = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];

const inputClass =
  "w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm font-normal outline-none transition focus:border-gray-500 focus:ring-2 focus:ring-gray-200";

const labelClass = "flex flex-col gap-2 text-sm font-medium text-gray-800";

export default function IndicarParceiro() {
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const dados = Object.fromEntries(new FormData(form).entries());

    const email = String(dados.email_indicador ?? "").trim();
    const whatsapp = String(dados.whatsapp_indicador ?? "").trim();

    if (!email && !whatsapp) {
      setMensagem("Informe seu e-mail ou WhatsApp.");
      return;
    }

    console.log("Indicação de parceiro:", dados);

    setMensagem("Indicação preenchida com sucesso! (Demonstração)");
    form.reset();
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
              Indique um parceiro
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
              Conhece um estabelecimento que pode se tornar parceiro? Indique!
            </p>
          </header>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <label className={labelClass}>
              Seu nome
              <input
                name="nome_indicador"
                type="text"
                required
                className={inputClass}
              />
            </label>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className={labelClass}>
                Seu e-mail
                <input
                  name="email_indicador"
                  type="email"
                  className={inputClass}
                />
              </label>

              <label className={labelClass}>
                Seu WhatsApp
                <input
                  name="whatsapp_indicador"
                  type="tel"
                  placeholder="(22) 99999-9999"
                  className={inputClass}
                />
              </label>
            </div>

            <p className="-mt-2 text-xs text-gray-500">
              Informe pelo menos um contato: e-mail ou WhatsApp.
            </p>

            <label className={labelClass}>
              Nome do estabelecimento indicado
              <input
                name="nome_estabelecimento"
                type="text"
                required
                className={inputClass}
              />
            </label>

            <label className={labelClass}>
              Segmento de atuação
              <input name="segmento" type="text" className={inputClass} />
            </label>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-[2fr_1fr]">
              <label className={labelClass}>
                Cidade
                <input
                  name="cidade"
                  type="text"
                  required
                  className={inputClass}
                />
              </label>

              <label className={labelClass}>
                UF
                <select
                  name="uf"
                  defaultValue=""
                  required
                  className={inputClass}
                >
                  <option value="" disabled>
                    Selecione
                  </option>

                  {estados.map((uf) => (
                    <option key={uf} value={uf}>
                      {uf}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className={labelClass}>
              Nome do contato no estabelecimento
              <input
                name="nome_contato_estabelecimento"
                type="text"
                required
                className={inputClass}
              />
            </label>

            <label className={labelClass}>
              E-mail ou telefone do estabelecimento
              <input
                name="contato_estabelecimento"
                type="text"
                required
                className={inputClass}
              />
            </label>

            <label className={labelClass}>
              Site ou Instagram (opcional)
              <input
                name="site_instagram"
                type="url"
                placeholder="https://..."
                className={inputClass}
              />
            </label>

            <label className={labelClass}>
              Por que indica esse parceiro? (opcional)
              <textarea
                name="motivo"
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
