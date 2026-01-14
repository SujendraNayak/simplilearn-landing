import { RefreshCcw, Users, ShieldCheck, Cpu, Brain, Rocket } from 'lucide-react';

const exploreItems = [
  {
    title: "Skills Decay",
    description: "every 2-3 years faster for technical skills",
    icon: RefreshCcw,
  },
  {
    title: "Manager Role Shift",
    description: "orchestrating people + AI agents",
    icon: Users,
  },
  {
    title: "Leaders + AI Co-Pilots",
    description: "requires sensemaking and systems thinking",
    icon: Cpu,
  },
  {
    title: "Frontline Capability",
    description: "now depends on digital fluency",
    icon: ShieldCheck,
  },
  {
    title: "Core Human Capabilities",
    description: "analytical reasoning and scenario planning",
    icon: Brain,
  },
  {
    title: "Winning Organizations",
    description: "predict skills ahead of demand",
    icon: Rocket,
  },
];

export default function Explore() {
  return (
    <section className="w-full bg-[#F0F7FF] py-16 px-6 font-satoshi">
      <div className="max-w-6xl mx-auto border border-blue-200 p-8 rounded-lg bg-white/50 shadow-sm">
        {/* Section Heading */}
        <h2 className="text-[#F5AB40] text-3xl font-black mb-2 uppercase  tracking-tight">
          What We&apos;ll Explore
        </h2>
        <p className="text-black font-bold mb-10">
          The critical shifts every enterprise must plan for:
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {exploreItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 border border-gray-100 rounded-md shadow-sm flex flex-col items-start"
            >
              {/* Icon Row */}
              <div className="mb-4 text-blue-600">
                <item.icon size={28} />
              </div>
              
              {/* Card Content */}
              <h3 className="text-black font-black text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}