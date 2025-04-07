import Spline from "@splinetool/react-spline";
import React from "react";

const Header = () => {
  return (
    <div className="absolute top-5 left-0 flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black-100">
      <Spline scene="https://prod.spline.design/3GKlh6euPIaoTGXu/scene.splinecode" />
    </div>
  );
};

export default Header;
