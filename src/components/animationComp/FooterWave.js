import React from "react";

const FooterWave = () => {
  return (
    <>
      {/* Layered waves */}
      <svg
        className="absolute bottom-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <radialGradient id="grad1" cx="50%" cy="100%" r="80%">
            <stop offset="0%" stopColor="#9747FF" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#2A1F4D" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        {/* Back wave */}
        <path
          fill="#0F0824"
          fillOpacity="0.6"
          d="M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,149.3C672,128,768,96,864,90.7C960,85,1056,107,1152,128C1248,149,1344,171,1392,181.3L1440,192L1440,320L0,320Z"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,149.3C672,128,768,96,864,90.7C960,85,1056,107,1152,128C1248,149,1344,171,1392,181.3L1440,192L1440,320L0,320Z;

              M0,140L48,150C96,160,192,180,288,190C384,200,480,180,576,160C672,140,768,120,864,115C960,110,1056,130,1152,150C1248,170,1344,190,1392,200L1440,210L1440,320L0,320Z;

              M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,149.3C672,128,768,96,864,90.7C960,85,1056,107,1152,128C1248,149,1344,171,1392,181.3L1440,192L1440,320L0,320Z
            "
          />
        </path>

        {/* Middle wave */}
        <path
          fill="#3E147D"
          fillOpacity="0.6"
          d="M0,200L60,190C120,180,240,160,360,150C480,140,600,140,720,150C840,160,960,180,1080,190C1200,200,1320,200,1380,210L1440,220L1440,320L0,320Z"
        >
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="
              M0,200L60,190C120,180,240,160,360,150C480,140,600,140,720,150C840,160,960,180,1080,190C1200,200,1320,200,1380,210L1440,220L1440,320L0,320Z;

              M0,220L60,210C120,200,240,180,360,170C480,160,600,160,720,170C840,180,960,200,1080,210C1200,220,1320,220,1380,230L1440,240L1440,320L0,320Z;

              M0,200L60,190C120,180,240,160,360,150C480,140,600,140,720,150C840,160,960,180,1080,190C1200,200,1320,200,1380,210L1440,220L1440,320L0,320Z
            "
          />
        </path>

        {/* Front wave */}
        <path
          fill="#A68FCA"
          fillOpacity="0.2"
          d="M0,240L80,230C160,220,320,200,480,190C640,180,800,180,960,190C1120,200,1280,220,1360,230L1440,240L1440,320L0,320Z"
        >
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            values="
              M0,240L80,230C160,220,320,200,480,190C640,180,800,180,960,190C1120,200,1280,220,1360,230L1440,240L1440,320L0,320Z;

              M0,260L80,250C160,240,320,220,480,210C640,200,800,200,960,210C1120,220,1280,240,1360,250L1440,260L1440,320L0,320Z;

              M0,240L80,230C160,220,320,200,480,190C640,180,800,180,960,190C1120,200,1280,220,1360,230L1440,240L1440,320L0,320Z
            "
          />
        </path>
      </svg>
    </>
  );
};

export default FooterWave;
<svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 500"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Gradient for glow effect */}
          <radialGradient id="grad1" cx="50%" cy="100%" r="80%">
            <stop offset="0%" stopColor="#9747FF" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#2A1F4D" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          <radialGradient id="grad2" cx="50%" cy="100%" r="90%">
            <stop offset="0%" stopColor="#6C4BC9" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#2A1F4D" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          <radialGradient id="grad3" cx="50%" cy="100%" r="100%">
            <stop offset="0%" stopColor="#342050" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#1A0F2E" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Back big dome */}
        <circle r="500" cx="400" cy="500" fill="url(#grad3)">
          <animate attributeName="cy" values="520;480;520" dur="12s" repeatCount="indefinite" />
        </circle>

        {/* Middle dome */}
        <circle r="400" cx="400" cy="500" fill="url(#grad2)">
          <animate attributeName="cy" values="520;460;520" dur="10s" repeatCount="indefinite" />
        </circle>

        {/* Front dome */}
        <circle r="300" cx="400" cy="500" fill="url(#grad1)">
          <animate attributeName="cy" values="520;440;520" dur="8s" repeatCount="indefinite" />
        </circle>
      </svg>