"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MovieType } from "../page";
import Image from "next/image";
import { Star } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CarouselPlugin({
  movies,
}: {
  movies: MovieType[];
  index: number;
}) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-[600px]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="">
        {movies.map((movie, index) => {
          return (
            <Link href={`/details/${movie.id}`} key={index}>
              <CarouselItem key={index} className="relative">
                <div className="w-[100vw] h-[600px] relative ">
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt=""
                    layout="fill" // This will make the image stretch to fill its container
                    objectFit="cover" // Ensures the image covers the whole container
                    objectPosition="center" // Centers the image
                  />
                  <div className=" w-[100vw] h-[600px] bg-[#000]/20 absolute"></div>

                  <div className="left-[140px] top-[178px] absolute">
                    <div>
                      <div className="text-4 text-white font-[400] leading-[24px]">
                        Now Playing:
                      </div>
                      <div className="text-[36px] text-[#fff] font-[700] leading-[40px] ">
                        {movie.original_title}
                      </div>
                      <div className="flex">
                        <Star
                          className="size-[28px]"
                          fill="#FDE047"
                          stroke="none"
                        />
                        <h3 className="text-[18px] font-[600] leading-[28px] text-[#fafafa] ">
                          {movie.vote_average.toFixed(1)}
                          <span className="text-[#71717A] font-[400] text-[16px] leading-[24px] ">
                            /10
                          </span>
                        </h3>
                      </div>
                    </div>
                    <div className="text-[16px] leading-[16px] text-[#fafafa] w-[310px] mt-[16px] ">
                      {movie.overview}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </Link>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="absolute left-[44px]" />
      <CarouselNext className="absolute right-[44px]" />
    </Carousel>
  );
}
