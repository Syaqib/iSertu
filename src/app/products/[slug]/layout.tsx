import type { Metadata } from "next";
import { products } from "@/lib/products";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found - VLskin & VLsuper",
    };
  }

  // Get product name from slug - for VLsuper products, use "VLsuper", for VLskin use "VLskin"
  const brandName = product.slug.startsWith("vlsuper") ? "VLsuper" : "VLskin";
  
  // Get the subtitle from the product name or use a default
  let subtitle = "";
  if (product.slug === "vlsuper-natural-sanitizer-200ml") {
    subtitle = "Natural Sanitizer";
  } else if (product.slug === "vlsuper-sertu-liquid-clay-500ml") {
    subtitle = "Sertu Liquid Clay";
  } else if (product.slug === "vlskin-bodywash-500ml") {
    subtitle = "Liquid Bodywash";
  } else if (product.slug === "vlskin-clay-bar-soap-80gm") {
    subtitle = "Clay Bar Soap";
  }

  const title = subtitle ? `${brandName} - ${subtitle}` : brandName;

  return {
    title: title,
    description: product.shortDescription,
  };
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

