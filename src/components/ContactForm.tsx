"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";
import { IconWhatsApp } from "./icons";

type Status = "idle" | "loading" | "success" | "error";

const initialForm = {
  nome: "",
  telefone: "",
  email: "",
  tipoEvento: "",
  dataEvento: "",
  mensagem: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");

  function update(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  }

  const waMessage =
    "Olá! Conheci a King Eventos pelo site e gostaria de solicitar um orçamento.\n\n" +
    `Nome: ${form.nome}\n` +
    `Telefone: ${form.telefone}\n` +
    `E-mail: ${form.email}\n` +
    `Tipo de evento: ${form.tipoEvento}\n` +
    `Data do evento: ${form.dataEvento}\n` +
    `Mensagem: ${form.mensagem}`;

  return (
    <form onSubmit={onSubmit} className="border border-ink-line bg-ink-soft p-7 lg:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nome" name="nome" value={form.nome} onChange={update} required />
        <Field
          label="Telefone"
          name="telefone"
          type="tel"
          value={form.telefone}
          onChange={update}
          required
        />
        <Field
          label="E-mail"
          name="email"
          type="email"
          value={form.email}
          onChange={update}
          required
        />

        <div className="flex flex-col gap-2">
          <label htmlFor="tipoEvento" className="text-xs uppercase tracking-[0.18em] text-cream/50">
            Tipo de evento
          </label>
          <select
            id="tipoEvento"
            name="tipoEvento"
            value={form.tipoEvento}
            onChange={update}
            className="input"
          >
            <option value="">Selecione</option>
            {site.eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <Field
          label="Data do evento"
          name="dataEvento"
          type="date"
          value={form.dataEvento}
          onChange={update}
        />
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="mensagem" className="text-xs uppercase tracking-[0.18em] text-cream/50">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          value={form.mensagem}
          onChange={update}
          rows={4}
          className="input resize-none"
          placeholder="Conte um pouco sobre o evento que você está planejando."
        />
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn btn-gold disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Enviando..." : "Enviar solicitação"}
        </button>
        <a
          href={whatsappLink(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          <IconWhatsApp className="h-4 w-4" />
          Enviar pelo WhatsApp
        </a>
      </div>

      {status === "success" && (
        <p className="mt-4 text-sm text-gold">
          Solicitação enviada. Em breve a equipe da King Eventos entrará em contato.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm text-red-400">
          Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.
        </p>
      )}

      <p className="mt-4 text-xs text-cream/40">
        Formulário pronto para integração com um serviço de e-mail/CRM em{" "}
        <code className="text-cream/60">src/app/api/contact/route.ts</code>.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-xs uppercase tracking-[0.18em] text-cream/50">
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="input"
      />
    </div>
  );
}
