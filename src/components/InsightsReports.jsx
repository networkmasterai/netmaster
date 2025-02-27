import React, { useState } from 'react';

function InsightsReports() {
  const [reportType, setReportType] = useState('weekly');
  const [reportContent, setReportContent] = useState(null);
  const [reportData, setReportData] = useState(null);

  const handleReportChange = (event) => {
    setReportType(event.target.value);
  };

  const handleReportGeneration = () => {
    // Simulate report generation with random data
    console.log('Generating report...');
    const avgLatency = Math.random() * 80 + 20;
    const packetLoss = Math.random() * 3;
    setReportData({
      avgLatency: avgLatency.toFixed(2),
      packetLoss: packetLoss.toFixed(2),
    });
    const content = `Report Type: ${reportType}`;
    setReportContent(content);
  };

  return (
    <div className="container mx-auto p-4 md:p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Insights and Reports Generator</h2>
      <p className="text-gray-300 mb-4">Simulate actionable insights and reports.</p>
      <div>
        <label htmlFor="reportType" className="block text-gray-300 text-sm font-bold mb-2">Report Type:</label>
        <select
          id="reportType"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
          value={reportType}
          onChange={handleReportChange}
        >
          <option value="weekly">Weekly Performance</option>
          <option value="monthly">Monthly Performance</option>
          <option value="security">Security Incidents</option>
        </select>
      </div>
      <button
        className="bg-neon-green text-dark-blue font-bold py-2 px-4 rounded-full hover:bg-white hover:text-dark-blue transition duration-300 ease-in-out"
        onClick={handleReportGeneration}
      >
        Generate Report
      </button>
      {reportContent && reportData && (
        <div className="mt-4 md:mt-8 p-4 md:p-6 rounded-xl shadow-md bg-gray-800 border border-gray-700 transition duration-300 ease-in-out inline-block">
          <h3 className="text-xl font-bold mb-2">Report:</h3>
          <p className="text-gray-300">{reportContent}</p>
          <div className="mb-2 md:mb-4">
            <label htmlFor="avgLatency" className="block text-gray-300 text-sm font-bold mb-2">Average Latency: {reportData.avgLatency}ms</label>
            <input type="range" id="avgLatency" min="20" max="100" value={reportData.avgLatency} className="w-full" disabled />
          </div>
          <div className="mb-2 md:mb-4">
            <label htmlFor="packetLoss" className="block text-gray-300 text-sm font-bold mb-2">Packet Loss: {reportData.packetLoss}%</label>
            <input type="range" id="packetLoss" min="0" max="3" value={reportData.packetLoss} className="w-full" disabled />
          </div>
          {reportData.avgLatency > 70 || reportData.packetLoss > 2 && (
            <p className="text-red-500">Alert: Poor network performance detected!</p>
          )}
        </div>
      )}
    </div>
  );
}

export default InsightsReports;
