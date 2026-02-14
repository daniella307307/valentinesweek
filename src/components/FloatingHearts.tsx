import { motion } from "framer-motion";

export default function FloatingHearts() {
  const hearts = Array.from({ length: 25 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300 text-xl"
          initial={{
            y: "100%",
            x: `${Math.random() * 100}%`,
            opacity: 0,
          }}
          animate={{
            y: "-10%",
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          💖
        </motion.div>
      ))}
    </div>
  );
}
