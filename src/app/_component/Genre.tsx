import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TOKEN } from "@/utility/constants";
import { ChevronDown, ChevronRight } from "lucide-react";

export async function PopoverDemo() {
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
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <ChevronDown /> Genre
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[577px] p-[20px]">
        <div>
          <div>
            <div className="text-[24px] font-[600] leading-[32px] ">Genres</div>
            <div className="text-[16px] font-[400] leading-[24px] mt-1 border-b-[1px] pb-4 border-border">
              <p>See lists of movies by genre</p>
            </div>
          </div>
          <div className="flex flex-wrap w-[537px] gap-4 mt-4 ">
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
      </PopoverContent>
    </Popover>
  );
}
