import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ScriptUpload } from './pages/ScriptUpload';
import { VideoPlayer } from './pages/VideoPlayer';
import { Projects } from './pages/Projects';
import { Dashboard } from './pages/Dashboard';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/upload" element={<ScriptUpload />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/video/:id" element={<VideoPlayer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-gray-300 py-12 px-4 mt-12">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-4">VideoGen</h3>
          <p className="text-sm">Transform scripts into professional videos with AI.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Features</a></li>
            <li><a href="#" className="hover:text-white transition">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition">Security</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Privacy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms</a></li>
            <li><a href="#" className="hover:text-white transition">Licenses</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-8 text-center text-sm">
        <p>&copy; 2026 Auto Video Generator. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default App;
