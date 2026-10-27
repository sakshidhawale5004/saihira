export type Category = "khakhra" | "bhakhri";
export type Product = {
  slug: string;
  name: string;
  category: Category;
  image: string;
  tagline: string;
  description: string;
  notes: string[];
  price: number;
  weight: string;
};

type ImageInput = string | { url: string };
const getImageUrl = (img: ImageInput) => (typeof img === "string" ? img : img.url);

const k = (slug: string, name: string, image: ImageInput, tagline: string, notes: string[]): Product => ({
  slug,
  name,
  category: "khakhra",
  image: getImageUrl(image),
  tagline,
  notes,
  price: 120,
  weight: "200 g",
  description: `Paper-thin, hand-rolled and slow-roasted until perfectly crisp. Our ${name} is baked in small batches for a light, crunchy bite with ${tagline.toLowerCase()}.`,
});

const b = (slug: string, name: string, image: ImageInput, tagline: string, notes: string[]): Product => ({
  slug,
  name,
  category: "bhakhri",
  image: getImageUrl(image),
  tagline,
  notes,
  price: 140,
  weight: "250 g",
  description: `Thick, hearty and handmade the traditional way. Our ${name} is pressed, pricked and roasted slowly for a deep crunch and ${tagline.toLowerCase()}.`,
});

export const products: Product[] = [
  k(
    "plain-khakhra",
    "Plain Khakhra",
    "/saihirawebsite/Premium Plain Khakhra Packaging Mockup.png",
    "A clean, wholesome wheat flavour",
    ["Whole wheat", "Light & crisp", "Everyday classic"]
  ),
  k(
    "jeera-khakhra",
    "Jeera Khakhra",
    "/saihirawebsite/Premium Jeera Khakhra Packaging.png",
    "Warm notes of roasted cumin",
    ["Cumin seeds", "No onion, no garlic", "Baked"]
  ),
  k(
    "methi-khakhra",
    "Methi Khakhra",
    "/saihirawebsite/SHM Asal Methi Khakhra Packaging.png",
    "Gently bitter fenugreek leaves",
    ["Fenugreek", "Gujarati favourite", "Baked"]
  ),
  k(
    "masala-khakhra",
    "Masala Khakhra",
    "/saihirawebsite/Premium Masala Khakhra Flat Lay.png",
    "A bold house spice blend",
    ["Hand-ground spices", "Tangy & savoury", "Baked"]
  ),
  k(
    "kothmir-marcha-khakhra",
    "Kothmir-Marcha Khakhra",
    "/saihirawebsite/ChatGPT Image Oct 27, 2026, 03_45_54 PM.png",
    "Fresh coriander and green chilli",
    ["Coriander leaves", "High fibre", "No onion, no garlic"]
  ),
  k(
    "chilli-garlic-khakhra",
    "Chilli Garlic Khakhra",
    "/saihirawebsite/Premium Baked Chilli Garlic Khakhra.png",
    "A fiery chilli and garlic kick",
    ["Spicy", "Garlic-forward", "Baked"]
  ),
  k(
    "pani-puri-khakhra",
    "Pani Puri Khakhra",
    "/saihirawebsite/SHM Asal Baked Pani Puri Khakhra.png",
    "The tangy zing of street-side pani puri",
    ["Chatpata", "Mint & tamarind", "Baked"]
  ),
  k(
    "oats-masala-khakhra",
    "Oats Masala Khakhra",
    "/saihirawebsite/Premium Baked Oats Masala Khakhra Pouch.png",
    "Hearty oats with a masala twist",
    ["Oats", "High fibre", "Baked"]
  ),
  k(
    "ragi-khakhra",
    "Ragi Khakhra",
    "/saihirawebsite/Premium Ragi Khakhra Packaging Design.png",
    "Nutty finger millet goodness",
    ["Millet", "Rich in calcium", "Baked"]
  ),
  k(
    "bajri-methi-khakhra",
    "Bajri Methi Khakhra",
    "/saihirawebsite/Premium Bajri Methi Khakhra Packaging.png",
    "Pearl millet with fenugreek",
    ["Millet", "Earthy", "Baked"]
  ),
  k(
    "farali-khakhra",
    "Farali Khakhra",
    "/saihirawebsite/Farali Khakhra Packaged Food Product.png",
    "Fasting-friendly and pure",
    ["Vrat friendly", "Grain-free flours", "Baked"]
  ),
  k(
    "mug-khakhra",
    "Mug Khakhra",
    "/saihirawebsite/Baked Mug Khakhra Snack Packaging.png",
    "Protein-rich moong dal",
    ["Moong dal", "Protein rich", "Baked"]
  ),
  b(
    "jaggery-bhakhri",
    "Jaggery Bhakhri",
    "/saihirawebsite/Jaggery Bhakhri Rustic Product Display.png",
    "A gentle sweetness of pure jaggery",
    ["Gud", "Sweet & crunchy", "Tea-time"]
  ),
  b(
    "bajri-bhakhri",
    "Bajri Bhakhri",
    "/saihirawebsite/Premium Bajri Bhakhri Packaging.png",
    "The rustic taste of pearl millet",
    ["Millet", "Rustic", "Hearty"]
  ),
  b(
    "bajri-methi-bhakhri",
    "Bajri Methi Bhakhri",
    "/saihirawebsite/Premium Bajri Methi Bhakhri Packaging.png",
    "Millet with fragrant fenugreek",
    ["Millet", "Fenugreek", "Hearty"]
  ),
  b(
    "barley-bhakhri",
    "Barley Bhakhri",
    "/saihirawebsite/Premium Barley Bhakhri Packaging.png",
    "A wholesome, nutty barley flavour",
    ["Barley", "High fibre", "Hearty"]
  ),
  b(
    "black-pepper-bhakhri",
    "Black Pepper Bhakhri",
    "/saihirawebsite/Premium Black Pepper Bhakhri Packaging.png",
    "A peppery, aromatic warmth",
    ["Black pepper", "Aromatic", "Crunchy"]
  ),
  b(
    "garlic-bhakhri",
    "Garlic Bhakhri",
    "/saihirawebsite/Premium Garlic Bhakhri Packaging Render.png",
    "Roasted garlic in every bite",
    ["Garlic", "Savoury", "Crunchy"]
  ),
  b(
    "farali-bhakhri",
    "Farali Bhakhri",
    "/saihirawebsite/Premium Farali Bhakhri Packaging.png",
    "Pure and fasting-friendly",
    ["Vrat friendly", "Grain-free flours", "Crunchy"]
  ),
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;
