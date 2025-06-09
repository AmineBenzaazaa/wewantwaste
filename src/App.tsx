import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SelectSkipPage from './pages/SelectSkip';
import PermitCheckPage from './pages/PermitCheckPage';
import { SkipSelectionProvider } from './context/SkipSelectionContext';

const App: React.FC = () => (
  <SkipSelectionProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/select-skip" replace />} />
        <Route path="/select-skip" element={<SelectSkipPage />} />
        <Route path="/permit-check" element={<PermitCheckPage />} />
        {/* other routes */}
      </Routes>
    </Router>
  </SkipSelectionProvider>
);

export default App;