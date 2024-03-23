import { Navbar } from "@/components/Navbar";
import { userData } from "@/lib/actions/user.action";
import { User } from "@/lib/types";
import React, { ReactNode } from "react";

const Layout = async ({ children }: { children: ReactNode }) => {
  const data: User = await userData();
  return (
    <div>
      <Navbar
        imageUrl={data.user.about.avatar.url}
        name={data.user.about.name}
      />
      {children}
    </div>
  );
};

export default Layout;
