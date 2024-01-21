import RecipeCard from "./RecipeCard";

export default function CardGrid({ data }) {
   
  return (
    <div className="w-[80%] grid grid-cols-1 lg:grid-cols-3 gap-4 ps-5">
      {data.map((item, idx) => (
        <RecipeCard key={idx} item={item} idx={idx} />
      ))}
    </div>
  );
}
