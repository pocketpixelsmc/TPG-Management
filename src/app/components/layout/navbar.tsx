"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Drawer } from "@mui/material";
import { X, Menu, Phone, ChevronDown } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  {
    label: "Property Management",
    dropdown: [
      { href: "/services", label: "Services" },
      { href: "/pricing", label: "Pricing" },
      { href: "/multifamily", label: "Multifamily" },
      { href: "/hoa", label: "HOA" },
      { href: "/faq", label: "FAQ" }
    ],
  },
  { href: "https://tpgcompanies.managebuilding.com/Resident/public/rentals", label: "Available Rentals", external: true },
  { href: "/referral", label: "Referral" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [showBackground, setShowBackground] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const toggleDropdown = (label: string) => {
    setDropdownOpen((prev) => (prev === label ? null : label));
  };

  useEffect(() => {
    const handleScroll = () => {
      const topBarHeight = 40; // Adjust if your top bar height is different
      setShowBackground(window.scrollY >= topBarHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open]);

  return (
    <header className="w-full" role="banner">
      {/* Top Bar */}
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
          showBackground ? "fixed top-0" : "relative"
        }`}
        style={{
          backgroundColor: showBackground ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.95)",
          boxShadow: showBackground ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 sm:py-4">
            {/* Logo */}
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

            {/* Mobile Menu Button */}
            <button
              onClick={toggleDrawer(true)}
              className="xl:hidden p-1.5 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5 text-blue-900" />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex gap-6">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.label} className="relative">
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center gap-1 text-blue-900 hover:text-blue-700 transition-colors"
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {dropdownOpen === item.label && (
                      <div className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-md px-12 py-4 z-10">
                        <ul className="flex flex-col gap-2">
                          {item.dropdown.map((subItem) => (
                            <li key={subItem.label}>
                              <Link
                                href={subItem.href}
                                className="text-blue-900 hover:text-blue-700 transition-colors"
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-blue-900 hover:text-blue-700 transition-colors"
                    {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Drawer */}
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
      >
        <div className="p-4">
          <button
            onClick={toggleDrawer(false)}
            className="mb-4 p-1.5 ml-auto block hover:bg-blue-800 rounded-md transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5 text-white" />
          </button>
          <div className="space-y-3">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label}>
                  <p className="text-white font-semibold">{item.label}</p>
                  <ul className="pl-4 space-y-2">
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.label}>
                        <Link
                          href={subItem.href}
                          className="block text-white hover:text-gray-200 transition-colors"
                          onClick={handleLinkClick}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block text-base text-white hover:text-gray-200 transition-colors py-1"
                    onClick={handleLinkClick}
                    {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {item.label}
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </Drawer>
    </header>
  );
}
