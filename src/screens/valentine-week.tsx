import Card, { valentineDays } from "../components/Card";
import FloatingHearts from "../components/FloatingHearts";

export default function ValentineWeek() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#FDEFF4] via-[#F8D7DA] to-[#E8D8C4] overflow-hidden">

      <FloatingHearts />

      <div className="relative z-10 py-16">
        <div className="flex flex-wrap justify-center gap-12 px-6">
          {valentineDays.map((day) => (
            <Card key={day.id} currentDay={day} />
          ))}
        </div>
      </div>
    </div>
  );
}
