import React from 'react'
import search from "../../assets/search.svg"

const Search = () => {
  return (
    <>
    <div className="flex items-center gap-3">
          <span className="font-tektur text-md tracking-wider ">Search</span>
          <div>
            <form action="">
              <div className="flex items-center gap-1 ">
                <input
                  className="outline-none bg-transparent placeholder:text-gray-300 text-black text-xs md:text-base border-b-2 border-zinc-400  "
                  type="search"
                  placeholder="Search City"
                  required
                />
                <button className="bg-[#ff9f1c]/65 p-1" type="submit"> <img className="w-5 h-5" src={search} alt="search icon" /></button>
               
              </div>
            </form>
          </div>
        </div>
    </>
  )
}

export default Search