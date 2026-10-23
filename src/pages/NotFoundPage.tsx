import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Terminal } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4 pt-28">
      <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 text-cyan-400">
        <Terminal className="w-8 h-8" />
      </div>
      <span className="text-xs font-mono px-3 py-1 rounded bg-rose-950/60 text-rose-400 border border-rose-800/40 mb-3">
        HTTP 404 • Resource Not Found
      </span>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
        Page Not Found
      </h1>
      <p className="text-sm sm:text-base text-slate-400 max-w-md mb-8 leading-relaxed">
        The route you requested does not exist on this server. It may have been relocated or removed.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button to="/" variant="primary" icon={<ArrowLeft className="w-4 h-4" />}>
          Back to Portfolio
        </Button>
        <Link
          to="/#projects"
          className="text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors underline"
        >
          View Case Studies
        </Link>
      </div>
    </div>
  );
};
