import { TOKEN } from "@/utility/constants";
import Header from "../../_component/Header";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Footer from "@/app/_component/Footer";
import MoviePosterSmall from "@/app/_component/cards/MoviePosterSmall";

export default async function Genre({
  params,
}: {
  params: Promise<{ genreId: string }>;
}) {
  const genreId = (await params).genreId;
  const response = await fetch(
    "https://api.themoviedb.org/3" + `/genre/movie/list?language=en`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
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
            <ToggleGroup
              type="multiple"
              variant="outline"
              className="flex flex-wrap w-[387px] h-[272px] gap-4 mt-4 justify-start"
            >
              {data.genres.map((genre: GenreType) => (
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
          <div className="w-[806px] flex flex-col gap-8">
            <div className="font-semibold text-5 leading-[28px">
              81 titles in “Animation”
            </div>
            <div className="w-[806px] flex flex-wrap gap-12">
              {genreData.results.map((movie: MovieType) => {
                return <MoviePosterSmall movie={movie} />;
              })}
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
