import React from 'react'
import search from "../../assets/search.svg"

const Search = () => {
  return (
    <>
    <div className="flex items-center gap-3">
          <span>Search</span>
          <div>
            <form action="">
              <div className="flex items-center ">
                <input
                  className="outline-none bg-transparent placeholder:text-white text-white text-xs md:text-base border-b-2 border-white  "
                  type="search"
                  placeholder="Search City"
                  required
                />
                <button type="submit"> <img className="w-5 h-5" src={search} alt="" /></button>
               
              </div>
            </form>
          </div>
        </div>
    </>
  )
}

export default Search