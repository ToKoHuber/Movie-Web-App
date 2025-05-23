// "use client";

import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { PopoverDemo } from "./GenreButton";
import { useState } from "react";
import SearchInput from "./SearchInput";
import Link from "next/link";

export default function Header() {
  // const [searchValue, setSearchValue] = useState("");

  return (
    <div className="w-[100vw] h-[59px] flex justify-center items-center">
      <div className="w-[1280px] h-[36px] px-[16px] flex justify-between items-center">
        <Link href="/" className="flex w-[92px] h-[20px] gap-2 cursor-pointer">
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.66668 1.33333V14.6667M11.3333 1.33333V14.6667M1.33334 7.99999H14.6667M1.33334 4.66666H4.66668M1.33334 11.3333H4.66668M11.3333 11.3333H14.6667M11.3333 4.66666H14.6667M2.78668 1.33333H13.2133C14.016 1.33333 14.6667 1.98401 14.6667 2.78666V13.2133C14.6667 14.016 14.016 14.6667 13.2133 14.6667H2.78668C1.98402 14.6667 1.33334 14.016 1.33334 13.2133V2.78666C1.33334 1.98401 1.98402 1.33333 2.78668 1.33333Z"
                stroke="#4338CA"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="font-700 italic text-[16px] leading-[20px] text-[#4338CA]">
            Movie Z
          </div>
        </Link>
        <div className="flex gap-2">
          <PopoverDemo />
          {/* <div className="flex items-center gap-3">
            <Search className="-mr-8 relative size-4" />
            
            <Input className="pl-10" placeholder="Search..." />
          </div> */}
          <SearchInput />
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
