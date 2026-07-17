"use client";

import { useState } from "react";
import { site } from "@/lib/content";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Poptávka focení — ${name || "web"}`);
    const body = encodeURIComponent(
      `Jméno: ${name}\nE-mail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const field =
    "w-full border-b border-line bg-transparent py-3 text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow">Jméno</span>
          <input name="name" type="text" required className={`mt-2 ${field}`} placeholder="Jan Novák" />
        </label>
        <label className="block">
          <span className="eyebrow">E-mail</span>
          <input name="email" type="email" required className={`mt-2 ${field}`} placeholder="jan@email.cz" />
        </label>
      </div>
      <label className="block">
        <span className="eyebrow">Zpráva</span>
        <textarea
          name="message"
          required
          rows={5}
          className={`mt-2 resize-none ${field}`}
          placeholder="Napište mi, o jaké focení máte zájem…"
        />
      </label>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          className="rounded-full bg-ink px-7 py-3.5 text-sm uppercase tracking-[0.14em] text-paper transition-colors hover:bg-noir"
        >
          Odeslat
        </button>
        {sent && (
          <span className="text-sm text-ink-soft">
            Otevřel se váš e-mailový klient — zprávu prosím odešlete odtud.
          </span>
        )}
      </div>
      <p className="text-xs text-ink-faint">
        Formulář v tomto návrhu otevírá e-mailového klienta. V ostré verzi jej
        napojíme na odesílání přímo z webu.
      </p>
    </form>
  );
}
