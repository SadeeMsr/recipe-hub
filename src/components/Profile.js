import { Suspense } from "react";
import Loader from "./Loader";
import Image from "next/image";

export default function Profile({recipe}) {
  return (
    <div>
      <div className="relative w-[50%] h-72">
        <Suspense fallback={<Loader />}>
          <Image
            alt="Mountains"
            src={"/assets/Food1.jpg"}
            width={0}
            height={0}
            sizes="100vw"
            quality={50}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            priority
          />
        </Suspense>
      </div>
      <div className="mt-3 text_xs font-bold text-slate-700">
        <p>{recipe.title}</p>
      </div>
      <div className="mt-3 text-sm text-slate-700 ">
        {recipe?.ingredients?.map((item, idx)=> <li key={item.label}>{item.value}</li> )}
      </div>
      <div className="mt-3 text-sm text-slate-700 ">
       {recipe.instruction}
      </div>
    </div>
  );
}
