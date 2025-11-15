import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vlsclay.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/products",
    "/our-technology",
    "/our-clay",
    "/about",
    "/our-story",
    "/contact",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const productRoutes = products.map((product) => ({
    url: `${BASE_URL}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes];
}

