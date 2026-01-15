'use client';

import { Mail } from 'lucide-react';
import Image from 'next/image';
import { submitRSVP } from '../actions'; // Import the Server Action

export default function Footer() {
  return (
    <footer className="relative w-full min-h-[450px] overflow-hidden flex flex-col justify-center">
      {/* 1. Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" /> 
        <Image 
          src="/Footer.png" 
          alt="Venue Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 2. Content Overlay matching Figma Option A */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 py-16 flex flex-col h-full justify-between">
        
        {/* Top Section: CTA and Form */}
        <div className="mb-12">
          <h2 className="text-white text-3xl  mb-8  tracking-tighter">
            Space is limited.
          </h2>

          <form 
            action={async (formData) => {
              const res = await submitRSVP(formData); // Calls your Airtable logic
              if (res.success) {
                alert("RSVP Confirmed!");
              } else {
                alert(res.error || "Airtable error");
              }
            }}
            className="flex flex-col md:flex-row items-center gap-4 max-w-4xl"
          >
            <div className="relative w-full md:w-2/3">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Mail size={20} />
              </div>
              <input 
                name="email" // Must match formData.get('email') in actions.ts
                type="email"
                placeholder="Enter your work email to confirm your attendance"
                required
                className="w-full pl-12 pr-4 py-4 bg-white border border-transparent rounded-sm text-gray-800 focus:outline-none"
              />
            </div>
            <button 
  type="submit"
  className="w-full md:w-auto bg-[#F5AB40] hover:bg-[#e09b35] text-white px-12 py-5 font-bold rounded-md shadow-md transition-all whitespace-nowrap text-lg"
>
  RSVP now
</button>
          </form>
        </div>

        {/* Bottom Section: Branding and Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="flex flex-col gap-2">
            {/* Styled Logo: 'simpli' (white) + 'learn' (cyan) */}
            <div className="text-white font-black text-3xl tracking-tighter flex items-baseline">
              simpli<span className="text-[#00E5FF]">learn</span>
            </div>
          </div>
          
          <p className="text-white/80 text-[11px] font-medium  tracking-[0.2em]">
            © 2009-2025 - Simplilearn Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}