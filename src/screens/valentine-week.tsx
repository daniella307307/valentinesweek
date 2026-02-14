import { motion } from "framer-motion";
import Card from "../components/Card";
function ValentineWeek() {
  return (
    <div className="relative flex items-center justify-center h-screen w-full overflow-hidden bg-gradient-to-br from-[#FDEFF4] via-[#F8D7DA] to-[#E8D8C4]">
     <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
              className="absolute left-0 top-0 h-full  bg-[#F8D7DA] z-30 shadow-2xl"
            />
            <Card />
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
              className="absolute right-0 top-0 h-full bg-[#F8D7DA] z-30 shadow-2xl"
             
            />
    </div>
  );
}

export default ValentineWeek;
