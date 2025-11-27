import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon,
  className = '',
  ...props 
}) => {
  const baseStyle = "inline-flex items-center justify-center font-bold rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-darker";
  
  const variants = {
    primary: "bg-brand-primary text-brand-darker hover:bg-emerald-400 focus:ring-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]",
    outline: "border border-slate-600 text-brand-light hover:bg-slate-800 hover:border-slate-500 focus:ring-slate-500",
    accent: "bg-brand-accent text-white hover:bg-fuchsia-600 focus:ring-fuchsia-500 shadow-[0_0_15px_rgba(217,70,239,0.3)]",
    ghost: "bg-transparent text-slate-400 hover:text-brand-primary hover:bg-slate-800/50"
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-8 py-3.5 gap-2.5"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && <i className={`${icon}`}></i>}
      {children}
    </button>
  );
};