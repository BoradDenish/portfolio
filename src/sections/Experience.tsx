import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { experience } from '../data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { Badge } from '../components/ui/Badge';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 relative scroll-mt-24 border-t border-slate-800/60"
      aria-labelledby="experience-title"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Career Track"
          title="Professional Experience"
          description="Verified software engineering tenure architecting high-throughput backend services and hardware telemetry pipelines."
        />

        <div className="relative border-l border-slate-800 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-12">
          {experience.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:scale-125 transition-transform shadow-[0_0_12px_rgba(6,182,212,0.6)]"></div>

              {/* Experience Card */}
              <div className="rounded-xl border border-slate-800 bg-[#0c121e] p-6 sm:p-7 hover:border-slate-700 transition-colors">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                      <span>{item.title}</span>
                      <span className="text-xs font-mono font-normal px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-800/40">
                        {item.type}
                      </span>
                    </h3>
                    <p className="text-sm font-semibold text-cyan-400 mt-0.5 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{item.company}</span>
                    </p>
                  </div>

                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Verified Achievement Highlights */}
                <div className="space-y-2 mb-6">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                  {item.skills.map((skill, sIdx) => (
                    <Badge key={sIdx} variant="slate" size="sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
