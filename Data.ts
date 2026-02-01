// data.ts

export interface Property {
  id: string;
  type: 'Apartment' | 'Villa' | 'Office' | 'Shop' | 'House' | 'Warehouse';
  title: string;
  price: string;
  location: string;
  image: string;
  date: string;
  description: string;
}

export const propertiesData: Property[] = [
  // --- Apartment (3) ---
  {
    id: "apt-1",
    type: "Apartment",
    title: "Modern Skyline Apartment",
    price: "$250,000",
    location: "Downtown, New York",
    image: "/aa1.jpg",
    date: "Jan 10, 2026",
    description: "A beautiful modern apartment with a city view."
  },
  {
    id: "apt-2",
    type: "Apartment",
    title: "Cozy Studio near Metro",
    price: "$120,000",
    location: "Brooklyn, NY",
     image: "/aa2.jpg",
    date: "Jan 12, 2026",
    description: "Perfect for students or young professionals."
  },
  {
    id: "apt-3",
    type: "Apartment",
    title: "Luxury Penthouse",
    price: "$850,000",
    location: "Manhattan, NY",
   image: "/aa3.jpg",
    date: "Jan 15, 2026",
    description: "Top floor penthouse with private terrace."
  },

  // --- Villa (3) ---
  {
    id: "villa-1",
    type: "Villa",
    title: "Sea View Royal Villa",
    price: "$1,200,000",
    location: "Miami, Florida",
    image: "/v1v1.jpg",
    date: "Jan 05, 2026",
    description: "Large villa with private pool and beach access."
  },
  {
    id: "villa-2",
    type: "Villa",
    title: "Green Valley Villa",
    price: "$950,000",
    location: "California, USA",
    image: "/vv2.jpg",
    date: "Jan 08, 2026",
    description: "Surrounded by nature and peaceful environment."
  },
  {
    id: "villa-3",
    type: "Villa",
    title: "Modern Desert Villa",
    price: "$1,500,000",
    location: "Arizona, USA",
   image: "/vv3.jpg",
    date: "Jan 20, 2026",
    description: "Contemporary design with high-end finishes."
  },

  // --- Office (3) ---
  {
    id: "office-1",
    type: "Office",
    title: "High-Tech Tech Hub Office",
    price: "$5,000/mo",
    location: "Silicon Valley",
    image: "/o1.jpg",
    date: "Feb 01, 2026",
    description: "Fully equipped office space for startups."
  },
  {
    id: "office-2",
    type: "Office",
    title: "Professional Business Suite",
    price: "$3,200/mo",
    location: "Chicago, IL",
    image: "/o2.jpg",
    date: "Feb 03, 2026",
    description: "Located in the heart of the financial district."
  },
  {
    id: "office-3",
    type: "Office",
    title: "Small Creative Studio",
    price: "$1,800/mo",
    location: "Austin, TX",
    image: "/o3.jpg",
    date: "Feb 05, 2026",
    description: "Open space for creative agencies."
  },

  // --- Shop (3) ---
  {
    id: "shop-1",
    type: "Shop",
    title: "Main Street Corner Shop",
    price: "$4,500/mo",
    location: "London, UK",
    image: "/prop-1.jpg",
    date: "Feb 10, 2026",
    description: "High foot traffic area perfect for retail."
  },
  {
    id: "shop-2",
    type: "Shop",
    title: "Boutique Storefront",
    price: "$2,900/mo",
    location: "Paris, France",
     image: "/prop-2.jpg",
    date: "Feb 12, 2026",
    description: "Elegant shop space in a luxury district."
  },
  {
    id: "shop-3",
    type: "Shop",
    title: "Cafe/Restaurant Space",
    price: "$6,000/mo",
    location: "Dubai, UAE",
  image: "/prop-3.jpg",
    date: "Feb 15, 2026",
    description: "Ready-to-use space for food business."
  },

  // --- House (3) ---
  {
    id: "house-1",
    type: "House",
    title: "Family Suburban House",
    price: "$450,000",
    location: "Houston, TX",
    image: "/h1.jpg",
    date: "Jan 25, 2026",
    description: "Large backyard and 4 bedrooms."
  },
  {
    id: "house-2",
    type: "House",
    title: "Traditional Wooden House",
    price: "$320,000",
    location: "Seattle, WA",
    image: "/h2.jpg",
    date: "Jan 28, 2026",
    description: "Classic architecture with modern interior."
  },
  {
    id: "house-3",
    type: "House",
    title: "Smart Eco-Friendly House",
    price: "$550,000",
    location: "Portland, OR",
    image: "/h3.jpg",
    date: "Feb 01, 2026",
    description: "Solar panels and smart home system included."
  },

  // --- Warehouse (WhereHouse) (3) ---
  {
    id: "ware-1",
    type: "Warehouse",
    title: "Large Industrial Warehouse",
    price: "$10,000/mo",
    location: "New Jersey, NJ",
    image: "/r1.jpg",
    date: "Feb 05, 2026",
    description: "Spacious storage with loading docks."
  },
  {
    id: "ware-2",
    type: "Warehouse",
    title: "Cold Storage Facility",
    price: "$15,000/mo",
    location: "Atlanta, GA",
   image: "/r2.jpg",
    date: "Feb 08, 2026",
    description: "Equipped with cooling systems for food."
  },
  {
    id: "ware-3",
    type: "Warehouse",
    title: "Small Distribution Center",
    price: "$7,500/mo",
    location: "Dallas, TX",
   image: "/r3.jpg",
    date: "Feb 12, 2026",
    description: "Near the highway for easy logistics."
  },
];