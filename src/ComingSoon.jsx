import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center relative overflow-hidden">

      {/* Gold Glow Background */}
      <div className="absolute w-[600px] h-[600px] bg-[#C5A46D]/10 blur-[150px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center z-10 px-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wider">
          Abdallah <span className="text-[#C5A46D]">Youssef</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-400 mt-6 text-xl"
        >
          Portfolio Website
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-3xl md:text-4xl text-[#C5A46D] font-semibold"
        >
          Coming Soon...
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-10"
        >
          <div className="w-64 h-1 bg-gray-800 mx-auto rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, repeat: Infinity }}
              className="h-full bg-[#C5A46D]"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}