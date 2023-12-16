import { useEffect, useState } from "react";

import Icon from "@/components/icon";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

const AddToFavourites = ({ mealId }) => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavourites =
      JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(storedFavourites);
  }, []);

  const handleClick = (id) => {
    // creating an array in the local storage

    // onClick if the item is already marked as favourite -> remove meal from the array
    // if (favourites.includes(mealId)) {
    //   localStorage.setItem(
    //     "favourites",
    //     JSON.stringify(
    //       favourites?.filter((id) => {
    //         id !== mealId?.toString();
    //       })
    //     )
    //   );
    // }

    // when clicked on the button, get the meal id and push to this array
    // favourites?.push(mealId);
    // localStorage?.setItem("favourites", JSON.stringify(favourites));

    console.log(localStorage?.getItem("favourites"));
  };

  return (
    <Button
      className="absolute top-4 right-4 group"
      variant="icon"
      size="icon"
      onClick={() => {
        handleClick(mealId);
      }}
    >
      <Icon
        name="Heart"
        className={cn(
          "hover:fill-rose-500 hover:stroke-rose-500",
          favourites?.includes(mealId) ? "fill-rose-500 stroke-rose-500" : ""
        )}
      />
    </Button>
  );
};

export default AddToFavourites;
