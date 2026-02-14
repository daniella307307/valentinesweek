import { motion } from "framer-motion";

interface DayData {
  day: string;
  date: string;
  emoji: string;
  message: string;
  color: string;
}

function ValentineCard({ day, index }: { day: DayData; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
        type: "spring",
      }}
      whileHover={{
        scale: 1.08,
        rotate: [-1, 1, -1, 0],
      }}
      className={`
        relative
        rounded-3xl
        p-6
        shadow-xl
        cursor-pointer
        bg-gradient-to-br ${day.color}
        text-white
        overflow-hidden
      `}
    >
      {/* glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-white opacity-20 blur-xl"
      />

      {/* content */}
      <div className="relative z-10 text-center">

        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-5xl mb-4"
        >
          {day.emoji}
        </motion.div>

        <h2 className="text-xl font-bold">
          {day.day}
        </h2>

        <p className="text-sm opacity-90 mb-2">
          {day.date}
        </p>

        <p className="text-sm opacity-90">
          {day.message}
        </p>

      </div>

    </motion.div>
  );
}

export default ValentineCard;