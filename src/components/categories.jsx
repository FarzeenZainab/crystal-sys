"use client";

import Loading from "@/components/loading";
import CategoryItem from "@/components/category-item";

import useFetch from "@/hooks/use-fetch";

const Categories = () => {
  const apiURL = "https://www.themealdb.com/api/json/v1/1/categories.php";

  const { data, loading, error } = useFetch(apiURL);

  return (
    <>
      <div className="grid grid-cols-3 gap-6 mx-auto">
        {data &&
          !loading &&
          data?.categories.map((category) => {
            return (
              <CategoryItem
                key={category.id}
                altText={`image of ${category?.strCategory}`}
                imgURL={category?.strCategoryThumb}
                title={category?.strCategory}
                description={category?.strCategoryDescription}
                redirectTo={`/menu/meal?category=${category?.strCategory}`}
              />
            );
          })}
      </div>

      {loading && <Loading />}

      {!data?.categories?.length && !loading && <p>No record found</p>}

      {!loading && error && <p>{error}</p>}
    </>
  );
};

export default Categories;
