import { useLocalStorage } from "../hooks";
import { FavouriteContext } from "../context";

const FavouriteProviderComponent = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  const addToFavourite = (latitude, longitude, location) => {
    setFavourites(...favourites, {
      latitude: "latitude",
      longitude: "longitude",
      location: "location",
    });
  };

  const removeFromfavourite = (location) => {
    const restfavourites = favourites.filter(
      (fav) => fav.location !== location
    );
    setFavourites(restfavourites);
  };
  return (
    <FavouriteContext.Provider value={{ favourites, addToFavourite, removeFromfavourite }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProviderComponent;