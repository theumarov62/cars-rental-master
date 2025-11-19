import React from "react";

function Hero() {
  return (
    <section>
      <div className=" max-w-[1400px] ml-auto mr-auto flex items-center justify-between bg-[#5937E0] bg-[url(./images/hero-images/hero-bg-img.svg)] bg-no-repeat bg-bottom pt-[78px] pb-[78px] pl-[72px] pr-[78px] rounded-[40px]">
        {/* Left */}
        <div className="flex flex-col gap-[33px]">
          {/* Information */}
          <div className="flex flex-col gap-[27px] w-[686px]">
            <h1 className="font-[700] text-[60px] text-white">
              Experience the road like never before
            </h1>
            <p className="font-[400] text-[16px] text-white">
              Aliquam adipiscing velit semper morbi. Purus non eu cursus
              porttitor tristique et gravida. Quis nunc interdum gravida
              ullamcorper
            </p>
          </div>
          <a
            className="bg-[#FF9E0C] w-[154px] h-[40px] flex items-center justify-center rounded-[12px] text-white font-[600] "
            href="#"
          >
            View all cars
          </a>
        </div>

        {/* Right */}

        <form className="flex flex-col gap-[20px] w-[416px] bg-white rounded-[20px] pb-[40px] pt-[40px] pl-[40px] pr-[40px]">
          <div className="mb-[20px]">
            <h3 className="font-[600] text-[28px] text-center">
              Book your car
            </h3>
          </div>
          <select
            className="w-[336px] bg-[#FAFAFA] h-[38px] rounded-[12px] pl-[16px] pt-[9px] pb-[9px] cursor-pointer"
            id="CarType"
          >
            <option>Car Type</option>
          </select>
          <select
            className="w-[336px] bg-[#FAFAFA] h-[38px] rounded-[12px] pl-[16px] pt-[9px] pb-[9px] cursor-pointer"
            id="PlaceOfRental"
          >
            <option>Place of rental</option>
          </select>

          <select
            className="w-[336px] bg-[#FAFAFA] h-[38px] rounded-[12px] pl-[16px] pt-[9px] pb-[9px] cursor-pointer"
            id="PlaceOfReturn"
          >
            <option>Place of return</option>
          </select>
          <select
            className="w-[336px] bg-[#FAFAFA] h-[38px] rounded-[12px] pl-[16px] pt-[9px] pb-[9px] cursor-pointer"
            id="RentalDate"
          >
            <option>Rental date</option>
          </select>
          <select
            className="w-[336px] bg-[#FAFAFA] h-[38px] rounded-[12px] pl-[16px] pt-[9px] pb-[9px] cursor-pointer"
            id="ReturnDate"
          >
            <option>Return date</option>
          </select>
          <a
            className="mt-[20px] rounded-[12px] w-[336px] h-[40px] flex items-center justify-center text-white font-[600] text-[16px] bg-[#FF9E0C]"
            href="#"
          >
            Book now
          </a>
        </form>
      </div>
      <div className="flex items-center justify-center gap-[112px]">
        <div className="flex flex-col w-[357px] items-center justify-center gap-[30px] pt-[60px] pb-[60px]">
          {/* Card 1 */}
          <div className="flex flex-col gap-[20px] items-center">
            <img
              src="./images/hero-images/card-img-1.svg"
              width={64}
              height={64}
              alt="Card img"
            />
            <h4 className="text-[24px] font-[600] text-center">Availability</h4>
          </div>
          <p className="font-[400] text-[16px] leading-[24px] text-center">
            Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col w-[357px] items-center justify-center gap-[30px] pt-[60px] pb-[60px]">
          {/* Card 1 */}
          <div className="flex flex-col gap-[20px] items-center">
            <img
              src="./images/hero-images/card-img-2.svg"
              width={64}
              height={64}
              alt="Card img"
            />
            <h4 className="text-[24px] font-[600] text-center">Comfort</h4>
          </div>
          <p className="font-[400] text-[16px] leading-[24px] text-center">
            Gravida auctor fermentum morbi vulputate ac egestas orcietium
            convallis
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col w-[357px] items-center justify-center gap-[30px] pt-[60px] pb-[60px]">
          {/* Card 1 */}
          <div className="flex flex-col gap-[20px] items-center">
            <img
              src="./images/hero-images/card-img-3.svg"
              width={64}
              height={64}
              alt="Card img"
            />
            <h4 className="text-[24px] font-[600] text-center">Savings</h4>
          </div>
          <p className="font-[400] text-[16px] leading-[24px] text-center">
            Pretium convallis id diam sed commodo vestibulum lobortis volutpat
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
