import React from "react";

function Banner() {
  return (
    <div className="flex flex-col lg:space-x-5 text-center font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl font-mono text-[#4d0679] uppercase tracking-wide">The MID Blog</h1>
        {/* <h2 className="mt-5 md:mt-3">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-[#4d0679]">
            a MI&D blog.
          </span>{" "}
          Web development, design and departure.
        </h2> */}
      </div>

      <h2 className="mt-5 md:mt2 capitalize text-gray-400">
        Web development landscape | Technology trends | SMME profiles and more!
      </h2>
    </div>
  );
}

export default Banner;
