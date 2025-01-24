import { TOKEN } from "./utility/constants";
import Header from "./component/Header";
import { CarouselPlugin } from "./component/Scroll";
import MovieCardWide from "./component/MovieCardWide";
import UpcomingMovies from "./component/UpcomingMovie";

export type MovieType = {
  adult: Boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: Boolean;
  vote_average: number;
  vote_count: number;
};

export type DataType = {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
};

export default async function Home() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
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
      <CarouselPlugin data={data} />
      <UpcomingMovies />
      {/* <MovieCardWide data={data} /> */}
    </div>
  );
}

// token: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjA2ZmY0NGY2ZGU2NzE5ODhhMTBkYWQ3MDViMzEwOCIsIm5iZiI6MTczNzM0MTY0MS42MDksInN1YiI6IjY3OGRiYWM5ODgwZjZiZDM4NDZlMTgwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YDCvY-ICCewP1P2EvIfk3aub6Mus35EOtb3bEfkJfZo

// key: cb06ff44f6de671988a10dad705b3108
