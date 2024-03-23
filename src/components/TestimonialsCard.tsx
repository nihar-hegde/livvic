import { Testimonial } from "@/lib/types";
import Image from "next/image";
import React from "react";

interface Props {
  tData: Testimonial;
}
export const TestimonialsCard = (data: Props) => {
  return (
    <div className="mb-6 lg:mb-0">
      <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="flex">
          <div
            className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <Image
              src={data.tData.image.url}
              alt="Image"
              width={100}
              height={100}
              className="w-full"
            />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
        </div>
        <div className="p-6">
          <h5 className="mb-2 text-lg font-bold">{data.tData.name}</h5>
          <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
            {data.tData.position}
          </h6>
          <ul className="mb-6 flex justify-center">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
                className="w-5 text-warning"
              >
                <path
                  fill="currentColor"
                  d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
                className="w-5 text-warning"
              >
                <path
                  fill="currentColor"
                  d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
                className="w-5 text-warning"
              >
                <path
                  fill="currentColor"
                  d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
                className="w-5 text-warning"
              >
                <path
                  fill="currentColor"
                  d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
                className="w-5 text-warning"
              >
                <path
                  fill="currentColor"
                  d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z"
                />
              </svg>
            </li>
          </ul>
          <p className="line-clamp-4 md:line-clamp-none">{data.tData.review}</p>
        </div>
      </div>
    </div>
  );
};
