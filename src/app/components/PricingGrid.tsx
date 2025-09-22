'use client';

import React, { useState, useEffect } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { FaInfoCircle, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Button from "./ui/Button";

// Improved mobile-friendly tooltip that displays as a modal
const MobileTooltip = ({ info }: { info: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="More info"
        className="ml-1 text-blue-800 hover:text-blue-600 focus:outline-none"
      >
        <FaInfoCircle className="w-[25px] h-[25px]" />
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <div 
            className="bg-white rounded-lg max-w-lg w-full p-5 relative" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes size={24} />
            </button>
            <h3 className="text-lg font-bold mb-2 text-blue-900">Additional Information</h3>
            <p className="text-gray-800">{info}</p>
            <button
              className="mt-4 bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default function PricingGrid({ pricingServicesData } : any) {
  // Check if we're on the client side for mobile detection
  const [isMobile, setIsMobile] = useState(false);
  
  // Use effect to determine if we're on mobile
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Tooltip.Provider delayDuration={0}>
      <section className="w-full mx-2 lg:m-0 max-w-6xl">
        {/* Desktop header (3-column grid) */}
        <div className="hidden lg:grid lg:grid-cols-3">
          <div></div>
          <div className="bg-blue-900 text-white p-11 text-center flex items-center justify-center font-extrabold text-2xl">
            Single-Family Properties
          </div>
          <div className="bg-blue-950 text-white p-11 text-center flex items-center justify-center font-extrabold text-2xl">
            Multi-Family Properties
          </div>
        </div>
        
        {/* Content - Either 3-column grid on desktop or stacked columns on mobile */}
        {pricingServicesData.map((service: any, index: number) => (
          <React.Fragment key={service.title || index}>
            {/* Section title */}
            {service.title && service.title !== "Leasing Fees" && (
              <div className="bg-red-900 px-4 lg:bg-blue-900 text-white py-6 flex items-start text-left justify-start font-xl lg:grid lg:grid-cols-3 lg:col-span-3">
                <div className="lg:col-span-3">{service.title}</div>
              </div>
            )}
            
            {/* Items */}
            {service.items?.map((item: any, itemIndex: number) => (
              <React.Fragment key={itemIndex}>
                {/* Desktop view - 3 columns grid */}
                <div className="hidden lg:grid lg:grid-cols-3">
                  {/* Name column */}
                  <div className={`w-full border-t-[1px] border-l-[1px] border-gray-600 bg-gray-100 text-black ${index === 0 ? 'py-10' : 'py-4'} flex items-center justify-between px-4 font-xl`}>
                    <span className="w-full flex items-center justify-between gap-2">
                      {item.name}
                      {item.info && (
                        <Tooltip.Root>
                          <Tooltip.Trigger asChild>
                            <button
                              type="button"
                              aria-label="More info"
                              className="ml-1 text-blue-800 hover:text-blue-600 focus:outline-none"
                            >
                              <FaInfoCircle className="w-[25px] h-[25px]" />
                            </button>
                          </Tooltip.Trigger>
                          <Tooltip.Portal>
                            <Tooltip.Content
                              side="top"
                              align="center"
                              className="z-50 rounded bg-black text-white px-4 py-2 text-sm shadow-lg max-w-xs"
                            >
                              {item.info}
                              <Tooltip.Arrow className="fill-black" />
                            </Tooltip.Content>
                          </Tooltip.Portal>
                        </Tooltip.Root>
                      )}
                    </span>
                  </div>
                  
                  {/* Our Process column */}
                  <div className={`border-t-[1px] border-gray-600 bg-gray-200 text-black ${index === 0 ? 'py-10' : 'py-4'} flex items-center justify-center font-xl text-center px-2`}>
                    <span
                      dangerouslySetInnerHTML={{ __html: item.ourProcess }}
                    ></span>
                  </div>
                  
                  {/* Industry Average column */}
                  <div className={`border-t-[1px] border-gray-600 bg-gray-300 text-black ${index === 0 ? 'py-10' : 'py-4'} flex items-center justify-center font-xl text-center px-2`}>
                    <span
                      dangerouslySetInnerHTML={{ __html: item.industryAverage }}
                    ></span>
                  </div>
                </div>
                
                {/* Mobile view - stacked blocks */}
                <div className="lg:hidden mb-4 border border-gray-300 rounded overflow-hidden">
                  {/* Name with info */}
                  <div className="bg-blue-900 text-white p-4 flex items-center justify-between">
                    <span>{item.name}</span>
                    {item.info && <MobileTooltip info={item.info} />}
                  </div>
                  
                  {/* Our Process - mobile */}
                  <div className="bg-gray-200 p-4 flex flex-col items-center">
                    <div className="text-sm text-gray-600 font-medium mb-2">Our Process</div>
                    <span
                      dangerouslySetInnerHTML={{ __html: item.ourProcess }}
                    ></span>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
        
        <Link href="/contact" className="flex justify-center mt-4">
          <Button className="my-4">
            Get Started
          </Button>
        </Link>
      </section>
    </Tooltip.Provider>
  );
}
