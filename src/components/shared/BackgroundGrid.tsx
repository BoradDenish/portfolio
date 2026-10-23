import React from 'react';

export const BackgroundGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Faint Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>

      {/* Restrained Top Subtle Radial Glow (Electric Cyan / Deep Slate) */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-cyan-500/10 via-sky-500/5 to-transparent blur-3xl opacity-60 rounded-full pointer-events-none"></div>

      {/* Subtle Right Side Accent Glow for Depth */}
      <div className="absolute top-[35%] -right-40 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Subtle Bottom Left Glow */}
      <div className="absolute bottom-[10%] -left-40 w-[500px] h-[500px] bg-slate-800/15 blur-[120px] rounded-full pointer-events-none"></div>
    </div>
  );
};
