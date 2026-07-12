"use client";
import { useState } from "react";
import FileUploadZone from "../FileUploadZone";

export default function InsuranceForm() {
  const [formData, setFormData] = useState({ customerName: "", phone: "", insuranceType: "", detail: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Insurance Data:", formData);
    alert("Insurance Application Submitted!");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-8 border-t-4 border-yellow-500">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">Apply for Insurance</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Customer Name</label>
            <input type="text" required className="w-full px-4 py-2 border rounded-lg" onChange={(e) => setFormData({...formData, customerName: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
            <input type="tel" required className="w-full px-4 py-2 border rounded-lg" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Insurance Type</label>
            <select className="w-full px-4 py-2 border rounded-lg" onChange={(e) => setFormData({...formData, insuranceType: e.target.value})}>
              <option value="">Select Type</option>
              <option>Health Insurance</option>
              <option>Life Insurance</option>
              <option>Motor (Bike/Car) Insurance</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Age / Vehicle No.</label>
            <input type="text" required placeholder="e.g. 25 or DL-XX-XXXX" className="w-full px-4 py-2 border rounded-lg" onChange={(e) => setFormData({...formData, detail: e.target.value})} />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Documents (Aadhaar, PAN, RC/Old Policy)</label>
          <FileUploadZone />
        </div>
        <button type="submit" className="w-full bg-yellow-500 text-white font-bold py-3 rounded-lg hover:bg-yellow-600 transition">Submit Insurance Request</button>
      </form>
    </div>
  );
}