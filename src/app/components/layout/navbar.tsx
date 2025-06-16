"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  {
    label: "Property Management",
    dropdown: [
      { href: "/services", label: "Services" },
      { href: "/pricing", label: "Pricing" },
      { href: "/multifamily", label: "Multifamily" },
      { href: "/servicearea", label: "Service Areas NJ" },
      { href: "/hoa", label: "HOA" },
      { href: "/faq", label: "FAQ" }
    ],
  },
  { href: "https://tpgcompanies.managebuilding.com/Resident/public/rentals", label: "Available Rentals", external: true },
  { href: "/referral", label: "Referral" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
];

const dropdownVariants = {
  hidden: { 
    opacity: 0, 
    y: -5,
    transition: { 
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.3,
      ease: "easeOut" 
    }
  }
};

export const Navbar = () => {
  const [showBackground, setShowBackground] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const toggleDropdown = (label: string) => {
    setDropdownOpen((prev) => (prev === label ? null : label));
  };

  useEffect(() => {
    const handleScroll = () => {
      const topBarHeight = 40;
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownOpen && !(event.target as Element).closest('.dropdown-container')) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <header className="w-full" role="banner">
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
              href="https://tpgmgmt.appfolio.com/oportal/users/log_in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm hover:text-blue-200 transition-colors"
            >
              Resident Login
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="https://tpgmgmt.appfolio.com/oportal/users"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm hover:text-blue-200 transition-colors"
            >
              Owner Login
            </a>
          </div>
        </div>
      </div>

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
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="TPG Management"
                width={showBackground ? 140 : 160}
                height={showBackground ? 140 : 160}
                className="transition-all duration-300 ease-in-out transform-gpu w-auto h-[40px] sm:h-[50px]"
              />
            </Link>

            <button
              onClick={() => toggleDrawer(true)}
              className="xl:hidden p-1.5 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5 text-blue-900" />
            </button>

            <div className="hidden xl:flex gap-6">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.label} className="relative dropdown-container">
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center gap-1 text-blue-900 hover:text-blue-700 transition-colors py-2"
                      aria-expanded={dropdownOpen === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <motion.div
                        animate={{ rotate: dropdownOpen === item.label ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {dropdownOpen === item.label && (
                        <motion.div
                          className="absolute left-0 top-full mt-1 bg-white shadow-lg rounded-md overflow-hidden z-20"
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={dropdownVariants}
                          style={{ 
                            transformOrigin: "top center",
                            backdropFilter: "blur(8px)",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                            border: "1px solid rgba(0,0,0,0.05)"
                          }}
                        >
                          <motion.ul 
                            className="py-2 min-w-[200px]"
                            variants={{
                              visible: {
                                transition: {
                                  staggerChildren: 0.05
                                }
                              }
                            }}
                          >
                            {item.dropdown.map((subItem) => (
                              <motion.li 
                                key={subItem.label}
                                variants={{
                                  hidden: { opacity: 0, x: -10 },
                                  visible: { opacity: 1, x: 0 }
                                }}
                                onClick={() => setDropdownOpen(null)}
                              >
                                {subItem.href.startsWith('http') ? (
                                  <a
                                    href={subItem.href}
                                    className="block px-8 py-2 text-blue-900 hover:bg-blue-50 hover:text-blue-700 transition-colors whitespace-nowrap"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {subItem.label}
                                  </a>
                                ) : (
                                  <Link
                                    href={subItem.href}
                                    className="block px-8 py-2 text-blue-900 hover:bg-blue-50 hover:text-blue-700 transition-colors whitespace-nowrap"
                                  >
                                    {subItem.label}
                                  </Link>
                                )}
                              </motion.li>
                            ))}
                          </motion.ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  item.external ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-blue-900 hover:text-blue-700 transition-colors py-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-blue-900 hover:text-blue-700 transition-colors py-2"
                    >
                      {item.label}
                    </Link>
                  )
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/30 z-[999]" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => toggleDrawer(false)}
            />
            <motion.div
              className="fixed right-0 top-0 h-full bg-blue-900 text-white w-[280px] z-[1000] shadow-xl overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
            >
              <div className="p-4">
                <button
                  onClick={() => toggleDrawer(false)}
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
                        <ul className="pl-4 space-y-2 mt-2">
                          {item.dropdown.map((subItem) => (
                            <li key={subItem.label}>
                              {subItem.href.startsWith('http') ? (
                                <a
                                  href={subItem.href}
                                  className="block text-white hover:text-gray-200 transition-colors py-1"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={handleLinkClick}
                                >
                                  {subItem.label}
                                </a>
                              ) : (
                                <Link
                                  href={subItem.href}
                                  className="block text-white hover:text-gray-200 transition-colors py-1"
                                  onClick={handleLinkClick}
                                >
                                  {subItem.label}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div key={item.label}>
                        {item.external ? (
                          <a
                            href={item.href}
                            className="block text-base text-white hover:text-gray-200 transition-colors py-1"
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={handleLinkClick}
                          >
                            {item.label}
                          </a>
                        ) : (
                          <Link
                            href={item.href}
                            className="block text-base text-white hover:text-gray-200 transition-colors py-1"
                            onClick={handleLinkClick}
                          >
                            {item.label}
                          </Link>
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
