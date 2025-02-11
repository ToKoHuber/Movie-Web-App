import MoviePosterSmall from "@/app/_component/cards/MoviePosterSmall";
import { GenrePageFilter } from "@/app/_component/Genre";
import Header from "@/app/_component/Header";
import { Separator } from "@/components/ui/separator";
import { TOKEN } from "@/utility/constants";
// import { console } from "inspector";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default async function SeeMore({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { value } = await searchParams;
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

  const searchData = await fetch(
    "https://api.themoviedb.org/3" +
      `/search/movie?query=${value}&language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const searchDataJson = await searchData.json();

  // console.log(searchDataJson);
  return (
    <div className="flex flex-col items-center ">
      <div className="w-[1280px] flex flex-col gap-8">
        <div className="w-[1280px]">
          <h2 className="text-[30px] font-semibold leading-[36px]">
            Search Results
          </h2>
        </div>

        <div className="flex w-[1280px] justify-between gap-7">
          <div className="w-[804px] flex flex-col gap-8">
            <p className="text-4 font-semibold leading-7">
              {searchDataJson.results.length} results for "{value}"
            </p>

            <div className="w-[804px] flex flex-wrap gap-12">
              {searchDataJson.results.map((movie: MovieType) => {
                return <MoviePosterSmall movie={movie} />;
              })}
            </div>
          </div>
          <Separator orientation="vertical" />
          <GenrePageFilter genreListJson={genreListJson.genres} />
        </div>
      </div>
    </div>
  );
}
