import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <InfoPage
      eyebrow="Privacy Policy"
      title="How we handle your information"
      lede="This placeholder privacy policy will be replaced with the final SEED Co., Ltd. policy text once provided."
      sections={[
        {
          heading: "What we collect",
          body: "When you submit the contact form, we collect the information you provide (name, email, region, role, and your message) so that we can respond to your enquiry.",
        },
        {
          heading: "How we use it",
          body: "Submitted information is used solely to handle your enquiry and is shared internally only with the team responsible for responding.",
        },
        {
          heading: "Cookies and analytics",
          body: "This site uses only the cookies required to operate. Any future analytics will be disclosed here.",
        },
        {
          heading: "Contact",
          body: "For privacy questions, use the contact form and select 'Other' as the role.",
        },
      ]}
    />
  );
}
