import React, {useState, useContext} from "react";
import listRedHeart from "../../assets/listheart.svg";
import { FavouriteContext } from "../../context";

const FavouriteListModal = () => {
  const {favourites} = useContext(FavouriteContext)
  const [showmodal, setShowModal] = useState(false);

  // handler for modal
  const handleShowModal = ()=> {
      setShowModal((prev)=> !prev)
  }
  return (
    <>
      <div className="relative">
        <div className="flex items-center gap-1">
          <button onClick={handleShowModal} className=" font-inter cursor-pointer bg-white/10 backdrop-blur-3xl border border-white/30 text-black px-6 py-2 rounded-xl shadow-lg hover:bg-white/85 transition duration-300">Favourite Locations</button>
          <span>
            <img className="w-8 h-8" src={listRedHeart} alt="listRedHeart" />
          </span>
        </div>
          

          {showmodal && <><ul className="absolute w-[180px] pl-6 py-2 h-[250px] cursor-pointer bg-red-400 top-[32px] right-[20px] flex flex-col items-start space-y-3">
           {favourites.length > 0 ? (
            favourites.map((fav)=> (
              <li key={fav.location}>{fav.location}</li>
            ))
           ) : (
            <p>Nothing to see here</p>
           )

           }
        </ul></>

          }
        
      </div>
    </>
  );
};

export default FavouriteListModal;
