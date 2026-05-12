export const FEATURES = [
  {
    title: "High Oxygen Permeability",
    summary:
      "A high Dk material allows oxygen to reach the cornea while the lenses are worn overnight, supporting eye health.",
    icon: "oxygen",
  },
  {
    title: "High Durability",
    summary:
      "Rigid gas permeable construction is built to last, retaining its shape and optical quality through daily use.",
    icon: "durability",
  },
  {
    title: "Lens Design for Asian Eyes",
    summary:
      "Geometry refined for the corneal topography typical of Asian populations for a comfortable, stable fit.",
    icon: "lens",
  },
] as const;

export const FAQS = [
  {
    question: "What is orthokeratology?",
    answer:
      "Orthokeratology (Ortho-K) is a non-surgical technique that uses specially designed rigid gas permeable contact lenses worn overnight to temporarily reshape the cornea, providing clear daytime vision without glasses or contact lenses.",
  },
  {
    question: "Is Breath-O Correct safe for children?",
    answer:
      "Modern medical research has shown orthokeratology to be one of the safest and most effective methods of slowing the progression of myopia in children and young people, when fitted and monitored by a qualified eyecare practitioner.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Most patients experience noticeable vision improvement after the first night of wear, with full correction typically achieved within one to two weeks of consistent overnight use.",
  },
  {
    question: "How long does a pair of lenses last?",
    answer:
      "With proper care and cleaning, Breath-O Correct lenses are designed for long-term use. Your practitioner will advise on a replacement schedule appropriate for your eyes.",
  },
  {
    question: "Do I need a prescription?",
    answer:
      "Yes. Breath-O Correct is a medical device that must be fitted by a qualified eyecare practitioner after a comprehensive examination.",
  },
] as const;

export const TESTIMONIALS = [
  {
    author: "Parent of a 9-year-old",
    role: "Patient family",
    quote:
      "We were worried about how quickly our daughter's prescription was changing. After starting Breath-O Correct, her daytime vision is clear and her myopia progression has slowed considerably.",
  },
  {
    author: "University student",
    role: "Patient",
    quote:
      "I play sports almost every day and glasses were a nuisance. With Breath-O Correct I wake up, take the lenses out, and see clearly all day.",
  },
  {
    author: "Optometrist",
    role: "Practitioner",
    quote:
      "The fitting set is intuitive and the lens parameters cover the vast majority of my pediatric myopia patients. Outcomes have been consistently good.",
  },
] as const;

export const OFFICES = [
  {
    region: "Japan",
    name: "SEED Co., Ltd. (Headquarters)",
    website: "https://www.seed.co.jp/",
  },
  {
    region: "India",
    name: "Vision Source",
    email: "info@visionsource.in",
  },
  {
    region: "Malaysia",
    name: "SEED Malaysia",
    instagram: "https://instagram.com/seed.malaysia",
  },
  {
    region: "Hong Kong",
    name: "Bravo Vision Optical Limited",
  },
  {
    region: "Vietnam",
    name: "SEED Vietnam",
  },
  {
    region: "Singapore",
    name: "SEED Singapore",
  },
] as const;

export const VIDEO_LESSONS = [
  { title: "Lens Insertion", description: "Step-by-step demonstration for new wearers." },
  { title: "Lens Removal", description: "Safe removal technique in the morning." },
  { title: "Daily Care & Cleaning", description: "Recommended cleaning routine and solutions." },
  { title: "Practitioner Fitting Overview", description: "Introductory walkthrough for new fitters." },
] as const;
