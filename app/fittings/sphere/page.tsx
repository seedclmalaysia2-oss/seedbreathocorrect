import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = { title: "Fittings — BOC Sphere" };

export default function FittingsSpherePage() {
  return (
    <InfoPage
      eyebrow="Fitting Guide"
      title="Breath-O Correct — Sphere"
      lede="A practitioner-facing overview of the trial fitting workflow for spherical Breath-O Correct lenses."
      sections={[
        {
          heading: "Indications",
          body: "Spherical Breath-O Correct lenses are indicated for low to moderate myopia with limited corneal astigmatism. Refer to product documentation for the full parameter range.",
        },
        {
          heading: "Baseline measurements",
          body: "Capture refraction, corneal topography, horizontal visible iris diameter (HVID), pupil size, and slit-lamp findings before lens selection.",
        },
        {
          heading: "Initial lens selection",
          body: "Use the SEED nomogram or fitting software to suggest a starting lens based on flat K and target refraction.",
        },
        {
          heading: "Assessment on eye",
          body: "Evaluate centration, movement, and fluorescein pattern. A successful fit shows central touch, mid-peripheral tear reservoir, and adequate peripheral edge clearance.",
        },
        {
          heading: "Refinement",
          body: "Adjust base curve, lens diameter, or return zone depth as needed. Reassess at the post-insertion visit and after the first overnight wear.",
        },
      ]}
    />
  );
}
