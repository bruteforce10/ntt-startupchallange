import { STATISTICS } from "@/constant/group-ntt-content";

export function NttStatsGrid() {
  return (
    <section id="number" className="pt-16 md:pt-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            NTT by the Numbers
          </h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {STATISTICS.map((stat, index) => (
            <div
              key={index}
              className="bg-[#0A1428] rounded-lg p-6 flex flex-col items-center justify-center text-center transition-transform hover:transform hover:scale-105"
            >
              <h3 className="text-blue-400 text-sm md:text-base mb-2">
                {stat.title}
              </h3>
              <p className="text-white text-3xl md:text-4xl font-bold">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
        <p className="text-right text-md text-gray-500 mt-4">*2023</p>
      </div>
    </section>
  );
}
