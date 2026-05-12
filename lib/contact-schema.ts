import { z } from "zod";

export const ROLES = ["Patient", "Eyecare Practitioner", "Distributor", "Other"] as const;
export const REGIONS = [
  "Japan",
  "India",
  "Malaysia",
  "Hong Kong",
  "Vietnam",
  "Singapore",
  "Other",
] as const;

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name.").max(100),
  email: z.email("Please enter a valid email address."),
  region: z.enum(REGIONS),
  role: z.enum(ROLES),
  message: z
    .string()
    .min(10, "Please give us a little more detail (at least 10 characters).")
    .max(2000, "Please keep your message under 2000 characters."),
  // Honeypot — must be empty.
  company: z.string().max(0),
});

export type ContactInput = z.infer<typeof contactSchema>;
