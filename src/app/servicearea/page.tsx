'use client';

import Link from "next/link";
import Header from "../components/ui/Header";
import Button from "../components/ui/Button";
import ShortEmailForm from "../components/Forms/shortForm";
import hoaData from "../../data/hoa.json";
import Image from "next/image";
import { LocateIcon } from "lucide-react";
import { useState } from "react";

export default function Home() {
  // State to track which counties have expanded city lists
  const [expandedCounties, setExpandedCounties] = useState<Record<string, boolean>>({
    essex: false,
    hudson: false,
    union: false,
    middlesex: false,
    monmouth: false,
    somerset: false
  });

  // Toggle expanded state for a county
  const toggleExpand = (county: string) => {
    setExpandedCounties({
      ...expandedCounties,
      [county]: !expandedCounties[county]
    });
  };

  return (
    <main className="flex flex-col items-center justify-center p-4 pb-0">
      {/* Multifamily Features Section */}
      <section className="max-w-6xl mx-auto pb-12 pt-4 px-4">
        <h2 className="text-3xl font-bold text-center text-[#003474] mb-8">What areas we service in New Jersey</h2>
        <div className="grid grid-cols-1 gap-8">
          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mb-12">
            {/* Essex County */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600 hover:shadow-lg transition-shadow h-[250px] flex flex-col">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Essex County</h3>
              <p className={`text-gray-700 ${expandedCounties.essex ? 'overflow-y-auto' : 'line-clamp-4'} overflow-hidden`}>
                Belleville, Bloomfield, Caldwell, Cedar Grove, East Orange, Essex Fells, Fairfield, Glen Ridge, Irvington, Livingston, Maplewood,
                Millburn, Montclair, Newark, North Caldwell, Nutley, Orange, Roseland, South Orange, Verona, West Caldwell, West Orange
              </p>
              <div className="mt-auto pt-2">
                <button
                  onClick={() => toggleExpand('essex')}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  {expandedCounties.essex ? 'Show Less' : 'View All Cities'}
                </button>
              </div>
            </div>

            {/* Hudson County */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 hover:shadow-lg transition-shadow h-[250px] flex flex-col">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Hudson County</h3>
              <p className={`text-gray-700 ${expandedCounties.hudson ? 'overflow-y-auto' : 'line-clamp-4'} overflow-hidden`}>
                Bayonne, East Newark, Guttenberg, Harrison, Hoboken, Jersey City, Kearny, North Bergen, Secaucus, Union City, Weehawken, West New York
              </p>
              <div className="mt-auto pt-2">
                <button
                  onClick={() => toggleExpand('hudson')}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  {expandedCounties.hudson ? 'Show Less' : 'View All Cities'}
                </button>
              </div>
            </div>

            {/* Union County */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:shadow-lg transition-shadow h-[250px] flex flex-col">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Union County</h3>
              <p className={`text-gray-700 ${expandedCounties.union ? 'overflow-y-auto' : 'line-clamp-4'} overflow-hidden`}>
                Berkeley Heights, Clark, Cranford, Elizabeth, Fanwood, Garwood, Hillside, Kenilworth, Linden, Mountainside, New Providence,
                Plainfield, Rahway, Roselle, Roselle Park, Scotch Plains, Springfield, Summit, Union, Westfield, Winfield
              </p>
              <div className="mt-auto pt-2">
                <button
                  onClick={() => toggleExpand('union')}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  {expandedCounties.union ? 'Show Less' : 'View All Cities'}
                </button>
              </div>
            </div>

            {/* Middlesex County */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-600 hover:shadow-lg transition-shadow h-[250px] flex flex-col">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Middlesex County</h3>
              <p className={`text-gray-700 ${expandedCounties.middlesex ? 'overflow-y-auto' : 'line-clamp-4'} overflow-hidden`}>
                Carteret, Cranbury, Dunellen, East Brunswick, Edison, Helmetta, Highland Park, Jamesburg, Metuchen, Middlesex, Milltown, Monroe, New
                Brunswick, North Brunswick, Old Bridge, Perth Amboy, Piscataway, Plainsboro, Sayreville, South Amboy, South Brunswick, South
                Plainfield, South River, Spotswood, Woodbridge
              </p>
              <div className="mt-auto pt-2">
                <button
                  onClick={() => toggleExpand('middlesex')}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  {expandedCounties.middlesex ? 'Show Less' : 'View All Cities'}
                </button>
              </div>
            </div>

            {/* Monmouth County */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-600 hover:shadow-lg transition-shadow h-[250px] flex flex-col">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Monmouth County</h3>
              <p className={`text-gray-700 ${expandedCounties.monmouth ? 'overflow-y-auto' : 'line-clamp-4'} `}>
                Aberdeen, Allenhurst, Allentown, Asbury Park, Atlantic Highlands, Avon-by-the-Sea, Belmar, Bradley Beach, Brielle, Colts Neck, Deal,
                Eatontown, Englishtown, Fair Haven, Farmingdale, Freehold, Hazlet, Highlands, Holmdel, Howell, Interlaken, Keansburg, Keyport, Lake
                Como, Little Silver, Loch Arbour, Long Branch, Manalapan, Manasquan, Marlboro, Matawan, Middletown, Millstone, Monmouth Beach,
                Neptune, Neptune City, Ocean, Oceanport, Red Bank, Roosevelt, Rumson, Sea Bright, Sea Girt, Shrewsbury, Spring Lake, Spring Lake
                Heights, Tinton Falls, Union Beach, Upper Freehold, Wall, West Long Branch
              </p>
              <div className="mt-auto pt-2">
                <button
                  onClick={() => toggleExpand('monmouth')}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  {expandedCounties.monmouth ? 'Show Less' : 'View All Cities'}
                </button>
              </div>
            </div>

            {/* Somerset County */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-600 hover:shadow-lg transition-shadow h-[250px] flex flex-col">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Somerset County</h3>
              <p className={`text-gray-700 ${expandedCounties.somerset ? 'overflow-y-auto' : 'line-clamp-4'} overflow-hidden`}>
                Bedminster, Bernards, Bernardsville, Bound Brook, Branchburg, Bridgewater, Far Hills, Franklin, Green Brook, Hillsborough, Manville,
                Millstone, Montgomery, North Plainfield, Peapack and Gladstone, Raritan, Rocky Hill, Somerville, South Bound Brook, Warren, Watchung
              </p>
              <div className="mt-auto pt-2">
                <button
                  onClick={() => toggleExpand('somerset')}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  {expandedCounties.somerset ? 'Show Less' : 'View All Cities'}
                </button>
              </div>
            </div>
          </div>
          {/* Short Form Section */}
          <div className="flex flex-col items-center justify-center mt-2">
            <h1 className="text-blue-900 font-bold leading-tight text-xl text-wrap mb-4">Get Property Management Services You Can Trust</h1>
            <ShortEmailForm />
          </div>
        </div>
      </section>
    </main>
  );
}
