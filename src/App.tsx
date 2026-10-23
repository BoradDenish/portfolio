import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { BackgroundGrid } from './components/shared/BackgroundGrid';
import { HomePage } from './pages/HomePage';

const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage').then(m => ({ default: m.ProjectDetailPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

const LoadingFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm">
      <svg className="animate-spin h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
      <span>Loading system module...</span>
    </div>
  </div>
);

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#080c14] text-slate-200 flex flex-col justify-between selection:bg-cyan-500/20 selection:text-cyan-200">
      <ScrollToTop />
      <BackgroundGrid />
      <Navbar />

      <div className="relative z-10 flex-1">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>

      <Footer />
    </div>
  );
};

export default App;
