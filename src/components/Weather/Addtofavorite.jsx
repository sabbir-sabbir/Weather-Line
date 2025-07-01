import React from 'react'
import addheart from "../../assets/addheart.svg"

const Addtofavorite = () => {
  return (
    <>
    <section className="  w-full h-auto px-5 flex items-end justify-end">
        <div className="flex items-center gap-3"> 
            <h3 className="text-2xl">Add to favorite</h3>
            <span><img className="w-8 h-8 cursor-pointer" src={addheart} alt="heart Icon" /></span>
        </div>
        
    </section>
    </>
  )
}

export default Addtofavorite