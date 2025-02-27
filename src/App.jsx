import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import RealTimeAnalysis from './components/RealTimeAnalysis';
import CongestionPrediction from './components/CongestionPrediction';
import TrafficRouting from './components/TrafficRouting';
import SelfHealingSimulator from './components/SelfHealingSimulator';
import SecurityThreatDetection from './components/SecurityThreatDetection';
import RealTimeAdaptability from './components/RealTimeAdaptability';
import InsightsReports from './components/InsightsReports';

function App() {
  return (
    <Router basename="/<repo-name>">
      <div className="bg-dark-blue text-white font-montserrat">
        {/* Navigation Bar */}
        <nav className="sticky top-0 z-50 bg-dark-blue p-4">
          <div className="container mx-auto flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold">AI Networking</Link>
            <div className="space-x-6">
              <Link to="/" className="hover:text-neon-green">Home</Link>
              <Link to="/features" className="hover:text-neon-green">Features</Link>
              <Link to="/use-cases" className="hover:text-neon-green">Use Cases</Link>
              <Link to="/technology" className="hover:text-neon-green">Technology</Link>
              <Link to="/tools" className="hover:text-neon-green">Tools</Link>
              <Link to="/contact" className="hover:text-neon-green">Contact</Link>
            </div>
          </div>
        </nav>

        <div className="flex">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/use-cases" element={<UseCases />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/real-time-analysis" element={<RealTimeAnalysis />} />
              <Route path="/congestion-prediction" element={<CongestionPrediction />} />
              <Route path="/traffic-routing" element={<TrafficRouting />} />
              <Route path="/self-healing-simulator" element={<SelfHealingSimulator />} />
              <Route path="/security-threat-detection" element={<SecurityThreatDetection />} />
              <Route path="/real-time-adaptability" element={<RealTimeAdaptability />} />
              <Route path="/insights-reports" element={<InsightsReports />} />
            </Routes>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-8 bg-dark-blue border-t border-gray-700">
          <div className="container mx-auto text-center">
            <p className="text-gray-400">© 2024 AI-Driven Networking. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <section id="home" className="py-20 bg-dark-blue">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Enhancing Communication with AI-Driven Networking</h1>
        <p className="text-lg mb-8">We aim to revolutionize networking with AI.</p>
        <Link to="/tools" className="bg-neon-green text-dark-blue font-bold py-3 px-8 rounded-full hover:bg-white hover:text-dark-blue">Explore Tools</Link>
      </div>
    </section>
  );
}

function FeatureItem({ title, description }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className={`bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative ${isHovering ? 'scale-105' : ''}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ transition: 'transform 0.3s ease-in-out' }}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
      {isHovering && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-700 bg-opacity-75 p-4 rounded-lg z-10 backdrop-blur-md">
          <p className="text-white">{description}</p>
        </div>
      )}
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureItem
            title="Intelligent Traffic Management"
            description="Dynamically optimize network traffic for maximum efficiency. Ensures optimal performance under varying conditions."
          />
          <FeatureItem
            title="Predictive Analytics"
            description="Anticipate and resolve network issues before they impact performance. Reduces downtime and improves reliability."
          />
          <FeatureItem
            title="Self-Healing Networks"
            description="Automatically detect and repair network faults. Minimizes manual intervention and ensures continuous operation."
          />
          <FeatureItem
            title="Security Enhancements"
            description="Advanced security protocols to protect against cyber threats. Safeguards sensitive data and maintains network integrity."
          />
        </div>
      </div>
    </section>
  );
}

function UseCaseItem({ title, description }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className={`bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative ${isHovering ? 'scale-105' : ''}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ transition: 'transform 0.3s ease-in-out' }}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
      {isHovering && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-700 bg-opacity-75 p-4 rounded-lg z-10 backdrop-blur-md">
          <p className="text-white">{description}</p>
        </div>
      )}
    </div>
  );
}

function UseCases() {
  return (
    <section id="use-cases" className="py-16 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <UseCaseItem
            title="5G Networks"
            description="Optimize 5G network performance with AI-driven solutions. Enhances speed and reliability for next-gen connectivity."
          />
          <UseCaseItem
            title="IoT Devices"
            description="Manage and secure large-scale IoT deployments. Ensures seamless integration and protection of connected devices."
          />
          <UseCaseItem
            title="Smart Cities"
            description="Enhance urban infrastructure with intelligent networking. Improves efficiency and sustainability in city operations."
          />
          <UseCaseItem
            title="Autonomous Vehicles"
            description="Ensure reliable communication for autonomous vehicles. Supports safe and efficient transportation systems."
          />
        </div>
      </div>
    </section>
  );
}

