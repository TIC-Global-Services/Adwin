import Link from "next/link";
import React from "react";

const ExploreGB = () => {
  return (
    <div className=" px-4 md:px-20 py-12 md:py-20">
      <div className="max-w-4xl mx-auto text-center flex flex-col gap-4 items-center">
        <h1 className="text-xl md:text-3xl  text-gray-600 mb-6 leading-tight">
          Adwin has steadily expanded its presence across international markets
          through trusted partnerships and a strong distribution network. Our
          commitment to quality and innovation has helped us build long-term
          relationships in key regions worldwide.
        </h1>

        <Link
          href={"/"}
          className=" bg-[#005F20] px-6 py-3 rounded-lg text-white "
        >
          Explore Global Business
        </Link>
      </div>
    </div>
  );
};

export default ExploreGB;
