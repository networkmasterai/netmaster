import React, { useState } from 'react';

function TrafficRouting() {
  const [optimizationResults, setOptimizationResults] = useState(null);
  const [numRouters, setNumRouters] = useState(5);
  const [trafficLoad, setTrafficLoad] = useState(70);
  const [startRouter, setStartRouter] = useState(1);
  const [endRouter, setEndRouter] = useState(5);

  const handleOptimization = () => {
    // Simulate route optimization with random data
    const optimalRoute = Math.floor(Math.random() * numRouters) + 1;
    const latency = Math.random() * (100 - trafficLoad) + 10;

    setOptimizationResults({
      optimalRoute,
      latency: latency.toFixed(2),
      startRouter,
      endRouter,
    });
  };

  return (
    <div className="container mx-auto p-4 md:p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Traffic Routing Optimization Tool</h2>
      <p className="text-gray-300 mb-4">Simulate optimal routes for data packets.</p>
      <div className="mb-2 md:mb-4">
        <label htmlFor="numRouters" className="block text-gray-300 text-sm font-bold mb-2">Number of Routers:</label>
        <input
          type="number"
          id="numRouters"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 text-white"
          placeholder="Enter number of routers"
          value={numRouters}
          onChange={(e) => setNumRouters(e.target.value)}
        />
      </div>
      <div className="mb-2 md:mb-4">
        <label htmlFor="trafficLoad" className="block text-gray-300 text-sm font-bold mb-2">Traffic Load (%):</label>
        <input
          type="number"
          id="trafficLoad"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 text-white"
          placeholder="Enter traffic load"
          value={trafficLoad}
          onChange={(e) => setTrafficLoad(e.target.value)}
        />
      </div>
      <div className="mb-2 md:mb-4">
        <label htmlFor="startRouter" className="block text-gray-300 text-sm font-bold mb-2">Start Router:</label>
        <input
          type="number"
          id="startRouter"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 text-white"
          placeholder="Enter start router"
          value={startRouter}
          onChange={(e) => setStartRouter(e.target.value)}
        />
      </div>
      <div className="mb-2 md:mb-4">
        <label htmlFor="endRouter" className="block text-gray-300 text-sm font-bold mb-2">End Router:</label>
        <input
          type="number"
          id="endRouter"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 text-white"
          placeholder="Enter end router"
          value={endRouter}
          onChange={(e) => setEndRouter(e.target.value)}
        />
      </div>
      <button
        className="bg-neon-green text-dark-blue font-bold py-2 px-4 rounded-full hover:bg-white hover:text-dark-blue transition duration-300 ease-in-out"
        onClick={handleOptimization}
      >
        Optimize Routes
      </button>
      {optimizationResults && (
        <div className="mt-4 md:mt-8 p-4 md:p-6 rounded-xl shadow-md bg-gray-800 border border-gray-700 transition duration-300 ease-in-out inline-block">
          <h3 className="text-xl font-bold mb-2">Optimization Results:</h3>
          <p className="text-gray-300">Optimal Route: Router {optimizationResults.startRouter} to Router {optimizationResults.endRouter} through Router {optimizationResults.optimalRoute}</p>
          <div className="mb-2 md:mb-4">
            <label htmlFor="latency" className="block text-gray-300 text-sm font-bold mb-2">Latency: {optimizationResults.latency}ms</label>
            <input type="range" id="latency" min="10" max="100" value={optimizationResults.latency} className="w-full" disabled />
          </div>
          {optimizationResults.latency > 80 && (
            <p className="text-red-500">Alert: High latency detected on the optimal route!</p>
          )}
        </div>
      )}
    </div>
  );
}

export default TrafficRouting;
