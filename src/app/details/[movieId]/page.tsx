import { TOKEN } from "@/utility/constants";
import Header from "@/app/_component/Header";
import { DetailsTitle } from "../_component/DetailTitle";
import { DetailPosterVideo } from "../_component/DetailPosterVideo";
import { MovieDescription } from "../_component/MovieDescription";
import { MoreLikeThis } from "@/app/_component/MoreLikeThis";
import Footer from "@/app/_component/Footer";

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

  const movieProdData = await fetch(
    "https://api.themoviedb.org/3" + `/movie/${movieId}/credits?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const movieProdJson = await movieProdData.json();
  console.log(movieProdJson);

  const MoreLikeThisData = await fetch(
    "https://api.themoviedb.org/3" +
      `/movie/${movieId}/similar?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const moreLikeThisDataJson = await MoreLikeThisData.json();
  console.log(moreLikeThisDataJson);

  return (
    <div className="flex flex-col items-center gap-[52px]">
      <DetailsTitle movieJson={movieJson} />
      <DetailPosterVideo movieJson={movieJson} />
      <MovieDescription movieJson={movieJson} movieProdJson={movieProdJson} />
      <MoreLikeThis moreLikeThisDataJson={moreLikeThisDataJson} />
    </div>
  );
};

export default Page;
