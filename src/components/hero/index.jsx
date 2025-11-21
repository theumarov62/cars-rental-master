import React from "react";

function Hero() {
  return (
    <section>
      <div
        className="
      max-w-[1400px] mx-auto 
      flex flex-col lg:flex-row 
      items-center justify-between 
      bg-[#5937E0] 
      bg-[url(./images/hero-images/hero-bg-img.svg)] 
      bg-no-repeat bg-bottom
      pt-12 pb-16 
      px-4 sm:px-6 lg:px-20 
      rounded-[30px] sm:rounded-[40px]
    "
      >
        {/* Left */}
        <div className="flex flex-col gap-6 sm:gap-8 lg:w-1/2 text-center lg:text-left">
          {/* Information */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <h1
              className="
            font-bold 
            text-3xl sm:text-5xl lg:text-6xl 
            text-white leading-snug
          "
            >
              Experience the road like never before
            </h1>

            <p className="font-normal text-sm sm:text-base text-white opacity-90">
              Aliquam adipiscing velit semper morbi. Purus non eu cursus
              porttitor tristique et gravida. Quis nunc interdum gravida
              ullamcorper
            </p>
          </div>

          <a
            className="
          bg-[#FF9E0C] 
          w-full sm:w-36 
          h-10 flex items-center justify-center 
          rounded-lg text-white 
          font-semibold text-sm sm:text-base mx-auto lg:mx-0
        "
            href="#"
          >
            View all cars
          </a>
        </div>

        {/* Right */}
        <form
          className="
        flex flex-col gap-5 
        w-full max-w-[370px] sm:max-w-md 
        bg-white rounded-2xl p-6 sm:p-10 
        mt-10 lg:mt-0
      "
        >
          <div className="mb-3 sm:mb-5">
            <h3 className="font-semibold text-xl sm:text-2xl text-center">
              Book your car
            </h3>
          </div>

          {[
            "Car Type",
            "Place of rental",
            "Place of return",
            "Rental date",
            "Return date",
          ].map((item, idx) => (
            <select
              key={idx}
              className="
            w-full bg-[#FAFAFA] 
            h-10 rounded-lg 
            pl-4 text-sm sm:text-base
            cursor-pointer
          "
            >
              <option>{item}</option>
            </select>
          ))}

          <a
            className="
          mt-3 sm:mt-5 
          rounded-lg w-full h-10 
          flex items-center justify-center 
          text-white font-semibold 
          text-sm sm:text-base 
          bg-[#FF9E0C]
        "
            href="#"
          >
            Book now
          </a>
        </form>
      </div>

      {/* Cards */}
      <div
        className="
      flex flex-col 
      lg:flex-row 
      items-center justify-center 
      gap-10 sm:gap-14 lg:gap-28 
      mt-12 px-4 sm:px-6
    "
      >
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className="
          flex flex-col 
          w-full max-w-[300px] sm:max-w-xs 
          items-center justify-center 
          gap-6 sm:gap-8 
          py-10
        "
          >
            <div className="flex flex-col gap-4 sm:gap-5 items-center">
              <img
                src={`./images/hero-images/card-img-${num}.svg`}
                width={64}
                height={64}
                alt="Card img"
              />

              <h4 className="text-lg sm:text-2xl font-semibold text-center">
                {num === 1 ? "Availability" : num === 2 ? "Comfort" : "Savings"}
              </h4>
            </div>

            <p className="font-normal text-sm sm:text-base leading-6 text-center opacity-80">
              {num === 1
                ? "Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis"
                : num === 2
                ? "Gravida auctor fermentum morbi vulputate ac egestas orcietium convallis"
                : "Pretium convallis id diam sed commodo vestibulum lobortis volutpat"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
