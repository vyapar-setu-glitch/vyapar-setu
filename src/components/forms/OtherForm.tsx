"use client";
import { useState } from "react";
import FileUploadZone from "../FileUploadZone";

export default function OtherForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", serviceRequired: "", extraNotes: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Other Services Data:", formData);
    alert("Request Submitted!");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-8 border-t-4 border-indigo-600">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">Other Digital Services</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            <input type="text" required className="w-full px-4 py-2 border rounded-lg" onChange={(e) => setFormData({...formData, name: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
            <input type="tel" required className="w-full px-4 py-2 border rounded-lg" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Required Service</label>
            <select className="w-full px-4 py-2 border rounded-lg" onChange={(e) => setFormData({...formData, serviceRequired: e.target.value})}>
              <option value="">Select Service</option>
              <option>New PAN Card</option>
              <option>FASTag Recharge/New</option>
              <option>Udyam Registration</option>
              <option>Aadhaar Update Help</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Any Extra Notes?</label>
            <input type="text" placeholder="Type here..." className="w-full px-4 py-2 border rounded-lg" onChange={(e) => setFormData({...formData, extraNotes: e.target.value})} />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Documents (Aadhaar, Passport Photo, etc.)</label>
          <FileUploadZone />
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition">Submit Request</button>
      </form>
    </div>
  );
}