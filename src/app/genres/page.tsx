import { TOKEN } from "@/utility/constants";
import Header from "../_component/Header";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

export default async function Genre() {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data);
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="w-[1280px] flex flex-col mt-[52px] justify-center gap-8">
        <div>
          <h2 className="text-[30px] leading-[36px] font-bold text-[#09090B] text-foreground ">
            Search filter
          </h2>
        </div>
        <div className="flex justify-between">
          <div>
            <div>
              <div className="text-[24px] font-[600] leading-[32px] ">
                Genres
              </div>
              <div className="text-[16px] font-[400] leading-[24px] mt-1 border-b-[1px] pb-4 border-border">
                <p>See lists of movies by genre</p>
              </div>
            </div>
            <div className="flex flex-wrap w-[387px] h-[272px] gap-4 mt-4 ">
              {data.genres.map((movie) => {
                return (
                  <Badge
                    variant="outline"
                    className="py-[2px] pl-[10px] pr-1 h-[22px] rounded-full cursor-pointer"
                  >
                    {movie.name}
                    <ChevronRight className="size-4" />
                  </Badge>

                  // <p>{movie.name}</p>
                );
              })}
            </div>
          </div>
          <div className="w-[806px]">
            <div className="font-semibold text-5 leading-[28px]">
              81 titles in “Animation”
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
