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
            
            <ul className="absolute cursor-pointer bg-red-400 top-[28px]">
                <li>Dhaka</li>
                <li>Rangpur</li>
                <li>Europe</li>
            </ul>
        </div>
    </>
  )
}

export default FavoriteListModal