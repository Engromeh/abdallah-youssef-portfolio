import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { portfolioData } from "../Data/portfolioData";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [modalImage, setModalImage] = useState(null);

  const project = portfolioData.find((item) => item.id === parseInt(id));

  if (!project) return <div>Not Found</div>;

  return (
    <section className="bg-softBeige min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="mb-10 text-warmGray hover:text-richBlack transition"
        >
          ← Back
        </button>

        {/* Title */}
        <h1 className="text-5xl font-light text-richBlack mb-4">
          {project.title}
        </h1>

        <p className="text-warmGray mb-12 text-lg max-w-2xl">
          {project.description}
        </p>

        {/* Hero Image */}
        <div className="mb-16 overflow-hidden rounded-4xl flex justify-center items-center">
          <img
            src={project.images[0]}
            alt=""
            className="w-full max-h-[500px] object-contain hover:scale-105 transition duration-700 cursor-pointer"
            onClick={() => setModalImage(project.images[0])}
          />
        </div>

        {/* Gallery */}
        <div className="grid md:grid-cols-4 gap-8">
          {project.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className="rounded-xl object-contain h-[300px] w-full hover:scale-105 transition duration-500 cursor-pointer"
              onClick={() => setModalImage(img)}
            />
          ))}
        </div>

        {/* Info */}
        {/* <div className="mt-16 border-t border-lightSand pt-10 flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-warmGray">Category</p>
            <h3 className="text-xl text-richBlack">{project.category}</h3>
          </div>

          <button className="mt-6 md:mt-0 px-8 py-3 bg-terracotta text-white rounded-full hover:opacity-90 transition">
            View Live Project
          </button>
        </div> */}

      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage}
            alt=""
            className="max-h-full max-w-full rounded-xl object-contain shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default ProjectDetails;