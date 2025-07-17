import React from "react";
import AuthDistributor from "@/assets/GlobalBusiness/AuthDistributors.jpg";
import OEM from "@/assets/GlobalBusiness/OEM.jpg";
import Warehouse from "@/assets/GlobalBusiness/Warehouse.jpg";
import Image from "next/image";

const GlobalNetwork = () => {
  const Options = [
    {
      image: AuthDistributor,
      content: "Authorized distributors in over 15 countries",
    },
    {
      image: OEM,
      content: "OEM partnerships with regional leaders",
    },
    {
      image: Warehouse,
      content: "Warehousing and support hubs in the UAE and East Africa",
    },
  ];

  return (
    <div className="px-4 md:px-20 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Options.map((option, index) => (
          <div key={index} className="flex flex-col items-center">
            {index === 1 && (
              <h2 className="text-3xl font-bold mb-8">
                Global <span className="text-[#005F20]">Network</span>
              </h2>
            )}
            <div className="relative overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl w-full max-w-[400px]">
              <Image
                src={option.image}
                alt={option.content}
                width={index === 1 ? 300 : 400}
                height={index === 1 ? 300 : 400}
                className="w-full object-cover aspect-[3/4]"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end hover:bg-black/40 transition-all duration-300 ease-in-out">
                <p className="text-white p-6 font-bold text-2xl drop-shadow-lg w-full text-start">
                  {option.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlobalNetwork;