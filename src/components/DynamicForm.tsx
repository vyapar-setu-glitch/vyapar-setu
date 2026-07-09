"use client";

import { useState } from "react";
import FileUploadZone from "./FileUploadZone";

// Hum is component ko batayenge ki kaun si service ke liye form khul raha hai
interface DynamicFormProps {
  serviceName: string;
  category: "GST" | "ITR" | "Loan" | "Other";
}

export default function DynamicForm({ serviceName, category }: DynamicFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    extraDetail: "", // Loan amount ya GST type ke liye
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Yahan hum Supabase backend me data bhejne ka logic likhenge
    console.log("Form Submitted for:", serviceName, formData);
    alert(`${serviceName} application submit ho gayi hai!`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100 mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
        Apply for {serviceName}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Details (Har service me same rahega) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              placeholder="Enter your name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              placeholder="10-digit mobile number"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Dynamic Field (Service ke hisaab se badlega) */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {category === "Loan" ? "Required Loan Amount (₹)" : 
             category === "ITR" ? "Financial Year (e.g., 2023-24)" : 
             "Additional Details"}
          </label>
          <input
            type="text"
            name="extraDetail"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
            placeholder="Enter details here..."
            onChange={handleChange}
          />
        </div>

        {/* File Upload Section */}
        <div className="mt-8">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Upload Required Documents 
            <span className="text-gray-500 font-normal text-xs ml-2">
              ({category === "Loan" ? "Aadhaar, PAN & Bank Statement" : "PAN & Aadhaar"})
            </span>
          </label>
          {/* Humara banaya hua compression wala uploader */}
          <FileUploadZone />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md mt-6"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}