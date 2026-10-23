import React from 'react';

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  description,
  align = 'center',
  className = ''
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}
    >
      {tag && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-cyan-950/60 text-cyan-400 border border-cyan-800/40 ${isCenter ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          <span>{tag}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
