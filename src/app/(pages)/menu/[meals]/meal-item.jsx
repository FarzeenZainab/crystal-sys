import AddToFavourites from "@/components/add-to-favourites";

import { cn } from "@/lib/utils";

const ListItem = ({ imgURL, title, titleClasses, id }) => {
  return (
    <div className="group bg-zinc-100 rounded-2xl hover:shadow-lg overflow-hidden transition-all duration-300 border-2 border-zinc-300 border-transparent hover:border-green-500">
      <div className="relative">
        <div
          className={`h-[250px] bg-cover bg-center border-b-2 border-zinc-300`}
          style={{ backgroundImage: `url(${imgURL})` }}
        >
          {/* content */}
          <div className="relative z-10 h-full flex items-end">
            <AddToFavourites mealId={id} />

            <h2 className={cn(titleClasses, "mb-2 text-white p-4 pb-5")}>
              {title ?? "Sandwich"}
            </h2>
          </div>
        </div>

        {/* overlay */}
        <div className="absolute top-0 left-0 h-full w-full inset-0 bg-gradient-to-b from-transparent to-zinc-900 bg-blend-multiply"></div>
      </div>
    </div>
  );
};

export default ListItem;
