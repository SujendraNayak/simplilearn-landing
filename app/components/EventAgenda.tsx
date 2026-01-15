export default function EventAgenda() {
  const agendaItems = [
    {
      time: "Welcome & Opening",
      name: "Sudipto Mitra, CRO Simplilearn",
      desc: "Why capability-building is now a board-level issue and what's changing in the workforce landscape."
    },
    {
      time: "Keynote: What Enterprise Leaders Are Seeing On the Ground",
      name: "Rob Lauber, Former CLO McDonald's",
      desc: "A grounded view of how AI and AI agents are reshaping work, workflows, and leadership across industries."
    },
    {
      time: "Lunch & Executive Conversation",
      name: "Industry Experts Invited",
      desc: "What large enterprise talent ecosystems are learning about capability-building at scale."
    }
  ];

  return (
    <section className="w-full bg-[#00E5FF] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#1D4DF4] text-4xl font-black   mb-12">
          Event Agenda
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {agendaItems.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md flex flex-col h-full relative overflow-hidden">
              {/* Pink accent bar at the bottom */}
              <div className="absolute bottom-0 left-0 w-full h-3 bg-[#D157A1]" />
              
              <h3 className="text-[#1D4DF4] font-black text-2xl mb-6 leading-tight">
                {item.time}
              </h3>
              
              <div className="mt-4">
                <p className="font-bold text-black text-sm mb-4  tracking-tight">
                  {item.name}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}