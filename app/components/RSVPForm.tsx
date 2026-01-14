import { Mail } from 'lucide-react';

export default function RSVPForm() {
  return (
    <section className="w-full bg-[#E5E5E5] py-12 px-6 border-b border-gray-300">
      <div className="max-w-5xl mx-auto flex justify-center">
        {/* Changed 'gap-0' to 'gap-4' to create space between the elements */}
        <form className="flex flex-col md:flex-row items-stretch w-full max-w-3xl gap-4">
          
          {/* Email Input Field */}
          <div className="relative flex-grow">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Mail size={18} />
            </div>
            <input 
              type="email"
              name="email"
              placeholder="Enter your work email to confirm your attendance"
              required
              className="w-full pl-12 pr-4 py-5 bg-white border-2 border-[#D157A1] text-gray-800 focus:outline-none placeholder:text-gray-400 text-sm rounded-sm"
            />
          </div>
          
          {/* RSVP Button - Now separated by a gap */}
          <button 
            type="submit"
            className="bg-[#F5AB40] hover:bg-[#e09b35] text-white px-10 py-5 font-black uppercase text-lg transition-all rounded-sm whitespace-nowrap shadow-md"
          >
            RSVP Now
          </button>
        </form>
      </div>
    </section>
  );
}