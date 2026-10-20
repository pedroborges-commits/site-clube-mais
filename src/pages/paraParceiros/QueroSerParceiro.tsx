import { useState, type FormEvent } from "react";
import { Link } from "react-router";

const segmentosDisponiveis = [
  "Saúde",
  "Comércio",
  "Serviços",
  "Educação",
  "Outro",
];

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

export default function QueroSerParceiro() {
  const [segmentos, setSegmentos] = useState<string[]>([]);
  const [mensagem, setMensagem] = useState("");

  function alternarSegmento(segmento: string) {
    setSegmentos((atuais) =>
      atuais.includes(segmento)
        ? atuais.filter((item) => item !== segmento)
        : [...atuais, segmento],
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (segmentos.length === 0) {
      setMensagem("Selecione pelo menos um segmento de atuação.");
      return;
    }

    const form = event.currentTarget;

    const dados = {
      ...Object.fromEntries(new FormData(form).entries()),
      segmentos,
    };

    console.log("Interesse em parceria:", dados);

    setMensagem("Formulário preenchido com sucesso! (Demonstração)");

    form.reset();
    setSegmentos([]);
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
              Quero ser parceiro
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
              Conte um pouco sobre seu estabelecimento.
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

            <fieldset className="min-w-0 border-0 p-0">
              <legend className="mb-3 text-sm font-medium text-gray-800">
                Segmento de atuação *
              </legend>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {segmentosDisponiveis.map((segmento) => (
                  <label
                    key={segmento}
                    className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition ${
                      segmentos.includes(segmento)
                        ? "border-gray-800 bg-gray-100"
                        : "border-gray-300 bg-white hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={segmentos.includes(segmento)}
                      onChange={() => {
                        alternarSegmento(segmento);
                        setMensagem("");
                      }}
                      className="h-4 w-4 shrink-0 accent-black"
                    />

                    <span className="text-sm text-gray-800 sm:text-base">
                      {segmento}
                    </span>
                  </label>
                ))}
              </div>

              {segmentos.length === 0 && (
                <p className="mt-2 text-xs text-gray-500">
                  Selecione pelo menos um segmento.
                </p>
              )}
            </fieldset>

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
              Nome do responsável
              <input
                name="nome_responsavel"
                type="text"
                required
                className={inputClass}
              />
            </label>

            <label className={labelClass}>
              E-mail para contato
              <input
                name="email_contato"
                type="email"
                required
                placeholder="Seu melhor e-mail"
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

            <label className={labelClass}>
              Qual benefício deseja oferecer?
              <textarea
                name="beneficio"
                rows={4}
                required
                className={`${inputClass} resize-none`}
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
