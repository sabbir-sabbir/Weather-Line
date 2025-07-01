import React from 'react'
import listRedHeart from "../../assets/listheart.svg"

const FavoriteListModal = () => {
  return (
    <>
     <div className="relative">
            <div className="flex items-center gap-1">
             <h3 className="cursor-pointer">Favorite Locations</h3>
             <span><img className="w-8 h-8" src={listRedHeart} alt="listRedHeart" /></span>
            </div>
            
            <ul className="absolute w-[180px] pl-6 py-2 h-[250px] cursor-pointer bg-red-400 top-[32px] right-[20px] flex flex-col items-start space-y-3">
  <li className="">Dhaka</li>
  <li className="">Rangpur</li>
  <li className="">Europe</li>
</ul>
        </div>
    </>
  )
}

export default FavoriteListModal