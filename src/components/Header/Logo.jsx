import React from 'react'
import logo from "../../assets/mainlogo.svg";

const Logo = () => {
  return (
    <>
     <div className="flex items-center gap-2">
        <div>
          <img className="w-20 h-20 object-cover p-0 m-0" src={logo} alt="" />{" "}
        </div>
        <div className="flex flex-col items-start ">
          <div>Weather</div>
          <div>LINE</div>
        </div>
      </div>
    </>
  )
}

export default Logo