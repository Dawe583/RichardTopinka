const WORDS = ["Portrét", "Akt", "Fine art", "Světlo", "Tělo", "Ticho", "Ateliér"];

export function Marquee() {
  // Two identical runs so the -50% translate loops seamlessly.
  const run = (
    <div className="marquee-track" aria-hidden="true">
      {[0, 1].map((k) => (
        <div key={k} className="flex items-center">
          {WORDS.map((w) => (
            <span key={w} className="flex items-center">
              <span className="display px-8 text-5xl text-ink-soft sm:text-7xl">
                {w}
              </span>
              <span className="text-ink-faint">·</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <section className="marquee border-y border-line py-8 sm:py-12" aria-label="Zaměření">
      {run}
    </section>
  );
}
