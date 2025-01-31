import Image from "next/image";
import { DataType } from "../page";

export default function MovieCard({ data }: { data: DataType }) {
  return (
    <div>
      {data.results.map((movie) => {
        return (
          <div className="flex flex-col gap-4 w-[375px] h-[510px] pl-[20px] pt-[20px] mb-10 justify-between">
            <Image
              alt="tailbar"
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              width={375}
              height={246}
            />
            <div className="flex justify-between content-between w-[335px] h-52px">
              <div className="w-[252px] h-52px">
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
            <div className="w-[335px] h-100px text-[14px] leading-[20px] font-normal text-justify text-[#09090B ]">
              {movie.overview}
            </div>
            <div className="">
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
