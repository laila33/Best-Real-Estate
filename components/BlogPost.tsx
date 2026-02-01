// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// function BlogPost() {
//   return (
//     <div className="p-2 md:px-40 mt-10 lg:mt-40 flex flex-col justify-center items-center overflow-hidden">
//       <motion.div 
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: false }}
//         transition={{ duration: 0.6 }}
//         className="font-bold dark:text-white text-[#102D47] text-5xl"
//       >
//         Blog Post
//       </motion.div>

//       <div className="flex flex-col lg:flex-row gap-20 items-center justify-between mt-10">
        
//         {/* الكارت الأول */}
//         <motion.div 
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false, amount: 0.2 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="cursor-pointer flex flex-col lg:flex-row gap-4"
//         >
//           <img src="../tab-1.jpg" className="w-60 h-40 rounded-2xl object-cover" />
//           <div className="flex flex-col">
//             <p className="text-gray-500 text-2xl">Nov 08, 2025</p>
//             <h1 className="text-2xl mt-5 hover:text-blue-500 transition-colors">
//               Exploring Luxury Real Estate Markets
//             </h1>
//             <h1 className="text-blue-600 mt-5 font-semibold">Read More</h1>
//           </div>
//         </motion.div>

//         {/* الكارت الثاني */}
//         <motion.div 
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false, amount: 0.2 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="cursor-pointer flex flex-col lg:flex-row gap-4"
//         >
//           <img src="../tab-2.jpg" className="w-60 h-40 rounded-2xl object-cover" />
//           <div className="flex flex-col">
//             <p className="text-gray-500 text-2xl">Nov 08, 2025</p>
//             <h1 className="text-2xl mt-5 hover:text-blue-500 transition-colors">
//               A Guide to Buying Real Estate in Metropolitan
//             </h1>
//             <h1 className="text-blue-600 mt-5 font-semibold">Read More</h1>
//           </div>
//         </motion.div>

//       </div>
//     </div>
//   );
// }

// export default BlogPost;


"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// 1. تعريف البيانات في مصفوفة (Data Array)
const blogData = [
  {
    id: "luxury-real-estate",
    title: "Exploring Luxury Real Estate Markets",
    date: "Nov 08, 2025",
    image: "../tab-1.jpg",
  },
  {
    id: "metropolitan-guide",
    title: "A Guide to Buying Real Estate in Metropolitan",
    date: "Nov 08, 2025",
    image: "../tab-2.jpg",
  }
];

function BlogPost() {
  return (
    <div className="p-2 md:px-40 mt-10 lg:mt-40 flex flex-col justify-center items-center overflow-hidden">
      {/* عنوان القسم مع أنيميشن */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="font-bold dark:text-white text-[#102D47] text-5xl mb-10"
      >
        Blog Post
      </motion.div>

      {/* حاوية الكروت */}
      <div className="flex flex-col lg:flex-row gap-20 items-center justify-between">
        {blogData.map((item, index) => (
          <Link href={`/blog/${item.id}`} key={item.id} className="block w-full">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2 // ده بيعمل ظهور متتالي (Staggered)
              }}
              whileHover={{ scale: 1.02 }} // تأثير بسيط عند الوقوف بالماوس
              className="cursor-pointer flex flex-col lg:flex-row gap-4 group"
            >
              {/* صورة المقال */}
              <div className="overflow-hidden rounded-2xl w-60 h-40 flex-shrink-0">
                <img 
                  src={item.image} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  alt={item.title}
                />
              </div>

              {/* نصوص المقال */}
              <div className="flex flex-col">
                <p className="text-gray-500 text-2xl">{item.date}</p>
                <h1 className="text-2xl mt-5 group-hover:text-blue-500 transition-colors duration-300">
                  {item.title}
                </h1>
                <h1 className="text-blue-600 mt-5 font-semibold flex items-center gap-2">
                  Read More <span>→</span>
                </h1>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogPost;