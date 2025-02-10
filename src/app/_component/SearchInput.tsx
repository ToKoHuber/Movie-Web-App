// app/_components/Input.tsx
"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Fetchdata from "@/utility/inputData";
import { MovieType } from "../page";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const searchHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value.toLowerCase();
    setSearchValue(search);

    if (search === "") {
      setSearchResults([]);
      setIsPopupVisible(false);
      return;
    }

    const searchData = await Fetchdata(
      `/search/movie?query=${e.target.value.toLowerCase()}&language=en-US`
    );

    setSearchResults(searchData.results || []);
    setIsPopupVisible(true);
  };

  const clearInput = () => {
    setSearchResults([]);
    setSearchValue("");
    setIsPopupVisible(false);
  };

  const handleSeeAllResults = () => {
    router.push(`/search?query=${encodeURIComponent(searchValue)}&page=1`);
    setIsPopupVisible(false);
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsPopupVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-[381px]">
      <div className="absolute left-2.5 top-[10px] h-4 w-4 text-muted-foreground">
        <SearchIcon className="size-4" />
      </div>
      <Input
        id="search"
        type="search"
        placeholder="Search..."
        value={searchValue}
        onChange={searchHandler}
        className="w-full h-[38px] rounded-lg bg-background py-3 pl-8 focus:outline-hidden flex items-center pt-3"
      />

      {isPopupVisible &&
      (searchResults.length > 0 || searchValue.length > 0) ? (
        <div
          ref={popupRef}
          className="w-[577px] flex p-3 flex-col items-start rounded-[8px] border-[1px] dark:border-[#27272a] dark:bg-[#09090B] bg-white border-[#efefef] absolute z-50 mt-2 ml-[-145px]"
        >
          {searchResults?.slice(0, 5).map((movie: MovieType, index: number) => (
            <Link
              href={`/details/${movie.id}`}
              key={index}
              onClick={() => clearInput()}
            >
              <div className="flex items-start self-stretch p-2 gap-4 rounded-[8px] dark:hover:bg-gray-700 w-[550px] hover:bg-[#efefef]">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  width={67}
                  height={100}
                  alt=""
                  className="rounded-[6px] cursor-pointer"
                />
                <div className="flex flex-col items-start gap-4 w-[100%]">
                  <h2 className="font-bold text-[20px]">
                    {movie.original_title}
                  </h2>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M7.99992 1.33325L10.0599 5.50659L14.6666 6.17992L11.3333 9.42659L12.1199 14.0133L7.99992 11.8466L3.87992 14.0133L4.66658 9.42659L1.33325 6.17992L5.93992 5.50659L7.99992 1.33325Z"
                        fill="#FDE047"
                        stroke="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-[14px] items-center">
                      <p className="font-semibold">
                        {movie.vote_average.toFixed(1)}
                      </p>
                      <p className="text-[12px] text-[#71717A]">/10</p>
                    </div>
                  </div>
                  <div className="flex justify-between w-[100%]">
                    <p>{movie.release_date}</p>
                    <div className="flex items-center gap-2 cursor-pointer pr-5">
                      <p className="hover:underline text-[14px]">See more</p>
                      <ArrowRight className="w-[16px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[550px] h-[1.5px] my-1 dark:bg-gray-700 bg-[#efefef]"></div>
            </Link>
          ))}
          <Link
            href={`/seeMore?value=${encodeURIComponent(searchValue)}`}
            passHref
            // энэ хэсэг дээр хуудасруугаа шилжээ датагаа дамжуулах map харах
          >
            <button
              onClick={handleSeeAllResults}
              className="w-full mt-2 p-2 text-center hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer"
            >
              See all results for "{searchValue}"
            </button>
          </Link>
        </div>
      ) : searchValue.length > 1 && searchResults.length === 0 ? (
        <div className="absolute mt-4 z-10 bg-white p-8 rounded-lg border dark:bg-[#09090B] dark:border-[#27272a]">
          <p>No results found for "{searchValue}"</p>
        </div>
      ) : null}
    </div>
  );
};

export default SearchInput;
