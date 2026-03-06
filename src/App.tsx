import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import CaseStudyPage from './pages/CaseStudyPage';
import EnterpriseSolutions from './pages/EnterpriseSolutions';

import DeliveredProjects from './pages/DeliveredProjects';


const App: React.FC = () => {
  return (
    <Router>
      <div style={{ position: 'relative' }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/onegodown/kiran-ai-pos" element={<CaseStudyPage />} />
          <Route path="/i-a-a-s" element={<EnterpriseSolutions />} /> {/* Placeholder */}
          <Route path="/i-a-a-s/visionai" element={<EnterpriseSolutions />} /> {/* Placeholder */}
          <Route path="/onegodown" element={<EnterpriseSolutions />} /> {/* Placeholder */}
          <Route path="/enterprise" element={<EnterpriseSolutions />} />
          <Route path="/delivered-projects" element={<DeliveredProjects />} />

        </Routes>
        <AdminPanel />
      </div>
    </Router>
  );
};

export default App;
