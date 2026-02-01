"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Bed, Bath, Square, MapPin } from "lucide-react"; // استيراد الأيقونات

const featuredProperties = [
  {
    id: 1,
    type: "Apartment",
    title: "Modern Glass Penthouse",
    location: "New Cairo, Egypt",
    price: "$250,000",
    beds: 3,
    baths: 2,
    area: "180 sqm",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&auto=format&fit=crop&q=60", 
    tag: "Featured"
  },
  {
    id: 2,
    type: "Apartment",
    title: "Luxury Studio Downtown",
    location: "Zamalek, Cairo",
    price: "$120,000",
    beds: 1,
    baths: 1,
    area: "85 sqm",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60",
    tag: "Sale"
  },
  {
    id: 3,
    type: "Apartment",
    title: "Family Apartment with View",
    location: "October City, Egypt",
    price: "$190,000",
    beds: 3,
    baths: 2,
    area: "210 sqm",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&auto=format&fit=crop&q=60",
    tag: "Discount"
  },
  {
    id: 4,
    type: "Villa",
    title: "Royal Palace Villa",
    location: "North Coast, Egypt",
    price: "$1,200,000",
    beds: 6,
    baths: 5,
    area: "550 sqm",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&auto=format&fit=crop&q=60",
    tag: "Premium"
  },
  {
    id: 5,
    type: "Villa",
    title: "Modern Minimalist Villa",
    location: "El Gouna, Red Sea",
    price: "$850,000",
    beds: 4,
    baths: 4,
    area: "400 sqm",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&auto=format&fit=crop&q=60",
    tag: "Hot Deal"
  },
  {
    id: 6,
    type: "Villa",
    title: "Green Garden Mansion",
    location: "Sheikh Zayed, Egypt",
    price: "$950,000",
    beds: 5,
    baths: 4,
    area: "480 sqm",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format&fit=crop&q=60",
    tag: "Top Rated"
  }
];

// إعدادات الأنيميشن
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

function Featured_Properties() {
  return (
    <div className="bg-[#f0f6fa] mt-10 dark:bg-slate-950 py-20">
      <div className="p-2 md:px-40 flex flex-col gap-10">
        <h1 className="self-start text-4xl text-[#102D47] dark:text-white font-bold">
          Featured Properties
        </h1>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        >
          {featuredProperties.map((property) => (
            <motion.div
              key={property.id}
              variants={cardVariants}
              className="bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
                              <div className="relative h-64 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {property.tag}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                  <MapPin size={16} />
                  {property.location}
                </div>
                <h3 className="text-xl font-bold text-[#102D47] dark:text-white mb-4 line-clamp-1">
                  {property.title}
                </h3>

                <div className="flex justify-between items-center py-4 border-t border-gray-100 dark:border-slate-800 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Bed size={18} className="text-blue-500" />
                    <span>{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath size={18} className="text-blue-500" />
                    <span>{property.baths}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square size={16} className="text-blue-500" />
                    <span>{property.area}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-2xl font-bold text-blue-600">{property.price}</span>
                  <button className="bg-[#102D47] text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Featured_Properties;