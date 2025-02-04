import { TOKEN } from "../../../utility/constants";
import MovieCard from "@/app/_component/cards/MovieCard";

export default async function TopRatedMovies() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
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
    <div className="w-1437px h-[978px] px-[80px] flex flex-col gap-[32px]">
      <div className="w-[1277px] h-[36px] flex justify-between">
        <div>
          <h3 className="font-semibold text-[24px] leading-[32px]">
            Top Rated
          </h3>
        </div>
        <div>
          <p className="font-medium text-[14px] leading-[20px]">See more</p>
        </div>
      </div>
      <div className="w-[1277px] flex flex-wrap gap-[32px]">
        {data.results.slice(0, 10).map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </div>
    </div>
  );
}
