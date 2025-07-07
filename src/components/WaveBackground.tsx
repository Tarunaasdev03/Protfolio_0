import React from 'react';

const WaveBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated waves */}
      <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0.1)" />
            </linearGradient>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(16, 185, 129, 0.08)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.08)" />
            </linearGradient>
          </defs>
          
          {/* Wave 1 */}
          <path
            d="M0,800 Q400,700 800,750 T1600,800 Q1800,750 1920,800 L1920,1080 L0,1080 Z"
            fill="url(#wave1)"
            className="animate-wave-slow"
          />
          
          {/* Wave 2 */}
          <path
            d="M0,850 Q300,750 600,800 T1200,850 Q1500,800 1920,850 L1920,1080 L0,1080 Z"
            fill="url(#wave2)"
            className="animate-wave-fast"
          />
        </svg>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default WaveBackground;