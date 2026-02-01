"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Facebook, Linkedin, Twitter } from "lucide-react";
const blogData = [
  {
    id: "luxury-real-estate",
    title: "Exploring Luxury Real Estate Markets",
    date: "Nov 08, 2025",
    image: "../tab-1.jpg",
    content:
      "This is the full article about Luxury Real Estate. Here you can put long descriptions, tips, and more details.",
  },
  {
    id: "metropolitan-guide",
    title: "A Guide to Buying Real Estate in Metropolitan",
    date: "Nov 08, 2025",
    image: "../tab-2.jpg",
    content:
      "Detailed guide for metropolitan areas. Learn how to choose the right location and get the best prices.",
  },
];

export default function BlogDetails() {
  const params = useParams();
  const { id } = params;
  const post = blogData.find((item) => item.id === id);
  if (!post) {
    return (
      <div className="p-20 mt-20 text-center">
        <h1 className="text-2xl font-bold">Article not found!</h1>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-20 mt-20 w- mx-auto">
      <div className="h-30 w-full bg-linear-to-t from-blue-200 rounded-2xl mb-10 to-white hidden lg:flex  items-center justify-center gap-11">
        <div className="flex flex-col gap-3 mb-30 ">
          <div className="flex  gap-4">
            <p>08 Nov 2025</p>
            <p>|</p>
            <p>13 Comments</p>
          </div>
          <p className=" w-120 text-5xl font-bold">
            Exploring Luxury Real Estate Markets
          </p>
        </div>
        <div className="mb-30  flex justify-center items-center gap-3">
          <img src="/silicaman.jpg" className="rounded-full" />
          <div className="flex flex-col">
            <p className="font-bold">Silicaman</p>
            <p>Author</p>
          </div>
        </div>
      </div>

      <img
        src={post.image}
        alt={post.title}
        className="w-full aspect-[16/9] lg:aspect-[21/9] object-cover rounded-3xl shadow-xl"
      />

      {/* <div className="mt-10">
        <p className="text-blue-600 font-semibold">{post.date}</p>
        <h1 className="text-5xl font-bold text-[#102D47] mt-4">
          {post.title}
        </h1>
        
        <div className="mt-10 text-gray-600 text-xl leading-relaxed">
          {post.content}
        </div>
      </div> */}
      <div className="flex flex-col lg:flex lg:flex-row gap-30 pt-5 ">
        <div className="flex flex-col">
          <p className="  text-2xl lg:text-5xl font-bold mt-5 ">
            Main Heading & Points
          </p>
          <p className="mt-2  w-70 md:w-145">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the
          </p>
          <ul className="list-disc list-inside mt-5 text-gray-700 space-y-2">
            <li>Vivamus eu lacus scelerisque, placerat commodo lectus.</li>
            <li>Etiam et ante at ex porta fringilla.</li>
            <li>
              Nullam dignissim sem eu magna aliquet, sit amet volutpat tellus
            </li>
          </ul>
          <img src="../blogdetail-1.jpg" className="p-5" />
          <p className="w-70  md:w-145">
            Unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the
          </p>
          <div className=" hidden lg:block h-0.5 w-180 bg-blue-50 m-5"></div>
          <p className=" w-70 lg:w-145 mt-5 lg:mt-0">
            We are a dedicated team of passionate product managers, developers,
            UX/UI designers, QA engineers experts helping businesses from new
            startups
          </p>
          <div className="hidden lg:block  h-0.5 w-180 bg-blue-50 m-5"></div>
          <p className="w-70 lg:w-145 mt-5 lg:mt-0">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable making this the first true generator on the Internet. It
            uses a dictionary
          </p>{" "}
          <div className=" hidden lg:block h-0.5 w-180 bg-blue-50 m-5"></div>
          <p className="font-bold text-3xl">Tags</p>
          <ul className="list-disc list-inside mt-5 text-gray-700 space-y-2">
            <li>Trends</li>
            <li>Design</li>
            <li>Research</li>
          </ul>
          <div className="  hidden lg:block h-0.5 w-180 bg-blue-50 m-5"></div>
          <p className="font-bold text-3xl">Share</p>
          <ul className="list-disc list-inside mt-5 text-gray-700 space-y-2">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Linkedin</li>
          </ul>
        </div>
        <div className="shadow-2xl shadow-black/20 flex flex-col gap-2 bg-white h-170  px-2 lg:px-10">
          <p className="text-4xl mt-20 font-bold">Share</p>
          <div className="h-15 w-60 bg-[#526FA3] rounded-2xl flex items-center p-2 gap-2">
            <Facebook className="text-white fill-white" size={20} />{" "}
            <p className="text-white text-2xl">Facebook</p>
          </div>
          <div className="h-15 w-60 bg-[#46C4FF] rounded-2xl  flex items-center p-2 gap-2">
            <Twitter className="text-white fill-white" size={20} />
            <p className="text-white text-2xl">Twitter</p>
          </div>
          <div className="h-15 w-60 bg-[#3C86AD] rounded-2xl  flex items-center p-2 gap-2">
            <Linkedin className="text-white fill-white" size={20} />{" "}
            <p className="text-white text-2xl">Linked in</p>
          </div>
          <div className="flex flex-col mt-15 ">
            <h1 className="text-2xl">Join our Newsletter</h1>
            <input
              type="text"
              placeholder="Email"
              className=" p-3 rounded-xl border border-blue-400 mt-5 "
            />
            <button className="bg-blue-700 p-3 rounded-xl mt-2 text-white hover:bg-blue-800 cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
