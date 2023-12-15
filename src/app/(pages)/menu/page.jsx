"use client";

import CategoryItem from "./category-item";
import useFetch from "@/hooks/use-fetch";

const MenuPage = () => {
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
              />
            );
          })}
      </div>

      {loading && (
        <div className="w-full block my-20">
          <div
            class="h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] mx-auto"
            role="status"
          >
            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      )}

      {!data?.categories?.length && !loading && <p>No record found</p>}

      {!loading && error && <p>{error}</p>}
    </>
  );
};

export default MenuPage;
