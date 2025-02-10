"use client";

import { useEffect, useState } from "react";
import MovieCard from "../_component/cards/MoviePosterBig";

const Page = () => {
  const [fetchedData, setFetchedData] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:4000/popular");
      const data = await res.json();
      setFetchedData(data.popular.results);
    };
    getData();
  }, []);
  console.log(fetchedData);
  return (
    <div className="w-[1080px] flex flex-wrap gap-8">
      {fetchedData?.map((movie: MovieType) => {
        return <MovieCard movie={movie} />;
      })}
    </div>
  );
};

export default Page;
