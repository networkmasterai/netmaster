import React, { useState } from 'react';

function RealTimeAdaptability() {
  const [adaptabilityResults, setAdaptabilityResults] = useState(null);
  const [bandwidthAllocated, setBandwidthAllocated] = useState(50);
  const [trafficPriority, setTrafficPriority] = useState(5);

  const handleAdaptability = () => {
    // Simulate adaptability with random data
    const routingEfficiency = Math.random() * trafficPriority * 10;
    const adjustedLatency = 100 - bandwidthAllocated + Math.random() * 20;

    setAdaptabilityResults({
      bandwidthAllocated: bandwidthAllocated,
      routingEfficiency: routingEfficiency.toFixed(2),
      adjustedLatency: adjustedLatency.toFixed(2),
    });
  };

  return (
    <div className="container mx-auto p-4 md:p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Real-Time Adaptability Tool</h2>
      <p className="text-gray-300 mb-4">Simulate dynamic network conditions.</p>
      <div className="mb-2 md:mb-4">
        <label htmlFor="bandwidthAllocated" className="block text-gray-300 text-sm font-bold mb-2">Bandwidth Allocated (%):</label>
        <input
          type="number"
          id="bandwidthAllocated"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 text-white"
          placeholder="Enter bandwidth allocation"
          value={bandwidthAllocated}
          onChange={(e) => setBandwidthAllocated(e.target.value)}
        />
      </div>
      <div className="mb-2 md:mb-4">
        <label htmlFor="trafficPriority" className="block text-gray-300 text-sm font-bold mb-2">Traffic Priority (1-10):</label>
        <input
          type="number"
          id="trafficPriority"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 text-white"
          placeholder="Enter traffic priority"
          value={trafficPriority}
          onChange={(e) => setTrafficPriority(e.target.value)}
        />
      </div>
      <button
        className="bg-neon-green text-dark-blue font-bold py-2 px-4 rounded-full hover:bg-white hover:text-dark-blue transition duration-300 ease-in-out"
        onClick={handleAdaptability}
      >
        Simulate Adaptability
      </button>
      {adaptabilityResults && (
        <div className="mt-4 md:mt-8 p-4 md:p-6 rounded-xl shadow-md bg-gray-800 border border-gray-700 transition duration-300 ease-in-out inline-block">
          <h3 className="text-xl font-bold mb-2">Adaptability Results:</h3>
          <div className="mb-2 md:mb-4">
            <label htmlFor="routingEfficiency" className="block text-gray-300 text-sm font-bold mb-2">Routing Efficiency: {adaptabilityResults.routingEfficiency}%</label>
            <input type="range" id="routingEfficiency" min="0" max="100" value={adaptabilityResults.routingEfficiency} className="w-full" disabled />
          </div>
          <div className="mb-2 md:mb-4">
            <label htmlFor="adjustedLatency" className="block text-gray-300 text-sm font-bold mb-2">Adjusted Latency: {adaptabilityResults.adjustedLatency}ms</label>
            <input type="range" id="adjustedLatency" min="0" max="100" value={adaptabilityResults.adjustedLatency} className="w-full" disabled />
          </div>
          {adaptabilityResults.adjustedLatency > 80 && (
            <p className="text-red-500">Alert: High latency after adaptation!</p>
          )}
        </div>
      )}
    </div>
  );
}

export default RealTimeAdaptability;
