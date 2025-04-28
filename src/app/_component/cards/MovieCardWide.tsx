import Image from "next/image";
import { MovieCardData, MovieType } from "@/utility/types";

export default function MovieCard({ data }: {data: MovieCardData}) {
  return (
    <div className="flex flex-wrap gap-10">
      {data.results.map((movie: MovieType) => {
        return (
          <div
            key={movie.id} // Use a unique key for each movie
            className="flex flex-col gap-4 w-[375px] h-[510px] pl-[20px] pt-[20px] mb-10 justify-between"
          >
            <Image
              alt={movie.original_title || "Movie Poster"} // Fallback alt text
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              width={375}
              height={246}
              className="rounded-lg" // Optional: Add rounded corners for a nicer look
            />
            <div className="flex justify-between w-[335px] h-[52px]">
              <div className="w-[252px]">
                <div className="font-normal text-[14px] leading-[20px] text-[#09090B]">
                  Now Playing:
                </div>
                <div className="font-semibold text-[24px] leading-[32px] text-[#09090B]">
                  {movie.original_title}
                </div>
              </div>
              <div className="flex items-center h-[48px]">
                {movie.vote_average}/10
              </div>
            </div>
            <div className="w-[335px] h-[100px] text-[14px] leading-[20px] font-normal text-justify text-[#09090B]">
              {movie.overview}
            </div>
            <div>
              <button className="w-[145px] h-[40px] rounded-md p-[8px 16px] bg-[#18181B] text-[#FAFAFA] cursor-pointer">
                Watch Trailer
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
