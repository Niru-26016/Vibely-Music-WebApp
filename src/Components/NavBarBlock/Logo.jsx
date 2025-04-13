import React from "react";
import vibelyLogo from "../../assets/logo.png"

const Logo = () => {
  return (
    <aside className="basis-[10%] flex justify-center hover:scale-105 transition-transform duration-300">
      <figure className="">
        <img src={vibelyLogo} alt="Vibely Logo" className=" h-[70px] rounded-tr-3xl rounded-bl-3xl "/>
      </figure>
    </aside>
  );
};

export default Logo;
