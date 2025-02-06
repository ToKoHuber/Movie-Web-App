import { Star } from "lucide-react";
import Image from "next/image";

export default function Search() {
  return (
    <div className="w-[738px] bg-[#F4F4F5] rounded-lg p-2 flex gap-4">
      <div>
        <Image
          src="/profile.png"
          width={67}
          height={100}
          alt="Picture of the author"
        />
      </div>
      <div className="w-[639px]">
        <div className="flex">
          <Star className="size-[28px]" fill="#FDE047" stroke="none" />
          <p className="font-medium text-[14px] leading-[20px] text-[#09090B]">
            {/* {movie.vote_average.toFixed(1)} */}
            <span className="font-normal text-[12px] leading-[16px]">/10</span>
          </p>
        </div>
        <div>
          <div>Year</div>
          <div>See More</div>
        </div>
      </div>
    </div>
  );
}
