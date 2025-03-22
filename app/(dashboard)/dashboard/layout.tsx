import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>Dashboard Navber</div>
      {children}
    </div>
  );
};

export default layout;
