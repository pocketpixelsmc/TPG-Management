"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Drawer } from "@mui/material";
import { X, Menu, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

const navItems = [
  { href: "/", label: "Home" },
  {
    label: "Property Management",
    items: [
      { href: "/services", label: "Services" },
      { href: "/pricing", label: "Pricing" },
      { href: "/referral", label: "Referral" },
      { href: "/faq", label: "Owner FAQs" },
    ],
  },
  { href: "https://tpgcompanies.managebuilding.com/Resident/public/rentals", label: "Available Rentals", external: true },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
];

const drawerItems = [
  { href: "/", label: "Home" },
  {
    label: "Property Management",
    items: [
      { href: "/services", label: "Services" },
      { href: "/pricing", label: "Pricing" },
      { href: "/referral", label: "Referral" },
      { href: "/faq", label: "Owner FAQs" },
    ],
  },
  { href: "https://tpgcompanies.managebuilding.com/Resident/public/rentals", label: "Available Rentals", external: true },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
  { href: "https://tpgcompanies.managebuilding.com/Resident/portal/login", label: "Resident Login", external: true },
  { href: "https://tpgcompanies.managebuilding.com/manager", label: "Owner Login", external: true },
  { href: "tel:732-978-9390", label: "Call Us at 732-978-9390" },
];

export default function Navbar() {
  const [showBackground, setShowBackground] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Height of the top bar to determine when to snap navbar to top
      const topBarHeight = 40; // adjust if your top bar height is different
      setShowBackground(window.scrollY >= topBarHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add this handler for link clicks
  const handleLinkClick = () => {
    setOpen(false);
  };

  // Add this effect to handle body scrolling
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      // Add padding to prevent shift (equal to scrollbar width)
      document.body.style.paddingRight = '15px';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [open]);

  return (
    <header className="w-full" role="banner">
      {/* Top Bar - Static position */}
      <div className="bg-blue-900 text-white w-full">
        <div className="container mx-auto px-4 py-1.5 flex justify-between items-center">
          <a 
            href="tel:732-978-9390" 
            className="flex items-center gap-1.5 hover:text-blue-200 transition-colors"
            aria-label="Call us at 732-978-9390"
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="text-xs sm:text-sm">732-978-9390</span>
          </a>
          <div className="flex gap-3">
            <a 
              href="https://tpgcompanies.managebuilding.com/Resident/portal/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm hover:text-blue-200 transition-colors"
            >
              Resident Login
            </a>
            <span className="text-gray-400">|</span>
            <a 
              href="https://tpgcompanies.managebuilding.com/manager"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm hover:text-blue-200 transition-colors"
            >
              Owner Login
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`w-full z-[99] transition-all duration-300 ease-in-out transform-gpu ${
          showBackground 
            ? 'fixed top-0'
            : 'relative'
        }`}
        style={{
          backgroundColor: showBackground ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.95)',
          boxShadow: showBackground ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 sm:py-4">
            {/* Logo with adjusted mobile sizes */}
            <Link href="/" className="flex-shrink-0">
              <Image 
                src="/logo.png" 
                alt="TPG Management" 
                width={showBackground ? 140 : 160} 
                height={showBackground ? 140 : 160} 
                className="transition-all duration-300 ease-in-out transform-gpu w-auto h-[40px] sm:h-[50px]"
                priority
              />
            </Link>

            {/* Mobile Menu Button - adjusted size */}
            <button 
              onClick={toggleDrawer(true)} 
              className="xl:hidden p-1.5 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5 text-blue-900" />
            </button>

            {/* Desktop Navigation */}
            <NavigationMenu.Root className="hidden xl:block">
              <NavigationMenu.List className="flex gap-6">
                {navItems.map((item) => (
                  <NavigationMenu.Item key={item.label}>
                    {item.items ? (
                      <>
                        <NavigationMenu.Trigger 
                          className="group flex items-center gap-1 text-blue-900 hover:text-blue-700 transition-colors"
                        >
                          {item.label}
                          <ChevronDown 
                            className="h-4 w-4 transition-transform duration-100 group-data-[state=open]:rotate-180" 
                          />
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content 
                          className="absolute top-full mt-1 w-48 bg-white rounded-md shadow-lg p-2 z-[9999]"
                        >
                          <ul 
                            className="space-y-1"
                            onMouseEnter={(e) => e.preventDefault()}
                            onMouseLeave={(e) => e.preventDefault()}
                          >
                            {item.items.map((subItem) => (
                              <li key={subItem.label}>
                                <Link 
                                  href={subItem.href}
                                  className="block px-4 py-2 text-blue-900 hover:bg-blue-50 rounded-md transition-colors duration-100"
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenu.Content>
                      </>
                    ) : (
                      <Link 
                        href={item.href}
                        className="text-blue-900 hover:text-blue-700 transition-colors"
                        {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {item.label}
                      </Link>
                    )}
                  </NavigationMenu.Item>
                ))}
              </NavigationMenu.List>
            </NavigationMenu.Root>
          </div>
        </div>
      </nav>

      {/* Adjusted spacing for fixed navbar */}
      {showBackground && <div className="h-[60px] sm:h-[76px]" />}

      {/* Updated Drawer configuration */}
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="right"
        keepMounted={true}
        disableScrollLock={false}
        PaperProps={{
          sx: {
            width: "280px",
            backgroundColor: "#1e3a8a",
            color: "#ffffff",
            zIndex: 99999,
          },
        }}
        sx={{
          '& .MuiDrawer-root': {
            position: 'fixed',
          },
          '& .MuiBackdrop-root': {
            position: 'fixed',
          },
          '& .MuiDrawer-paper': {
            position: 'fixed',
          },
        }}
      >
        <div className="p-4 z-[999999]">
          <button 
            onClick={toggleDrawer(false)}
            className="mb-4 p-1.5 ml-auto block hover:bg-blue-800 rounded-md transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5 text-white" />
          </button>
          <div className="space-y-3">
            {drawerItems.map((item) => (
              <div key={item.label}>
                {item.items ? (
                  <div className="space-y-2">
                    <div className="text-base font-medium text-white border-b border-blue-800 pb-1">
                      {item.label}
                    </div>
                    <div className="pl-3 space-y-2">
                      {item.items.map((subItem) => (
                        <Link 
                          key={subItem.label} 
                          href={subItem.href}
                          className="block text-sm text-gray-200 hover:text-white transition-colors py-1"
                          onClick={handleLinkClick}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    href={item.href}
                    className="block text-base text-white hover:text-gray-200 transition-colors py-1"
                    onClick={handleLinkClick}
                    {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </Drawer>
    </header>
  );
}
