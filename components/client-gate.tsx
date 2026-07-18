"use client";

import { useState } from "react";
import Image from "next/image";
import { clientGallery, works } from "@/lib/content";

export function ClientGate() {
  const [code, setCode] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (code.trim().toUpperCase() === clientGallery.demoCode) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (unlocked) {
    const sample = works.slice(0, 6);
    return (
      <div>
        <p className="eyebrow">Ukázková galerie · demo</p>
        <h2 className="display mt-3 text-3xl sm:text-4xl">Vaše fotografie</h2>
        <p className="mt-3 max-w-xl text-ink-soft">
          Takhle vypadá klientská galerie po přihlášení. Ve skutečné verzi zde
          najdete své snímky k výběru, stažení a objednání tisků.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {sample.map((w, i) => (
            <div key={w.src} className="photo relative aspect-[4/5] w-full">
              <Image
                src={w.src}
                alt={`Ukázka ${i + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md">
      <label className="block">
        <span className="eyebrow">Přístupový kód</span>
        <input
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
            setError(false);
          }}
          type="text"
          placeholder="Zadejte kód z e-mailu"
          className="mt-2 w-full border-b border-line bg-transparent py-3 text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none"
        />
      </label>
      {error && (
        <p className="mt-3 text-sm text-ink-soft">
          Kód nesouhlasí. Pro ukázku zadejte <strong>{clientGallery.demoCode}</strong>.
        </p>
      )}
      <button
        type="submit"
        className="mt-6 rounded-full bg-ink px-7 py-3.5 text-sm uppercase tracking-[0.14em] text-paper transition-colors hover:bg-noir"
      >
        Zobrazit galerii
      </button>
      <p className="mt-4 text-xs text-ink-faint">
        Toto je ukázka. Ostrá verze používá zabezpečené přihlášení na straně serveru —
        kód níže odemkne demo galerii: <strong>{clientGallery.demoCode}</strong>
      </p>
    </form>
  );
}
