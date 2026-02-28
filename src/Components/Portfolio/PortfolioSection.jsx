import React from "react";
const portfolioData = [
  {
    id: 1,
    title: "Golden Desert",
    category: "Landscape",
    images: ["me", "me", "me"],
  },
  {
    id: 2,
    title: "Urban Silence",
    category: "Street",
    images: ["me", "me", "me"],
  },
  {
    id: 3,
    title: "Soft Portrait",
    category: "Portrait",
    images: ["me", "me", "me"],
  },
  {
    id: 4,
    title: "Wild Nature",
    category: "Travel",
    images: ["me", "me", "me"],
  },
  {
    id: 5,
    title: "Cinematic Motion",
    category: "Video",
    images: ["me", "me", "me"],
  },
];
const PortfolioSection = () => {
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
              className="relative group h-[450px] overflow-hidden rounded-2xl cursor-pointer bg-whiteSmoke shadow-sm hover:shadow-xl transition duration-500"
            >
              {/* الصورة الأساسية */}
              <img
                src={item.images[0]}
                alt=""
                className="absolute inset-0 w-full h-full object-cover z-30
                transition-all duration-700 ease-out
                group-hover:scale-105"
              />

              {/* الصورة التانية */}
              <img
                src={item.images[1]}
                alt=""
                className="absolute inset-0 w-full h-full object-cover z-20
                transition-all duration-700 ease-out
                group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:scale-105"
              />

              {/* الصورة التالتة */}
              <img
                src={item.images[2]}
                alt=""
                className="absolute inset-0 w-full h-full object-cover z-10
                transition-all duration-700 ease-out
                group-hover:-translate-x-6 group-hover:translate-y-6 group-hover:scale-105"
              />

              {/* Overlay */}
            {/* Overlay */}
<div className="absolute inset-0 bg-richBlack/40 opacity-0 group-hover:opacity-100 transition duration-500 z-30" />

{/* النص */}
<div className="
  absolute bottom-0 left-0 w-full p-6
  translate-y-10 opacity-0
  group-hover:translate-y-0 group-hover:opacity-100
  transition-all duration-700 ease-out
  z-40
">
  <p className="text-sm text-softBeige tracking-wider uppercase mb-2">
    {item.category}
  </p>
  <h3 className="text-2xl font-light text-white">
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