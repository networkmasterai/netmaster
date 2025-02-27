import React, { useState } from 'react';

function SelfHealingSimulator() {
  const [simulationResults, setSimulationResults] = useState(null);
  const [numRouters, setNumRouters] = useState(5);
    const [failedRouter, setFailedRouter] = useState(1);

  const handleSimulation = () => {
    // Simulate failure and rerouting with random data
    const rerouted = Math.random() > 0.5;
    const downtime = rerouted ? Math.random() * 5 : 10;

    setSimulationResults({
      failedRouter,
      rerouted: rerouted ? 'Yes' : 'No',
      downtime: downtime.toFixed(2),
    });
  };

  return (
    <div className="container mx-auto p-4 md:p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Self-Healing Network Simulator</h2>
      <p className="text-gray-300 mb-4">Simulate network failures and see how the system reroutes traffic.</p>
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
            <label htmlFor="failedRouter" className="block text-gray-300 text-sm font-bold mb-2">Failed Router:</label>
            <input
                type="number"
                id="failedRouter"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 text-white"
                placeholder="Enter a router number to fail"
                value={failedRouter}
                onChange={(e) => setFailedRouter(e.target.value)}
            />
        </div>
      <button
        className="bg-neon-green text-dark-blue font-bold py-2 px-4 rounded-full hover:bg-white hover:text-dark-blue transition duration-300 ease-in-out"
        onClick={handleSimulation}
      >
        Simulate Failure
      </button>
      {simulationResults && (
        <div className="mt-4 md:mt-8 p-4 md:p-6 rounded-xl shadow-md bg-gray-800 border border-gray-700 transition duration-300 ease-in-out inline-block">
          <h3 className="text-xl font-bold mb-2">Simulation Results:</h3>
          <p className="text-gray-300">Failed Router: Router {simulationResults.failedRouter}</p>
          <p className="text-gray-300">Rerouted: {simulationResults.rerouted}</p>
          <div className="mb-2 md:mb-4">
            <label htmlFor="downtime" className="block text-gray-300 text-sm font-bold mb-2">Downtime: {simulationResults.downtime}s</label>
            <input type="range" id="downtime" min="0" max="10" value={simulationResults.downtime} className="w-full" disabled />
          </div>
          {simulationResults.downtime > 5 && (
            <p className="text-red-500">Alert: Significant downtime experienced!</p>
          )}
        </div>
      )}
    </div>
  );
}

export default SelfHealingSimulator;
