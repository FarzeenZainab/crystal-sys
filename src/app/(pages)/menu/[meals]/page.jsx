"use client";

import { useSearchParams } from "next/navigation";
import MealItem from "@/app/(pages)/menu/[meals]/meal-item";

import useFetch from "@/hooks/use-fetch";
import Loading from "@/components/loading";

const Meals = () => {
  const categoryId = useSearchParams().get("category");
  const apiURL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryId}`;

  const { data, loading, error } = useFetch(apiURL);

  return (
    <>
      <div className="grid grid-cols-3 gap-6 mx-auto">
        {data &&
          !loading &&
          data?.meals.map((meal) => {
            return (
              <MealItem
                key={meal?.idMeal}
                altText={`image of ${meal?.strMeal}`}
                imgURL={meal?.strMealThumb}
                title={meal?.strMeal}
                titleClasses="text-2xl"
              />
            );
          })}
      </div>

      {loading && <Loading />}

      {!data?.meals?.length && !loading && <p>No record found</p>}

      {!loading && error && <p>{error}</p>}
    </>
  );
};

export default Meals;
