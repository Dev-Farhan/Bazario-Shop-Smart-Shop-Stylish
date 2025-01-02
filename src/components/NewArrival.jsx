import React from "react";

const NewArrival = () => {
  return (
    <>
      <div className="mt-10">
        <div className="flex items-center gap-3 ">
          <span className="h-[20px] w-[10px] bg-red-500"></span>
          <span className="font-semibold">Featured</span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl md:text-4xl font-semibold">New Arrival</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          {/* <!-- PlayStation 5 Section --> */}
          <div className="relative bg-black text-white rounded-lg overflow-hidden">
            <img
              src="/src/assets/playstation.png"
              alt="PlayStation 5"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 flex flex-col justify-end items-start p-6 bg-gradient-to-t from-black to-transparent gap-2">
              <h3 className="text-md md:text-2xl font-bold">PlayStation 5</h3>
              <p className="text-xs md:text-sm ">
                Black and White version of the PS5 coming out on sale.
              </p>
              <button className="text-sm md:text-lg py-2 underline underline-offset-2 hover:text-gray-300">
                Shop Now
              </button>
            </div>
          </div>

          {/* <!-- Right Section --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* <!-- Women's Collections --> */}
            <div className="relative md:col-span-2 bg-black text-white rounded-lg overflow-hidden">
              <img
                src="/src/assets/women.png"
                alt="Women's Collections"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex flex-col justify-end items-start p-6 bg-gradient-to-t from-black to-transparent gap-2">
                <h3 className="text-md md:text-2xl font-bold">
                  Women's Collections
                </h3>
                <p className="text-xs md:text-sm">
                  Featured women collections that give you another vibe.
                </p>
                <button className="text-sm md:text-lg py-2 underline underline-offset-2 hover:text-gray-300">
                  Shop Now
                </button>
              </div>
            </div>

            {/* <!-- Speakers --> */}
            <div className="relative bg-black text-white rounded-lg overflow-hidden">
              <img
                src="/src/assets/speakers.png"
                alt="Speakers"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex flex-col justify-end items-start p-6 bg-gradient-to-t from-black to-transparent gap-2">
                <h3 className="text-md md:text-2xl font-bold">Speakers</h3>
                <p className="text-xs md:text-sm">Amazon wireless speakers.</p>
                <button className="text-sm md:text-lg py-2 underline underline-offset-2 hover:text-gray-300">
                  Shop Now
                </button>
              </div>
            </div>

            {/* <!-- Perfume --> */}
            <div className="relative bg-black text-white rounded-lg overflow-hidden">
              <img
                src="/src/assets/gucci.png"
                alt="Perfume"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex flex-col justify-end items-start p-6 bg-gradient-to-t from-black to-transparent gap-2">
                <h3 className="text-md md:text-2xl font-bold">Perfume</h3>
                <p className="text-xs md:text-sm">GUCCI INTENSE OUD EDP.</p>
                <button className="text-sm md:text-lg py-2 underline underline-offset-2 hover:text-gray-300">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrival;
