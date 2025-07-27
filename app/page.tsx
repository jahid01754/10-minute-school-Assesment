import Header from "@/Components/Header/header";
import HeroSection from "@/Components/HeroSection/heroSection";
import { Data } from "@/types/types";

interface PageProps {
  searchParams: {
    lang?: string;
  };
}

export default async function Home({ searchParams }: PageProps) {
  const language = searchParams.lang || "en";
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
