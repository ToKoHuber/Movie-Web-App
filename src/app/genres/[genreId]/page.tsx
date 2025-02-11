import { TOKEN } from "@/utility/constants";
import Header from "../../_component/Header";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Footer from "@/app/_component/Footer";
import MoviePosterSmall from "@/app/_component/cards/MoviePosterSmall";
import { PaginationPage } from "@/app/_component/SearchPagination";
import { GenrePageFilter } from "@/app/_component/Genre";

export default async function Genre({
  params,
}: {
  params: Promise<{ genreId: string }>;
}) {
  const genreId = (await params).genreId;
  const genreList = await fetch(
    "https://api.themoviedb.org/3" + `/genre/movie/list?language=en`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const genreListJson = await genreList.json();
  // console.log(data);

  const genreIds = await fetch(
    "https://api.themoviedb.org/3" +
      `/discover/movie?language=en&with_genres=${genreId}`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const genreData = await genreIds.json();
  console.log(genreData);
  return (
    <div className="flex flex-col items-center">
      <div className="w-[1280px] flex flex-col mt-[52px] justify-center gap-8">
        <div>
          <h2 className="text-[30px] leading-[36px] font-bold text-[#09090B] text-foreground ">
            Search filter
          </h2>
        </div>
        <div className="flex justify-between">
          <GenrePageFilter genreListJson={genreListJson.genres} />
          <div className="w-[806px] flex flex-col gap-8">
            <div className="font-semibold text-5 leading-[28px">
              81 titles in “Animation”
            </div>
            <div className="w-[806px] flex flex-wrap gap-12">
              {genreData.results.map((movie: MovieType) => {
                return <MoviePosterSmall movie={movie} />;
              })}
            </div>
            <PaginationPage />
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
