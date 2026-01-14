export default function BodyContent() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto space-y-8 text-[#2D2D2D] text-lg leading-relaxed">
        <p>
          AI is accelerating change across every operational layer. Roles are shifting. Leadership models are 
          collapsing and reforming. Frontline and mid-level managers will soon lead teams of people and 
          intelligent agents.
        </p>
        
        <p>
          But even the most advanced enterprises are asking the same question:
        </p>

        {/* Centered Bold Question from SS */}
        <div className="py-8 text-center">
          <h3 className="text-3xl md:text-4xl font-black text-black leading-tight">
            Which capabilities will matter most, <br />
            and how do we build them at scale?
          </h3>
        </div>

        <p>
          This invite-only roundtable gathers CHROs, CLOs, and enterprise workforce leaders for a candid, 
          senior-level discussion on what&apos;s coming next.
        </p>
      </div>
    </section>
  );
}