"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { propertiesData } from "@/Data"; 
import Link from "next/link";

// 1. المكون اللي فيه الشغل والـ Logic
function PropertiesList() {
  const searchParams = useSearchParams();
  const typeFilter = searchParams.get("type"); 

  const displayData = typeFilter 
    ? propertiesData.filter(item => item.type === typeFilter)
    : propertiesData;

  return (
    <div className="p-6 md:p-20 mt-20 max-w-7xl mx-auto">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-[#102D47]">
          {typeFilter ? `${typeFilter} Properties` : "All Properties"}
        </h1>
        <p className="text-gray-500 mt-2">Found {displayData.length} Results</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayData.map((property) => (
          <div key={property.id} className="group border rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all">
            <div className="h-64 overflow-hidden">
              <img 
                src={property.image} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                alt={property.title} 
              />
            </div>
            <div className="p-6">
              <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                {property.type}
              </span>
              <h2 className="text-2xl font-bold mt-3 text-[#102D47]">{property.title}</h2>
              <p className="text-gray-500 mt-2">{property.location}</p>
              <div className="flex justify-between items-center mt-6">
                <span className="text-2xl font-bold text-blue-600">{property.price}</span>
                <button className="bg-[#102D47] text-white px-5 py-2 rounded-xl hover:bg-blue-600 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {displayData.length === 0 && (
        <div className="text-center py-20">
          <h2 className="text-2xl text-gray-400">No properties found in this category.</h2>
        </div>
      )}
    </div>
  );
}

// 2. الصفحة الأساسية اللي بتعمل Export ومغلفة بـ Suspense
export default function PropertiesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl animate-pulse">Loading Properties...</p>
      </div>
    }>
      <PropertiesList />
    </Suspense>
  );
}