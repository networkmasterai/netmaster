import React, { useState } from 'react';

function CongestionPrediction() {
  const [predictionResults, setPredictionResults] = useState(null);
  const [trafficVolume, setTrafficVolume] = useState(500);
  const [latency, setLatency] = useState(50);
  const [routerId, setRouterId] = useState('X');

  const handlePrediction = (event) => {
    event.preventDefault();

    // Simulate prediction with random data
    const congestionLevel = Math.random() * (trafficVolume / 1000) * (latency / 100) * 100;

    setPredictionResults({
      congestionLevel: congestionLevel > 100 ? 100 : congestionLevel.toFixed(2),
      routerId: routerId,
    });
  };

  return (
    <div className="container mx-auto p-4 md:p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Congestion Prediction Tool</h2>
      <p className="text-gray-300 mb-4">Predict future congestion points.</p>
      <form onSubmit={handlePrediction} className="inline-block">
        <div className="mb-2 md:mb-4">
          <label htmlFor="trafficVolume" className="block text-gray-300 text-sm font-bold mb-2">Traffic Volume (MB):</label>
          <input
            type="number"
            id="trafficVolume"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 text-white"
            placeholder="Enter traffic volume"
            value={trafficVolume}
            onChange={(e) => setTrafficVolume(e.target.value)}
          />
        </div>
        <div className="mb-2 md:mb-4">
          <label htmlFor="latency" className="block text-gray-300 text-sm font-bold mb-2">Latency (ms):</label>
          <input
            type="number"
            id="latency"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 text-white"
            placeholder="Enter latency"
            value={latency}
            onChange={(e) => setLatency(e.target.value)}
          />
        </div>
        <div className="mb-2 md:mb-4">
          <label htmlFor="routerId" className="block text-gray-300 text-sm font-bold mb-2">Router ID:</label>
          <input
            type="text"
            id="routerId"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 text-white"
            placeholder="Enter Router ID"
            value={routerId}
            onChange={(e) => setRouterId(e.target.value)}
          />
        </div>
        <button className="bg-neon-green text-dark-blue font-bold py-2 px-4 rounded-full hover:bg-white hover:text-dark-blue transition duration-300 ease-in-out" type="submit">Predict</button>
      </form>
      {predictionResults && (
        <div className="mt-4 md:mt-8 p-4 md:p-6 rounded-xl shadow-md bg-gray-800 border border-gray-700 transition duration-300 ease-in-out inline-block">
          <h3 className="text-xl font-bold mb-2">Prediction Results:</h3>
          <p className="text-gray-300">Predicted congestion at Router {predictionResults.routerId}</p>
          <div className="mb-2 md:mb-4">
            <label htmlFor="congestionLevel" className="block text-gray-300 text-sm font-bold mb-2">Congestion Level: {predictionResults.congestionLevel}%</label>
            <input type="range" id="congestionLevel" min="0" max="100" value={predictionResults.congestionLevel} className="w-full" disabled />
          </div>
          {predictionResults.congestionLevel > 70 && (
            <p className="text-red-500">Alert: High congestion predicted at Router {predictionResults.routerId}!</p>
          )}
        </div>
      )}
    </div>
  );
}

export default CongestionPrediction;
