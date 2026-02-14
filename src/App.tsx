import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import YCSPage from './pages/YCSPage';
import CaseStudyPage from './pages/CaseStudyPage';
import EnterpriseSolutions from './pages/EnterpriseSolutions';

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ position: 'relative' }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/ycs" element={<YCSPage />} />
          <Route path="/case-study" element={<CaseStudyPage />} />
          <Route path="/enterprise" element={<EnterpriseSolutions />} />
        </Routes>
        <AdminPanel />
      </div>
    </Router>
  );
};

export default App;
