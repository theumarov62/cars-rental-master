function Facts() {
  return (
    <section>
      <div className="max-w-[1400px] ml-auto mr-auto pt-[60px] pb-[125px] bg-[#5937E0] rounded-[20px] bg-[url(./images/facts-images/facts-bg-img-2.svg)] bg-no-repeat ">
        <div className="flex flex-col gap-[20px] text-center mb-[80px]">
          <h2 className="text-[50px] font-[700] text-white">
            Facts in numbers
          </h2>
          <p className="font-[400] text-[16px] text-white">
            Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
            bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper
            fermentum
          </p>
        </div>

        {/* Mini cards */}
        <div className="flex items-center justify-center gap-[64px]">
          <div className="w-[240px] h-[100px] rounded-[20px] bg-[white] gap-[16px] flex items-center justify-start pl-4">
            <div className="w-[72px] h-[68px] bg-[#FF9E0C] rounded-[12px] flex items-center justify-center">
              <img
                src="./images/facts-images/mini-card-img-1.svg"
                alt="Mini card img"
              />
            </div>
            <div>
              <p className="font-[700] text-[24px] text-black">540+</p>
              <span className="font-[600] text-[16px] text-black opacity-[60%]">
                Cars
              </span>
            </div>
          </div>

          {/* Mini card 2 */}
          <div className="w-[240px] h-[100px] rounded-[20px] bg-[white] gap-[16px] flex items-center justify-start pl-4">
            <div className="w-[72px] h-[68px] bg-[#FF9E0C] rounded-[12px] flex items-center justify-center">
              <img
                src="./images/facts-images/mini-card-img-1.svg"
                alt="Mini card img"
              />
            </div>
            <div>
              <p className="font-[700] text-[24px] text-black">20k+</p>
              <span className="font-[600] text-[16px] text-black opacity-[60%]">
                Customers
              </span>
            </div>
          </div>

          {/* Mini card 3 */}
          <div className="w-[240px] h-[100px] rounded-[20px] bg-[white] gap-[16px] flex items-center justify-start pl-4">
            <div className="w-[72px] h-[68px] bg-[#FF9E0C] rounded-[12px] flex items-center justify-center">
              <img
                src="./images/facts-images/mini-card-img-1.svg"
                alt="Mini card img"
              />
            </div>
            <div>
              <p className="font-[700] text-[24px] text-black">25+</p>
              <span className="font-[600] text-[16px] text-black opacity-[60%]">
                Years
              </span>
            </div>
          </div>

          {/* Mini card 4 */}
          <div className="w-[240px] h-[100px] rounded-[20px] bg-[white] gap-[16px] flex items-center justify-start pl-4">
            <div className="w-[72px] h-[68px] bg-[#FF9E0C] rounded-[12px] flex items-center justify-center">
              <img
                src="./images/facts-images/mini-card-img-1.svg"
                alt="Mini card img"
              />
            </div>
            <div>
              <p className="font-[700] text-[24px] text-black">20m+</p>
              <span className="font-[600] text-[16px] text-black opacity-[60%]">
                Miles
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Facts;
