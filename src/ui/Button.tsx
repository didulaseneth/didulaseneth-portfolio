// src/ui/Button.tsx
import React, { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-accent-from via-accent-via to-accent-to text-white shadow-lg shadow-accent-via/20 hover:scale-105 hover:shadow-accent-via/30",
    secondary:
      "bg-surface border border-border text-fog hover:border-accent-via hover:text-accent-via hover:bg-surface/80",
    outline:
      "border border-border text-fog hover:border-accent-via hover:text-accent-via",
    ghost: "text-mist hover:text-fog hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={props.target}
        rel={props.rel}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
