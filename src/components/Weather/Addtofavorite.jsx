import React, {useContext, useState, useEffect} from 'react'
import addheart from "../../assets/addheart.svg"
import doneHeart from "../../assets/doneHeart.svg"
import { FavouriteContext, WeatherContext } from '../../context'

const Addtofavorite = () => {
  const [isfavourite, toggleFavourite] = useState(false);
  const {favourites, addToFavourites, removeFromFavourites} = useContext(FavouriteContext);
  const {weatherData} = useContext(WeatherContext);
  const {latitude, longitude, location} = weatherData;

   useEffect(() => {
        const found = favourites.find((fav) => fav.location === location);
        toggleFavourite(found);
    }, []);


  // favourite handler
 const handleFavourites = () => {
  const found = favourites.find((fav) => fav.location === location);

  if (!found) {
    addToFavourites(latitude, longitude, location);
  } else {
    removeFromFavourites(location);
  }

  toggleFavourite((prev) => !prev);
};

  return (
    <>
    <section className="  w-full h-auto px-5 flex items-end justify-end">
        <div className="flex items-center gap-3"> 
            <button onClick={handleFavourites} className="text-2xl">Add to favorite</button>
            <span><img className="w-8 h-8 cursor-pointer" src={isfavourite ? doneHeart : addheart} alt="heart Icon" /></span>
        </div>
        
    </section>
    </>
  )
}

export default Addtofavorite