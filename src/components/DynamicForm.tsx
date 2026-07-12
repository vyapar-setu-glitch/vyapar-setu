"use client";

import { useState } from "react";
import FileUploadZone from "./FileUploadZone";

interface DynamicFormProps {
  serviceName: string;
  category: string;
}

export default function DynamicForm({ serviceName, category }: DynamicFormProps) {
  // Sabhi fields ka data ek hi jagah save hoga
  const [formData, setFormData] = useState<Record<string, string>>({
    fullName: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Submitting ${category} Form Data:`, formData);
    alert(`${serviceName} form submit ho gaya! Data console me check karein.`);
  };

  // Category ko lowercase me check karenge taaki URL se match ho
  const currentCategory = category.toLowerCase();

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100 mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
        {serviceName}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* 1. BASIC DETAILS (Yeh sabme same rahega) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              placeholder="Enter customer name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              maxLength={10}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              placeholder="10-digit mobile number"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* --------------------------------------------------- */}
        {/* 2. DYNAMIC FIELDS (Category ke hisaab se badlenge) */}
        {/* --------------------------------------------------- */}

        {/* --- LOAN LOGIC --- */}
        {currentCategory === "loan" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-blue-50 rounded-lg">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Loan Type</label>
              <select name="loanType" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white">
                <option value="">Select Loan Type</option>
                <option value="Personal Loan">Personal Loan</option>
                <option value="Business Loan">Business Loan</option>
                <option value="Home Loan">Home Loan</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Required Amount (₹)</label>
              <input type="number" name="loanAmount" placeholder="e.g. 500000" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
          </div>
        )}

        {/* --- GST LOGIC --- */}
        {currentCategory === "gst" && (
          <div className="space-y-4 p-4 bg-green-50 rounded-lg">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Business/Shop Name</label>
              <input type="text" name="businessName" placeholder="Enter business name" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Business Type</label>
              <select name="businessType" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 bg-white">
                <option value="">Select Type</option>
                <option value="Proprietorship">Proprietorship</option>
                <option value="Partnership">Partnership</option>
                <option value="Private Limited">Private Limited</option>
              </select>
            </div>
          </div>
        )}

        {/* --- INSURANCE LOGIC --- */}
        {currentCategory === "insurance" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-yellow-50 rounded-lg">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Insurance Type</label>
              <select name="insuranceType" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white">
                <option value="">Select Policy</option>
                <option value="Health">Health Insurance</option>
                <option value="Life">Life / Term Insurance</option>
                <option value="Motor">Motor / Vehicle Insurance</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Age / Vehicle Number</label>
              <input type="text" name="insuranceDetail" placeholder="Customer Age or Bike/Car No." onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            </div>
          </div>
        )}

        {/* --- ITR LOGIC --- */}
        {currentCategory === "itr" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-purple-50 rounded-lg">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Financial Year</label>
              <select name="financialYear" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white">
                <option value="2023-24">2023-24</option>
                <option value="2024-25">2024-25</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Income Source</label>
              <select name="incomeSource" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white">
                <option value="">Select Source</option>
                <option value="Salary">Salary</option>
                <option value="Business">Business</option>
                <option value="Both">Both (Salary + Business)</option>
              </select>
            </div>
          </div>
        )}

        {/* --------------------------------------------------- */}
        {/* 3. DYNAMIC DOCUMENT UPLOAD TEXT */}
        {/* --------------------------------------------------- */}
        <div className="mt-8">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Upload Required Documents 
            <span className="text-gray-500 font-normal text-xs ml-2">
              {currentCategory === "loan" && "(Aadhaar, PAN & 6 Months Bank Statement)"}
              {currentCategory === "gst" && "(Aadhaar, PAN, Photo & Shop Proof)"}
              {currentCategory === "insurance" && "(Aadhaar, PAN & RC/Old Policy if Motor)"}
              {currentCategory === "itr" && "(Aadhaar, PAN & Form 16/Bank Statement)"}
              {!["loan", "gst", "insurance", "itr"].includes(currentCategory) && "(Any supporting document)"}
            </span>
          </label>
          <FileUploadZone />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md mt-6"
        >
          Submit {currentCategory.toUpperCase()} Application
        </button>
      </form>
    </div>
  );
}