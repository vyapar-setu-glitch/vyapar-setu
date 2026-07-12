"use client";

import { useState } from "react";
import Link from "next/link";

export default function TrackStatusPage() {
  const [trackingId, setTrackingId] = useState("");
  const [searchState, setSearchState] = useState<"idle" | "loading" | "result">("idle");
  const [result, setResult] = useState<any>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;

    setSearchState("loading");

    setTimeout(() => {
      setResult({
        id: trackingId.toUpperCase(),
        service: trackingId.toUpperCase().includes("LOAN") ? "Loan Application" : "General Application",
        date: "12 Jul 2026", 
        status: "In Progress",
        message: "Aapki application review phase me hai. Verification team jald hi process aage badhayegi."
      });
      setSearchState("result");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Track Your <span className="text-blue-600">Application</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Apna Tracking ID daalein aur apni application ka current status check karein.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 mb-8">
          <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter Tracking ID (e.g. LOAN-VS-123456)"
              required
              className="flex-grow px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 text-lg uppercase transition placeholder:normal-case"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
            />
            <button
              type="submit"
              disabled={searchState === "loading"}
              className={`px-8 py-4 rounded-xl font-bold text-lg text-white transition shadow-md flex items-center justify-center min-w-[160px]
                ${searchState === "loading" ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1"}`}
            >
              {searchState === "loading" ? "Tracking..." : "Track Status"}
            </button>
          </form>
        </div>

        {searchState === "result" && result && (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-fade-in-up">
            <div className="bg-blue-50 p-6 border-b border-blue-100 flex justify-between items-center flex-wrap gap-4">
              <div>
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Tracking ID</p>
                <p className="text-2xl font-black text-gray-800">{result.id}</p>
              </div>
            </div>
            
            <div className="p-8 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{result.service}</h3>
              <div className="inline-block px-6 py-2 rounded-full bg-yellow-100 text-yellow-800 font-extrabold text-lg my-6 border border-yellow-200">
                Current Status: {result.status}
              </div>
              <p className="text-gray-600 text-lg max-w-lg mx-auto">{result.message}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}