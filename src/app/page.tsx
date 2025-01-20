"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export default function Home() {
  const [movie, setMovie] = useState<MovieType | undefined>();
  //fetch movie medeelel setMovie
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjA2ZmY0NGY2ZGU2NzE5ODhhMTBkYWQ3MDViMzEwOCIsIm5iZiI6MTczNzM0MTY0MS42MDksInN1YiI6IjY3OGRiYWM5ODgwZjZiZDM4NDZlMTgwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YDCvY-ICCewP1P2EvIfk3aub6Mus35EOtb3bEfkJfZo";
  const getMovie = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (data?.results) {
      setMovie(data.results[0]);
    }
  };
  useEffect(() => {
    getMovie();
    console.log("getting movie");
  }, []);
  console.log({ movie });
  return (
    <div className="flex flex-col gap-4 w-[375px] h-[510px] pl-[20px] pt-[20px]">
      <div>
        <img
          className="w-[375px] h-[246px] bg-aqua-500"
          src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
          alt=""
        />
      </div>
      <div className="flex justify-between content-between w-[335px] h-52px">
        <div className="w-[252px] h-52px">
          <div className="font-normal text-[14px] leading-[20px] text-[#09090B]">
            Now Playing:
          </div>
          <div className="font-semibold text-[24px] leading-[32px] text-[#09090B]">
            {movie?.original_title}
          </div>
        </div>
        <div className="flex items-center h-[48px]">
          {movie?.vote_average}/10
        </div>
      </div>
      <div className="w-[335px] h-100px text-[14px] leading-[20px] font-normal text-justify text-[#09090B ]">
        {movie?.overview}
      </div>
      <div className="">
        <button className="w-[145px] h-[40px] rounded-md p-[8px 16px] bg-[#18181B] text-[#FAFAFA]">
          Watch Trailer
        </button>
      </div>
    </div>
  );
}

// token: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjA2ZmY0NGY2ZGU2NzE5ODhhMTBkYWQ3MDViMzEwOCIsIm5iZiI6MTczNzM0MTY0MS42MDksInN1YiI6IjY3OGRiYWM5ODgwZjZiZDM4NDZlMTgwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YDCvY-ICCewP1P2EvIfk3aub6Mus35EOtb3bEfkJfZo

// key: cb06ff44f6de671988a10dad705b3108
