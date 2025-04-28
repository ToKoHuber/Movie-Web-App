import { Badge } from "@/components/ui/badge";
import { CastType, MovieType, Genre, MovieProductionType } from "@/utility/types"; // Ensure MovieProductionType is imported

export function MovieDescription({
  movieJson,
  movieProdJson,
}: {
  movieJson: MovieType;
  movieProdJson: MovieProductionType;  // Use MovieProductionType for production data
}) {
  return (
    <div className="w-[1080px] flex flex-col gap-5">
      {/* Genre Badges */}
      <div className="">
        {movieJson.genres.map((movieGenre: Genre) => {
          return (
            <Badge
              key={movieGenre.id} // Ensure to add a unique key for each item
              variant="outline"
              className="py-[2px] pl-[10px] pr-1 h-[22px] rounded-full cursor-pointer"
            >
              {movieGenre.name}
            </Badge>
          );
        })}
      </div>

      {/* Overview */}
      <div className="text-lg font-normal leading-6">{movieJson.overview}</div>

      {/* Crew and Cast Information */}
      <div className="flex flex-col gap-5">
        {/* Director */}
        <div className="flex gap-[53px]">
          <div className="w-[64px] text-lg font-bold leading-[28px]">Director</div>
          <div>{movieProdJson.crew[0]?.name}</div> {/* Optional chaining to prevent errors */}
        </div>

        {/* Writers */}
        <div className="flex gap-[53px]">
          <div className="w-[64px] text-lg font-bold leading-[28px]">Writers</div>
          <div className="flex gap-4">
            {movieProdJson.crew
              .filter(
                (crewMember: CastType) =>
                  crewMember.department === "Production" &&
                  crewMember.known_for_department === "Writing"
              )
              .map((crewMember: CastType) => {
                return <div key={crewMember.id}>{crewMember.name}</div>;
              })}
          </div>
        </div>

        {/* Cast */}
        <div className="flex gap-[53px]">
          <div className="w-[64px] text-lg font-bold leading-[28px]">Stars</div>
          <div className="flex gap-4">
            {movieProdJson.cast
              .map((castMember: CastType) => {
                return <div key={castMember.id}>{castMember.name}</div>;
              })
              .slice(0, 5)} {/* Limit to first 5 stars */}
          </div>
        </div>
      </div>
    </div>
  );
}
