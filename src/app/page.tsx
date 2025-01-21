import { TOKEN } from "./utility/constants";

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

  return (
    <div className="flex flex-wrap gap-4 ">
      {data.results.map((data) => {
        return (
          <div className="flex flex-col gap-4 w-[375px] h-[510px] pl-[20px] pt-[20px] mb-10 justify-between">
            <div>
              <img
                className="w-[375px] h-[246px] bg-aqua-500"
                src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
                alt=""
              />
            </div>
            <div className="flex justify-between content-between w-[335px] h-52px">
              <div className="w-[252px] h-52px">
                <div className="font-normal text-[14px] leading-[20px] text-[#09090B]">
                  Now Playing:
                </div>
                <div className="font-semibold text-[24px] leading-[32px] text-[#09090B]">
                  {data.original_title}
                </div>
              </div>
              <div className="flex items-center h-[48px]">
                {data.vote_average}/10
              </div>
            </div>
            <div className="w-[335px] h-100px text-[14px] leading-[20px] font-normal text-justify text-[#09090B ]">
              {data.overview}
            </div>
            <div className="">
              <button className="w-[145px] h-[40px] rounded-md p-[8px 16px] bg-[#18181B] text-[#FAFAFA] cursor-pointer">
                Watch Trailer
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// token: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjA2ZmY0NGY2ZGU2NzE5ODhhMTBkYWQ3MDViMzEwOCIsIm5iZiI6MTczNzM0MTY0MS42MDksInN1YiI6IjY3OGRiYWM5ODgwZjZiZDM4NDZlMTgwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YDCvY-ICCewP1P2EvIfk3aub6Mus35EOtb3bEfkJfZo

// key: cb06ff44f6de671988a10dad705b3108
