import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>Homepage Navbar</div>
      {children}
    </div>
  );
};

export default layout;
