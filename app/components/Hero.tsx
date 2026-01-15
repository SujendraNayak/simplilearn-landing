import Image from 'next/image';
import { Calendar, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[650px] flex items-center overflow-hidden bg-[#00070D] font-satoshi">
      {/* 1. Background Image with precise opacity to match SS visibility  */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/captain.jpg" 
          alt="Tech Background"
          fill
          className="object-cover opacity-60" 
          priority
        />
        {/* Dark overlay gradient to ensure readability while keeping image visible  */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00070D] via-[#00070D]/70 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 w-full text-left py-20">
        {/* Brand Logo  */}
        <div className="mb-14">
          <span className="text-3xl font-bold text-white tracking-tighter">simplilearn</span>
        </div>

        {/* Badges with exact hex colors  */}
        <div className="flex items-center gap-3 mb-8">
  <span 
    className="bg-[#00E5FF] text-blue px-4 py-1.5 rounded-sm text-[11px] font-black tracking-wider shadow-[2px_2px_0px_rgba(0,0,0,1)]"
    style={{ WebkitTextStroke: '0.5px black' }} // Adds the thin black border to the letters
  >
    Invite-Only
  </span>
  <span className="text-[#00E5FF] text-sm font-medium">
    An Executive Roundtable · Lunch
  </span>
</div>

        {/* Heading Section: Bold Orange and Thin White  */}
       <div className="max-w-5xl space-y-1">
  {/* Main Title: Size decreased from 6xl to 5xl for large screens [cite: 5, 23] */}
  <h1 className="text-[#F5AB40] text-2xl md:text-3xl lg:text-4xl font-black leading-tight tracking-tight">
    The Skills That Matter Next:
  </h1>
  
  {/* Subheader: Size decreased from 6xl to 4xl to create a clear hierarchy  */}
  <h2 className="text-[#F5AB40] text-2xl md:text-3xl lg:text-4xl font-light tracking-tight leading-[1.1]">
    Preparing Your Workforce 
    
  </h2>
   <h2 className="text-[#F5AB40] text-2xl md:text-3xl lg:text-4xl font-light tracking-tight leading-[1.1]">
    
    & Leaders for the AI Era
  </h2>
  


</div>

        {/* Meta Info with Lucide Icons  */}
        <div className="mt-14 space-y-5 text-white">
          <div className="flex items-center gap-3">
            <Calendar size={22} className="text-white" /> 
            <span className="font-bold text-xl tracking-tighter">February 20,  2026</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={22} className="text-white" />
            <span className="font-bold text-lg opacity-95">
              Chamberlain&apos;s Steak & Fish House, Dallas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}