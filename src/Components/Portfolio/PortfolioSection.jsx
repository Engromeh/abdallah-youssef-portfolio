import React from "react";
import { useNavigate } from "react-router-dom";
import { portfolioData } from "../Data/portfolioData";

const PortfolioSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full min-h-screen bg-softBeige px-6 py-24">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-light text-richBlack mb-16">
          Selected Work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

          {portfolioData.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/project/${item.id}`)}
              className="relative group h-[450px] overflow-hidden rounded-2xl cursor-pointer bg-whiteSmoke shadow-sm hover:shadow-xl transition duration-500"
            >
              {/* الصور */}
              {item.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                    i === 0
                      ? "z-30 group-hover:scale-105"
                      : i === 1
                      ? "z-20 group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:scale-105"
                      : "z-10 group-hover:-translate-x-6 group-hover:translate-y-6 group-hover:scale-105"
                  }`}
                />
              ))}

              {/* Overlay */}
              <div className="absolute inset-0 bg-richBlack/40 opacity-0 group-hover:opacity-100 transition duration-500 z-30" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 z-40">
                <p className="text-sm text-softBeige uppercase mb-2">
                  {item.category}
                </p>
                <h3 className="text-2xl text-white">
                  {item.title}
                </h3>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;