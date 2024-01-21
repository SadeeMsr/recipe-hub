"use client";
import { useEffect, useState } from "react";
import SearchAndFilter from "./SearchAndFilter";
import CardGrid from "./CardGrid";
import { filterRecipes } from "@/lib/Filters";

export default function Feed() {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/recipe");
    const data = await response.json();

    setData(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);



  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterRecipes(e.target.value, data);
        setSearchedResults(searchResult);
      }, 500)
    );
  };


  
  function handleFilterByIngredients(items) {
    const itemArr = items.map((item) => {
      return item.value;
    });
    const filterResult = filterRecipes(itemArr.join(","), data);
    setSearchedResults(filterResult);
    setSearchText(itemArr.join(","));
  }

  return (
    <div className="flex mt-10 w-full">
      <SearchAndFilter
        searchText={searchText}
        handleSearchChange={handleSearchChange}
        handleFilterByIngredients={handleFilterByIngredients}
      />
      <CardGrid data={searchText ? searchedResults : data} />
    </div>
  );
}
