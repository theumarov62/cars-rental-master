import { useEffect } from "react";
import { useSelector } from "react-redux";

const SelectCategory = ({ type, setType }) => {
  const data = useSelector((state) => state.carsdata.data);
  const categorys = useSelector((state) => state.carsdata.categorys);

  return (
    <section className="category ">
      <div className="mycon flex flex-col gap-2 sm:gap-4 md:gap-6 xl:gap-8">
        <h5 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl ">
          Select a vehicle group
        </h5>

        <div
          className="
        w-full max-w-[800px] m-auto 
        flex flex-wrap items-center justify-center 
        gap-2 sm:gap-3 md:gap-5
      "
        >
          {categorys.map((LocalType, idx) => {
            return (
              <button
                onClick={() => setType(LocalType)}
                key={idx}
                className={`
              ${LocalType == type ? "bg-purple-600" : "bg-gray-600"}
              px-4 py-2 rounded-3xl text-white cursor-pointer 
              text-sm sm:text-base
              transition-all duration-200 active:scale-95
            `}
              >
                {LocalType.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SelectCategory;
