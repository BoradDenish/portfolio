import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { education, certifications } from '../data/education';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { Badge } from '../components/ui/Badge';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-20 md:py-28 relative scroll-mt-24 border-t border-slate-800/60"
      aria-labelledby="education-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Academic Foundation"
          title="Education &amp; Certifications"
          description="Formal academic degrees and verified professional software development credentials."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Education Degrees */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <span>Degree Programs</span>
            </h3>

            {education.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-slate-800 bg-[#0c121e] p-6 hover:border-slate-700 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h4 className="text-base font-bold text-white">
                    {item.degree}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                      {item.score}
                    </span>
                    <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-cyan-400 mb-4">
                  {item.institution}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.courses.map((course, cIdx) => (
                    <Badge key={cIdx} variant="slate" size="sm">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-emerald-400" />
              <span>Verified Certifications</span>
            </h3>

            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="rounded-xl border border-slate-800 bg-[#0c121e] p-4 flex items-center justify-between gap-3 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Award className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-500 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>

            {/* Verification summary note */}
            <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-xs text-slate-400 leading-relaxed font-mono">
              <span className="text-cyan-400 font-semibold block mb-1">
                Background Verification:
              </span>
              All degree records, academic transcripts, and software engineering credentials are documented and verifiable upon request.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
