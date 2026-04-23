const phoneDigits = "263788056886";

export const company = {
  name: "Giants Car Rental",
  shortName: "Giants",
  tagline: "Drive it like you own it",
  strapline: "Luxury & everyday rentals",
  heroTitle: "Adventure awaits. Explore our car rental collection.",
  description:
    "Harare car hire with quick WhatsApp replies, practical daily rates, and vehicles ready for everything from errands to road trips.",
  location: "Robert Mugabe & Lomagundi, Harare",
  city: "Harare, Zimbabwe",
  phoneDigits,
  phoneDisplay: "+263 788 056 886",
  phoneHref: `tel:+${phoneDigits}`,
  instagramHandle: "@giantscarrental",
  instagramUrl: "https://instagram.com/giantscarrental",
  flyerImage: "/images/giants-flyer.jpg",
  defaultWhatsappMessage:
    "Hi Giants Car Rental, I'd like to book a vehicle. Please share availability.",
};

export function buildWhatsAppUrl(message = company.defaultWhatsappMessage) {
  return `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`;
}

export const navItems = [
  { label: "Home", href: "#top" },
  { label: "Fleet", href: "#fleet" },
  { label: "Why Giants", href: "#features" },
  { label: "Book", href: "#contact" },
];

export const heroStats = [
  { value: "$35", label: "Rates from" },
  { value: "9+", label: "Flyer vehicles" },
  { value: "WhatsApp", label: "Fast booking" },
];

export const flyerRates = [
  { name: "Toyota Passo", price: "$35", note: "Budget city car" },
  { name: "Toyota Vitz", price: "$40", note: "Daily hatchback" },
  { name: "Toyota Aqua", price: "$40", note: "Hybrid option" },
  { name: "Honda Fit GK3", price: "$40", note: "Everyday runner" },
  { name: "Nissan Serena", price: "$70", note: "Family van" },
  { name: "Mazda CX-5", price: "$80", note: "SUV comfort" },
  { name: "Honda Vezel", price: "$80", note: "Compact crossover" },
  { name: "Toyota Hilux", price: "$150", note: "Double cab" },
  { name: "Toyota Fortuner", price: "$180", note: "Flagship SUV" },
];

export const featuredVehicles = [
  {
    name: "Toyota Fortuner GD6",
    category: "Road-trip SUV",
    price: "$160/day",
    image: "/images/fortuna-gd6.png",
    blurb:
      "A premium SUV choice for family travel, executive movement, and long-distance comfort.",
    tags: ["7 seats", "4x4", "Long trips"],
  },
  {
    name: "Toyota Fortuner D4D",
    category: "Reliable SUV",
    price: "$120/day",
    image: "/images/fortuna-d4d.png",
    blurb:
      "A practical Fortuner option for weekend hires and clients who need space without overcomplicating the booking.",
    tags: ["7 seats", "Diesel", "Comfort ride"],
  },
  {
    name: "Mazda CX-5",
    category: "Daily SUV",
    price: "$80/day",
    image: "/images/mazda-cx5.png",
    blurb:
      "A smart everyday SUV with room for errands, business trips, and quick out-of-town drives.",
    tags: ["5 seats", "Automatic", "SUV"],
  },
  {
    name: "Nissan Note",
    category: "Compact option",
    price: "From $40/day",
    image: "/images/nissan-note.png",
    blurb:
      "A fuel-conscious hatchback for affordable city movement and short-stay rentals.",
    tags: ["5 seats", "Hatchback", "Fuel saver"],
  },
];

export const serviceHighlights = [
  {
    title: "WhatsApp-first booking",
    description:
      "Message the car you want, your dates, and your pickup point for a fast confirmation flow.",
  },
  {
    title: "Harare pickup planning",
    description:
      "The flyer points to Robert Mugabe & Lomagundi, with delivery planning handled directly by the team.",
  },
  {
    title: "Everyday to executive rides",
    description:
      "From compact city cars to Hilux and Fortuner rentals, the lineup covers practical and premium needs.",
  },
  {
    title: "Clear daily pricing",
    description:
      "The social flyer already gives people price anchors, making it easier to enquire and book confidently.",
  },
];

export const bookingReasons = [
  "Luxury and everyday rentals in one lineup",
  "Fast replies by call, DM, or WhatsApp",
  "Straightforward USD daily rates",
  "Harare pickup and delivery planning",
  "Family, business, and solo-trip options",
  "Long-hire requests quoted directly",
];

export const pickupOptions = [
  "Robert Mugabe & Lomagundi, Harare",
  "Harare CBD",
  "Airport pickup",
  "Delivery on request",
];

export const hireOptions = [
  "1 day",
  "Weekend hire",
  "3 to 7 days",
  "Long hire / custom quote",
];
