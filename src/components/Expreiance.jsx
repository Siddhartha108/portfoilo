import React, { useState } from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import pro1 from "../assets/pro1.png";

const projects = [
  {
    id: 1,
    img: pro1,
    h1: "Catering Website",
    p: "Filling every occasion with great Veg or Non-Veg food and service.Shah Ji Catering Services, situated at 47 mapleview ave Brampton, Canada.",
    url: "https://github.com/Siddhartha108",
  },
];

function Expreiance() {
  const [curr, setCurr] = useState(0);

  const next = () => {
    setCurr(curr === projects.length - 1 ? 0 : curr + 1);
  };

  const perv = () => {
    setCurr(curr === 0 ? projects.length - 1 : curr - 1);
  };

  return (
    <div
      name="Expreiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-14"
    >
      <h1 className="text-3xl font-bold mb-3">Expreiance</h1>
      <span className="text-[#A19FAD]">Most recent work</span>

      <div className="flex justify-evenly items-center p-5 my-8">
        {/* **prev Button** */}
        <div className="bg-[#a79fce] hover:bg-[#6E57E0] hover:text-white rounded-lg cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            onClick={perv}
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>

        {/* **Expreiance Contant** */}
        <div>
          {projects.map(
            ({ id, img, h1, p, url }, index) =>
              curr === index && (
                <div key={id}>
                  <div className="flex justify-center">
                    <img
                      src={img}
                      className="rounded-xl"
                      alt=""
                      height={300}
                      width={300}
                    />
                  </div>
                  <div className="flex justify-center">
                    <div className="w-2/3 my-4">
                      <h1 className="text-2xl font-semibold my-2">{h1}</h1>
                      <p className="text-[#A19FAD] mb-4 leading-normal">{p}</p>
                      <div className="mt-8">
                        <button>
                          <a
                            href={url}
                            className="bg-[#6E57E0] rounded-md hover:bg-[#5A43CB] text-white py-4 px-4 flex items-center"
                          >
                            {" "}
                            Demo{" "}
                            <span className="ml-1">
                              <IoArrowForwardOutline />
                            </span>
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>

        {/* **Next button** */}
        <div className="bg-[#a79fce] hover:bg-[#6E57E0] hover:text-white rounded-lg cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            onClick={next}
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Expreiance;
