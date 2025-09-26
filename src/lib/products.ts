export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  shortDescription: string;
  longDescription: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Health Supplements",
    slug: "premium-health-supplements",
    price: 89.99,
    shortDescription: "High-quality vitamins and minerals for optimal wellness",
    longDescription: "Our Premium Health Supplements are carefully formulated with the finest ingredients to support your overall health and wellness. Each capsule contains a precise blend of essential vitamins, minerals, and natural extracts that work synergistically to boost your immune system, enhance energy levels, and promote optimal cellular function. Made with pharmaceutical-grade ingredients and tested for purity and potency.",
    image: "placeholder-health.jpg"
  },
  {
    id: "2",
    name: "Organic Skincare Set",
    slug: "organic-skincare-set",
    price: 129.99,
    shortDescription: "Natural ingredients for healthy, glowing skin",
    longDescription: "Transform your skincare routine with our Organic Skincare Set, featuring gentle yet effective natural ingredients. This comprehensive collection includes a hydrating cleanser, nourishing serum, and protective moisturizer, all formulated with organic botanicals like aloe vera, chamomile, and green tea extract. Perfect for all skin types, this set delivers visible results while maintaining your skin's natural balance.",
    image: "placeholder-skincare.jpg"
  },
  {
    id: "3",
    name: "Energy Boost Formula",
    slug: "energy-boost-formula",
    price: 59.99,
    shortDescription: "Natural energy enhancement for active lifestyle",
    longDescription: "Fuel your day with our Energy Boost Formula, a powerful blend of natural ingredients designed to provide sustained energy without the crash. Contains ginseng, B-vitamins, and adaptogenic herbs that help your body adapt to stress while maintaining steady energy levels. Perfect for busy professionals, athletes, and anyone looking to maintain peak performance throughout the day.",
    image: "placeholder-energy.jpg"
  },
  {
    id: "4",
    name: "Weight Management Kit",
    slug: "weight-management-kit",
    price: 149.99,
    shortDescription: "Complete solution for healthy weight control",
    longDescription: "Achieve your weight management goals with our comprehensive Weight Management Kit. This complete solution includes metabolism-boosting supplements, appetite control capsules, and a detailed nutrition guide. Our scientifically-formulated blend helps support healthy metabolism, control cravings, and maintain energy levels during your weight management journey. Safe, effective, and backed by clinical research.",
    image: "placeholder-weight.jpg"
  },
  {
    id: "5",
    name: "Immune Support Complex",
    slug: "immune-support-complex",
    price: 79.99,
    shortDescription: "Strengthen your body's natural defense system",
    longDescription: "Boost your immune system naturally with our Immune Support Complex, featuring a powerful combination of vitamin C, zinc, elderberry, and echinacea. This advanced formula is designed to support your body's natural defense mechanisms, helping you stay healthy year-round. Each ingredient is carefully selected for its proven immune-supporting properties and bioavailability.",
    image: "placeholder-immune.jpg"
  },
  {
    id: "6",
    name: "Beauty Care Essentials",
    slug: "beauty-care-essentials",
    price: 99.99,
    shortDescription: "Complete beauty routine for radiant appearance",
    longDescription: "Unlock your natural beauty with our Beauty Care Essentials collection. This complete routine includes collagen-boosting supplements, antioxidant-rich serums, and hydrating treatments that work from within to enhance your skin's radiance. Our premium formula contains biotin, hyaluronic acid, and vitamin E to promote healthy hair, skin, and nails for a naturally beautiful you.",
    image: "placeholder-beauty.jpg"
  }
];