function TechnologyItem({ title, description }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className={`bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative ${isHovering ? 'scale-105' : ''}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ transition: 'transform 0.3s ease-in-out' }}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
      {isHovering && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-700 bg-opacity-75 p-4 rounded-lg z-10 backdrop-blur-md">
          <p className="text-white">{description}</p>
        </div>
      )}
    </div>
  );
}

function Technology() {
  return (
    <section id="technology" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Technology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TechnologyItem
            title="TensorFlow"
            description="AI models powered by TensorFlow. Enables advanced machine learning capabilities."
          />
          <TechnologyItem
            title="PyTorch"
            description="Deep learning frameworks with PyTorch. Supports flexible and efficient model development."
          />
          <TechnologyItem
            title="SDN"
            description="Software Defined Networking for flexible control. Provides dynamic and programmable network management."
          />
          <TechnologyItem
            title="5G"
            description="Next-generation 5G network integration. Ensures high-speed and low-latency communication."
          />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
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
  );
}

function Tools() {
  return (
    <section id="tools" className="py-16 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">AI Networking Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tool 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Real-Time Network Analysis Tool</h3>
            <p className="text-gray-300">Upload network data and get real-time insights.</p>
            <Link to="/real-time-analysis" className="text-neon-green hover:text-white">Try it out</Link>
          </div>
          {/* Tool 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Congestion Prediction Tool</h3>
            <p className="text-gray-300">Predict future congestion points based on network data.</p>
            <Link to="/congestion-prediction" className="text-neon-green hover:text-white">Try it out</Link>
          </div>
          {/* Tool 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Traffic Routing Optimization Tool</h3>
            <p className="text-gray-300">Suggest optimal routes for data packets.</p>
            <Link to="/traffic-routing" className="text-neon-green hover:text-white">Try it out</Link>
          </div>
          {/* Tool 4 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Self-Healing Network Simulator</h3>
            <p className="text-gray-300">Simulate network failures and see how the system reroutes traffic.</p>
            <Link to="/self-healing-simulator" className="text-neon-green hover:text-white">Try it out</Link>
          </div>
          {/* Tool 5 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Security Threat Detection Tool</h3>
            <p className="text-gray-300">Detect and mitigate security threats in network traffic.</p>
            <Link to="/security-threat-detection" className="text-neon-green hover:text-white">Try it out</Link>
          </div>
          {/* Tool 6 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Real-Time Adaptability Tool</h3>
            <p className="text-gray-300">Simulate dynamic network conditions and see how the system adapts.</p>
            <Link to="/real-time-adaptability" className="text-neon-green hover:text-white">Try it out</Link>
          </div>
          {/* Tool 7 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Insights and Reports Generator</h3>
            <p className="text-gray-300">Generate actionable insights and reports based on network data.</p>
            <Link to="/insights-reports" className="text-neon-green hover:text-white">Try it out</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sidebar() {
  const location = useLocation();
  const isToolsPage = location.pathname === '/tools' || location.pathname.startsWith('/real-time-analysis') || location.pathname.startsWith('/congestion-prediction') || location.pathname.startsWith('/traffic-routing') || location.pathname.startsWith('/self-healing-simulator') || location.pathname.startsWith('/security-threat-detection') || location.pathname.startsWith('/real-time-adaptability') || location.pathname.startsWith('/insights-reports');
  const showSidebar = isToolsPage;

  return (
    <div className={`bg-gray-800 p-4 w-64 ${showSidebar ? 'block' : 'hidden'}`}>
      <h3 className="text-xl font-bold mb-4">Tools</h3>
      <ul>
        <li className="mb-2">
          <Link to="/real-time-analysis" className="hover:text-neon-green block">Real-Time Network Analysis</Link>
        </li>
        <li className="mb-2">
          <Link to="/congestion-prediction" className="hover:text-neon-green block">Congestion Prediction</Link>
        </li>
        <li className="mb-2">
          <Link to="/traffic-routing" className="hover:text-neon-green block">Traffic Routing Optimization</Link>
        </li>
        <li className="mb-2">
          <Link to="/self-healing-simulator" className="hover:text-neon-green block">Self-Healing Network Simulator</Link>
        </li>
        <li className="mb-2">
          <Link to="/security-threat-detection" className="hover:text-neon-green block">Security Threat Detection</Link>
        </li>
        <li className="mb-2">
          <Link to="/real-time-adaptability" className="hover:text-neon-green block">Real-Time Adaptability</Link>
        </li>
        <li className="mb-2">
          <Link to="/insights-reports" className="hover:text-neon-green block">Insights and Reports Generator</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
