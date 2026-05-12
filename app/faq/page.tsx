import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionHeading } from "@/components/section";
import { FAQS } from "@/lib/seed-content";

export const metadata: Metadata = { title: "FAQ" };

export default function FaqPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently asked questions"
        lede="Answers to the most common questions about orthokeratology and Breath-O Correct."
      />
      <div className="mt-10 max-w-3xl">
        <Accordion className="w-full">
          {FAQS.map((f, i) => (
            <AccordionItem key={f.question} value={`item-${i}`}>
              <AccordionTrigger>{f.question}</AccordionTrigger>
              <AccordionContent className="text-slate-600">{f.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
