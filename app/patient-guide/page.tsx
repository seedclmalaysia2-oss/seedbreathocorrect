import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = { title: "Patient Guide" };

export default function PatientGuidePage() {
  return (
    <InfoPage
      eyebrow="Patient Guide"
      title="Getting started with Breath-O Correct"
      lede="What to expect from your first consultation through to becoming a confident overnight wearer."
      sections={[
        {
          heading: "1. Initial consultation",
          body: "Your eyecare practitioner will perform a comprehensive examination, including corneal topography, to determine whether you are a suitable candidate for orthokeratology.",
        },
        {
          heading: "2. Lens fitting",
          body: "Trial lenses are selected from the Breath-O Correct fitting set. Your practitioner will assess the fit on the eye and order custom parameters as needed.",
        },
        {
          heading: "3. Insertion and removal training",
          body: "You will be trained in safe insertion, removal, and cleaning of the lenses before taking them home.",
        },
        {
          heading: "4. Follow-up visits",
          body: "Regular check-ups in the first weeks and then at routine intervals confirm that the lenses are reshaping the cornea as expected and that your eye health is being maintained.",
        },
        {
          heading: "5. Daily routine",
          body: "Wear the lenses overnight, remove and clean them in the morning, and store them properly during the day. Consistent wear is essential for maintaining clear daytime vision.",
        },
      ]}
    />
  );
}
