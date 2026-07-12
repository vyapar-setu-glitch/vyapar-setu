"use client";
import { useState } from "react";
import FileUploadZone from "../FileUploadZone";
import Link from "next/link";
// Supabase client import kiya hai
import { supabase } from "@/utils/supabase";

export default function LoanForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state ke liye

  const [formData, setFormData] = useState({
    fullName: "", dob: "", gender: "",
    panNumber: "", aadhaarNumber: "",
    phone: "", email: "", pincode: "", city: "",
    employmentType: "", monthlyIncome: "", existingEmi: "",
    loanType: "", amount: "", tenure: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Button ko loading state me dalna
    
    // Tracking ID generate karna
    const generatedId = `LOAN-VS-${Math.floor(100000 + Math.random() * 900000)}`;
    
    // Supabase me data insert karna
    const { data, error } = await supabase
      .from('applications')
      .insert([
        { 
          tracking_id: generatedId,
          service_type: 'Loan',
          status: 'Pending',
          customer_name: formData.fullName,
          phone: formData.phone,
          raw_data: formData // Poora ka poora form JSON banke yahan save hoga
        }
      ]);

    setIsSubmitting(false); // Loading band karna

    if (error) {
      console.error("Database Error:", error);
      alert("Application submit karne mein error aaya. Kripya dobara koshish karein.");
      return; // Agar error aaye toh yahi ruk jao
    }
    
    // Agar success ho gaya toh ID set karo aur Success screen dikhao
    setTrackingId(generatedId);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-xl mt-8 text-center border-t-4 border-green-500">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Application Submitted!</h2>
        <p className="text-gray-600 mb-8">Aapki loan application safaltapurvak darj kar li gayi hai aur database mein save ho chuki hai.</p>
        
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8 inline-block w-full">
          <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">Your Tracking ID</p>
          <p className="text-3xl font-black text-blue-700 tracking-widest">{trackingId}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/track-status" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Track Status Now
          </Link>
          <button onClick={() => window.location.reload()} className="bg-gray-100 text-gray-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition">
            Apply for Another Loan
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl mt-8 border-t-4 border-blue-600">
      <div className="mb-8 border-b pb-4">
        <h2 className="text-3xl font-extrabold text-gray-800">Loan Eligibility & Application Form</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* SECTION 1: Personal Details */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <input type="text" name="fullName" required className="w-full px-4 py-2 border rounded-lg" onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth</label>
              <input type="date" name="dob" required className="w-full px-4 py-2 border rounded-lg" onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
              <select name="gender" required className="w-full px-4 py-2 border rounded-lg" onChange={handleChange}>
                <option value="">Select</option><option>Male</option><option>Female</option>
              </select>
            </div>
          </div>
        </div>

        {/* SECTION 2: Contact & KYC */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
              <input type="tel" name="phone" maxLength={10} required className="w-full px-4 py-2 border rounded-lg" onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">PAN Number</label>
              <input type="text" name="panNumber" maxLength={10} required className="w-full px-4 py-2 border rounded-lg uppercase" onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
              <input type="text" name="city" required className="w-full px-4 py-2 border rounded-lg" onChange={handleChange} />
            </div>
          </div>
        </div>

        {/* SECTION 3: Loan details */}
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Loan Type</label>
              <select name="loanType" required className="w-full px-4 py-2 border rounded-lg bg-white" onChange={handleChange}>
                <option value="">Select Loan</option><option>Personal Loan</option><option>Business Loan</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Required Amount (₹)</label>
              <input type="number" name="amount" required className="w-full px-4 py-2 border rounded-lg bg-white" onChange={handleChange} />
            </div>
          </div>
          
          <div className="mt-6 border-t border-blue-200 pt-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Documents</label>
            <FileUploadZone />
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full text-white font-extrabold text-lg py-4 rounded-xl transition shadow-lg flex justify-center items-center gap-2
            ${isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-1"}`}
        >
          {isSubmitting ? "Submitting Application..." : "Submit Loan Application"}
        </button>
      </form>
    </div>
  );
}