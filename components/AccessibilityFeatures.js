import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Skip to Content Link
export const SkipToContent = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
                 bg-primary-600 text-white px-4 py-2 rounded-lg z-50 
                 focus:outline-none focus:ring-2 focus:ring-accent-400"
    >
      Skip to main content
    </a>
  );
};

// Focus Trap for Modals
export const FocusTrap = ({ children, isActive }) => {
  useEffect(() => {
    if (!isActive) return;

    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [isActive]);

  return <>{children}</>;
};

// Reduced Motion Wrapper
export const ReducedMotionWrapper = ({ children, fallback }) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion ? fallback : children;
};

// Accessible Button with ARIA
export const AccessibleButton = ({ 
  children, 
  onClick, 
  ariaLabel, 
  ariaDescribedBy,
  className = "",
  disabled = false,
  ...props 
}) => {
  return (
    <motion.button
      className={`focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 
                  focus:ring-offset-primary-900 disabled:opacity-50 disabled:cursor-not-allowed
                  ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      {...props}
    >
      {children}
    </motion.button>
  );
};
