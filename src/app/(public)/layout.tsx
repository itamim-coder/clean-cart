import NavBar from "@/components/ui/NavBar";
import React from "react";


const WebLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default WebLayout;
