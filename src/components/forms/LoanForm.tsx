"use client";
import { useState } from "react";
import FileUploadZone from "../FileUploadZone";

export default function LoanForm() {
  const [formData, setFormData] = useState({ fullName: "", phone: "", loanType: "", amount: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Loan Data:", formData);
    alert("Loan Application Submitted!");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-8 border-t-4 border-blue-600">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">Apply for Loan</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            <input type="text" required className="w-full px-4 py-2 border rounded-lg" onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
            <input type="tel" required className="w-full px-4 py-2 border rounded-lg" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Loan Type</label>
            <select className="w-full px-4 py-2 border rounded-lg" onChange={(e) => setFormData({...formData, loanType: e.target.value})}>
              <option>Personal Loan</option>
              <option>Business Loan</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Required Amount</label>
            <input type="number" required className="w-full px-4 py-2 border rounded-lg" onChange={(e) => setFormData({...formData, amount: e.target.value})} />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Documents (Aadhaar, PAN, Bank Statement)</label>
          <FileUploadZone />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700">Submit Loan Request</button>
      </form>
    </div>
  );
}