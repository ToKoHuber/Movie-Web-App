import Header from "../_component/Header";
import { Play } from "lucide-react";
import { TOKEN } from "@/utility/constants";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Footer from "../_component/Footer";
import MoviePosterSmall from "../_component/cards/MoviePosterSmall";

export default async function MovieDetails() {
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
    <div>
      <Header />
      <div className="flex flex-col items-center gap-[32px]">
        <div className="flex justify-between w-[1068px] pl-3 mt-[52px]">
          <div className="h-[72px]">
            <h2 className="text-[36px] leading-[40px] font-bold">
              {data.results[0].original_title}
            </h2>
            <p className="text-[18px] leading-[28px] font-[400]">
              {data.results[0].release_date} · PG · 2h 40m
            </p>
          </div>
          <div className="w-[83px] h-[64px] flex flex-col gap-[10px]">
            <p className="size-3 leading-4 font-medium">Rating</p>
            <div className="flex items-center w-[83px] h-[48px] gap-1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M13.9997 2.33325L17.6047 9.63659L25.6663 10.8149L19.833 16.4966L21.2097 24.5233L13.9997 20.7316L6.78967 24.5233L8.16634 16.4966L2.33301 10.8149L10.3947 9.63659L13.9997 2.33325Z"
                  fill="#FDE047"
                  stroke="#FDE047"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div>
                <div>
                  <h2 className="text-[18px] font-semibold text-[#09090B]">
                    {data.results[0].vote_average.toFixed(1)}
                    <span className="text-[16px] font-normal text-[#71717A]">
                      /10
                    </span>
                  </h2>
                </div>
                <div className="text-3 font normal text-[#71717A]">
                  {data.results[0].vote_count}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[1080px] gap-[32px]">
          <div className="w-428px h-290px">
            <Image
              alt="Movie details"
              src={`https://image.tmdb.org/t/p/w500${data.results[0].poster_path}`}
              width={290}
              height={428}
              className="rounded-sm"
            />
          </div>
          <div className="flex gap-3 items-center relative">
            <Image
              src={`https://image.tmdb.org/t/p/w500${data.results[0].backdrop_path}`}
              alt=""
              width={760}
              height={428}
              className="rounded-sm"
            />
            <Dialog>
              <div className="flex items-center gap-3 absolute bottom-6 left-6">
                <DialogTrigger asChild>
                  <button className="w-10 h-10 rounded-full flex items-center justify-center bg-[#fff]  ">
                    <Play stroke="black" className="size-4" />
                  </button>
                </DialogTrigger>
                <h4 className="text-[#fff] text-[16px] font-[400] leading-[24px] ">
                  Play Trailer
                </h4>
                <h4>{}</h4>
              </div>
              <DialogContent className=" border-none p-0 m-0 bg-none w-[997px] max-w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${data.results[0]?.key}`}
                  width={997}
                  height={561}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title={data.results[0]?.name}
                  allowFullScreen
                ></iframe>
                <DialogTitle className="hidden"></DialogTitle>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="w-[1080px]">
          <div></div>
          <div className="mt-5 text-[16px] font-[400] leading-[24px]">
            {data.results[0].overview}
          </div>
          <div className="w-[64px] text-[16px] font-[700] leading-[28px]">
            Director
          </div>
          <div className="w-[64px] text-[16px] font-[700] leading-[28px]">
            Writers
          </div>
          <div className="w-[64px] text-[16px] font-[700] leading-[28px]">
            Stars
          </div>
        </div>
        <div className="w-[1080px] h-[440px] flex flex-col gap-[32px] mb-20">
          <div className="w-[1080px] h-[36px] flex justify-between">
            <div>
              <h3 className="font-semibold text-[24px] leading-[32px]">
                More like this
              </h3>
            </div>
            <div>
              <p className="font-medium text-[14px] leading-[20px]">See more</p>
            </div>
          </div>
          <div className="w-[1080px] flex flex-wrap gap-[32px]">
            {data.results.slice(0, 5).map((movie) => {
              return <MoviePosterSmall movie={movie} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
