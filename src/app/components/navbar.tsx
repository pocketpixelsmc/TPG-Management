"use client";
import Link from "next/link";
import Image from "next/image";
import "./underline.css";
import { useEffect, useState } from "react";
import { Button, Drawer } from "@mui/material";

export default function Navbar() {
  const TOP_OFFSET = 10;
  const [showBackground, setShowBackground] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    if (window.scrollY >= TOP_OFFSET) setShowBackground(true);
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="right"
        className="p-4"
        PaperProps={{
          sx: {
            color: "#1e3a8a",
            padding: "1rem",
            fontSize: "1.5rem",
          },
        }}
      >
        <Link href="/">
          <button className="m-2 xl:text-2xl">
            <p className="navControl">Home</p>
          </button>
        </Link>
        <Link href="/about">
          <button className="m-2 xl:text-2xl">
            <p className="navControl">About</p>
          </button>
        </Link>
        <Link href="/pricing">
          <button className="m-2 xl:text-2xl">
            <p className="navControl">Pricing</p>
          </button>
        </Link>
        <Link href="/referral">
          <button className="m-2 xl:text-2xl">
            <p className="navControl">Referral</p>
          </button>
        </Link>
        <a href="https://tpgcompanies.managebuilding.com/Resident/public/rentals" rel="noopener" target="_blank">
          <button className="m-2 xl:text-2xl">
            <p className="navControl">Available Properties</p>
          </button>
        </a>
        <Link href="/contact">
          <button className="m-2 xl:text-2xl">
            <p className="navControl">Contact Us</p>
          </button>
        </Link>
      </Drawer>
      <nav
        className={`text-blue-900 py-1 mt-[10px] flex flex-col gap-2 w-full text-xs sm:text-sm sticky top-0 z-10 transition-all duration-300 pb-2`}
        style={{ backgroundColor: showBackground ? "#e2e8f0" : undefined }}
      >
        <div className="flex flex-row justify-between px-4 xl:px-0 xl:justify-around items-center mt-4">
          <Link href="/">
            <Image src="/logo.png" alt="TPG Management" width={200} height={200} className=" w-[100px] md:w-[150px] lg:w-[200px]" />
          </Link>
          <Image
            onClick={toggleDrawer(true)}
            className="inline-block xl:hidden self-end cursor-pointer"
            src="/menu.svg"
            alt="Menu"
            width={50}
            height={50}
          />
          <div className={` flex-row gap-3 justify-center items-center px-2 font-normal hidden xl:flex`}>
            <Link href="/">
              <button className="m-2 xl:text-2xl">
                <p className="navControl">Home</p>
              </button>
            </Link>
            <Link href="/about">
              <button className="m-2 xl:text-2xl">
                <p className="navControl">About</p>
              </button>
            </Link>
            <Link href="/pricing">
              <button className="m-2 xl:text-2xl">
                <p className="navControl">Pricing</p>
              </button>
            </Link>
            <Link href="/referral">
              <button className="m-2 xl:text-2xl">
                <p className="navControl">Referral</p>
              </button>
            </Link>
            <a href="https://tpgcompanies.managebuilding.com/Resident/public/rentals" rel="noopener" target="_blank">
              <button className="m-2 xl:text-2xl">
                <p className="navControl">Available Properties</p>
              </button>
            </a>
            <Link href="/contact">
              <button className="m-2 xl:text-2xl">
                <p className="navControl">Contact Us</p>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
