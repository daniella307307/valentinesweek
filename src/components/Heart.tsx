import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ValentineHeart() {
  const [isOpening, setIsOpening] = useState(false);

  return (
    <div className="relative flex items-center justify-center h-screen w-full overflow-hidden bg-gradient-to-br from-[#FDEFF4] via-[#F8D7DA] to-[#E8D8C4]">

      <AnimatePresence>
        {!isOpening && (
          <>
            {/* Heart */}
            <motion.div
              animate={{ scale: [1, 1.07, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <motion.svg
                width={500}
                viewBox="0 0 100 100"
                fill="none"
                className="drop-shadow-[0_0_120px_rgba(255,105,180,0.6)]"
              >
                <defs>
                  <radialGradient id="heartGradient" cx="50%" cy="50%" r="70%">
                    <stop offset="0%" stopColor="#8B1E3F" />
                    <stop offset="70%" stopColor="#7D1E2F" />
                    <stop offset="100%" stopColor="#7D1E2F" stopOpacity="0.85" />
                  </radialGradient>

                  <filter id="softEdge">
                    <feGaussianBlur stdDeviation="1.5" />
                  </filter>
                </defs>

                <path
                  d="M50 15C35 0 15 10 15 30C15 50 50 85 50 85C50 85 85 50 85 30C85 10 65 0 50 15Z"
                  fill="url(#heartGradient)"
                  filter="url(#softEdge)"
                />
              </motion.svg>
            </motion.div>

            {/* Text */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute text-xl font-semibold text-white text-center"
              style={{
                textShadow: "0px 6px 25px rgba(255,105,180,0.6)",
              }}
            >
              Happy Valentine's Day ❤️
            </motion.h1>

            {/* Fingerprint Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => setIsOpening(true)}
              className="absolute bottom-16 w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg z-20"
            >
              <span className="text-3xl">🖐🏻</span>
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Book Opening Animation */}
      <AnimatePresence>
        {isOpening && (
          <>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute left-0 top-0 h-full w-1/2 bg-[#F8D7DA] z-30"
            />
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute right-0 top-0 h-full w-1/2 bg-[#F8D7DA] z-30"
              onAnimationComplete={() => {
                window.location.href = "/valentine-week";
              }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
