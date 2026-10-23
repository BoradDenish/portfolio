import React, { useState, useMemo } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProjectCard } from '../components/ui/ProjectCard';
import { projects } from '../data/projects';
import { Search, X } from 'lucide-react';

const categories = [
  'All',
  'Featured',
  'Enterprise & ERP',
  'IoT & Systems',
  'Logistics & SaaS',
  'Automation & Desktop',
  'Messaging & AI',
  'Hospitality & Retail'
] as const;

type CategoryType = typeof categories[number];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category filter
      if (selectedCategory === 'Featured' && !project.featured) {
        return false;
      }
      if (selectedCategory !== 'All' && selectedCategory !== 'Featured' && project.category !== selectedCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = project.title.toLowerCase().includes(query);
        const matchesSubtitle = project.subtitle.toLowerCase().includes(query);
        const matchesSummary = project.summary.toLowerCase().includes(query);
        const matchesTech = project.tech.some(t => t.toLowerCase().includes(query));
        const matchesCategory = project.category.toLowerCase().includes(query);
        return matchesTitle || matchesSubtitle || matchesSummary || matchesTech || matchesCategory;
      }

      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="projects"
      className="py-20 md:py-28 relative scroll-mt-24 border-t border-slate-800/60"
      aria-labelledby="projects-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Engineering Portfolio"
          title="Featured Production Work"
          description="Scalable backend architectures, mission-critical IoT telemetry, systems automation, and enterprise platforms engineered in Python and Rust."
        />

        {/* Filter and Search Controls */}
        <div className="mb-10 space-y-4 max-w-4xl mx-auto">
          {/* Search Box */}
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by technology (e.g. Rust, FastAPI, Celery, TCP)..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/80 transition-all font-mono"
              aria-label="Search projects by technology or title"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 p-1"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1" role="tablist" aria-label="Project categories">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm shadow-cyan-500/30'
                      : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                  }`}
                  role="tab"
                  aria-selected={isSelected}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 rounded-xl border border-slate-800 bg-[#0c121e]">
            <p className="text-slate-400 text-sm font-mono mb-3">
              No engineering projects match the filter "{searchQuery || selectedCategory}".
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="text-xs text-cyan-400 font-semibold hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
