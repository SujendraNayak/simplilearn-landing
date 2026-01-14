import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#021B33] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 pb-8 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter">simplilearn</h2>
            <p className="text-gray-400 text-sm max-w-xs">
              Empowering professionals with the skills of tomorrow. Join our exclusive 
              industry roundtables to stay ahead.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-12">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-sm uppercase text-[#00E5FF]">Event</span>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">About</Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Speakers</Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Venue</Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-bold text-sm uppercase text-[#00E5FF]">Legal</span>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-gray-500 gap-4">
          <p>© {currentYear} Simplilearn. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-white transition-colors">YouTube</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}