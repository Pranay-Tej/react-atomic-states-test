import Nav from "./Nav";
import React from "react";
export function MainLayout({ children }: { children: React.ReactElement }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}

export default MainLayout;