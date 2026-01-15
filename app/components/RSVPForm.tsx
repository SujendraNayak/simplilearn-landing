'use client'; // Required for interactivity (alerts/actions)

import { Mail } from 'lucide-react';
import { submitRSVP } from '../actions'; // Import the Server Action 

export default function RSVPForm() {
  return (
    <section className="w-full bg-[#E5E5E5] py-12 px-6 border-b border-gray-300">
      <div className="max-w-5xl mx-auto flex justify-center">
        {/* Form linked to Server Action  */}
        <form 
          action={async (formData) => {
            const result = await submitRSVP(formData); // 
            if (result.success) {
              alert("RSVP Confirmed!");
            } else {
              alert(result.error || "Airtable error");
            }
          }}
          className="flex flex-col md:flex-row items-stretch w-full max-w-3xl gap-4"
        >
          
          {/* Email Input Field */}
          <div className="relative flex-grow">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Mail size={18} />
            </div>
            <input 
              type="email"
              name="email" // CRITICAL: Must match formData.get('email') in actions.ts 
              placeholder="Enter your work email to confirm your attendance"
              required
              className="w-full pl-12 pr-4 py-5 bg-white border-2 border-[#D157A1] text-gray-800 focus:outline-none placeholder:text-gray-400 text-sm rounded-sm"
            />
          </div>
          
          {/* RSVP Button */}
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