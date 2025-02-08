import { Badge } from "@/components/ui/badge";

export function MovieDescription({
  movieJson,
  movieProdJson,
}: {
  movieJson: MovieType;
  movieProdJson: CastType;
}) {
  return (
    <div className="w-[1080px] flex flex-col gap-5">
      <div className="">
        {movieJson.genres.map((movieGenre: Genre) => {
          return (
            <Badge
              variant="outline"
              className="py-[2px] pl-[10px] pr-1 h-[22px] rounded-full cursor-pointer"
            >
              {movieGenre.name}
            </Badge>
          );
        })}
      </div>
      <div className="text-4 font-normal leading-6">{movieJson.overview}</div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-[53px]">
          <div className="w-[64px] text-4 font-bold leading-[28px]">
            Director
          </div>
          <div>{movieProdJson.crew[0].name}</div>
        </div>
        <div className="flex gap-[53px]">
          <div className="w-[64px] text-4 font-bold leading-[28px]">
            Writers
          </div>
          <div className="flex gap-4">
            {movieProdJson.crew
              .filter(
                (crewMember: CastType) =>
                  crewMember.department === "Production" &&
                  crewMember.known_for_department === "Writing"
              )
              .map((crewMember: CastType) => {
                return <div>{crewMember.name}</div>;
              })}
          </div>
        </div>
        <div className="flex gap-[53px]">
          <div className="w-[64px] text-4 font-bold leading-[28px]">Stars</div>
          <div className="flex gap-4">
            {movieProdJson.cast
              .map((castMember) => {
                return <div>{castMember.name}</div>;
              })
              .slice(0, 5)}
          </div>
        </div>
      </div>
    </div>
  );
}
