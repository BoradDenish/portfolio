import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { skillCategories } from '../data/skills';
import { Server, Cpu, Database, Cloud, Terminal, Layers } from 'lucide-react';
import { Badge } from '../components/ui/Badge';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-5 h-5 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-blue-400" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-purple-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-cyan-400" />;
      default:
        return <Server className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-20 md:py-28 relative scroll-mt-24 border-t border-slate-800/60"
      aria-labelledby="skills-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Engineering Competencies"
          title="Skills &amp; Technology Stack"
          description="Verified technologies, programming runtimes, protocols, and architectural patterns I work with in production."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-800 bg-[#0c121e] p-6 hover:border-slate-700/80 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0">
                    {getIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cat.skills.map((skill, sIdx) => (
                    <Badge
                      key={sIdx}
                      variant={skill.highlight ? 'cyan' : 'slate'}
                      size="sm"
                    >
                      {skill.name}
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
