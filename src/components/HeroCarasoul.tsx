import { Service } from "@/lib/types";
import React from "react";

const HeroCarousel = ({ data }: { data: Service[] }) => {
  return (
    <section className="flex flex-col gap-4 items-start pb-10">
      <div className="flex gap-4 items-center">
        {" "}
        {/* Reduced gap */}
        <div className="w-1 h-12 bg-primary-color" /> {/* Height > width */}
        <div className="flex flex-col gap-1 text-white text-xs md:text-base font-semibold">
          {" "}
          {/* Smaller text  */}
          <p>I develop 3D visuals,</p>
          <p>user interfaces and web applications</p>
        </div>
      </div>
      <p className="text-xl md:text-5xl font-bold text-white py-4">John Doe</p>{" "}
      {/* Reduced size on mobile */}
      <div className="hidden  md:flex flex-wrap gap-2">
        {" "}
        {/* Allow wrapping */}
        {data.map((item, index) => (
          <div key={item._id} className="flex gap-2 items-center">
            <span className="text-white text-sm font-semibold">
              {" "}
              {/* Smaller text */}
              {item.name}
            </span>
            {index !== data.length - 1 && (
              <div className="w-1 h-1 rounded-full bg-white" />
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 flex-wrap">
        {" "}
        {/* Allow wrapping */}
        {/* ... your buttons ... */}
      </div>
    </section>
  );
};

export default HeroCarousel;
