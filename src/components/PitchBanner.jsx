import React, { useState } from 'react';
import { Sparkles, Phone, Award, ShieldCheck, ChevronDown, ChevronUp, Zap, Smartphone, CheckCircle } from 'lucide-react';

export default function PitchBanner() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 text-white border-b border-amber-900/40 text-xs">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="font-semibold text-amber-200">Client Pitch Preview:</span>
            <span className="text-stone-300 hidden sm:inline">
              Custom mobile-first web app built specifically for Mother Kelley's Home Cooking
            </span>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-amber-300 hover:text-amber-100 font-bold px-2 py-0.5 rounded bg-amber-900/40 border border-amber-800/60 cursor-pointer"
          >
            <span>{isExpanded ? 'Hide Pitch Highlights' : 'View Pitch Highlights'}</span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {isExpanded && (
          <div className="mt-3 pt-3 border-t border-amber-900/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs animate-in fade-in duration-200">
            <div className="bg-black/30 p-2.5 rounded-lg border border-amber-900/30">
              <div className="font-bold text-amber-300 flex items-center gap-1.5 mb-1">
                <Smartphone className="w-4 h-4 text-amber-400" />
                Mobile-First Takeout
              </div>
              <p className="text-stone-300">
                Fixed sticky footer with 1-tap "Call Now to Order" and "Get Directions" guarantees maximum phone orders from hungry lunch drivers.
              </p>
            </div>

            <div className="bg-black/30 p-2.5 rounded-lg border border-amber-900/30">
              <div className="font-bold text-amber-300 flex items-center gap-1.5 mb-1">
                <Award className="w-4 h-4 text-amber-400" />
                4.8-Star Social Proof
              </div>
              <p className="text-stone-300">
                Prominently displays their 550+ verified Google reviews badge, immediately converting first-time searchers into confident diners.
              </p>
            </div>

            <div className="bg-black/30 p-2.5 rounded-lg border border-amber-900/30">
              <div className="font-bold text-amber-300 flex items-center gap-1.5 mb-1">
                <Zap className="w-4 h-4 text-amber-400" />
                Interactive Plate Builder
              </div>
              <p className="text-stone-300">
                Allows customers to pick their entrée and sides, calculates total, and formats the order for effortless phone reading.
              </p>
            </div>

            <div className="bg-black/30 p-2.5 rounded-lg border border-amber-900/30">
              <div className="font-bold text-amber-300 flex items-center gap-1.5 mb-1">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                Zero Overhead / Blazing Fast
              </div>
              <p className="text-stone-300">
                Ultra-lightweight React & Tailwind build with instant loading on any mobile cell network. No expensive 30% delivery commission fees.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
