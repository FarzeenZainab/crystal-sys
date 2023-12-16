import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";

import truncateString from "@/helpers/truncate-string";

import { cn } from "@/lib/utils";

const ListItem = ({
  imgURL,
  altText,
  title,
  titleClasses,
  description,
  redirectTo,
}) => {
  return (
    <div className="group bg-zinc-100 rounded-2xl hover:shadow-lg overflow-hidden transition-all duration-300 border-2 border-zinc-300 border-transparent hover:border-green-500">
      <div className="flex justify-center border-b-2 rounded-b-none border-zinc-300 transition-all duration-300 group-hover:border-green-500 py-4 rounded-2xl relative">
        <div className="w-[220px] ">
          <Image
            alt={altText}
            src={imgURL ?? "https://www.themealdb.com/images/category/beef.png"}
            width={250}
            height={150}
            layout="responsive"
          />
        </div>
      </div>

      <div className="p-4 pb-5 ">
        <h2 className={cn(titleClasses, "mb-2")}>{title ?? "Beef"}</h2>

        {description && <p>{truncateString(description, 120)}</p>}

        <a
          href={redirectTo}
          className={cn(buttonVariants({ variant: "default" }), "mt-4")}
        >
          View Dishes
        </a>
      </div>
    </div>
  );
};

export default ListItem;
