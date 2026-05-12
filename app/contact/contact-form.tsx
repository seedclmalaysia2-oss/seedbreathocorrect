"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactSchema, REGIONS, ROLES, type ContactInput } from "@/lib/contact-schema";
import { submitContact } from "./actions";

export function ContactForm() {
  const [pending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { region: "Japan", role: "Patient", company: "" },
  });

  const region = watch("region");
  const role = watch("role");

  function onSubmit(values: ContactInput) {
    startTransition(async () => {
      const res = await submitContact(values);
      if (res.ok) {
        toast.success("Thanks — we'll be in touch.");
        reset();
      } else {
        toast.error(res.error);
      }
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="hidden">
        <Label htmlFor="company">Company</Label>
        <Input id="company" autoComplete="off" tabIndex={-1} {...register("company")} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" error={errors.name?.message} htmlFor="name">
          <Input id="name" autoComplete="name" {...register("name")} />
        </Field>
        <Field label="Email" error={errors.email?.message} htmlFor="email">
          <Input id="email" type="email" autoComplete="email" {...register("email")} />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Region" error={errors.region?.message} htmlFor="region">
          <Select value={region} onValueChange={(v) => setValue("region", v as typeof REGIONS[number])}>
            <SelectTrigger id="region">
              <SelectValue placeholder="Select your region" />
            </SelectTrigger>
            <SelectContent>
              {REGIONS.map((r) => (
                <SelectItem key={r} value={r}>
                  {r}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field label="I am a" error={errors.role?.message} htmlFor="role">
          <Select value={role} onValueChange={(v) => setValue("role", v as typeof ROLES[number])}>
            <SelectTrigger id="role">
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              {ROLES.map((r) => (
                <SelectItem key={r} value={r}>
                  {r}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>

      <Field label="Message" error={errors.message?.message} htmlFor="message">
        <Textarea id="message" rows={6} {...register("message")} />
      </Field>

      <Button type="submit" disabled={pending} size="lg">
        {pending ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  htmlFor,
  children,
}: {
  label: string;
  error?: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
