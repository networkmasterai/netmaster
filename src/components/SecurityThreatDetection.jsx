import React, { useState } from 'react';

function SecurityThreatDetection() {
  const [detectionResults, setDetectionResults] = useState(null);
  const [logData, setLogData] = useState('');

  const handleLogChange = (event) => {
    setLogData(event.target.value);
  };

  const handleDetection = () => {
    // Simulate threat detection with random data
    const threats = Math.floor(Math.random() * 5);
    const severity = Math.random() * 10;
    const suspiciousIP = Math.floor(Math.random() * 255) + "." + Math.floor(Math.random() * 255) + "." + Math.floor(Math.random() * 255) + "." + Math.floor(Math.random() * 255);

    setDetectionResults({
      threats,
      severity: severity.toFixed(2),
      suspiciousIP,
    });
  };

  return (
    <div className="container mx-auto p-4 md:p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Security Threat Detection Tool</h2>
      <p className="text-gray-300 mb-4">Simulate security threat detection.</p>
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 text-white mb-4"
        rows="5"
        placeholder="Enter network traffic logs (CSV, JSON)"
        value={logData}
        onChange={handleLogChange}
      />
      <button className="bg-neon-green text-dark-blue font-bold py-2 px-4 rounded-full hover:bg-white hover:text-dark-blue transition duration-300 ease-in-out" onClick={handleDetection}>Detect Threats</button>
      {detectionResults && (
        <div className="mt-4 md:mt-8 p-4 md:p-6 rounded-xl shadow-md bg-gray-800 border border-gray-700 transition duration-300 ease-in-out inline-block">
          <h3 className="text-xl font-bold mb-2">Detection Results:</h3>
          <p className="text-gray-300">Threats Detected: {detectionResults.threats}</p>
          <div className="mb-2 md:mb-4">
            <label htmlFor="severity" className="block text-gray-300 text-sm font-bold mb-2">Severity: {detectionResults.severity}</label>
            <input type="range" id="severity" min="0" max="10" value={detectionResults.severity} className="w-full" disabled />
          </div>
          <p className="text-gray-300">Suspicious IP: {detectionResults.suspiciousIP}</p>
          {detectionResults.threats > 3 || detectionResults.severity > 7 && (
            <p className="text-red-500">Alert: Potential security breach detected!</p>
          )}
        </div>
      )}
    </div>
  );
}

export default SecurityThreatDetection;
