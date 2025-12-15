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
  // Base style: Fully rounded (pill shape), bold font
  const baseStyle = "inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 focus:outline-none transform active:scale-95";
  
  const variants = {
    // Gradient Pink to Purple with Glow
    primary: "bg-gradient-to-r from-brand-primary to-brand-secondary text-white hover:shadow-[0_0_20px_rgba(245,49,127,0.6)] border border-transparent hover:brightness-110",
    
    // Border with pink glow on hover
    outline: "border-2 border-slate-600 text-brand-light hover:border-brand-primary hover:text-brand-primary hover:shadow-[0_0_15px_rgba(245,49,127,0.3)] bg-transparent",
    
    // Cyan accent for high contrast actions
    accent: "bg-brand-accent text-brand-darker hover:bg-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)]",
    
    // Ghost with subtle hover
    ghost: "bg-transparent text-slate-400 hover:text-brand-primary hover:bg-brand-primary/10"
  };

  const sizes = {
    sm: "text-xs px-4 py-1.5 gap-1.5",
    md: "text-sm px-6 py-2.5 gap-2",
    lg: "text-base px-10 py-3.5 gap-2.5"
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