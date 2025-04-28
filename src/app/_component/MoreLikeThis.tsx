import { ArrowRight } from "lucide-react";
import MoviePosterSmall from "./cards/MoviePosterMedium";
import { Button } from "@/components/ui/button";
import { MovieType } from "@/utility/types";

export function MoreLikeThis({
  moreLikeThisDataJson,
}: {
  moreLikeThisDataJson: MovieType[]; // moreLikeThisDataJson is an array of MovieType objects
}) {
  return (
    <div className="flex flex-col gap-8">
      <div className="w-[1080px] flex justify-between">
        <h2 className="text-[24px] font-semibold leading-8">More like this</h2>
        <div className="flex items-center">
          <Button variant="ghost">See More</Button>
          <ArrowRight className="size-4" />
        </div>
      </div>
      <div className="w-[1080px] flex gap-8">
        {moreLikeThisDataJson.slice(0, 5).map((movie: MovieType) => {
          return <MoviePosterSmall key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}
