import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = { title: "Fittings — BOC TD (Toric)" };

export default function FittingsToricPage() {
  return (
    <InfoPage
      eyebrow="Fitting Guide"
      title="Breath-O Correct TD (Toric Design)"
      lede="Workflow for cases with significant corneal astigmatism using the toric Breath-O Correct (BOC TD) design."
      sections={[
        {
          heading: "Indications",
          body: "BOC TD is intended for eyes presenting with moderate to high corneal toricity that would not be served by a spherical orthokeratology lens.",
        },
        {
          heading: "Topography review",
          body: "Confirm the magnitude and axis of corneal astigmatism with topography or tomography. Note any irregular astigmatism that may contraindicate ortho-K.",
        },
        {
          heading: "Lens selection",
          body: "Choose flat and steep meridian parameters from the BOC TD fitting set or via the SEED fitting tool, aligning the toric axis with the steep corneal meridian.",
        },
        {
          heading: "On-eye assessment",
          body: "Look for symmetric bull's-eye fluorescein pattern, centred treatment zone, and stable rotation across the day.",
        },
        {
          heading: "Follow-up",
          body: "Toric designs may require an additional adjustment cycle. Schedule a 1-night and 1-week follow-up before extending to routine intervals.",
        },
      ]}
    />
  );
}
