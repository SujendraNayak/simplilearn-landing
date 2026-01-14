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
          <span className="bg-[#00E5FF] text-black px-4 py-1.5 rounded-sm text-[11px] font-black uppercase tracking-wider">
            Invite-Only
          </span>
          <span className="text-[#00E5FF] text-sm font">
            An Executive Roundtable · Lunch
          </span>
        </div>

        {/* Heading Section: Bold Orange and Thin White  */}
        <div className="max-w-5xl space-y-1">
          {/* Main Title: Exact #F5AB40 Orange  */}
          <h1 className="text-[#F5AB40] text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
            The Skills That Matter Next:
          </h1>
          
          {/* Subheader: Thin Satoshi font weight  */}
          <h2 className="text-[#F5AB40] text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]">
            Preparing Your Workforce 
          
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