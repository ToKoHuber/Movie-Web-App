import MoviePosterSmall from "../_component/cards/MoviePosterSmall";
import { GenrePageFilter } from "../_component/Genre";
import Header from "../_component/Header";

export function SeeMore() {
  return (
    <div>
      <Header />
      <div>
        <div>
          <h2>Search Results</h2>
        </div>
        <div>
          <div>
            <p>5 results for MovieName</p>
            <div className="w-[804px] flex flex-wrap gap-12">
              {genreData.results.map((movie: MovieType) => {
                return <MoviePosterSmall movie={movie} />;
              })}
            </div>
          </div>
          <GenrePageFilter />
        </div>
      </div>
    </div>
  );
}
