import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const valentineDays = [
  {
    day: "Rose Day",
    date: "Feb 7",
    emoji: "🌹",
    color: "from-pink-300 to-rose-400",
    message: "A rose for you, because you make my life bloom 🌹",
  },
  {
    day: "Propose Day",
    date: "Feb 8",
    emoji: "💍",
    color: "from-purple-300 to-pink-400",
    message: "Every moment with you is my favorite yes 💍",
  },
  {
    day: "Chocolate Day",
    date: "Feb 9",
    emoji: "🍫",
    color: "from-amber-300 to-pink-300",
    message: "Life is sweeter with you 🍫",
  },
  {
    day: "Teddy Day",
    date: "Feb 10",
    emoji: "🧸",
    color: "from-rose-200 to-pink-300",
    message: "Sending you a teddy hug 🧸",
  },
  {
    day: "Promise Day",
    date: "Feb 11",
    emoji: "🤞",
    color: "from-pink-200 to-rose-300",
    message: "I promise to love you forever 🤞",
  },
  {
    day: "Hug Day",
    date: "Feb 12",
    emoji: "🤗",
    color: "from-pink-300 to-purple-300",
    message: "A warm hug for you 🤗",
  },
  {
    day: "Kiss Day",
    date: "Feb 13",
    emoji: "💋",
    color: "from-rose-300 to-pink-400",
    message: "A kiss filled with love 💋",
  },
  {
    day: "Valentine's Day",
    date: "Feb 14",
    emoji: "❤️",
    color: "from-red-300 to-pink-500",
    message: "You are my forever ❤️",
  },
];
function getCurrentValentineDay() {
  const today = new Date();
  const currentDay = today.getDate();

  const match = valentineDays.find((d) => {
    const dayNumber = parseInt(d.date.split(" ")[1]);
    return dayNumber === currentDay;
  });

  return match || valentineDays[valentineDays.length - 1];
}


export default function Card() {
  const [isOpening, setIsOpening] = useState(false);
  const [showCenterCard, setShowCenterCard] = useState(false);

  const currentDay = getCurrentValentineDay();

  const handleOpen = () => {
    setIsOpening(true);

    setTimeout(() => {
      setShowCenterCard(true);
    }, 1500);
  };

  return (
    <div className="relative flex items-center justify-center h-screen w-full overflow-hidden bg-gradient-to-br from-[#FDEFF4] via-[#F8D7DA] to-[#E8D8C4]">

      {/* HEART */}
      {!showCenterCard && (
        <div
          className="relative flex items-center justify-center cursor-pointer"
          onClick={handleOpen}
        >
          {/* LEFT HALF */}
          <motion.svg
            width={560}
            viewBox="0 0 100 100"
            className="absolute"
            animate={isOpening ? { x: -200, rotate: -8 } : { x: 0 }}
            transition={{ duration: 1.5 }}
            style={{
              clipPath: "inset(0 50% 0 0)",
              filter: "drop-shadow(0 0 120px rgba(255,105,180,0.6))",
            }}
          >
            <defs>
              <radialGradient id="heartGradient">
                <stop offset="0%" stopColor="#8B1E3F" />
                <stop offset="100%" stopColor="#7D1E2F" />
              </radialGradient>
            </defs>

            <path
              d="M50 15C35 0 15 10 15 30C15 50 50 85 50 85C50 85 85 50 85 30C85 10 65 0 50 15Z"
              fill="url(#heartGradient)"
            />
          </motion.svg>

          {/* RIGHT HALF */}
          <motion.svg
            width={560}
            viewBox="0 0 100 100"
            className="absolute"
            animate={isOpening ? { x: 200, rotate: 8 } : { x: 0 }}
            transition={{ duration: 1.5 }}
            style={{
              clipPath: "inset(0 0 0 50%)",
              filter: "drop-shadow(0 0 120px rgba(255,105,180,0.6))",
            }}
          >
            <defs>
              <radialGradient id="heartGradient2">
                <stop offset="0%" stopColor="#8B1E3F" />
                <stop offset="100%" stopColor="#7D1E2F" />
              </radialGradient>
            </defs>

            <path
              d="M50 15C35 0 15 10 15 30C15 50 50 85 50 85C50 85 85 50 85 30C85 10 65 0 50 15Z"
              fill="url(#heartGradient2)"
            />
          </motion.svg>

          {!isOpening && (
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute text-2xl text-white font-semibold"
            >
              Click Here ❤️
            </motion.h1>
          )}
        </div>
      )}

      {/* CENTER VALENTINE CARD */}
      <AnimatePresence>
        {showCenterCard && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
            }}
            className={`
              absolute
              rounded-3xl
              p-10
              shadow-2xl
              text-white
              text-center
              bg-gradient-to-br ${currentDay.color}
              max-w-md
            `}
          >
            {/* emoji */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-6xl mb-4"
            >
              {currentDay.emoji}
            </motion.div>

            {/* title */}
            <h1 className="text-3xl font-bold mb-2">
              {currentDay.day}
            </h1>

            {/* date */}
            <p className="opacity-90 mb-4">
              {currentDay.date}
            </p>

            {/* message */}
            <p className="text-lg">
              {currentDay.message}
            </p>

            {/* extra message */}
            <p className="mt-4 text-sm opacity-90">
              Every day with you is special, but today is extra magical ✨
            </p>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
