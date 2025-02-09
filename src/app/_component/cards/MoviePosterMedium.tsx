import Image from "next/image";
import { MovieType } from "@/app/page";
import Link from "next/link";

export default function MoviePosterMedium({ movie }: { movie: MovieType }) {
  return (
    <Link
      href={`/details/${movie.id}`}
      className="h-[372px] w-[190px] bg-[#F4F4F5] rounded-lg overflow-hidden"
    >
      <div className="w-[190px] h-[281.381px]">
        <Image
          alt="Upcoming Movie Image"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={190}
          height={281.381}
          // layout="fill" // This will make the image stretch to fill its container
          // objectFit="cover" // Ensures the image covers the whole container
          // objectPosition="center" // Centers the image
        />
      </div>
      <div className="flex flex-col gap-[10px] p-2">
        <div className="flex gap-1 items-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99967 1.33337L10.0597 5.50671L14.6663 6.18004L11.333 9.42671L12.1197 14.0134L7.99967 11.8467L3.87967 14.0134L4.66634 9.42671L1.33301 6.18004L5.93967 5.50671L7.99967 1.33337Z"
              fill="#FDE047"
              stroke="#FDE047"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <p className="font-medium text-[14px] leading-[20px] text-[#09090B]">
              {movie.vote_average.toFixed(1)}
              <span className="font-normal text-[12px] leading-[16px]">
                /10
              </span>
            </p>
          </div>
        </div>
        <div className="w-[174px] h-[56px] font-normal text-[18px] leading-[28px] text-[#09090B]">
          {movie.original_title}
        </div>
      </div>
    </Link>
  );
}
