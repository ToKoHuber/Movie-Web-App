import Image from "next/image";

export function DetailPosterVideo({ movieJson }: { movieJson: MovieType }) {
  return (
    <div>
      <div className="flex gap-8 w-[1080px]">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movieJson.poster_path}`}
          width={290}
          height={428}
          alt="Picture of the author"
        />
        <div className="w-[760px] h-[428px] relative">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movieJson.backdrop_path}`}
            alt="Backdrop Image"
            layout="fill" // Ensures the image fills the entire div
            objectFit="cover" // Ensures the image maintains its aspect ratio while covering the div
          />
          <div className="w-[760px] h-[428px] bg-[#000]/20 top-0 absolute"></div>
          <div className="left-[24px] top-[364px] absolute text-[#FFFFFF]">
            Play trailer
          </div>
        </div>
      </div>
    </div>
  );
}
