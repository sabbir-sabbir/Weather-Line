import React from "react";
import Search from "./Search";
import Logo from "./Logo";
import FavoriteListModal from "./FavoriteListModal";


const Header = () => {
  return (
    <section className="w-full h-auto  px-6  flex justify-between ">
    {/* logo components */}
     <Logo/>
      <div className="flex items-center justify-between gap-5">
        {/* Search Components */}
        <Search/>
       {/* Favorite List Modal */}
       <FavoriteListModal/>
      </div>
    </section>
  );
};

export default Header;
