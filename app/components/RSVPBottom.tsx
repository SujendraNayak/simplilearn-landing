'use client'; // Required for interactivity and form feedback

import Image from 'next/image';
import { Mail } from 'lucide-react';
import { submitRSVP } from '../actions'; // Import the Server Action bridge to Airtable 

export default function RSVPBottom() {
  const points = [
    "A clear view of the leadership & workforce capabilities that will matter most over the next 24-36 months.",
    "Insights from high-scale operating environments including the former CLO of McDonald's on what truly scales and what breaks under pressure.",
    "Signals for where capability gaps may already be forming in your organization.",
    "Peer-validated perspectives from leaders running workforce, talent, and transformation ecosystems at scale.",
    "Actionable insights you can take straight into your next exec meeting."
  ];

  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-20">
        
        {/* Left Content */}
        <div className="w-full md:w-3/5">
          {/* Heading: Decreased size to 2xl and forced small letters using 'lowercase' */}
          <h2 className="text-[#F5AB40] font-black leading-none mb-6 text-[30px] " 
    style={{ fontFamily: 'Satoshi Variable, sans-serif' }}>
  Go behind the curtain with real <br />
  examples and high-scale insights
</h2>
          <p className="font-bold text-black mb-8 text-xl">You&apos;ll walk away with:</p>
          
          <ul className="space-y-6">
            {points.map((point, i) => (
              <li key={i} className="flex gap-4 border-l-4 border-gray-200 pl-5 py-1">
                <span className="text-base text-gray-800 leading-relaxed font-medium">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-2/5 flex justify-center">
          <div className="relative w-full aspect-square">
            <Image 
              src="/B2.png" 
              alt="Chess pieces illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Functional RSVP Form Bar */}
      <div className="max-w-4xl mx-auto">
        <form 
          action={async (formData) => {
            const result = await submitRSVP(formData);
            if (result.success) {
              alert("RSVP Confirmed!");
            } else {
              alert(result.error || "Airtable error");
            }
          }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <div className="relative w-full md:w-2/3">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Mail size={20} />
            </div>
            <input 
              name="email" // CRITICAL: Must match formData.get('email') in actions.ts 
              type="email"
              placeholder="Enter your work email to confirm your attendance"
              required
              className="w-full pl-12 pr-4 py-5 bg-white border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#F5AB40] text-lg"
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
    </section>
  );
}