import { Service } from "@/lib/types";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  sData: Service;
  SN: number;
}

export const ServicesCard = (data: Props) => {
  return (
    <div className="group flex flex-col md:flex-row gap-4 md:gap-6 h-64 md:h-auto w-full shadow-md rounded-sm p-4 md:p-8 bg-blue-700">
      <div className="h-24 w-24 md:h-32 md:w-32 flex items-center justify-center rounded-full text-xl md:text-5xl font-semibold text-opacity-20 group-hover:bg-primary-color group-hover:text-white bg-blue-600 text-white transition-colors duration-500 ease-in-out">
        0{data.SN}
      </div>
      <div className="flex flex-col items-start gap-2 flex-grow">
        <h2 className="text-lg md:text-2xl font-semibold text-white">
          {data.sData.name}
        </h2>
        <p className="text-white text-sm md:text-base max-w-sm line-clamp-3">
          {data.sData.desc}
        </p>
        <Link
          href={"/"}
          className={
            "group flex items-center gap-2 text-white font-semibold text-sm md:text-base"
          }
        >
          <p>Read More</p>
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
        </Link>
      </div>
    </div>
  );
};
