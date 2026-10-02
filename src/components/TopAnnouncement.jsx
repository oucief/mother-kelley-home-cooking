import React from 'react';
import { Phone, Clock, MapPin, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function TopAnnouncement({ status }) {
  const getBadgeStyle = () => {
    if (status.statusBadgeColor === 'emerald') {
      return 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30';
    }
    if (status.statusBadgeColor === 'amber') {
      return 'bg-amber-500/20 text-amber-300 border-amber-400/30';
    }
    return 'bg-stone-700/50 text-stone-300 border-stone-600/40';
  };

  const getDotStyle = () => {
    if (status.statusBadgeColor === 'emerald') return 'bg-emerald-400 animate-pulse';
    if (status.statusBadgeColor === 'amber') return 'bg-amber-400';
    return 'bg-stone-400';
  };

  return (
    <div className="bg-stone-900 text-stone-100 text-xs sm:text-sm border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:py-2.5 flex flex-wrap items-center justify-between gap-2 sm:gap-4">
        {/* Left: Live status badge */}
        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-xs font-semibold ${getBadgeStyle()}`}>
            <span className={`w-2 h-2 rounded-full ${getDotStyle()}`}></span>
            {status.statusBadgeText}
          </span>
          <span className="hidden md:inline-flex text-stone-400 text-xs items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            Mon–Fri 10:30 AM – 2:50 PM CT
          </span>
        </div>

        {/* Center / Right: Address & Fast Call */}
        <div className="flex items-center gap-3 sm:gap-6 ml-auto">
          <a
            href={`https://maps.google.com/?q=${RESTAURANT_INFO.mapAddressQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-stone-300 hover:text-amber-400 transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>822 W 7th St, Texarkana, AR</span>
          </a>

          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="flex items-center gap-1.5 text-amber-300 font-bold hover:text-amber-200 transition-colors bg-amber-950/40 px-2.5 py-1 rounded-md border border-amber-800/50"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>Call to Order: {RESTAURANT_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
