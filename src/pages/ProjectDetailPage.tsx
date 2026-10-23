import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Cpu, Code2, AlertTriangle, Layers, Calendar, User } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ArchitectureDiagram } from '../components/ui/ArchitectureDiagram';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const projectIndex = projects.findIndex((p) => p.slug === slug || p.id === slug);
  const project = projectIndex !== -1 ? projects[projectIndex] : null;

  // Previous and next projects for pagination
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Technical Deep Dive | Denish Borad`;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-28">
        <h1 className="text-3xl font-bold text-white mb-3">Project Not Found</h1>
        <p className="text-slate-400 text-sm max-w-md mb-8">
          The requested engineering case study does not exist or has been relocated.
        </p>
        <Button to="/#projects" variant="primary" icon={<ArrowLeft className="w-4 h-4" />}>
          Return to Projects
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 md:pb-28">
      {/* Top Breadcrumbs & Back Link */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-cyan-400 hover:text-cyan-300 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Case Study Header */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-950/60 text-cyan-300 border border-cyan-800/40 mb-4">
          <span>{project.category}</span>
          {project.year && (
            <>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {project.year}
              </span>
            </>
          )}
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
          {project.title}
        </h1>

        <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal mb-6">
          {project.subtitle}
        </p>

        {/* Role & Key Meta Bar */}
        <div className="flex flex-wrap items-center gap-4 py-4 px-5 rounded-xl border border-slate-800 bg-[#0c121e]">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-mono">
            <User className="w-4 h-4 text-cyan-400" />
            <span className="text-slate-500">My Role:</span>
            <span className="text-white font-medium">{project.role}</span>
          </div>

          {project.metrics && project.metrics.length > 0 && (
            <div className="hidden sm:flex items-center gap-3 text-xs font-mono text-slate-400 pl-4 border-l border-slate-800">
              {project.metrics.map((metric, mIdx) => (
                <span key={mIdx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span className="text-slate-200 font-semibold">{metric.value}</span>
                  <span className="text-slate-500 text-[11px]">({metric.label})</span>
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* 1. Overview */}
        <section className="rounded-xl border border-slate-800 bg-[#0c121e] p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-400" />
            <span>Executive Overview &amp; Architecture Pitch</span>
          </h2>
          <div className="text-sm sm:text-base text-slate-300 leading-relaxed space-y-4">
            <p>{project.description}</p>
          </div>
        </section>

        {/* 2. Problem Statement & Solution */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Problem */}
          <div className="rounded-xl border border-rose-950/40 bg-[#0c121e] p-6">
            <h2 className="text-base font-bold text-rose-400 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              <span>The Engineering Problem</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          {/* Solution */}
          <div className="rounded-xl border border-cyan-950/40 bg-[#0c121e] p-6">
            <h2 className="text-base font-bold text-cyan-400 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Architectural Solution</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.solutionOverview}
            </p>
          </div>
        </section>

        {/* 3. System Architecture Diagram */}
        {project.architectureNodes && (
          <ArchitectureDiagram
            nodes={project.architectureNodes}
            summary={project.architectureNotes}
          />
        )}

        {/* 4. Complete Technology Stack */}
        <section className="rounded-xl border border-slate-800 bg-[#0c121e] p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-emerald-400" />
            <span>Production Technology Stack</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((techName) => (
              <Badge key={techName} variant="cyan" size="md">
                {techName}
              </Badge>
            ))}
          </div>
        </section>

        {/* 5. Key Implementation Features */}
        <section className="rounded-xl border border-slate-800 bg-[#0c121e] p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-5 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-cyan-400" />
            <span>Implementation Details &amp; Engineering Deliverables</span>
          </h2>
          <div className="space-y-3.5">
            {project.features.map((feature, fIdx) => (
              <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Technical Challenges & Solutions */}
        {project.challenges && project.challenges.length > 0 && (
          <section className="rounded-xl border border-slate-800 bg-[#0c121e] p-6 sm:p-8 space-y-6">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              <span>Technical Challenges Overcome</span>
            </h2>
            <div className="space-y-5">
              {project.challenges.map((c, cIdx) => (
                <div key={cIdx} className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="text-xs sm:text-sm font-semibold text-rose-300 flex items-start gap-2">
                    <span className="text-rose-500 font-mono">Challenge:</span>
                    <span>{c.challenge}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 flex items-start gap-2 pt-1 border-t border-slate-800/60">
                    <span className="text-emerald-400 font-mono">Solution:</span>
                    <span className="leading-relaxed">{c.solution}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. Verified Results & Impact */}
        {project.verifiedResults && project.verifiedResults.length > 0 && (
          <section className="rounded-xl border border-emerald-950/50 bg-[#0c121e] p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              <span>Verified Results &amp; Benchmarks</span>
            </h2>
            <div className="space-y-3">
              {project.verifiedResults.map((result, rIdx) => (
                <div key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></span>
                  <span className="leading-relaxed font-mono">{result}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Pagination */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-cyan-400 transition-colors font-mono group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Previous: {prevProject.title}</span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-cyan-400 transition-colors font-mono group"
            >
              <span>Next: {nextProject.title}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </main>
    </div>
  );
};
