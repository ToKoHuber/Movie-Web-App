import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function GenrePageFilter({
  genreListJson,
}: {
  genreListJson: GenreType;
}) {
  return (
    <div>
      <div>
        <div className="text-[24px] font-[600] leading-[32px] ">Genres</div>
        <div className="text-[16px] font-[400] leading-[24px] mt-1 border-b-[1px] pb-4 border-border">
          <p>See lists of movies by genre</p>
        </div>
      </div>
      <ToggleGroup
        type="multiple"
        variant="outline"
        className="flex flex-wrap w-[387px] h-[272px] gap-4 mt-4 justify-start"
      >
        {genreListJson.map((genre: GenreType) => (
          <Link key={genre.id} href={`/genres/${genre.id}`}>
            <ToggleGroupItem
              value={genre.name}
              aria-label={`Toggle ${genre.name}`}
              className="py-[2px] pl-[10px] pr-1 h-[22px] rounded-full cursor-pointer flex items-center gap-1"
            >
              {genre.name}
              <ChevronRight className="size-4" />
            </ToggleGroupItem>
          </Link>
        ))}
      </ToggleGroup>
    </div>
  );
}
