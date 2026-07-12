"use client";
import { useState } from "react";
import FileUploadZone from "../FileUploadZone";

export default function ItrForm() {
  const [formData, setFormData] = useState({ fullName: "", panNumber: "", financialYear: "2023-24", incomeSource: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("ITR Data:", formData);
    alert("ITR Application Submitted!");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-8 border-t-4 border-purple-600">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">File ITR (Income Tax Return)</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            <input type="text" required className="w-full px-4 py-2 border rounded-lg" onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">PAN Number</label>
            <input type="text" required maxLength={10} className="w-full px-4 py-2 border rounded-lg uppercase" onChange={(e) => setFormData({...formData, panNumber: e.target.value})} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Financial Year</label>
            <select className="w-full px-4 py-2 border rounded-lg" onChange={(e) => setFormData({...formData, financialYear: e.target.value})}>
              <option>2023-24</option>
              <option>2024-25</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Income Source</label>
            <select className="w-full px-4 py-2 border rounded-lg" onChange={(e) => setFormData({...formData, incomeSource: e.target.value})}>
              <option value="">Select Source</option>
              <option>Salary</option>
              <option>Business</option>
              <option>Both</option>
            </select>
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Documents (Aadhaar, PAN, Bank Statement/Form 16)</label>
          <FileUploadZone />
        </div>
        <button type="submit" className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700 transition">Submit ITR Request</button>
      </form>
    </div>
  );
}