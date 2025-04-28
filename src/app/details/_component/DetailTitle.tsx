import { MovieType } from "@/utility/types";
import { Star } from "lucide-react";

export function DetailsTitle({ movieJson }: { movieJson: MovieType }) {
  return (
    <div>
      <div className="w-[1080px] flex justify-between pr-3">
        <div className="flex flex-col gap-1 text-[#09090B]">
          <h2 className="text-[36px]  font-bold leading-[40px]">
            {movieJson.original_title}
          </h2>
          <p className="text-[18px] leading-[28px] font-normal">
            {movieJson.release_date}
          </p>
        </div>
        <div className="text-[#09090B]">
          <div className="text-3 leading-4 font-medium">Rating</div>
          <div className="flex gap-1">
            <Star stroke="none" fill="#FDE047" />
            <div className="">
              <div className="text-[18px] font-semibold leading-[28px]">
                {movieJson.vote_average.toFixed(1)}
                <span className="text-[16px] leading-[24px] font-normal">
                  /10
                </span>
              </div>
              <div className="text-3 text-[#71717A] font-normal leading-4">
                {movieJson.vote_count}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
