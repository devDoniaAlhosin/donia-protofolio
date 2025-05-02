import Spline from "@splinetool/react-spline";
import React from "react";

const Header = () => {
  return (
    <div className="absolute top-0 left-[-2rem] flex h-[37rem] w-full items-start justify-center bg-white dark:bg-black-100 pt-20">
      <Spline scene="https://prod.spline.design/3GKlh6euPIaoTGXu/scene.splinecode" />
    </div>
  );
};

export default Header;
