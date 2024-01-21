import { Suspense } from "react";
import Loader from "./Loader";
import Image from "next/image";
import Link from "next/link";

export default function RecipeCard({ item, idx }) {
  return (
    <div className="p-5 relative rounded-md shadow-md xl:shadow-none hover:shadow-lg">
      <span className="absolute top-1 text-3xl text-slate-300 font-semibold z-[3]">
        0{idx + 1}
      </span>
      <div className="overflow-hidden relative h-52">
        <Suspense fallback={<Loader />}>
          <Image
            alt="Mountains"
            src={"/assets/Food1.jpg"}
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 23.3vw"
            className="hover:scale-105 duration-200"
            quality={50}
            fill
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            priority
          />
        </Suspense>
      </div>
      <div className="mt-3 font-bold text-slate-700 text-center">
        <p>{item.title}</p>
      </div>
      <div className="mt-3 text-sm text-slate-500 text-center">
        {item.ingredients}
      </div>
      <div className="mt-3 text-slate-700 text-center text-sm">
        {item.instruction}
      </div>
      <Link href={`/recipe-profile/${item.id}`}>
        <button className="p-2 bg-slate-500 rounded-md text-white shadow-md hover:bg-slate-400 w-full mt-5">
          View Recipe
        </button>
      </Link>
    </div>
  );
}
