import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = { title: "Instruction for Use" };

export default function InstructionForUsePage() {
  return (
    <InfoPage
      eyebrow="Instruction for Use"
      title="Daily handling, cleaning, and care"
      lede="Follow your practitioner's instructions and the steps below for safe overnight wear."
      sections={[
        {
          heading: "Before insertion",
          body: "Wash and dry your hands thoroughly. Inspect each lens for cleanliness and damage. Use only the cleaning and storage solutions recommended by your practitioner.",
        },
        {
          heading: "Insertion",
          body: "Place a drop of conditioning solution on the concave surface of the lens. Holding your eyelids open, gently place the lens on the centre of the cornea. Blink slowly to seat the lens.",
        },
        {
          heading: "Overnight wear",
          body: "Lenses are worn during sleep. Do not skip cleaning or storage steps. If you experience persistent discomfort, redness, or blurred vision after lens removal, contact your practitioner.",
        },
        {
          heading: "Removal",
          body: "On waking, instil a few drops of saline to loosen the lens before removing with the recommended technique. Clean and store each lens in fresh disinfecting solution.",
        },
        {
          heading: "Cleaning and storage",
          body: "Rub each lens with cleaner, rinse with saline, and store in fresh solution every day. Replace the case as recommended.",
        },
        {
          heading: "When to contact your practitioner",
          body: "Stop wear and seek advice if you experience pain, persistent redness, discharge, sensitivity to light, or significant changes in vision.",
        },
      ]}
    />
  );
}
