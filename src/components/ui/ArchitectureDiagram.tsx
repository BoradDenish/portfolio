import React from 'react';
import { ArchitectureNode } from '../../types';
import { ArrowRight, ArrowDown } from 'lucide-react';

interface ArchitectureDiagramProps {
  nodes?: ArchitectureNode[];
  summary?: string;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ nodes, summary }) => {
  if (!nodes || nodes.length === 0) return null;

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6 my-8">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
          System Architecture &amp; Data Pipeline
        </h4>
        <span className="text-xs text-slate-500 font-mono">End-to-End Topology</span>
      </div>

      {summary && (
        <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
          {summary}
        </p>
      )}

      {/* Grid of Nodes with Directional Connectors */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {nodes.map((node, index) => (
          <React.Fragment key={index}>
            <div className="relative rounded-lg border border-slate-800/90 bg-slate-950/80 p-4 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
              <div className="mb-2">
                <span className="inline-block text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-800/40 mb-2">
                  Step 0{index + 1} • {node.role}
                </span>
                <h5 className="text-sm font-bold text-white mb-1">{node.title}</h5>
                <p className="text-xs text-slate-400 leading-normal">{node.description}</p>
              </div>
              <div className="pt-3 mt-3 border-t border-slate-800/60">
                <span className="text-[11px] font-mono text-slate-500 block">Stack:</span>
                <span className="text-xs font-mono text-cyan-300 font-medium">{node.tech}</span>
              </div>

              {/* Desktop arrow for step transition */}
              {index < nodes.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-slate-800 border border-slate-700 items-center justify-center text-cyan-400 shadow">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>

            {/* Mobile down arrow */}
            {index < nodes.length - 1 && (
              <div className="flex md:hidden justify-center py-1 text-cyan-400">
                <ArrowDown className="w-4 h-4" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
