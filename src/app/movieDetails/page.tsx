// import Header from "../_component/Header";
// import { Play } from "lucide-react";
// import { TOKEN } from "@/utility/constants";
// import Image from "next/image";
// import {
//   Dialog,
//   DialogContent,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import Footer from "../_component/Footer";
// import MoviePosterSmall from "../_component/cards/MoviePosterSmall";

// export default async function MovieDetails() {
//   const response = await fetch(
//     "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
//     {
//       headers: {
//         Authorization: `Bearer ${TOKEN}`,
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   const data = await response.json();
//   console.log(data);

//   return (
//     <div>
//       <Header />
//       <div className="flex flex-col items-center gap-[32px]">
//         <div className="flex justify-between w-[1068px] pl-3 mt-[52px]">
//           <div className="h-[72px]">
//             <h2 className="text-[36px] leading-[40px] font-bold">
//               {data.results[0].original_title}
//             </h2>
//             <p className="text-[18px] leading-[28px] font-[400]">
//               {data.results[0].release_date} · PG · 2h 40m
//             </p>
//           </div>
//           <div className="w-[83px] h-[64px] flex flex-col gap-[10px]">
//             <p className="size-3 leading-4 font-medium">Rating</p>
//             <div className="flex items-center w-[83px] h-[48px] gap-1 ">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="28"
//                 height="28"
//                 viewBox="0 0 28 28"
//                 fill="none"
//               >
//                 <path
//                   d="M13.9997 2.33325L17.6047 9.63659L25.6663 10.8149L19.833 16.4966L21.2097 24.5233L13.9997 20.7316L6.78967 24.5233L8.16634 16.4966L2.33301 10.8149L10.3947 9.63659L13.9997 2.33325Z"
//                   fill="#FDE047"
//                   stroke="#FDE047"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//               </svg>
//               <div>
//                 <div>
//                   <h2 className="text-[18px] font-semibold text-[#09090B]">
//                     {data.results[0].vote_average.toFixed(1)}
//                     <span className="text-[16px] font-normal text-[#71717A]">
//                       /10
//                     </span>
//                   </h2>
//                 </div>
//                 <div className="text-3 font normal text-[#71717A]">
//                   {data.results[0].vote_count}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex w-[1080px] gap-[32px]">
//           <div className="w-428px h-290px">
//             <Image
//               alt="Movie details"
//               src={`https://image.tmdb.org/t/p/w500${data.results[0].poster_path}`}
//               width={290}
//               height={428}
//               className="rounded-sm"
//             />
//           </div>
//           <div className="flex gap-3 items-center relative">
//             <Image
//               src={`https://image.tmdb.org/t/p/w500${data.results[0].backdrop_path}`}
//               alt=""
//               width={760}
//               height={428}
//               className="rounded-sm"
//             />
//             <Dialog>
//               <div className="flex items-center gap-3 absolute bottom-6 left-6">
//                 <DialogTrigger asChild>
//                   <button className="w-10 h-10 rounded-full flex items-center justify-center bg-[#fff]  ">
//                     <Play stroke="black" className="size-4" />
//                   </button>
//                 </DialogTrigger>
//                 <h4 className="text-[#fff] text-[16px] font-[400] leading-[24px] ">
//                   Play Trailer
//                 </h4>
//                 <h4>{}</h4>
//               </div>
//               <DialogContent className=" border-none p-0 m-0 bg-none w-[997px] max-w-full">
//                 <iframe
//                   src={`https://www.youtube.com/embed/${data.results[0]?.key}`}
//                   width={997}
//                   height={561}
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   title={data.results[0]?.name}
//                   allowFullScreen
//                 ></iframe>
//                 <DialogTitle className="hidden"></DialogTitle>
//               </DialogContent>
//             </Dialog>
//           </div>
//         </div>
//         <div className="w-[1080px]">
//           <div></div>
//           <div className="mt-5 text-[16px] font-[400] leading-[24px]">
//             {data.results[0].overview}
//           </div>
//           <div className="w-[64px] text-[16px] font-[700] leading-[28px]">
//             Director
//           </div>
//           <div className="w-[64px] text-[16px] font-[700] leading-[28px]">
//             Writers
//           </div>
//           <div className="w-[64px] text-[16px] font-[700] leading-[28px]">
//             Stars
//           </div>
//         </div>
//         <div className="w-[1080px] h-[440px] flex flex-col gap-[32px] mb-20">
//           <div className="w-[1080px] h-[36px] flex justify-between">
//             <div>
//               <h3 className="font-semibold text-[24px] leading-[32px]">
//                 More like this
//               </h3>
//             </div>
//             <div>
//               <p className="font-medium text-[14px] leading-[20px]">See more</p>
//             </div>
//           </div>
//           <div className="w-[1080px] flex flex-wrap gap-[32px]">
//             {data.results.slice(0, 5).map((movie) => {
//               return <MoviePosterSmall movie={movie} />;
//             })}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

