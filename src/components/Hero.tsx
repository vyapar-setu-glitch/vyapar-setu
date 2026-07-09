import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-24 px-4 text-center shadow-inner relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl bottom-10 right-10"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
          Aapke Business Ka <br className="hidden md:block"/> 
          <span className="text-yellow-400">Digital Saathi</span>
        </h1>
        <p className="text-lg md:text-2xl mb-10 text-blue-100 font-medium max-w-3xl mx-auto">
          Loans, GST, ITR aur sabhi jaruri suvidhayein ab ek hi jagah par. Fast processing aur secure documentation ke sath.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link 
            href="#services-section" 
            className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition shadow-xl w-full sm:w-auto"
          >
            Explore Services
          </Link>
          <Link 
            href="/contact" 
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition w-full sm:w-auto"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}