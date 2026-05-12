import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = { title: "Clinical Outcome" };

export default function ClinicalOutcomePage() {
  return (
    <InfoPage
      eyebrow="Clinical Outcome"
      title="Evidence behind Breath-O Correct"
      lede="An overview of published research and field outcomes for SEED's orthokeratology platform."
      sections={[
        {
          heading: "Myopia control efficacy",
          body: "Multiple peer-reviewed studies have shown that overnight orthokeratology can meaningfully slow axial elongation in children compared with standard single-vision spectacles or contact lenses.",
        },
        {
          heading: "Safety profile",
          body: "When fitted and monitored by a qualified practitioner, orthokeratology has a well-documented safety profile. Adverse events are rare and most often associated with non-compliance with cleaning and replacement schedules.",
        },
        {
          heading: "Daytime vision quality",
          body: "Studies consistently report high patient satisfaction with unaided daytime visual acuity following successful Breath-O Correct fitting.",
        },
        {
          heading: "Cited resources",
          body: "Detailed clinical references are available from your SEED representative. This page will be updated as new studies are published.",
        },
      ]}
    />
  );
}