import { TOKEN } from "@/utility/constants";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight, PlayIcon } from "lucide-react";
import MovieCard from "@/app/_component/cards/MovieCard";

export default async function MoviePage(props: {
  params: Promise<{ movieId: string }>;
}) {
  const params = await props.params;
  const { movieId } = params;
  const getData = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  const data = await getData.json();

  const actors = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  const actorsData = await actors.json();

  const trailerData = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  const trailer = await trailerData.json();

  const similarResponse = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const similarData = await similarResponse.json();

  const trailerWeNeed = trailer.results?.find((video: Trailer) => {
    return video.type === "Trailer";
  });
  const director = actorsData.crew?.find((job: CrewType) => {
    return job.job === "Director";
  });
  const writer = actorsData.crew?.find((writer: CrewType) => {
    return writer.job === "Writer";
  });
  // console.log(director);

  const durationHour = data.runtime / 60;
  const durition = data.runtime % 60;
  const voteCount = data.vote_count / 1000;
  return (
    <div className="mx-auto max-w-[1080px]">
      <div className="flex flex-col justify-between mt-10">
        <div className="flex justify-between">
          <div>
            <p className="text-[30px] font-bold">{data.original_title}</p>
            <p>
              {data.release_date} {durationHour.toFixed(0.1)}h {durition}m{" "}
            </p>
          </div>

          <div className="flex justify-center items-center gap-2">
            <h2>Rating</h2>
            <img src="/star.svg" alt="" className="w-[30px] h-[50px]" />
            <p> {data.vote_average?.toFixed(1)}/10</p>
            <p> {voteCount.toFixed(1)}k</p>
          </div>
        </div>
        <div className="flex gap-6">
          <Image
            className="w-[300px] h-[450px] cursor-pointer rounded-lg"
            width={1000}
            height={1000}
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            alt={data.original_title}
          />
          <Dialog>
            <div className="relative">
              <Image
                className="w-full h-[450px] cursor-pointer rounded-lg relative"
                width={1000}
                height={1000}
                src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
                alt={data.original_title}
              />
              <DialogTrigger className="absolute bottom-2 left-3 text-white flex items-center gap-4">
                <PlayIcon className="bg-white text-black rounded-full p-2 w-9 h-9" />
                Play trailer
              </DialogTrigger>
            </div>
            <DialogContent className="w-[700px]">
              <DialogTitle>{""}</DialogTitle>{" "}
              <iframe
                src={`https://www.youtube.com/embed/${trailerWeNeed?.key}`}
                width={450}
                height={300}
                allowFullScreen
              ></iframe>
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-9 ">
            {data.genres?.map((genre: GenreType, index: number) => {
              return (
                <div
                  className="border rounded-xl px-3 font-semibold mt-4 text-[13px]"
                  key={index}
                >
                  {genre.name}
                </div>
              );
            })}
          </div>
          <p className="">{data.overview}</p>
          <h2 className="flex font-semibold border-b-[1px] border-secondary">
            Director: {director?.name}
          </h2>
          <p className=" flex gap-5 font-semibold border-b-[1px] border-secondary">
            Writer: {writer?.name}
          </p>
          <div className="flex font-semibold border-b-[1px] border-secondary">
            <p>Stars:</p>
            {actorsData.cast
              ?.slice(0, 5)
              .map((star: CastType, index: number) => {
                return <p key={index}>{star.name}</p>;
              })}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex justify-between mb-8">
          <h1 className="text-[24px] font-semibold">More like this</h1>
          <Link href={`/similar/${movieId}`}>
            <p className="font-semibold flex text-[16px] hover:underline underline-offset-4 cursor-pointer">
              See more <ArrowRight className="p-1" />
            </p>
          </Link>
        </div>
        <MovieCard data={similarData.results} />
      </div>
    </div>
  );
}
