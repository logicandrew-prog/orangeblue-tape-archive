import { motion } from "framer-motion";

interface CassetteIconProps {
  className?: string;
  animate?: boolean;
}

export const CassetteIcon = ({ className = "", animate = true }: CassetteIconProps) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 120 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Cassette body */}
        <rect
          x="2"
          y="2"
          width="116"
          height="76"
          rx="6"
          fill="hsl(var(--secondary))"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
        />
        
        {/* Label area */}
        <rect
          x="12"
          y="8"
          width="96"
          height="40"
          rx="2"
          fill="hsl(var(--tape-cream))"
        />
        
        {/* Left reel */}
        <motion.circle
          cx="35"
          cy="28"
          r="14"
          fill="hsl(var(--accent))"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          animate={animate ? { rotate: 360 } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "35px 28px" }}
        />
        <circle cx="35" cy="28" r="6" fill="hsl(var(--secondary))" />
        
        {/* Right reel */}
        <motion.circle
          cx="85"
          cy="28"
          r="14"
          fill="hsl(var(--accent))"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          animate={animate ? { rotate: 360 } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "85px 28px" }}
        />
        <circle cx="85" cy="28" r="6" fill="hsl(var(--secondary))" />
        
        {/* Tape window */}
        <rect
          x="20"
          y="52"
          width="80"
          height="18"
          rx="2"
          fill="hsl(var(--accent))"
          stroke="hsl(var(--primary) / 0.5)"
          strokeWidth="1"
        />
        
        {/* Tape visible through window */}
        <rect x="24" y="56" width="72" height="10" rx="1" fill="hsl(20 30% 25%)" />
        
        {/* Screw holes */}
        <circle cx="10" cy="10" r="2" fill="hsl(var(--primary) / 0.5)" />
        <circle cx="110" cy="10" r="2" fill="hsl(var(--primary) / 0.5)" />
        <circle cx="10" cy="70" r="2" fill="hsl(var(--primary) / 0.5)" />
        <circle cx="110" cy="70" r="2" fill="hsl(var(--primary) / 0.5)" />
      </svg>
    </div>
  );
};
