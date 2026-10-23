import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'slate' | 'emerald' | 'amber' | 'blue';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'slate',
  size = 'sm',
  className = '',
  icon
}) => {
  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 gap-1.5',
    md: 'text-xs sm:text-sm px-3 py-1 gap-2'
  };

  const variantStyles = {
    cyan: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/25',
    slate: 'bg-slate-800/80 text-slate-300 border border-slate-700/60',
    emerald: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25',
    amber: 'bg-amber-500/10 text-amber-400 border border-amber-500/25',
    blue: 'bg-blue-500/10 text-blue-400 border border-blue-500/25'
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded-md tracking-wide ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
