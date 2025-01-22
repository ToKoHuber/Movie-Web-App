import Image from "next/image";

export default function Header() {
  return (
    <div className="w-[100vw] h-[59px] flex justify-center items-center">
      <div className="w-[1280px] h-[36px] bg-slate-500 px-[16px] border-b-[1px] flex justify-between items-center">
        <div className="flex w-[92px] h-[20px] gap-2">
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
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="font-700 italic text-[16px] leading-[20px] text-[#4338CA]">
            Movie Z
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
