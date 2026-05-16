import { HomeHero } from "@/components/home/hero";
import { HomeAbout } from "@/components/home/about";
import { HomeProducts } from "@/components/home/products";
import { HomeBenefits } from "@/components/home/benefits";
import { HomeHeritage } from "@/components/home/heritage";
import { HomeContact } from "@/components/home/contact";
import { EditorProvider } from "@/components/home/editor/editor-context";
import { EditorToolbar } from "@/components/home/editor/editor-toolbar";
import { HOMEPAGE_FALLBACK, type HomepageContent } from "@/lib/homepage-content";
import { homepageQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";

export const revalidate = 60;

export default async function HomePage() {
  const content = await sanityFetch<HomepageContent>({
    query: homepageQuery,
    tags: ["homepage"],
    fallback: HOMEPAGE_FALLBACK,
  });

  // Tolerate a partial document published in Sanity by filling in
  // any missing top-level sections from the fallback.
  const safe: HomepageContent = {
    hero: content?.hero ?? HOMEPAGE_FALLBACK.hero,
    about: content?.about ?? HOMEPAGE_FALLBACK.about,
    products: content?.products ?? HOMEPAGE_FALLBACK.products,
    benefits: content?.benefits ?? HOMEPAGE_FALLBACK.benefits,
    heritage: content?.heritage ?? HOMEPAGE_FALLBACK.heritage,
    contact: content?.contact ?? HOMEPAGE_FALLBACK.contact,
  };

  const sections = (
    <>
      <HomeHero hero={safe.hero} />
      <HomeAbout about={safe.about} />
      <HomeProducts products={safe.products} />
      <HomeBenefits benefits={safe.benefits} />
      <HomeHeritage heritage={safe.heritage} />
      <HomeContact contact={safe.contact} />
    </>
  );

  // The inline editor only exists in local development. Production
  // renders the plain sections with no editor provider or toolbar.
  if (process.env.NODE_ENV !== "development") {
    return sections;
  }

  return (
    <EditorProvider initialContent={safe}>
      {sections}
      <EditorToolbar />
    </EditorProvider>
  );
}
