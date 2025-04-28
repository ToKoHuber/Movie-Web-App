import { TOKEN } from "../utility/constants";
import { CarouselPlugin } from "./_component/Carousel";
import UpcomingMovies from "./_component/category/UpcomingMovie";
import PopularMovies from "./_component/category/PopularMovie";
import TopRatedMovies from "./_component/category/TopRated";
import { MovieType } from "@/utility/types"; // Ensure MovieType is imported

export default async function Home() {
  // Fetch the upcoming movies data
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  // Parse the JSON response and cast it to MovieType array
  const data = await response.json();
  const movies: MovieType[] = data.results;

  console.log(movies); // Logging the movies data

  // We can use a default index value of 0 or any other dynamic value
  const index = 0; // For now, set to 0 (first movie)

  return (
    <div className="flex flex-col items-center gap-[52px]">
      {/* Pass both movies and index as props */}
      <CarouselPlugin movies={movies} index={index} />
      
      {/* Other components */}
      <UpcomingMovies />
      <PopularMovies />
      <TopRatedMovies />
    </div>
  );
}


// token: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjA2ZmY0NGY2ZGU2NzE5ODhhMTBkYWQ3MDViMzEwOCIsIm5iZiI6MTczNzM0MTY0MS42MDksInN1YiI6IjY3OGRiYWM5ODgwZjZiZDM4NDZlMTgwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YDCvY-ICCewP1P2EvIfk3aub6Mus35EOtb3bEfkJfZo

// key: cb06ff44f6de671988a10dad705b3108
