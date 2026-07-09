import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-3xl font-extrabold text-white tracking-tight mb-4 block">
            Vyapar<span className="text-yellow-500">Setu</span>
          </Link>
          <p className="text-sm text-gray-400 max-w-md">
            Humari koshish hai ki aapke cyber cafe aur customers ko sabse behtareen aur fast digital services mil sakein. 
            Aapka bharosa hi hamari pehchaan hai.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-yellow-400 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-yellow-400 transition">About Us</Link></li>
            <li><Link href="/track-status" className="hover:text-yellow-400 transition">Track Application</Link></li>
            <li><Link href="/partner-login" className="hover:text-yellow-400 transition">Partner Login</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: support@vyaparsetu.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Timing: 10:00 AM - 6:00 PM</li>
          </ul>
        </div>
        
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Vyapar Setu. All rights reserved.</p>
      </div>
    </footer>
  );
}