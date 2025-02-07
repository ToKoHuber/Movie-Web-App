import { TOKEN } from "@/utility/constants";
import Header from "@/app/_component/Header";
import { DetailsTitle } from "../_component/DetailTitle";
import { DetailPosterVideo } from "../_component/DetailPosterVideo";
import { MovieDescription } from "../_component/MovieDescription";

const Page = async ({ params }: { params: Promise<{ movieId: string }> }) => {
  const movieId = (await params).movieId;
  const movieData = await fetch(
    "https://api.themoviedb.org/3" + `/movie/${movieId}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const movieJson = await movieData.json();
  console.log(movieJson);

  return (
    <div className="flex flex-col items-center gap-[52px]">
      <Header />
      <DetailsTitle movieJson={movieJson} />
      <DetailPosterVideo movieJson={movieJson} />
      <MovieDescription movieJson={movieJson} />
    </div>
  );
};

export default Page;
