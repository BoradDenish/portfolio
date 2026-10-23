import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  download,
  target,
  rel,
  icon,
  iconPosition = 'left',
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080c14] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5'
  };

  const variantStyles = {
    primary: 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold shadow-sm shadow-cyan-500/20 active:translate-y-px',
    secondary: 'bg-slate-800 hover:bg-slate-700/80 text-slate-100 border border-slate-700/80 active:translate-y-px hover:border-slate-600',
    outline: 'bg-transparent hover:bg-cyan-500/10 text-cyan-400 border border-cyan-500/40 hover:border-cyan-400 active:translate-y-px',
    ghost: 'bg-transparent hover:bg-slate-800 text-slate-300 hover:text-white'
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`.trim();

  const content = (
    <>
      {isLoading ? (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      ) : icon && iconPosition === 'left' ? (
        <span className="flex-shrink-0">{icon}</span>
      ) : null}
      <span>{children}</span>
      {!isLoading && icon && iconPosition === 'right' ? (
        <span className="flex-shrink-0">{icon}</span>
      ) : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        download={download}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={combinedClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
};
