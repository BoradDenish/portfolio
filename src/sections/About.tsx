import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { personalInfo } from '../data/personal';
import { Server, Cpu, Database, Cloud } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Server className="w-5 h-5 text-cyan-400" />,
      title: 'High-Concurrency APIs',
      description: 'Designing clean, modular RESTful APIs and asynchronous services using FastAPI and Django REST Framework, fortified with automated schema validation and JWT authentication.'
    },
    {
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      title: 'IoT & Socket Telemetry',
      description: 'Engineering persistent raw TCP/IP, WebSockets, and Socket.IO listeners that connect edge hardware panels behind NAT firewalls directly with cloud event loops.'
    },
    {
      icon: <Database className="w-5 h-5 text-blue-400" />,
      title: 'Relational Data Integrity',
      description: 'Architecting normalized schemas in PostgreSQL and MySQL, eliminating N+1 query overheads, and implementing engine-level triggers, quotas, and double-entry ledgers.'
    },
    {
      icon: <Cloud className="w-5 h-5 text-purple-400" />,
      title: 'Cloud & Task Orchestration',
      description: 'Managing production deployments on Ubuntu AWS EC2 with Nginx, Gunicorn/Uvicorn, systemd daemons, and offloading heavy tasks to Celery/Redis queues.'
    }
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-28 relative scroll-mt-24 border-t border-slate-800/60"
      aria-labelledby="about-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Background & Philosophy"
          title="Engineering High-Throughput, Resilient Systems"
          description="A look into my engineering background, core backend competencies, and architectural principles."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Bio & Stats */}
          <div className="lg:col-span-6 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am a Python Backend Developer and Systems Engineer with 3+ years of professional experience building high-throughput production services, distributed task pipelines, and mission-critical IoT telemetry gateways across Master Global Tech and previously at Inlancer Technologies.
            </p>
            <p>
              My engineering approach prioritizes determinism, type safety, and clean separation of concerns. Whether engineering sub-millisecond resident ERP services in Rust, scaling asynchronous ASGI endpoints in FastAPI, or decoding raw TCP sensor frames from remote edge microcontrollers, I focus on building systems that remain resilient under real-world traffic spikes.
            </p>
            <p className="text-slate-400 text-sm">
              I hold a Master of Science in Information Technology (M.Sc. IT) with an 8.71 CGPA from Saurashtra University, providing a strong theoretical foundation in distributed systems, advanced database models, and systems architecture.
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {personalInfo.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-800 bg-[#0c121e] p-3 text-center"
                >
                  <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Technical Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-800 bg-[#0c121e] p-5 hover:border-slate-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center mb-3">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
