"use client";
import { useState } from "react";
import FileUploadZone from "../FileUploadZone";

export default function GstForm() {
  const [formData, setFormData] = useState({ ownerName: "", phone: "", businessName: "", businessType: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("GST Data:", formData);
    alert("GST Application Submitted!");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-8 border-t-4 border-green-600">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">GST Registration / Return</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Owner Name</label>
            <input type="text" required className="w-full px-4 py-2 border rounded-lg" onChange={(e) => setFormData({...formData, ownerName: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
            <input type="tel" required className="w-full px-4 py-2 border rounded-lg" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Business Name</label>
            <input type="text" required className="w-full px-4 py-2 border rounded-lg" onChange={(e) => setFormData({...formData, businessName: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Business Type</label>
            <select className="w-full px-4 py-2 border rounded-lg" onChange={(e) => setFormData({...formData, businessType: e.target.value})}>
              <option>Proprietorship</option>
              <option>Partnership</option>
            </select>
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Documents (Aadhaar, PAN, Shop Proof)</label>
          <FileUploadZone />
        </div>
        <button type="submit" className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700">Submit GST Request</button>
      </form>
    </div>
  );
}