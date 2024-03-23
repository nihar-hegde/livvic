import { Skill } from "@/lib/types";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Props {
  skillData: Skill[];
}

export const Skills = (data: Props) => {
  return (
    <section
      id="skills"
      className="px-52 mb-28 mt-20 scroll-mt-28 text-center sm:mb-40 bg-blue-500 py-20"
    >
      <h1 className="flex items-center justify-center text-5xl font-bold text-white mb-20 ">
        My Skills
      </h1>
      <ul className="flex  items-center flex-wrap justify-center gap-2 text-lg text-gray-800">
        {data.skillData.map((item) => (
          <li
            key={item._id}
            className="flex items-center flex-col gap-2 bg-gray-200 borderBlack rounded-md bg-gray-00 px-5 py-3 dark:bg-white/10 dark:text-white/80"
          >
            <h1 className="text-lg font-semibold">{item.name}</h1>
          </li>
        ))}
      </ul>
    </section>
  );
};
