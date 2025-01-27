export default function Footer() {
  return (
    <div className="w-[100vw] h-[280px] bg-[#4338CA] flex  justify-center items-center">
      <div className="w-[1280px] h-[200px]  flex justify-between">
        <div className="flex flex-col gap-3 ">
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
                  stroke="#FAFAFA"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="font-700 italic text-[16px] leading-[20px] text-[#FAFAFA]">
              Movie Z
            </div>
          </div>
          <div className="font-normal text-[14px] leading-5 text-[#FAFAFA]">
            © 2024 Movie Z. All Rights Reserved.
          </div>
        </div>
        <div></div>
        <div className="flex flex-col gap-3 text-[#FAFAFA] text-[14px] leading-5">
          <div className="font-normal">Contact Information</div>
          <div className="font-medium">
            <div className="flex gap-3 items-center">
              <div>
                <svg
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6663 2.66663L8.68634 6.46663C8.48052 6.59558 8.24255 6.66397 7.99967 6.66397C7.7568 6.66397 7.51883 6.59558 7.31301 6.46663L1.33301 2.66663M2.66634 0.666626H13.333C14.0694 0.666626 14.6663 1.26358 14.6663 1.99996V9.99996C14.6663 10.7363 14.0694 11.3333 13.333 11.3333H2.66634C1.92996 11.3333 1.33301 10.7363 1.33301 9.99996V1.99996C1.33301 1.26358 1.92996 0.666626 2.66634 0.666626Z"
                    stroke="#FAFAFA"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                Email:
                <br />
                support@movieZ.com
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3359_651)">
                  <path
                    d="M14.6669 11.28V13.28C14.6677 13.4657 14.6297 13.6494 14.5553 13.8195C14.4809 13.9897 14.3718 14.1424 14.235 14.2679C14.0982 14.3934 13.9367 14.489 13.7608 14.5485C13.5849 14.6079 13.3985 14.63 13.2136 14.6133C11.1622 14.3904 9.19161 13.6894 7.46028 12.5667C5.8495 11.5431 4.48384 10.1774 3.46028 8.56665C2.3336 6.82745 1.63244 4.84731 1.41361 2.78665C1.39695 2.60229 1.41886 2.41649 1.47795 2.24107C1.53703 2.06564 1.63199 1.90444 1.75679 1.76773C1.88159 1.63102 2.03348 1.52179 2.20281 1.447C2.37213 1.37221 2.55517 1.33349 2.74028 1.33332H4.74028C5.06382 1.33013 5.37748 1.4447 5.62279 1.65567C5.8681 1.86664 6.02833 2.15961 6.07361 2.47998C6.15803 3.12003 6.31458 3.74847 6.54028 4.35332C6.62998 4.59193 6.64939 4.85126 6.59622 5.10057C6.54305 5.34988 6.41952 5.57872 6.24028 5.75998L5.39361 6.60665C6.34265 8.27568 7.72458 9.65761 9.39361 10.6067L10.2403 9.75998C10.4215 9.58074 10.6504 9.45722 10.8997 9.40405C11.149 9.35088 11.4083 9.37029 11.6469 9.45998C12.2518 9.68568 12.8802 9.84224 13.5203 9.92665C13.8441 9.97234 14.1399 10.1355 14.3513 10.385C14.5627 10.6345 14.6751 10.953 14.6669 11.28Z"
                    stroke="#FAFAFA"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3359_651">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <div>
                Phone:
                <br />
                +976 (11) 123-4567
              </div>
            </div>
          </div>
        </div>
        <div className="text-[#FAFAFA] text-[14px] leading-5 gap-3">
          <div className="font-normal">Follow us </div>
          <div className="font-medium flex gap-3">
            <div>Facebook</div>
            <div>Instagram</div>
            <div>Twitter</div>
            <div>Youtube</div>
          </div>
        </div>
      </div>
    </div>
  );
}
