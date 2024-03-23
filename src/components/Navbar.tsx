"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { links } from "@/constants";
import Link from "next/link";
import { Menu, Search } from "lucide-react";

interface Props {
  imageUrl: string;
  name: string;
}

export const Navbar = (data: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`px-14 md:px-56 flex items-center justify-between fixed top-0 w-full h-14 z-10 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-gray-700 bg-opacity-70 py-6 " : "bg-transparent py-10 "
      }`}
    >
      <div className="flex items-center gap-2">
        <Image
          src={data.imageUrl}
          alt="Logo"
          width={30}
          height={20}
          className="rounded-full" // Unnecessary if you apply rounded-full to the wrapper
        />
        <h2 className="font-bold hidden md:block text-white text-2xl">
          {data.name}
        </h2>
      </div>
      <div className="gap-2 items-center hidden md:flex text-white">
        {links.map((item, index) => (
          <div
            key={item.hash}
            className="flex gap-2 items-center justify-center font-semibold"
          >
            <Link href={item.hash}>{item.name}</Link>

            {index !== links.length - 1 && (
              <div className="w-2 h-2  rounded-full bg-white" />
            )}
          </div>
        ))}
        <Search size={20} className="ml-5" />
      </div>
      <Menu className="block md:hidden" />
    </nav>
  );
};
