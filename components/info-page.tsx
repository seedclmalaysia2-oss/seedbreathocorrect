import { Section, SectionHeading } from "@/components/section";

export function InfoPage({
  eyebrow,
  title,
  lede,
  sections,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  sections: { heading: string; body: string | string[] }[];
}) {
  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} lede={lede} />
      <div className="mt-12 max-w-3xl space-y-10">
        {sections.map((s) => (
          <div key={s.heading}>
            <h3 className="text-xl font-semibold text-slate-900">{s.heading}</h3>
            <div className="mt-3 space-y-3 text-base leading-7 text-slate-600">
              {Array.isArray(s.body) ? (
                s.body.map((p, i) => <p key={i}>{p}</p>)
              ) : (
                <p>{s.body}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
