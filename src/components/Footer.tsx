import { User } from "@/lib/types";
import React from "react";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
interface Props {
  userData: User;
}
export const Footer = (data: Props) => {
  return (
    <section id="contact" className="bg-footer-bg px-10 md:px-52 py-10">
      <div className="pb-10">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-between ">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center bg-primary-color w-50 h-50 p-4 rounded-md text-white">
              <FaPhone />
            </div>
            <p className="text-white font-bold text-sm md:text-2xl">
              {data.userData.user.about.phoneNumber}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center bg-primary-color w-50 h-50 p-4 rounded-md text-white">
              <IoMail />
            </div>
            <p className="text-white font-bold text-sm md:text-2xl">
              {data.userData.user.email}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center bg-primary-color w-50 h-50 p-4 rounded-md text-white">
              <FaLocationDot />
            </div>
            <p className="text-white font-semibold text-sm md:text-2xl">
              {data.userData.user.about.address}
            </p>
          </div>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-10 ">
        <p className="text-white">© 2024 John Doe. All Rights Reserved.</p>
        <div className="flex items-center justify-center gap-2">
          {data.userData.user.social_handles.map((item) => (
            <Image
              key={item._id}
              src={item.image.url}
              width={50}
              height={50}
              alt="Image"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
