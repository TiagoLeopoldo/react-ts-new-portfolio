import React from 'react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  open?: boolean; // Preserving toggle state for Navbar
  as?: 'button' | 'a';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  href, 
  target, 
  rel, 
  className = '', 
  open,
  as,
  onClick,
  ...props
}) => {
  const isLink = !!href || as === 'a';
  const baseClass = variant === 'ghost' ? 'button-atom--ghost' : 'button-atom';
  const variantClass = variant !== 'ghost' ? `button-atom--${variant}` : '';
  const openClass = open ? 'open' : '';
  
  const combinedClasses = `${baseClass} ${variantClass} ${openClass} ${className}`.trim();

  if (isLink) {
    return (
      <a 
        href={href} 
        target={target} 
        rel={rel} 
        className={combinedClasses}
        onClick={onClick as any}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      type="button"
      className={combinedClasses} 
      onClick={onClick}
      aria-expanded={open}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;