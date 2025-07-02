import React from "react";
import logo from "../../assets/mainlogo.svg";

const Logo = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <div>
          <img
            className="w-20 h-20 object-cover p-0 m-0"
            src={logo}
            alt="logo"
          />{" "}
        </div>
        <div className="flex flex-col items-start ">
          <h3 className="font-inter tracking-wide text-xl font-semibold">
            <span className="text-2xl text-[#ff9f1c] ">W</span>EATHER
          </h3>
          <h3 className="font-tektur text-xl tracking-wider">
            LIN<span className=" text-2xl font-semibold text-[#fb8500]">E</span>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Logo;
