import React from "react";

const Banner = () => {
  return (
    <div className="rounded-[24px] relative">
      <div
        className="hero py-5 md:px-48 md:py-32 rounded-[24px]"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/xCFWjmK/banner.png)",
          objectFit: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-color-15 to-color-15-0 bg-opacity-60 rounded-[24px]"></div>

        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-[897px]">
            <h1 className="mb-5 text-5xl font-bold">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5 md:mb-6">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <div className="flex justify-center items-center gap-4 md:gap-6">
              <button className="rounded-[50px] bg-color-ob hover:bg-[#33EFA2] py-4 px-[30px] font-semibold text-lg md:text-xl text-color-15 ">
                Explore Now
              </button>
              <button className="rounded-[50px] py-4 px-[30px] hover:bg-color-ob hover:text-color-15 font-semibold text-lg md:text-xl border border-white">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
