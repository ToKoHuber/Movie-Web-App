import Header from "../_component/Header";

export default function Genre() {
  return (
    <div>
      <Header />
      <div className="w-[1280px] flex mt-[52px] justify-center">
        <div>
          <h2 className="text-[30px] leading-[36px] font-bold text-[#09090B] text-foreground ">
            Search filter
          </h2>
        </div>
      </div>
    </div>
  );
}
