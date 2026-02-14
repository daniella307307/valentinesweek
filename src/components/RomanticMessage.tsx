import { motion } from "framer-motion";

export default function RomanticMessage({ currentDay, onClose }: { currentDay: any, onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -3, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, rotate: 2 }}
      transition={{ type: "spring", damping: 15 }}
      /* The Paper Container */
      className="relative w-[90%] max-w-sm p-10 shadow-[20px_20px_60px_rgba(0,0,0,0.1),-5px_-5px_30px_rgba(255,255,255,0.5)]"
      style={{
        background: "linear-gradient(135deg, #fff9f0 0%, #f7e9d7 100%)",
        borderRadius: "2px 15px 5px 30px / 15px 5px 30px 2px", // Organic, hand-cut edges
      }}
    >
      {/* Subtle Paper Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

      {/* Decorative Corner Accent */}
      <div className="absolute top-4 right-4 text-[#8B1E3F]/20 text-4xl select-none">🌹</div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Date stamped look */}
        <span className="mb-6 text-[#7D1E2F]/40 font-mono text-xs tracking-[0.3em] uppercase border-b border-[#7D1E2F]/10 pb-1">
          {currentDay.date}, 2026
        </span>

        {/* The Emoji */}
        <div className="text-6xl mb-6 drop-shadow-sm grayscale-[0.2]">
          {currentDay.emoji}
        </div>

        {/* The Title (Day) */}
        <h2 className="text-3xl font-serif text-[#4A0E1E] mb-4">
          {currentDay.day}
        </h2>

        {/* The Message (Handwritten feel) */}
        <div className="w-full h-[1px] bg-[#8B1E3F]/10 mb-8" />
        
        <p className="text-2xl font-serif italic text-[#5D2A37] leading-relaxed text-center px-2">
          {currentDay.message}
        </p>

        <div className="w-full h-[1px] bg-[#8B1E3F]/10 mt-8 mb-8" />

        {/* Action Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          className="font-serif italic text-[#8B1E3F] hover:text-[#7D1E2F] transition-colors"
        >
          — Yours Forever
        </motion.button>
      </div>

      {/* Fold Detail at bottom corner */}
      <div 
        className="absolute bottom-0 right-0 w-12 h-12 bg-black/5" 
        style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
      />
    </motion.div>
  );
}