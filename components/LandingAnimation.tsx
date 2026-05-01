"use client";

import { useEffect, useState } from "react";

const GOLD = "#b89651";
const GOLD_LIGHT = "#c9a961";

export function LandingAnimation() {
  const [show, setShow] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    document.body.style.overflow = "hidden";
    const fadeT = setTimeout(() => setFading(true), 2000);
    const removeT = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 2500);
    return () => {
      clearTimeout(fadeT);
      clearTimeout(removeT);
      document.body.style.overflow = "";
    };
  }, []);

  if (!show) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[200] bg-cream flex items-center justify-center transition-opacity duration-500 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <CakeAnimation />
    </div>
  );
}

function CakeAnimation() {
  return (
    <div className="flex flex-col items-center gap-8 px-6">
      <svg
        viewBox="0 0 400 480"
        className="w-[260px] md:w-[320px] h-auto"
        fill="none"
        stroke={GOLD}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <style>{`
          @keyframes pgs-draw { to { stroke-dashoffset: 0; } }
          @keyframes pgs-bloom {
            from { opacity: 0; transform: scale(0.6); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes pgs-fade {
            from { opacity: 0; transform: translateY(6px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .pgs-draw {
            stroke-dasharray: 1;
            stroke-dashoffset: 1;
            animation: pgs-draw var(--d, 0.5s) ease-out var(--t, 0s) forwards;
          }
          .pgs-bloom {
            opacity: 0;
            transform-box: fill-box;
            transform-origin: center;
            animation: pgs-bloom 0.35s ease-out var(--t, 0s) forwards;
          }
        `}</style>

        {/* Cake stand */}
        <line
          x1="60"
          y1="438"
          x2="340"
          y2="438"
          pathLength="1"
          className="pgs-draw"
          style={{ "--d": "0.25s", "--t": "0.05s" } as React.CSSProperties}
        />
        <ellipse
          cx="200"
          cy="430"
          rx="135"
          ry="6"
          pathLength="1"
          className="pgs-draw"
          style={{ "--d": "0.18s", "--t": "0.3s" } as React.CSSProperties}
        />
        <line
          x1="170"
          y1="430"
          x2="170"
          y2="412"
          pathLength="1"
          className="pgs-draw"
          style={{ "--d": "0.13s", "--t": "0.42s" } as React.CSSProperties}
        />
        <line
          x1="230"
          y1="430"
          x2="230"
          y2="412"
          pathLength="1"
          className="pgs-draw"
          style={{ "--d": "0.13s", "--t": "0.42s" } as React.CSSProperties}
        />

        {/* Bottom tier */}
        <path
          d="M 100 410 L 100 320 Q 100 314, 110 314 L 290 314 Q 300 314, 300 320 L 300 410"
          pathLength="1"
          className="pgs-draw"
          style={{ "--d": "0.4s", "--t": "0.55s" } as React.CSSProperties}
        />
        <ellipse
          cx="200"
          cy="410"
          rx="100"
          ry="6"
          pathLength="1"
          className="pgs-draw"
          style={{ "--d": "0.18s", "--t": "0.9s" } as React.CSSProperties}
        />
        <ellipse
          cx="200"
          cy="314"
          rx="100"
          ry="5"
          pathLength="1"
          className="pgs-draw"
          style={{ "--d": "0.18s", "--t": "0.9s" } as React.CSSProperties}
        />
        {/* Bottom tier piping dots */}
        {[120, 150, 180, 210, 240, 260, 280].map((x, i) => (
          <circle
            key={`p1-${i}`}
            cx={x}
            cy={406}
            r="1.6"
            fill={GOLD_LIGHT}
            className="pgs-bloom"
            style={
              {
                "--t": `${0.95 + i * 0.025}s`,
              } as React.CSSProperties
            }
          />
        ))}

        {/* Middle tier */}
        <path
          d="M 130 308 L 130 232 Q 130 226, 140 226 L 260 226 Q 270 226, 270 232 L 270 308"
          pathLength="1"
          className="pgs-draw"
          style={{ "--d": "0.35s", "--t": "1.0s" } as React.CSSProperties}
        />
        <ellipse
          cx="200"
          cy="226"
          rx="70"
          ry="4"
          pathLength="1"
          className="pgs-draw"
          style={{ "--d": "0.16s", "--t": "1.3s" } as React.CSSProperties}
        />

        {/* Top tier */}
        <path
          d="M 155 220 L 155 150 Q 155 144, 165 144 L 235 144 Q 245 144, 245 150 L 245 220"
          pathLength="1"
          className="pgs-draw"
          style={{ "--d": "0.32s", "--t": "1.4s" } as React.CSSProperties}
        />
        <ellipse
          cx="200"
          cy="144"
          rx="45"
          ry="3.5"
          pathLength="1"
          className="pgs-draw"
          style={{ "--d": "0.16s", "--t": "1.7s" } as React.CSSProperties}
        />

        {/* Floral topper — small cluster of cosmos blooms */}
        <g
          className="pgs-bloom"
          style={{ "--t": "1.7s" } as React.CSSProperties}
        >
          {/* Three small cosmos blooms clustered */}
          {[
            { x: 200, y: 122, r: 1 },
            { x: 188, y: 130, r: 0.85 },
            { x: 212, y: 130, r: 0.85 },
          ].map((b, i) => (
            <g key={`b-${i}`} transform={`translate(${b.x} ${b.y})`}>
              {[0, 60, 120, 180, 240, 300].map((rot) => (
                <ellipse
                  key={rot}
                  cx="0"
                  cy={-6 * b.r}
                  rx={2.5 * b.r}
                  ry={5 * b.r}
                  transform={`rotate(${rot})`}
                  fill={GOLD_LIGHT}
                  fillOpacity="0.85"
                />
              ))}
              <circle cx="0" cy="0" r={1.5 * b.r} fill={GOLD} />
            </g>
          ))}
          {/* Two leaves flanking */}
          <path
            d="M 178 132 Q 172 128, 168 134 Q 174 138, 178 132 Z"
            fill={GOLD_LIGHT}
            fillOpacity="0.7"
          />
          <path
            d="M 222 132 Q 228 128, 232 134 Q 226 138, 222 132 Z"
            fill={GOLD_LIGHT}
            fillOpacity="0.7"
          />
        </g>
      </svg>

      <div
        className="text-center"
        style={{
          opacity: 0,
          animation: "pgs-fade 0.4s ease-out 1.85s forwards",
        }}
      >
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="block h-px w-10 bg-gold" />
          <span className="font-display text-[0.7rem] tracking-[0.45em] uppercase font-medium text-ink">
            The
          </span>
          <span className="block h-px w-10 bg-gold" />
        </div>
        <h2 className="font-display text-2xl md:text-3xl tracking-[0.04em] uppercase font-medium text-ink leading-none my-1">
          Poly Garden
        </h2>
        <div className="flex items-center justify-center gap-3 mt-2">
          <span className="block h-px w-10 bg-gold" />
          <span className="font-display text-[0.7rem] tracking-[0.45em] uppercase font-medium text-ink">
            Sugar
          </span>
          <span className="block h-px w-10 bg-gold" />
        </div>
      </div>
    </div>
  );
}
