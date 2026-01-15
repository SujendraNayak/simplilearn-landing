import Image from "next/image";

const speakers = [
  {
    name: "Rob Lauber",
    title:
      "Rob Lauber is a global workforce and capability-building leader with over 25 years of experience helping organizations prepare leaders and frontline teams for change. Most recently, he served as SVP and Chief Learning Officer at McDonald's, leading learning and development across 37,000+ restaurants worldwide. His perspective is especially relevant as organizations rethink leadership and capability models in the age of AI.",
    image: "/sp1.jpg",
  },
  {
    name: "Krishna Kumar",
    title:
      "Krishna Kumar is the Founder and CEO of Simplilearn, working closely with enterprises navigating workforce transformation driven by AI and digital change. At the center of the learning and skills ecosystem, he brings a unique perspective on how roles, leadership expectations, and capabilities are evolving across industries. Through direct engagement with enterprise leaders and education partners, he sees what scales, and what doesn't, in building workforce readiness for the AI era, offering a cross-enterprise view of the priorities shaping workforce strategy today.",
    image: "/sp2.png",
  },
  {
    name: "Sudipto Mitra",
    title:
      "Sudipto Mitra is a senior transformation and growth leader with over 20 years of experience helping enterprises navigate large-scale change across technology, operations, and talent. As Chief Revenue Officer at Simplilearn, he works with executive teams to address workforce capability gaps as AI reshapes roles and operating models. He previously held leadership roles at Accenture, IBM Consulting, and WorkFusion.",
    image: "/sp3.jpg",
  },
];

export default function Speakers() {
  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto rounded-xl overflow-hidden bg-gradient-to-b from-[#1D4DF4] to-[#112D8E] p-8 md:p-12">
        <h2 className="text-[#F5AB40] text-2xl font-black mb-12 ">
          Featured Speakers
        </h2>

        <div className="space-y-12">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              {/* Speaker Image */}
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="relative aspect-square w-full grayscale rounded-lg overflow-hidden border-2 border-white/20">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </div>

              {/* Speaker Info */}
              <div className="w-full md:w-2/3">
                <h3 className="text-[#00E5FF] text-2xl font-black mb-2 ">
                  {speaker.name}
                </h3>
                <p className="text-white text-sm md:text-base leading-relaxed font-medium">
                  {speaker.title}
                </p>
              </div>
            </div>
          ))}
        </div>

       <div className="mt-12 bg-[#1DA1F2] p-10 rounded-xl shadow-lg">
  {/* Heading: Using the exact Cyan from your badge for high contrast */}
  <h4 className="text-[#00E5FF] text-3xl font-black mb-4 tracking-tight">
    Additional Expert Perspectives
  </h4>
  
  {/* Text: White with high readability */}
  <p className="text-white text-lg font-medium leading-relaxed">
    Invited experts from leading consulting and enterprise learning
    organizations will contribute short perspectives, offering insight
    into how large organizations are evolving skills and leadership
    models in the AI era.
  </p>
</div>
      </div>
    </section>
  );
}
