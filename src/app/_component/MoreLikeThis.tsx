import { ArrowRight } from "lucide-react";
import MoviePosterSmall from "./cards/MoviePosterSmall";
import { Button } from "@/components/ui/button";

export function MoreLikeThis({
  moreLikeThisDataJson,
}: {
  moreLikeThisDataJson: MovieType;
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
        {moreLikeThisDataJson.results
          .map((movie) => {
            return <MoviePosterSmall movie={movie} />;
          })
          .slice(0, 5)}
      </div>
    </div>
  );
}
