import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const [qrValue, setQrValue] = useState(""); // Value for QR code
  const [savedQRs, setSavedQRs] = useState([]); // List of saved QR codes

  // Load saved QR codes from local storage on component mount
  useEffect(() => {
    const storedQRs = JSON.parse(localStorage.getItem("savedQRs")) || [];
    setSavedQRs(storedQRs);
  }, []);

  const handleInputChange = (event) => {
    setQrValue(event.target.value); // Update QR code value
  };

  const saveQRCode = () => {
    if (qrValue.trim() === "") return; // Ignore empty input

    const updatedQRs = [...savedQRs, qrValue]; // Add new QR to the list
    setSavedQRs(updatedQRs); // Update state
    localStorage.setItem("savedQRs", JSON.stringify(updatedQRs)); // Save to local storage
    setQrValue(""); // Clear the input field
  };

  const deleteQRCode = (indexToRemove) => {
    const updatedQRs = savedQRs.filter((_, index) => index !== indexToRemove); // Remove selected QR
    setSavedQRs(updatedQRs); // Update state
    localStorage.setItem("savedQRs", JSON.stringify(updatedQRs)); // Update local storage
  };

  const clearSavedQRs = () => {
    localStorage.removeItem("savedQRs");
    setSavedQRs([]);
  };

  return (
    <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-md max-w-md mx-auto">
      <h1 className="text-3xl font-semibold text-black mb-4 ">QR Code Generator</h1>
      
      {/* Input for URL */}
      <input
        type="text"
        placeholder="Enter a URL"
        value={qrValue}
        onChange={handleInputChange}
        className="block w-full text-gray-600 border border-blue-400 rounded-md py-2 px-4 mb-4 focus:ring-2 focus:ring-blue-600 focus:outline-none"
      />

      {/* Generate Button */}
      <button
        onClick={saveQRCode}
        className="bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition mb-4"
      >
        Save QR Code
      </button>

      {/* Display Saved QR Codes */}
      <div className="w-full">
        <h2 className="text-lg font-medium text-gray-700 mb-2">Saved QR Codes</h2>
        {savedQRs.length > 0 ? (
          savedQRs.map((value, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-50 border border-gray-300 rounded-md p-4 mb-4"
            >
              <div className="flex-1 flex flex-col items-center">
                <QRCode value={value} size={100} className="mb-2" />
                <p className="text-sm text-gray-600 break-all">{value}</p>
              </div>
              <button
                onClick={() => deleteQRCode(index)}
                className="ml-4 bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-500 transition"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No saved QR codes yet.</p>
        )}
      </div>

      {/* Clear All Saved QR Codes */}
      {savedQRs.length > 0 && (
        <button
          onClick={clearSavedQRs}
          className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-500 transition mt-4"
        >
          Clear All Saved QR Codes
        </button>
      )}
    </div>
  );
};

export default QRCodeGenerator;
