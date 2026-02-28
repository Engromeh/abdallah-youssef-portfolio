import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-softBeige overflow-hidden">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
        alt="Photography"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Warm Overlay */}
      <div className="absolute inset-0 bg-[#1E1E1E]/50"></div>

      {/* Content */}
      <div className="relative z-10 px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-whiteSmoke leading-tight">
            Capturing Life’s
            <span className="block text-mutedGold mt-2">
              Most Beautiful Moments
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-lightSand max-w-2xl mx-auto">
            Timeless photography that blends emotion, elegance,
            and storytelling into every frame.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            
            {/* Primary Button */}
            <button className="px-8 py-3 bg-terracotta text-whiteSmoke font-medium rounded-full hover:scale-105 transition duration-300 shadow-lg">
              View Portfolio
            </button>

            {/* Secondary Button */}
            <button className="px-8 py-3 border border-mutedGold text-mutedGold rounded-full hover:bg-mutedGold hover:text-richBlack transition duration-300">
              Contact Me
            </button>

          </div>
        </motion.div>
      </div>
    </section>
  );
}