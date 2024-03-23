import { User } from "@/lib/types";
import { userData } from "@/lib/actions/user.action";
import { FaArrowDown } from "react-icons/fa";
import HeroCarousel from "./HeroCarasoul";

export const Hero = async () => {
  const data: User = await userData();

  return (
    <section className="flex flex-col items-center justify-between gap-5 w-full bg-[#1a22cc] pt-20 md:pt-40 pb-10 px-5 md:px-20">
      {" "}
      {/* Adjusted padding */}
      <HeroCarousel data={data.user.services} />
      <div className="hero-scrolli flex justify-center">
        {" "}
        {/* Center scroll icon */}
        <span className="animate-bounce">
          {" "}
          {/* Add bounce */}
          <FaArrowDown />
        </span>
      </div>
    </section>
  );
};
