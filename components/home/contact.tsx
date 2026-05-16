"use client";

import { useState } from "react";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { submitContact } from "@/app/contact/actions";
import type { HomepageContent } from "@/lib/homepage-content";
import { Editable } from "@/components/home/editor/editable";

type FormState = { name: string; email: string; phone: string; message: string };

export function HomeContact({ contact }: { contact: HomepageContent["contact"] }) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    const body = form.phone
      ? `Phone: ${form.phone}\n\n${form.message}`
      : form.message;
    const result = await submitContact({
      name: form.name,
      email: form.email,
      message: body,
      region: "Other",
      role: "Other",
      company: "",
    });
    setLoading(false);
    if (result.ok) {
      toast.success("Thank you! We will get back to you shortly.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      toast.error(result.error);
    }
  }

  return (
    <section id="contact" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            <Editable path="contact.eyebrow" value={contact.eyebrow} />
          </span>
          <h2 className="mt-4 text-4xl font-bold text-navy md:text-5xl">
            <Editable path="contact.title" value={contact.title} />
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            <Editable path="contact.description" value={contact.description} />
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-5">
          <aside className="space-y-8 lg:col-span-2">
            <div className="navy-gradient rounded-2xl p-8 text-white">
              <h3 className="mb-6 text-xl font-bold">Contact Information</h3>
              <div className="space-y-5">
                <InfoRow icon={Mail} label="Email">
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm text-white transition-colors hover:text-gold"
                  >
                    <Editable path="contact.email" value={contact.email} />
                  </a>
                </InfoRow>
                <InfoRow icon={Phone} label="Phone">
                  <p className="text-sm text-white">
                    Contact us via email for clinic referrals
                  </p>
                </InfoRow>
                <InfoRow icon={MapPin} label="Manufacturer">
                  <p className="text-sm text-white">
                    <Editable path="contact.manufacturer" value={contact.manufacturer} />
                  </p>
                </InfoRow>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-muted p-6">
              <h4 className="mb-2 font-bold text-navy">Clinic Fitting Required</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                <Editable path="contact.fittingNote" value={contact.fittingNote} />
              </p>
            </div>
          </aside>

          <form
            onSubmit={onSubmit}
            className="space-y-5 rounded-2xl border border-border bg-white p-8 shadow-sm lg:col-span-3"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Full Name" required>
                <Input
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Your name"
                  className="h-11"
                />
              </Field>
              <Field label="Email Address" required>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="you@email.com"
                  className="h-11"
                />
              </Field>
            </div>
            <Field label="Phone Number">
              <Input
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="+60 1X XXX XXXX"
                className="h-11"
              />
            </Field>
            <Field label="Message" required>
              <Textarea
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Tell us about your vision needs or ask a question..."
                rows={5}
              />
            </Field>
            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="w-full bg-navy py-3 text-sm font-semibold uppercase tracking-wider text-white hover:bg-navy/90"
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  <Send size={15} />
                  Send Enquiry
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Mail;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gold/20">
        <Icon size={18} className="text-gold" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wide text-white/50">{label}</p>
        {children}
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      {children}
    </div>
  );
}
