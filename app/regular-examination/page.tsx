import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = { title: "Regular Examination" };

export default function RegularExaminationPage() {
  return (
    <InfoPage
      eyebrow="Regular Examination"
      title="A schedule of follow-up visits"
      lede="Ortho-K is a managed therapy. Regular examinations confirm that your eyes remain healthy and that vision correction is on target."
      sections={[
        {
          heading: "After the first night",
          body: "Your practitioner reviews lens centration and the early effect on vision. Adjustments to lens parameters may be made.",
        },
        {
          heading: "First week",
          body: "An early follow-up assesses corneal response, comfort, and the stability of unaided vision through the day.",
        },
        {
          heading: "First month",
          body: "By the end of the first month most patients are at full correction. A topography map is compared with baseline to verify treatment effect.",
        },
        {
          heading: "Every 3–6 months thereafter",
          body: "Routine reviews check corneal health, lens condition, and refraction. For children, this is also when myopia progression is monitored.",
        },
      ]}
    />
  );
}
