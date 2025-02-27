import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import Components
import CongestionPrediction from './components/CongestionPrediction';
import InsightsReports from './components/InsightsReports';
import RealTimeAdaptability from './components/RealTimeAdaptability';
import RealTimeAnalysis from './components/RealTimeAnalysis';
import SecurityThreatDetection from './components/SecurityThreatDetection';
import SelfHealingSimulator from './components/SelfHealingSimulator';
import TrafficRouting from './components/TrafficRouting';

function Home() {
  const [reportType, setReportType] = useState('weekly');

  return (
    <div className="bg-dark-blue text-white font-montserrat">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-dark-blue p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">AI Networking</Link>
          <div className="space-x-6">
            <Link to="/">Home</Link>
            <Link to="/congestion-prediction">Congestion</Link>
            <Link to="/traffic-routing">Traffic Routing</Link>
            <Link to="/real-time-analysis">Analysis</Link>
            <Link to="/security-threat-detection">Security</Link>
            <Link to="/insights-reports">Reports</Link>
            <Link to="/self-healing-simulator">Self-Healing</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-dark-blue text-center">
        <h1 className="text-5xl font-bold mb-6">Enhancing Communication with AI-Driven Networking</h1>
        <p className="text-lg mb-8">Revolutionizing networking with AI-driven solutions.</p>
        <Link to="/traffic-routing" className="bg-neon-green text-dark-blue font-bold py-3 px-8 rounded-full hover:bg-white hover:text-dark-blue">
          Learn More
        </Link>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-16 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">AI Networking Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Congestion Prediction</h3>
              <p className="text-gray-300">Predict future congestion points.</p>
              <Link to="/congestion-prediction" className="text-neon-green hover:text-white">Try it out</Link>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Traffic Routing</h3>
              <p className="text-gray-300">Optimize network traffic routes.</p>
              <Link to="/traffic-routing" className="text-neon-green hover:text-white">Try it out</Link>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Real-Time Analysis</h3>
              <p className="text-gray-300">Get live network insights.</p>
              <Link to="/real-time-analysis" className="text-neon-green hover:text-white">Try it out</Link>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Security Threat Detection</h3>
              <p className="text-gray-300">Detect and mitigate security threats.</p>
              <Link to="/security-threat-detection" className="text-neon-green hover:text-white">Try it out</Link>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Self-Healing Networks</h3>
              <p className="text-gray-300">Simulate self-repairing networks.</p>
              <Link to="/self-healing-simulator" className="text-neon-green hover:text-white">Try it out</Link>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Insights & Reports</h3>
              <p className="text-gray-300">Generate AI-powered reports.</p>
              <Link to="/insights-reports" className="text-neon-green hover:text-white">Generate Report</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/congestion-prediction" element={<CongestionPrediction />} />
        <Route path="/traffic-routing" element={<TrafficRouting />} />
        <Route path="/real-time-analysis" element={<RealTimeAnalysis />} />
        <Route path="/security-threat-detection" element={<SecurityThreatDetection />} />
        <Route path="/self-healing-simulator" element={<SelfHealingSimulator />} />
        <Route path="/real-time-adaptability" element={<RealTimeAdaptability />} />
        <Route path="/insights-reports" element={<InsightsReports />} />
      </Routes>
    </Router>
  );
}

export default App;
