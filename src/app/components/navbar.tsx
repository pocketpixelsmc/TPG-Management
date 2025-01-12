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
  const TOP_OFFSET = 10;
  const [showBackground, setShowBackground] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackground(window.scrollY >= TOP_OFFSET);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="right"
        PaperProps={{
          sx: {
            width: "300px",
            backgroundColor: "#1e3a8a",
            color: "#ffffff",
          },
        }}
      >
        <motion.div
          className="flex flex-col h-full p-6"
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          exit={{ x: 300 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <button onClick={toggleDrawer(false)} className="self-end mb-6">
            <X className="h-6 w-6 text-white hover:text-blue-300 transition-colors duration-200" />
          </button>
          <div className="flex flex-col space-y-6">
            {drawerItems.map((item, index) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                {item.items ? (
                  <div className="space-y-2">
                    <span className="text-xl font-medium text-blue-300">{item.label}</span>
                    <div className="pl-4 space-y-2 flex flex-col">
                      {item.items.map((subItem) => (
                        <Link key={subItem.label} href={subItem.href}>
                          <span className="text-lg hover:text-blue-300 transition-colors duration-200">{subItem.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link href={item.href} {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                    <span className="text-xl font-medium hover:text-blue-300 transition-colors duration-200">{item.label}</span>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Drawer>
      <motion.div
        className="flex flex-row justify-end px-4 py-2 items-center w-[96.5%]"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: showBackground ? 0 : 1, y: showBackground ? -30 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.a
          href="tel:732-978-9390"
          className="text-center text-lg hidden lg:flex items-center gap-2 hover:text-blue-700 transition-colors duration-200 text-blue-900"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Phone className="h-5 w-5" />
          <span>732-978-9390</span>
        </motion.a>
      </motion.div>
      <motion.nav
        className={`text-blue-900 flex flex-col w-full text-sm top-0 z-10 transition-all duration-500`}
        initial={{ backgroundColor: "rgba(255, 255, 255, 0)", boxShadow: "none" }}
        animate={{
          backgroundColor: showBackground ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
          boxShadow: showBackground ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" : "none",
        }}
        transition={{ duration: 0.3 }}
        style={{
          position: showBackground ? "fixed" : "sticky",
        }}
      >
        <div className={`flex flex-row px-4 py-2 items-center  max-w-[80%] justify-between mx-auto w-full`}>
          <div className="flex flex-row gap-4 items-center justify-between">
            <Link href="/">
              <motion.div initial={{ opacity: 1 }} animate={{ opacity: showBackground ? 0.8 : 1 }} transition={{ duration: 0.5 }}>
                <Image src="/logo.png" alt="TPG Management" width={showBackground ? 175 : 250} height={showBackground ? 175 : 250} className="hover:opacity-80 transition-all duration-500 hidden lg:block" />
                <Image src="/logo.png" alt="TPG Management" width={showBackground ? 50 : 100} height={showBackground ? 50 : 100} className="hover:opacity-80 transition-all duration-500 lg:hidden" />
              </motion.div>
            </Link>
          </div>
          <motion.button onClick={toggleDrawer(true)} className="lg:hidden" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Menu className="h-6 w-6 text-blue-900" />
          </motion.button>
          <NavigationMenu.Root className="hidden lg:flex">
            <NavigationMenu.List className="flex space-x-4">
              {navItems.map((item) => (
                <NavigationMenu.Item key={item.label} className="relative">
                  {item.items ? (
                    <NavigationMenu.Trigger className="group inline-flex items-center justify-center rounded-md bg-transparent px-3 py-2 text-lg font-medium text-blue-900 hover:bg-blue-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      {item.label}
                      <ChevronDown
                        className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                        aria-hidden="true"
                      />
                    </NavigationMenu.Trigger>
                  ) : (
                    <Link href={item.href} passHref legacyBehavior>
                      <NavigationMenu.Link className="inline-flex items-center justify-center rounded-md bg-transparent px-3 py-2 text-lg font-medium text-blue-900 hover:bg-blue-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        {item.label}
                      </NavigationMenu.Link>
                    </Link>
                  )}
                  {item.items && (
                    <NavigationMenu.Content className="absolute left-0 top-full mt-2">
                      <ul className="m-0 grid w-[200px] gap-3 p-4 bg-white shadow-lg rounded-md">
                        {item.items.map((subItem) => (
                          <li key={subItem.label}>
                            <NavigationMenu.Link asChild>
                              <Link
                                href={subItem.href}
                                className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-100 hover:text-blue-700 focus:bg-blue-100 focus:text-blue-700"
                              >
                                {subItem.label}
                              </Link>
                            </NavigationMenu.Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenu.Content>
                  )}
                </NavigationMenu.Item>
              ))}
              <AnimatePresence>
                {showBackground && (
                  <motion.a
                    href="tel:732-978-9390"
                    className="text-center text-lg hidden sm:flex items-center gap-2 hover:text-blue-700 transition-colors duration-200"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="h-5 w-5" />
                    <span>732-978-9390</span>
                  </motion.a>
                )}
              </AnimatePresence>
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </div>
      </motion.nav>
    </>
  );
}
