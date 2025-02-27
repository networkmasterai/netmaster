import React, { useState } from 'react';

function RealTimeAnalysis() {
  const [analysisResults, setAnalysisResults] = useState(null);
  const [logData, setLogData] = useState('');

  const handleLogChange = (event) => {
    setLogData(event.target.value);
  };

  const handleAnalysis = () => {
    // Simulate analysis with random data
    const latency = Math.random() * 90 + 10; // 10ms - 100ms
    const packetLoss = Math.random() * 5; // 0% - 5%
    const trafficVolume = Math.random() * 900 + 100; // 100MB - 1000MB

    setAnalysisResults({
      latency: latency.toFixed(2),
      packetLoss: packetLoss.toFixed(2),
      trafficVolume: trafficVolume.toFixed(2),
    });
  };

  return (
    <div className="container mx-auto p-4 md:p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Real-Time Network Analysis Tool</h2>
      <p className="text-gray-300 mb-4">Upload network logs or input live data streams.</p>
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 text-white mb-4"
        rows="5"
        placeholder="Enter network logs (CSV, JSON)"
        value={logData}
        onChange={handleLogChange}
      />
      <button className="bg-neon-green text-dark-blue font-bold py-2 px-4 rounded-full hover:bg-white hover:text-dark-blue transition duration-300 ease-in-out" onClick={handleAnalysis}>Analyze</button>
      {analysisResults && (
        <div className="mt-4 md:mt-8 p-4 md:p-6 rounded-xl shadow-md bg-gray-800 border border-gray-700 transition duration-300 ease-in-out inline-block">
          <h3 className="text-xl font-bold mb-2">Analysis Results:</h3>
          <div className="mb-2 md:mb-4">
            <label htmlFor="latency" className="block text-gray-300 text-sm font-bold mb-2">Latency: {analysisResults.latency}ms</label>
            <input type="range" id="latency" min="10" max="100" value={analysisResults.latency} className="w-full" disabled />
          </div>
          <div className="mb-2 md:mb-4">
            <label htmlFor="packetLoss" className="block text-gray-300 text-sm font-bold mb-2">Packet Loss: {analysisResults.packetLoss}%</label>
            <input type="range" id="packetLoss" min="0" max="5" value={analysisResults.packetLoss} className="w-full" disabled />
          </div>
          <div className="mb-2 md:mb-4">
            <label htmlFor="trafficVolume" className="block text-gray-300 text-sm font-bold mb-2">Traffic Volume: {analysisResults.trafficVolume} MB</label>
            <input type="range" id="trafficVolume" min="100" max="1000" value={analysisResults.trafficVolume} className="w-full" disabled />
          </div>
          {analysisResults.latency > 80 || analysisResults.packetLoss > 3 && (
            <p className="text-red-500">Alert: Abnormal network conditions detected!</p>
          )}
        </div>
      )}
    </div>
  );
}

export default RealTimeAnalysis;
