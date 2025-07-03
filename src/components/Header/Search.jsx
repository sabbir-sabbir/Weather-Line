import React,{useState, useContext} from 'react'
import search from "../../assets/search.svg"
import { LocationContext } from '../../context';
import { getLocationName } from '../../data/location-data';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {setSelectedLocation} = useContext(LocationContext);
  const handleSubmit = (e)=> {
   e.preventDefault();
  const fetchedLocation = getLocationName(searchTerm)
  setSelectedLocation({...fetchedLocation})
   
  }
  return (
    <>
    <div className="flex items-center gap-3">
          <span className="font-tektur text-md tracking-wider ">Search</span>
          <div>
            <form action="#" onSubmit={handleSubmit}>
              <div className="flex items-center gap-1 ">
                <input
                onChange={(e)=> setSearchTerm(e.target.value)}
                  className="outline-none bg-transparent placeholder:text-gray-300 text-black text-xs md:text-base border-b-2 border-zinc-400  "
                  type="search"
                  placeholder="Search City"
                  required
                />
                <button  type="submit" className="bg-[#ff9f1c]/65 p-1" type="submit"> <img className="w-5 h-5" src={search} alt="search icon" /></button>
               
              </div>
            </form>
          </div>
        </div>
    </>
  )
}

export default Search