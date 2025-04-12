export function NttStatsGrid() {
  const statistics = [
    {
      title: "Global Revenue",
      value: "$97 billion",
    },
    {
      title: "Fortune Global",
      value: "#83",
    },
    {
      title: "Employees Worldwide",
      value: "330,000+",
    },
    {
      title: "S&P Rating",
      value: "A",
    },
    {
      title: "Heritage",
      value: "150+ years",
    },
    {
      title: "Global IT Services Provider",
      value: "Top 5",
    },
    {
      title: "Countries & Regions",
      value: "80+",
    },
    {
      title: "> Of Fortune Global 100 Are Clients",
      value: "75%",
    },
    {
      title: "Global Brand Finance",
      value: "#41",
    },
    {
      title: "R&D Annual Spend",
      value: "$3.6B",
    },
    {
      title: "Research Professionals",
      value: "5,000",
    },
    {
      title: "Patents",
      value: "18,000+",
    },
    {
      title: "Market Share Data Center",
      value: "#3",
    },
    {
      title: "IP Backbone by CAIDA",
      value: "Top 5",
    },
    {
      title: "Network Coverage Countries & Regions",
      value: "190+",
    },
  ];

  return (
    <section id="#number" className="pt-16 md:pt-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            NTT by the Numbers
          </h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {statistics.map((stat, index) => (
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
      </div>
    </section>
  );
}
