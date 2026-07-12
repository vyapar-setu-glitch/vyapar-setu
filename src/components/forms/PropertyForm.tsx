"use client";
import { useState } from "react";
import FileUploadZone from "../FileUploadZone";

export default function PropertyForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", requirement: "", budgetLocation: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Property Data:", formData);
    alert("Property Request Submitted!");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-8 border-t-4 border-teal-500">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">Property Services</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
            <input type="text" required className="w-full px-4 py-2 border rounded-lg" onChange={(e) => setFormData({...formData, name: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
            <input type="tel" required className="w-full px-4 py-2 border rounded-lg" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Requirement</label>
            <select className="w-full px-4 py-2 border rounded-lg" onChange={(e) => setFormData({...formData, requirement: e.target.value})}>
              <option value="">Select Option</option>
              <option>Buy Property</option>
              <option>Sell Property</option>
              <option>Rent Property</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Budget & Location</label>
            <input type="text" required placeholder="e.g. 50L in Patna" className="w-full px-4 py-2 border rounded-lg" onChange={(e) => setFormData({...formData, budgetLocation: e.target.value})} />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Documents (Aadhaar, Property Papers if selling)</label>
          <FileUploadZone />
        </div>
        <button type="submit" className="w-full bg-teal-500 text-white font-bold py-3 rounded-lg hover:bg-teal-600 transition">Submit Property Request</button>
      </form>
    </div>
  );
}