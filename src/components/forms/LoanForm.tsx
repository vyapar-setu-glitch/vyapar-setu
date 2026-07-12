"use client";
import { useState } from "react";
import FileUploadZone from "../FileUploadZone";
import Link from "next/link";

export default function LoanForm() {
  // Form submission status aur Tracking ID ke liye naye states
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState("");

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Yahan hum ek random Tracking ID generate kar rahe hain (e.g., LOAN-VS-849201)
    const generatedId = `LOAN-VS-${Math.floor(100000 + Math.random() * 900000)}`;
    
    console.log("Detailed Loan Data:", formData);
    console.log("Generated Tracking ID:", generatedId);
    
    // Form ko submit status me daalna aur ID set karna
    setTrackingId(generatedId);
    setIsSubmitted(true);
  };

  // Agar form submit ho gaya hai, toh Success Screen dikhayein
  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-xl mt-8 text-center border-t-4 border-green-500">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Application Submitted!</h2>
        <p className="text-gray-600 mb-8">Aapki loan application safaltapurvak darj kar li gayi hai. Humari team jald hi aapse sampark karegi.</p>
        
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8 inline-block w-full">
          <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">Your Tracking ID</p>
          <p className="text-3xl font-black text-blue-700 tracking-widest">{trackingId}</p>
        </div>

        <p className="text-sm text-gray-500 mb-8">
          Kripya is ID ko save kar lein. Aap iska upyog apni application ka status track karne ke liye kar sakte hain.
        </p>

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

  // Agar submit nahi hua hai, toh yeh bada form dikhega
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl mt-8 border-t-4 border-blue-600">
      <div className="mb-8 border-b pb-4">
        <h2 className="text-3xl font-extrabold text-gray-800">Loan Eligibility & Application Form</h2>
        <p className="text-gray-500 mt-2">Kripya saari details dhyaan se bharein taaki approval jaldi mil sake.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* SECTION 1: Personal Details */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span> Personal Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name (As per PAN)</label>
              <input type="text" name="fullName" required className="w-full px-4 py-2 border rounded-lg" placeholder="John Doe" onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth</label>
              <input type="date" name="dob" required className="w-full px-4 py-2 border rounded-lg" onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
              <select name="gender" required className="w-full px-4 py-2 border rounded-lg" onChange={handleChange}>
                <option value="">Select</option>
                <option>Male</option><option>Female</option><option>Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* SECTION 2: Contact & KYC */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span> Contact & KYC
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
              <input type="tel" name="phone" maxLength={10} required className="w-full px-4 py-2 border rounded-lg" placeholder="10-digit number" onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">PAN Number</label>
              <input type="text" name="panNumber" maxLength={10} required className="w-full px-4 py-2 border rounded-lg uppercase" placeholder="ABCDE1234F" onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">City & Pincode</label>
              <input type="text" name="city" required className="w-full px-4 py-2 border rounded-lg" placeholder="e.g. Patna, 800001" onChange={handleChange} />
            </div>
          </div>
        </div>

        {/* SECTION 3: Employment & Income (Eligibility Check) */}
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 className="text-lg font-bold text-blue-800 mb-4 flex items-center gap-2">
            <span className="bg-blue-200 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span> Financial Eligibility
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Employment Type</label>
              <select name="employmentType" required className="w-full px-4 py-2 border rounded-lg bg-white" onChange={handleChange}>
                <option value="">Select Type</option>
                <option>Salaried (Job)</option>
                <option>Self-Employed (Business)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Monthly Income (₹)</label>
              <input type="number" name="monthlyIncome" required className="w-full px-4 py-2 border rounded-lg bg-white" placeholder="e.g. 35000" onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Existing EMIs (if any)</label>
              <input type="number" name="existingEmi" className="w-full px-4 py-2 border rounded-lg bg-white" placeholder="e.g. 5000" onChange={handleChange} />
            </div>
          </div>
        </div>

        {/* SECTION 4: Loan Details & Documents */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span> Loan Requirement
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Loan Type</label>
              <select name="loanType" required className="w-full px-4 py-2 border rounded-lg" onChange={handleChange}>
                <option value="">Select Loan</option>
                <option>Personal Loan</option><option>Business Loan</option><option>Home Loan</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Required Amount (₹)</label>
              <input type="number" name="amount" required className="w-full px-4 py-2 border rounded-lg" placeholder="e.g. 500000" onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Tenure (Months)</label>
              <select name="tenure" required className="w-full px-4 py-2 border rounded-lg" onChange={handleChange}>
                <option value="">Select Duration</option>
                <option>12 Months (1 Yr)</option><option>24 Months (2 Yrs)</option><option>36 Months (3 Yrs)</option>
              </select>
            </div>
          </div>
          
          <div className="mt-6 border-t pt-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Documents (Aadhaar, PAN, 6-Month Bank Statement)</label>
            <FileUploadZone />
          </div>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white font-extrabold text-lg py-4 rounded-xl hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Submit Loan Application
        </button>
      </form>
    </div>
  );
}