import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = '', size = 120 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer black ring */}
      <circle cx="256" cy="256" r="240" stroke="black" strokeWidth="12" fill="white" />
      
      {/* Inner thin black ring */}
      <circle cx="256" cy="256" r="216" stroke="black" strokeWidth="4" fill="none" />
      
      {/* Yellow solid background */}
      <circle cx="256" cy="256" r="196" fill="#F4B400" stroke="black" strokeWidth="6" />

      {/* Arched "GARAGEM" text path */}
      <path
        id="textPath-garagem"
        d="M 110,210 A 162,162 0 0,1 402,210"
        fill="none"
        stroke="none"
      />
      <text className="font-sans" fill="black" fontSize="54" fontWeight="900" letterSpacing="4">
        <textPath href="#textPath-garagem" startOffset="50%" textAnchor="middle">
          GARAGEM
        </textPath>
      </text>

      {/* MERGED HAMBURGER-CAR ILLUSTRATION */}
      <g transform="translate(136, 170)">
        {/* Tires (at the bottom left and right, drawn behind the body) */}
        <rect x="25" y="142" width="30" height="20" rx="4" fill="black" />
        <rect x="185" y="142" width="30" height="20" rx="4" fill="black" />

        {/* Top Bun (Roof of the car + Burger top) */}
        <path
          d="M 20,90 C 20,15, 220,15, 220,90 Z"
          fill="#F4B400"
          stroke="black"
          strokeWidth="10"
          strokeLinejoin="round"
        />
        
        {/* Sesame Seeds on top bun */}
        <ellipse cx="60" cy="50" rx="4" ry="8" transform="rotate(30 60 50)" fill="black" />
        <ellipse cx="100" cy="38" rx="4" ry="8" transform="rotate(-15 100 38)" fill="black" />
        <ellipse cx="140" cy="42" rx="4" ry="8" transform="rotate(10 140 42)" fill="black" />
        <ellipse cx="180" cy="52" rx="4" ry="8" transform="rotate(-30 180 52)" fill="black" />
        <ellipse cx="80" cy="70" rx="4" ry="8" transform="rotate(-45 80 70)" fill="black" />
        <ellipse cx="120" cy="62" rx="4" ry="8" transform="rotate(15 120 62)" fill="black" />
        <ellipse cx="160" cy="68" rx="4" ry="8" transform="rotate(45 160 68)" fill="black" />

        {/* Melting Cheese / Grill upper border */}
        {/* Cheese dripping over the lower body of the car */}
        <path
          d="M 15,90 C 15,90 40,115 60,100 C 80,85 100,120 120,105 C 140,90 160,115 180,100 C 200,85 225,90 225,90 L 225,120 C 225,120 200,135 180,125 C 160,115 140,135 120,125 C 100,115 80,135 60,125 C 40,115 15,120 15,120 Z"
          fill="white"
          stroke="black"
          strokeWidth="9"
          strokeLinejoin="round"
        />

        {/* Lower Car Body / Bottom Bun */}
        <path
          d="M 15,115 C 15,152 225,152 225,115 Z"
          fill="#F4B400"
          stroke="black"
          strokeWidth="10"
          strokeLinejoin="round"
        />

        {/* Left Headlight */}
        <circle cx="45" cy="120" r="22" fill="white" stroke="black" strokeWidth="8" />
        <circle cx="45" cy="120" r="16" fill="none" stroke="black" strokeWidth="2" />

        {/* Right Headlight */}
        <circle cx="195" cy="120" r="22" fill="white" stroke="black" strokeWidth="8" />
        <circle cx="195" cy="120" r="16" fill="none" stroke="black" strokeWidth="2" />

        {/* Front Grill (car grill lines / burger meat texture) */}
        <g stroke="black" strokeWidth="6" strokeLinecap="round">
          <line x1="80" y1="115" x2="160" y2="115" />
          <line x1="80" y1="126" x2="160" y2="126" />
          <line x1="80" y1="137" x2="160" y2="137" />
        </g>

        {/* Bumper (Classic vintage car bumper) */}
        <path
          d="M 10,145 Q 120,165 230,145"
          fill="none"
          stroke="black"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M 10,145 Q 120,165 230,145"
          fill="none"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Bumper guards / teeth */}
        <rect x="75" y="130" width="12" height="30" rx="6" fill="white" stroke="black" strokeWidth="5" />
        <rect x="153" y="130" width="12" height="30" rx="6" fill="white" stroke="black" strokeWidth="5" />

        {/* License Plate: "DESDE 2016" */}
        <rect x="90" y="143" width="60" height="15" rx="2" fill="white" stroke="black" strokeWidth="4" />
        <text x="120" y="154" fill="black" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace" letterSpacing="-0.5">
          DESDE 2016
        </text>
      </g>

      {/* Cursive "Hamburgueria" at the bottom */}
      <text
        x="256"
        y="420"
        fill="black"
        fontSize="44"
        fontWeight="bold"
        fontFamily="Georgia, serif"
        fontStyle="italic"
        textAnchor="middle"
      >
        Hamburgueria
      </text>
    </svg>
  );
}
