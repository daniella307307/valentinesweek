import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const valentineDays = [
  {
    id:1,
    day: "Rose Day",
    date: "Feb 7",
    emoji: "🌹",
    color: "from-pink-300 to-rose-400",
    message: "A rose for you, because you make my life bloom 🌹",
    desc:"Happy Rose Day, my love! 🌹 Just like a rose, you bring beauty and fragrance into my life. I hope our love continues to blossom and grow stronger with each passing day. You are the most precious flower in my garden of love, and I can't wait to share many more beautiful moments together! 🌹"
  },
  {
    id:2,
    day: "Propose Day",
    date: "Feb 8",
    emoji: "💍",
    color: "from-purple-300 to-pink-400",
    message: "Every moment with you is my favorite yes 💍",
    desc:"Happy Propose Day, my love! 💍 Today, I want to take a moment to express how deeply I care for you. You are the most incredible person I've ever met, and I feel so lucky to have you in my life. Will you be mine forever? 💍"
  },
  {
    id:3,
    day: "Chocolate Day",
    date: "Feb 9",
    emoji: "🍫",
    color: "from-amber-300 to-pink-300",
    message: "Life is sweeter with you 🍫",
    desc:"Happy Chocolate Day, my love! 🍫 Just like chocolate, you bring sweetness and joy into my life. I hope our love continues to melt hearts and create beautiful memories together. You are my sweetest addiction, and I can't wait to share many more delicious moments with you! 🍫"
  },
  {
    id:4,
    day: "Teddy Day",
    date: "Feb 10",
    emoji: "🧸",
    color: "from-rose-200 to-pink-300",
    message: "Sending you a teddy hug 🧸",
    desc:"On this Teddy Day, I want to wrap you in a warm embrace, just like a teddy bear. You are my comfort and joy, and I promise to always be there to hold you close. Happy Teddy Day, my love! 🧸"
  },
  {
    id:5,
    day: "Promise Day",
    date: "Feb 11",
    emoji: "🤞",
    color: "from-pink-200 to-rose-300",
    message: "I promise to love you forever 🤞",
    desc:"On this Promise Day, I vow to be your rock, your confidant, and your biggest supporter. I promise to love you unconditionally, through every high and low. You are my forever, and I can't wait to build a beautiful future together. Happy Promise Day, my love! 🤞"
  },
  {
    id:6,
    day: "Hug Day",
    date: "Feb 12",
    emoji: "🤗",
    color: "from-pink-300 to-purple-300",
    message: "A warm hug for you 🤗",
    desc:"Every hug from you feels like home. Happy Hug Day, my love! 🤗 I can't wait to hold you close and never let go."
  },
  {
    id:7,
    day: "Kiss Day",
    date: "Feb 13",
    emoji: "💋",
    color: "from-rose-300 to-pink-400",
    message: "A kiss filled with love 💋",
    desc:"Our first kiss day together a romantic moment I'll cherish forever.I hope you know how much joy you bring into my life. Happy Kiss Day, my love! 💋"
  },
  {
    id:8,
    day: "Valentine's Day",
    date: "Feb 14",
    emoji: "❤️",
    color: "from-red-300 to-pink-500",
    message: "You are my forever ❤️",
    desc:"Thank you for being the most amazing part of my life. Happy Valentine's Day, my love! ❤️ I wish we grow old together until the very end ndagukunda cneeee bae, and rest assured you got ur valentine for lie "
  },
];

const BG_GRADIENT = "bg-gradient-to-br from-[#FDEFF4] via-[#F8D7DA] to-[#E8D8C4]";

export default function Card({ currentDay }: { currentDay: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative flex flex-col items-center justify-center w-full h-screen overflow-hidden ${BG_GRADIENT}`}>
      
      {/* 1. Floating Background Elements for "Cute/Emotional" Vibe */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, 1, 0] }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear",
            }}
            className="absolute text-pink-300/40"
            style={{ left: `${i * 20}%`, fontSize: `${i + 1}rem` }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {!isOpen ? (
          /* 2. THE SEALED ENVELOPE (Matches the Home Heart style) */
          <motion.div
            key="envelope"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0, filter: "blur(10px)" }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsOpen(true)}
            className="relative cursor-pointer group w-64 h-64 bg-[#F8D7DA] rounded-xl shadow-xl flex flex-col items-center justify-center"
          >
            {/* The Envelope Body */}
            <div className="w-[20em] h-[20em] bg-[#F8D7DA] rounded-xl shadow-[0_20px_50px_rgba(139,30,63,0.15)]  border-white rounded-[2em] flex items-center justify-center">
              {/* The "Seal" - A miniature version of your Home Screen Heart */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="z-20"
              >
                <svg width={100} viewBox="0 0 100 100">
                  <path
                    d="M50 15C35 0 15 10 15 30C15 50 50 85 50 85C50 85 85 50 85 30C85 10 65 0 50 15Z"
                    fill="#8B1E3F"
                  />
                </svg>
              </motion.div>
              
              {/* Envelope Flap Lines */}
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <div className="absolute top-0 left-0 w-full h-1/2 border-b border-pink-200/50" style={{ clipPath: "polygon(0 0, 50% 50%, 100% 0)" }} />
              </div>
            </div>
            <p className="mt-6 text-[#7D1E2F]/60 font-medium tracking-[0.2em] text-sm text-center uppercase">
              Click to Open
            </p>
          </motion.div>
        ) : (
          /* 3. THE REVEALED MESSAGE (Glassmorphism & Emotion) */
          <motion.div
            key="message"
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ type: "spring", damping: 20 }}
            className="relative w-[90%] max-w-md aspect-[3/4] md:aspect-square flex flex-col items-center justify-center p-8 text-center"
          >
            {/* Soft Glass Card */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-[3rem] border border-white/60 shadow-[0_40px_100px_rgba(0,0,0,0.05)]" />
            
            {/* Content Container */}
            <div className="relative z-10 w-[50%] h-[100%] flex flex-col items-center justify-center px-4">
              <motion.div 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                transition={{ delay: 0.2, type: "spring" }}
                className="text-7xl mb-6 block"
              >
                {currentDay.emoji}
              </motion.div>

              <h2 className="text-4xl font-bold text-[#8B1E3F] mb-2 tracking-tight">
                {currentDay.day}
              </h2>
              
              <p className="text-[#7D1E2F]/50 font-semibold tracking-widest uppercase text-xs mb-6">
                {currentDay.date}
              </p>

              <div className="w-16 h-[1px] bg-[#8B1E3F]/20 mx-auto mb-8" />

              <p className="text-2xl font-serif italic text-[#4A0E1E] leading-relaxed px-4">
                "{currentDay.message}"
              </p>
              
              <p className="text-2xl font-serif italic text-[#4A0E1E] leading-relaxed px-4">
                "{currentDay.desc}"
              </p>

              <motion.button
  whileHover={{
    scale: 1.08,
    boxShadow: "0px 0px 25px rgba(139,30,63,0.6)"
  }}
  whileTap={{ scale: 0.95 }}
  onClick={() => setIsOpen(false)}
  className="
    mt-10
    p-[1em]
    text-[1em]
    bg-[#F8D7DA]
    text-[#fff]
    font-semibold
    rounded-full
    shadow-lg
    border border-[#FFF]/100
    transition-colors
    hover:bg-[#F8D7DA]/90
  "
>
  Close with Love
</motion.button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}