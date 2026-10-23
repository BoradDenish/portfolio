import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../types';
import { ArrowUpRight, Cpu, Server, Network, Terminal, Shield, CheckCircle2 } from 'lucide-react';
import { Badge } from './Badge';

interface ProjectCardProps {
  project: Project;
  featuredLayout?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featuredLayout = false }) => {
  // Category-based icon
  const getCategoryIcon = (category: Project['category']) => {
    switch (category) {
      case 'IoT & Systems':
        return <Cpu className="w-4 h-4 text-cyan-400" />;
      case 'Enterprise & ERP':
        return <Server className="w-4 h-4 text-blue-400" />;
      case 'Logistics & SaaS':
        return <Network className="w-4 h-4 text-emerald-400" />;
      case 'Automation & Desktop':
        return <Terminal className="w-4 h-4 text-amber-400" />;
      default:
        return <Shield className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <article
      className={`group relative rounded-xl border border-slate-800 bg-[#0c121e] hover:border-cyan-500/40 transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] ${
        featuredLayout ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
    >
      {/* Visual Architectural Card Header */}
      <div className="relative h-44 bg-gradient-to-b from-[#111a2d] to-[#0c121e] p-5 border-b border-slate-800/80 flex flex-col justify-between overflow-hidden select-none">
        {/* Subtle decorative background circuit / grid */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id={`pattern-${project.id}`} width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#pattern-${project.id})`} />
          </svg>
        </div>

        {/* Top Badges */}
        <div className="relative z-10 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-2.5 py-1 rounded bg-slate-900/90 text-cyan-300 border border-slate-700/60 shadow-sm">
            {getCategoryIcon(project.category)}
            <span>{project.category}</span>
          </span>

          {project.featured && (
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              ★ Featured
            </span>
          )}
        </div>

        {/* System Identifier & Key Metric */}
        <div className="relative z-10">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest block mb-1">
            {project.role}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
            {project.title}
          </h3>
        </div>

        {/* Quick Metric Bar */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="relative z-10 flex items-center gap-3 pt-2 text-[11px] font-mono text-slate-400 border-t border-slate-800/50">
            <span className="text-emerald-400 font-medium">
              {project.metrics[0].value}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400 line-clamp-1">
              {project.metrics[0].label}
            </span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-xs font-medium text-cyan-400/90 mb-2">
            {project.subtitle}
          </p>
          <p className="text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
            {project.summary}
          </p>

          {/* Key engineering feature bullet */}
          {project.features && project.features.length > 0 && (
            <div className="mb-5 space-y-1.5">
              <div className="text-xs text-slate-400 flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="line-clamp-2">{project.features[0]}</span>
              </div>
            </div>
          )}

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.slice(0, 5).map((techName) => (
              <Badge key={techName} variant="slate" size="sm">
                {techName}
              </Badge>
            ))}
            {project.tech.length > 5 && (
              <span className="text-[11px] text-slate-400 font-mono self-center px-1">
                +{project.tech.length - 5} more
              </span>
            )}
          </div>
        </div>

        {/* Action Button linking to Project Detail Page */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
            aria-label={`View ${project.title} technical deep dive`}
          >
            <span>Architecture &amp; Case Study</span>
            <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </Link>

          <span className="text-xs font-mono text-slate-500">
            {project.year || 'Production'}
          </span>
        </div>
      </div>
    </article>
  );
};
