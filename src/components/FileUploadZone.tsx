"use client";

import { useState } from "react";
// Yahan humne '@' ki jagah '../' use kiya hai (Bug Fixed 🚀)
import { compressImage } from "../utils/fileCompression";

export default function FileUploadZone() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isCompressing, setIsCompressing] = useState(false);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type === "application/pdf" && file.size > 2 * 1024 * 1024) {
      alert("PDF size 2MB se zyada hai. Kripya choti file upload karein.");
      return;
    }

    setIsCompressing(true);
    
    const processedFile = await compressImage(file);
    
    setSelectedFile(processedFile);
    setIsCompressing(false);
  };

  return (
    <div className="w-full">
      <div className="border-2 border-dashed border-gray-300 bg-gray-50 rounded-xl p-6 text-center hover:border-blue-500 hover:bg-blue-50 transition duration-300">
        <input 
          type="file" 
          id="file-upload" 
          className="hidden" 
          onChange={handleFileChange}
          accept="image/jpeg, image/png, application/pdf"
        />
        <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
          <svg className="w-10 h-10 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <span className="text-gray-700 font-semibold text-lg mb-1">
            Click to upload document
          </span>
          <span className="text-sm text-gray-500">
            JPEG, PNG ya PDF (Max: 2MB)
          </span>
        </label>
      </div>

      {isCompressing && (
        <p className="mt-3 text-sm text-blue-600 font-medium animate-pulse">
          File optimize ho rahi hai, kripya pratiksha karein...
        </p>
      )}
      
      {selectedFile && !isCompressing && (
        <div className="mt-3 p-3 bg-green-50 text-green-800 text-sm rounded-lg border border-green-200 flex justify-between items-center">
          <span className="truncate font-medium">{selectedFile.name}</span>
          <span className="whitespace-nowrap ml-4">
            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
          </span>
        </div>
      )}
    </div>
  );
}