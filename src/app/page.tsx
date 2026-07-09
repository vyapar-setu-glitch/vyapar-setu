import Link from "next/link";
import Hero from "@/components/Hero"; // Hero component import kiya

export default function Home() {
  const services = [
    { title: "Loans", desc: "Personal, Business, & Mortgage Loans", icon: "💰", link: "/services/loan" },
    { title: "Insurance", desc: "Health, Life, & Motor Insurance", icon: "🛡️", link: "/services/insurance" },
    { title: "GST Services", desc: "New GST, Returns & Amendments", icon: "📊", link: "/services/gst" },
    { title: "ITR Filing", desc: "Income Tax Returns & Tax Calculator", icon: "📝", link: "/services/itr" },
    { title: "Property", desc: "Buy, Sell, Rent & Property Loans", icon: "🏢", link: "/services/property" },
    { title: "Other Services", desc: "FASTag, PAN, Aadhaar & Udyam", icon: "⚙️", link: "/services/other" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* External Hero Component render hoga */}
      <Hero />

      {/* Services Grid Section */}
      <section id="services-section" className="py-20 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Top Services</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Fast, secure aur reliable processing ke sath apna business badhayein.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 transition duration-300 cursor-pointer group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition duration-300">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.desc}</p>
              <Link 
                href={service.link} 
                className="text-blue-600 font-bold hover:text-blue-800 flex items-center gap-2"
              >
                Apply Now <span className="text-xl">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}