import React from 'react';
import { useState } from 'react';

function App() {
  const [reportType, setReportType] = useState('weekly');

  const handleReportChange = (event) => {
    setReportType(event.target.value);
  };

  return (
    <div className="bg-dark-blue text-white font-montserrat">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-dark-blue p-4">
        <div className="container mx-auto flex items-center justify-between">
          <a href="/" className="text-2xl font-bold">AI Networking</a>
          <div className="space-x-6">
            <a href="#home" className="hover:text-neon-green">Home</a>
            <a href="#features" className="hover:text-neon-green">Features</a>
            <a href="#use-cases" className="hover:text-neon-green">Use Cases</a>
            <a href="#technology" className="hover:text-neon-green">Technology</a>
            <a href="#tools" className="hover:text-neon-green">Tools</a>
            <a href="#contact" className="hover:text-neon-green">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-dark-blue">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Enhancing Communication with AI-Driven Networking</h1>
          <p className="text-lg mb-8">We aim to revolutionize networking with AI.</p>
          <button className="bg-neon-green text-dark-blue font-bold py-3 px-8 rounded-full hover:bg-white hover:text-dark-blue">Learn More</button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">Intelligent Traffic Management</h3>
              <p className="text-gray-300">Dynamically optimize network traffic for maximum efficiency.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">Predictive Analytics</h3>
              <p className="text-gray-300">Anticipate and resolve network issues before they impact performance.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">Self-Healing Networks</h3>
              <p className="text-gray-300">Automatically detect and repair network faults.</p>
            </div>
            {/* Feature 4 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">Security Enhancements</h3>
              <p className="text-gray-300">Advanced security protocols to protect against cyber threats.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-16 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Use Case 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">5G Networks</h3>
              <p className="text-gray-300">Optimize 5G network performance with AI-driven solutions.</p>
            </div>
            {/* Use Case 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">IoT Devices</h3>
              <p className="text-gray-300">Manage and secure large-scale IoT deployments.</p>
            </div>
            {/* Use Case 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">Smart Cities</h3>
              <p className="text-gray-300">Enhance urban infrastructure with intelligent networking.</p>
            </div>
            {/* Use Case 4 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">Autonomous Vehicles</h3>
              <p className="text-gray-300">Ensure reliable communication for autonomous vehicles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tech 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">TensorFlow</h3>
              <p className="text-gray-300">AI models powered by TensorFlow.</p>
            </div>
            {/* Tech 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">PyTorch</h3>
              <p className="text-gray-300">Deep learning frameworks with PyTorch.</p>
            </div>
            {/* Tech 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">SDN</h3>
              <p className="text-gray-300">Software Defined Networking for flexible control.</p>
            </div>
            {/* Tech 4 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">5G</h3>
              <p className="text-gray-300">Next-generation 5G network integration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-16 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">AI Networking Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tool 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">Real-Time Network Analysis Tool</h3>
              <p className="text-gray-300">Upload network data and get real-time insights.</p>
              <a href="/real-time-analysis" className="text-neon-green hover:text-white">Try it out</a>
            </div>
            {/* Tool 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">Congestion Prediction Tool</h3>
              <p className="text-gray-300">Predict future congestion points based on network data.</p>
              <a href="/congestion-prediction" className="text-neon-green hover:text-white">Try it out</a>
            </div>
            {/* Tool 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">Traffic Routing Optimization Tool</h3>
              <p className="text-gray-300">Suggest optimal routes for data packets.</p>
              <a href="/traffic-routing" className="text-neon-green hover:text-white">Try it out</a>
            </div>
            {/* Tool 4 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">Self-Healing Network Simulator</h3>
              <p className="text-gray-300">Simulate network failures and see how the system reroutes traffic.</p>
              <a href="/self-healing-simulator" className="text-neon-green hover:text-white">Try it out</a>
            </div>
            {/* Tool 5 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">Security Threat Detection Tool</h3>
              <p className="text-gray-300">Detect and mitigate security threats in network traffic.</p>
              <a href="/security-threat-detection" className="text-neon-green hover:text-white">Try it out</a>
            </div>
            {/* Tool 6 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">Real-Time Adaptability Tool</h3>
              <p className="text-gray-300">Simulate dynamic network conditions and see how the system adapts.</p>
              <a href="/real-time-adaptability" className="text-neon-green hover:text-white">Try it out</a>
            </div>
            {/* Tool 7 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">Insights and Reports Generator</h3>
              <p className="text-gray-300">Generate actionable insights and reports based on network data.</p>
              <div>
                <label htmlFor="reportType" className="block text-gray-300 text-sm font-bold mb-2">Report Type:</label>
                <select id="reportType" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" value={reportType} onChange={handleReportChange}>
                  <option value="weekly">Weekly Performance</option>
                  <option value="monthly">Monthly Performance</option>
                  <option value="security">Security Incidents</option>
                </select>
              </div>
              <a href={`/reports?type=${reportType}`} className="text-neon-green hover:text-white">Generate Report</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Name</label>
              <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 text-white" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email</label>
              <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 text-white" placeholder="Your Email" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">Message</label>
              <textarea id="message" rows="5" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 text-white" placeholder="Your Message"></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-neon-green text-dark-blue font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline hover:bg-white hover:text-dark-blue" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-dark-blue border-t border-gray-700">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2024 AI-Driven Networking. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
