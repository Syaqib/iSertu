export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  shortDescription: string;
  longDescription: string;
  image: string;
  keyBenefits?: string[];
  howToUse?: string | string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "VLSkin Bodywash 500ml",
    slug: "vlskin-bodywash-500ml",
    price: 35,
    shortDescription: "Gentle cleansing with fine, comfortable foam (500ml)",
    longDescription: "Experience the gentle power of kaolin clay in our premium bodywash. Formulated with natural clay minerals, this bodywash cleanses effectively while maintaining your skin's natural moisture balance. Perfect for daily use by the whole family, it provides a refreshing cleanse with a mild, soothing fragrance that won't irritate sensitive skin.",
    image: "/images/vlskin_bodywash.jpg",
    keyBenefits: [
      "Cleanses with fine, comfortable foam",
      "Refreshes while maintaining natural moisture",
      "Suitable for children & adults",
      "Mild, soothing fragrance"
    ],
    howToUse: "Wet the body, pour onto palm or sponge, lather gently all over, then rinse thoroughly."
  },
  {
    id: "2",
    name: "VLSkin Clay Bar Soap 80gm",
    slug: "vlskin-clay-bar-soap-80gm",
    price: 30,
    shortDescription: "Compact clay bar for gentle cleansing without drying",
    longDescription: "Discover the convenience of our kaolin clay bar soap. This compact, travel-friendly bar provides effective cleansing without stripping your skin of its natural oils. The concentrated formula means it lasts longer than liquid soap while delivering the same gentle, moisturizing benefits of kaolin clay. Perfect for home use or travel.",
    image: "/images/vlskin_bar.jpg",
    keyBenefits: [
      "Cleanses without drying",
      "Leaves skin smooth after rinsing",
      "Compact & travel-friendly size",
      "Longer-lasting compared to liquid soap"
    ],
    howToUse: "Lather onto palm or sponge, apply to skin, then rinse thoroughly."
  },
  {
    id: "3",
    name: "VLSuper Sertu Liquid Clay 500ml",
    slug: "vlsuper-sertu-liquid-clay-500ml",
    price: 29,
    shortDescription: "Consistent clay mix for sertu cleansing (500ml)",
    longDescription: "Simplify your sertu cleansing routine with our premixed clay solution. This ready-to-use formula provides a consistent and practical approach to najis mughallazah cleansing, suitable for various surfaces including metal, plastic, glass, and floors. Available in multiple sizes to meet both household and industrial needs, ensuring you always have the right amount for your requirements.",
    image: "/images/vlsuper.jpg",
    keyBenefits: [
      "Consistent & practical clay mix",
      "Simple solution for sertu cleansing of najis mughallazah",
      "Suitable for metal, plastic, glass & floor surfaces",
      "Available in household & industrial sizes"
    ],
    howToUse: [
      "Remove physical traces of impurity",
      "Wash once with water mixed with Premix Sertu Solution",
      "Rinse 6 more times with clean water"
    ]
  },
  {
    id: "4",
    name: "VLSuper Natural Sanitizer 200ml",
    slug: "vlsuper-natural-sanitizer-200ml",
    price: 25,
    shortDescription: "Quick-drying natural sanitizer for hands and surfaces (200ml)",
    longDescription: "Keep your hands and surfaces clean with our natural sanitizer. This quick-drying formula provides effective sanitization without leaving a sticky residue. The compact 200ml size makes it perfect for travel, pocket use, or keeping at your desk. Ideal for everyday use when soap and water aren't readily available.",
    image: "/images/vlscent.jpg",
    keyBenefits: [
      "Quick-drying & comfortable",
      "Non-sticky on skin",
      "Small size, perfect for travel & pocket use",
      "Ideal for everyday use"
    ],
    howToUse: "Spray onto hands or surfaces, rub evenly & let dry."
  }
];
