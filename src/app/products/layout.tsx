import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Health & Wellness Products - VLskin & VLsuper",
  description: "Discover our premium wellness products designed to enhance your health and wellness journey.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

