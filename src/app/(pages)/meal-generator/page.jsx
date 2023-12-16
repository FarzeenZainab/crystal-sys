"use client";

import Icon from "@/components/icon";
import Loading from "@/components/loading";
import { buttonVariants } from "@/components/ui/button";
import useFetch from "@/hooks/use-fetch";
import { cn } from "@/lib/utils";

const MealGenerator = () => {
  const apiURL = "https://www.themealdb.com/api/json/v1/1/random.php";
  const { data, loading, error } = useFetch(apiURL);

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">
        {data?.meals?.[0]?.strMeal ?? "--"}
      </h1>

      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">
          Category: {data?.meals?.[0]?.strCategory ?? "-- "} | Area:{" "}
          {data?.meals?.[0]?.strArea ?? "--"}
        </p>

        <a
          href={`${data?.meals?.[0]?.strYoutube}`}
          className={cn(
            buttonVariants({ variant: "destructive" }),
            "hover:shadow"
          )}
          target="_blank"
        >
          <Icon name="Play" className="w-4 mr-2" />
          Watch Video
        </a>
      </div>

      {data?.meals?.[0] && !loading && (
        <div className="flex justify-center gap-10">
          <div className="w-[350px] h-auto flex-shrink-0 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={`${data?.meals?.[0]?.strMealThumb}`}
              alt={`${data?.meals?.[0]?.strMeal}`}
              className="w-full"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Ingredients</h2>

            <ul className="list-disc ml-6 mb-4">
              <li>all ingredients</li>
            </ul>

            <h2 className="text-xl font-bold mb-2">Instructions</h2>

            <p className="text-sm mb-4">{data?.meals?.[0]?.strInstructions}</p>
            <p className="mb-4">
              Source:{" "}
              <a
                href={`${data?.meals?.[0]?.strSource}`}
                className="text-blue-500"
                target="_blank"
              >
                BBC Good Food
              </a>
            </p>
          </div>
        </div>
      )}

      {loading && <Loading />}

      {!data?.meals?.[0] && !loading && <p>No record found</p>}

      {!loading && error && <p>{error}</p>}
    </>
  );
};

export default MealGenerator;
