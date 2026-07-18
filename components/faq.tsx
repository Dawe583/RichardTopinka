import { Reveal } from "@/components/reveal";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => (
        <Reveal key={item.q} as="div" delay={i * 40}>
          <details className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg text-ink">
              <span className="display">{item.q}</span>
              <span className="shrink-0 text-2xl text-ink-faint transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">{item.a}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
