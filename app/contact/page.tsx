import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { OFFICES } from "@/lib/seed-content";
import { ContactForm } from "./contact-form";
import { Globe, Mail, ExternalLink } from "lucide-react";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="Contact Us"
          title="Talk to the Breath-O Correct team"
          lede="Send us a message and the right regional team will be in touch."
        />
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Card className="border-slate-200">
            <CardContent className="p-6 sm:p-8">
              <ContactForm />
            </CardContent>
          </Card>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">Regional offices</h3>
            <Separator className="my-4" />
            <ul className="space-y-6">
              {OFFICES.map((o) => (
                <li key={o.region}>
                  <p className="text-sm font-semibold text-slate-900">{o.region}</p>
                  {o.name && <p className="text-sm text-slate-600">{o.name}</p>}
                  <div className="mt-2 flex flex-col gap-1 text-sm text-slate-600">
                    {"email" in o && o.email && (
                      <a
                        href={`mailto:${o.email}`}
                        className="inline-flex items-center gap-1.5 hover:text-slate-900"
                      >
                        <Mail className="h-3.5 w-3.5" /> {o.email}
                      </a>
                    )}
                    {"website" in o && o.website && (
                      <a
                        href={o.website}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 hover:text-slate-900"
                      >
                        <Globe className="h-3.5 w-3.5" /> {new URL(o.website).host}
                      </a>
                    )}
                    {"instagram" in o && o.instagram && (
                      <a
                        href={o.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 hover:text-slate-900"
                      >
                        <ExternalLink className="h-3.5 w-3.5" /> Instagram
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
