function Facts() {
  return (
    <section>
      <div
        className="
      max-w-[1400px] mx-auto 
      pt-10 pb-24 
      bg-[#5937E0] rounded-2xl 
      bg-[url(./images/facts-images/facts-bg-img-2.svg)] bg-no-repeat
      px-4 sm:px-6 lg:px-20
    "
      >
        {/* Header */}
        <div className="flex flex-col gap-4 text-center mb-16">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[50px] font-bold text-white leading-tight">
            Facts in numbers
          </h2>

          <p className="font-normal text-[14px] sm:text-[16px] text-white leading-relaxed">
            Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
            bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper
            fermentum.
          </p>
        </div>

        {/* Cards container */}
        <div
          className="
        flex flex-col 
        sm:flex-row sm:flex-wrap 
        items-center justify-center 
        gap-6 sm:gap-8 lg:gap-16
      "
        >
          {[
            { value: "540+", label: "Cars" },
            { value: "20k+", label: "Customers" },
            { value: "25+", label: "Years" },
            { value: "20m+", label: "Miles" },
          ].map((card, idx) => (
            <div
              key={idx}
              className="
            w-full max-w-[300px]
            sm:w-[240px] 
            h-[100px] 
            rounded-2xl bg-white 
            gap-4 flex items-center justify-start 
            pl-4
          "
            >
              <div className="w-[72px] h-[68px] bg-[#FF9E0C] rounded-xl flex items-center justify-center">
                <img
                  src="./images/facts-images/mini-card-img-1.svg"
                  alt="Mini card img"
                />
              </div>

              <div>
                <p className="font-bold text-[22px] sm:text-[24px] text-black leading-tight">
                  {card.value}
                </p>
                <span className="font-semibold text-[14px] sm:text-[16px] text-black opacity-60">
                  {card.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Facts;
