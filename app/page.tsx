import Header from "@/Components/Header/header";
import HeroSection from "@/Components/HeroSection/heroSection";
import { Data } from "@/types/types";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const language = resolvedSearchParams.lang || "en";
  let product: Data | null = null;

  try {
    const res = await fetch(
      `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${language}`,
      {
        headers: {
          "X-TENMS-SOURCE-PLATFORM": "web",
        },
      }
    );

    if (res.ok) {
      const json = await res.json();
      product = json?.data || null;
    }
  } catch (error) {
    console.error("Error fetching product:", error);
  }

  return (
    <>
      <Header initialLanguage={language} />
      <HeroSection data={product} />
    </>
  );
}
