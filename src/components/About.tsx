import { UserAbout } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const About = ({ aboutData }: { aboutData: UserAbout }) => {
  return (
    <section
      id="about"
      className="py-10 md:py-36 flex items-center px-1 md:px-56"
    >
      <div>
        <Image
          src="/about/2.png"
          alt="Your image description"
          width={500}
          height={500}
          className="hidden lg:block"
        />
      </div>
      <div className="flex flex-col items-start justify-start  gap-4  ml-20">
        <div className="flex gap-4">
          <div className="h-4 w-0.5 bg-primary-color" />
          <div className="font-bold tracking-widest">ABOUT ME</div>
        </div>
        <h1 className="font-bold text-2xl md:text-4xl">SOFTWARE DEVELOPER</h1>
        <div className="flex gap-10">
          <p className="hidden md:flex items-center justify-center text-4xl font-bold text-white bg-primary-color rounded-md p-4 h-16 w-16">
            A
          </p>
          <p className="text-gray-600 text-xs md:text-sm font-bold max-w-96 line-clamp-3 md:line-clamp-none ">
            {aboutData.description}
          </p>
        </div>

        <Link
          href={"/"}
          className="mt-10 group tracking-widest flex items-center gap-2 bg-primary-color hover:bg-black font-bold text-white text-sm p-4  md:p-10 rounded-full transition-colors duration-500 ease-in-out"
        >
          CONTACT ME
          <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-500 ease-in-out" />
        </Link>
      </div>
    </section>
  );
};
