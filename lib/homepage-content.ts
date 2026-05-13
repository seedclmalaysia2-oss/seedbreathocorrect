// Static fallback for the homepage. When the standalone Sanity Studio
// publishes a matching `homepage` document, sanityFetch will hydrate
// these values from CMS. Keep field names aligned with sanity/lib/queries.ts.

export type HomepageStat = { value: string; label: string };
export type HomepageStep = { icon: "moon" | "eye" | "sun"; title: string; description: string };
export type HomepageProduct = {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  badge: string;
  variant: "navy" | "gold";
};
export type HomepageBenefit = {
  icon: "shield" | "wind" | "smile" | "activity" | "users" | "award";
  title: string;
  description: string;
};
export type HomepageMilestone = { year: string; label: string };
export type HomepageHeritageCard = { value: string; label: string; sub: string };

export type HomepageContent = {
  hero: {
    badge: string;
    titleTop: string;
    titleSub: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    stats: HomepageStat[];
  };
  about: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
    steps: HomepageStep[];
    bannerQuote: string;
    bannerHighlight: string;
    bannerSub: string;
  };
  products: {
    eyebrow: string;
    title: string;
    description: string;
    items: HomepageProduct[];
  };
  benefits: {
    eyebrow: string;
    title: string;
    description: string;
    items: HomepageBenefit[];
  };
  heritage: {
    eyebrow: string;
    titleTop: string;
    titleHighlight: string;
    body1: string;
    body2: string;
    milestones: HomepageMilestone[];
    cards: HomepageHeritageCard[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    email: string;
    manufacturer: string;
    fittingNote: string;
  };
};

export const HOMEPAGE_FALLBACK: HomepageContent = {
  hero: {
    badge: "100% Made in Japan",
    titleTop: "SEED",
    titleSub: "BREATH O CORRECT",
    description:
      "Japan's premium orthokeratology contact lens — worn overnight to gently reshape your cornea, giving you clear, glasses-free vision throughout the day.",
    primaryCta: { label: "Explore Products", href: "#products" },
    secondaryCta: { label: "Learn More", href: "#about" },
    stats: [
      { value: "50+", label: "Years of Innovation" },
      { value: "100%", label: "Japan Quality" },
      { value: "2", label: "Lens Variants" },
    ],
  },
  about: {
    eyebrow: "What is Orthokeratology?",
    title: "Vision Correction",
    titleHighlight: "While You Sleep",
    description:
      "Orthokeratology (Ortho-K) is a non-surgical, reversible vision correction method using specially designed gas-permeable contact lenses that temporarily reshape the corneal surface.",
    steps: [
      {
        icon: "moon",
        title: "Wear at Night",
        description:
          "Simply put on your Breathocorrect lenses before bed, just like regular contact lenses.",
      },
      {
        icon: "eye",
        title: "Reshape Overnight",
        description:
          "The lenses gently and safely reshape your cornea while you sleep for 6–8 hours.",
      },
      {
        icon: "sun",
        title: "See Clearly All Day",
        description:
          "Wake up and remove the lenses. Enjoy clear, natural vision all day — no glasses or contacts needed.",
      },
    ],
    bannerQuote: "No more glasses. No daytime contacts. Just",
    bannerHighlight: "clear, natural vision",
    bannerSub: "Suitable for myopia (nearsightedness) correction",
  },
  products: {
    eyebrow: "Our Lens Range",
    title: "SEED Products",
    description:
      "Two precision-engineered orthokeratology lenses — each designed for a specific vision correction need.",
    items: [
      {
        name: "Breathocorrect",
        tagline: "Standard Orthokeratology Lens",
        description:
          "The original SEED orthokeratology lens for myopia correction. Engineered in Japan with ultra-high oxygen permeability for safe, comfortable overnight wear.",
        features: [
          "High oxygen permeability (Dk/t)",
          "Smooth reverse geometry design",
          "Suitable for mild to moderate myopia",
          "Easy to handle & maintain",
          "FDA-cleared technology",
        ],
        badge: "Most Popular",
        variant: "navy",
      },
      {
        name: "Breathocorrect Toric",
        tagline: "For Astigmatism Correction",
        description:
          "An advanced orthokeratology solution for patients with both myopia and astigmatism. Precision-crafted toric design for superior corneal coverage and stability.",
        features: [
          "Corrects myopia + astigmatism",
          "Toric back-surface geometry",
          "Enhanced centration & stability",
          "Superior oxygen permeability",
          "Custom parameter fitting",
        ],
        badge: "Advanced",
        variant: "gold",
      },
    ],
  },
  benefits: {
    eyebrow: "Why Ortho-K?",
    title: "Key Benefits",
    description:
      "Discover why thousands choose SEED Breathocorrect for their vision correction needs.",
    items: [
      {
        icon: "shield",
        title: "Non-Surgical",
        description:
          "A safe, reversible alternative to LASIK. Simply stop wearing the lenses to return to your natural vision.",
      },
      {
        icon: "wind",
        title: "Ultra-Breathable",
        description:
          "High Dk/t oxygen permeability materials keep your eyes healthy and comfortable throughout the night.",
      },
      {
        icon: "smile",
        title: "Glasses-Free Days",
        description:
          "Wake up and go — no glasses, no daytime contacts. Perfect for sports, swimming, and active lifestyles.",
      },
      {
        icon: "activity",
        title: "Myopia Control",
        description:
          "Clinically shown to slow myopia progression in children and teenagers, protecting long-term eye health.",
      },
      {
        icon: "users",
        title: "All Ages Welcome",
        description:
          "Suitable for children (age 8+), teenagers, and adults seeking a comfortable vision correction option.",
      },
      {
        icon: "award",
        title: "Japan Craftsmanship",
        description:
          "Every lens is manufactured in Japan under strict quality controls to ensure precision and consistency.",
      },
    ],
  },
  heritage: {
    eyebrow: "Our Heritage",
    titleTop: "Why Choose",
    titleHighlight: "SEED?",
    body1:
      "SEED Co., Ltd. is one of Japan's most trusted contact lens manufacturers with decades of expertise in precision optical engineering. Every Breathocorrect lens is designed, tested, and manufactured entirely in Japan.",
    body2:
      "Our orthokeratology lenses combine proprietary Japanese lens-design technology with medical-grade materials to deliver consistent, reliable results — night after night.",
    milestones: [
      { year: "1960s", label: "SEED Co. founded in Japan" },
      { year: "1990s", label: "Orthokeratology lens R&D begins" },
      { year: "2000s", label: "Breathocorrect launched globally" },
      { year: "Today", label: "Trusted across Asia & beyond" },
    ],
    cards: [
      { value: "50+", label: "Years in Optics", sub: "Est. in Japan" },
      { value: "FDA", label: "Cleared Technology", sub: "Globally recognized" },
      { value: "2", label: "Lens Variants", sub: "Breathocorrect & Toric" },
      { value: "JIS", label: "Japan Standards", sub: "Strict QC process" },
    ],
  },
  contact: {
    eyebrow: "Get In Touch",
    title: "Contact Us",
    description:
      "Interested in SEED Breathocorrect? Reach out to us and our team will help you find the right lens.",
    email: "info@seed-breathocorrect.com",
    manufacturer: "SEED Co., Ltd. — Tokyo, Japan",
    fittingNote:
      "SEED Breathocorrect lenses must be prescribed and fitted by a qualified eye care professional. Enquire below to find a certified practitioner near you.",
  },
};
