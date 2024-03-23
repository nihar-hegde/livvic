import React from "react";
import Image from "next/image";
import { Service } from "@/lib/types";
import { ServicesCard } from "./ServicesCard";

export const Services = ({ servicesData }: { servicesData: Service[] }) => {
  return (
    <section
      id="services"
      className="bg-services-bg w-full h-full p-5 md:p-10 pt-8 md:pt-36 flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center w-full max-w-3xl">
        <Image
          src={"/service-text.png"}
          alt="service"
          width={250}
          height={150}
        />
        <div className="mt-8 md:mt-10 container grid grid-cols-1 gap-5 md:grid-cols-2 ">
          {servicesData.map((item, index) => (
            <ServicesCard key={item._id} sData={item} SN={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
