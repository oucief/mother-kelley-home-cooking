import React from 'react';
import { Phone, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function MobileStickyBar() {
  return (
    <aside 
      aria-label="Quick mobile takeout and directions" 
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-stone-950/95 backdrop-blur-lg border-t border-stone-800 px-3 py-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] shadow-2xl animate-in slide-in-from-bottom duration-300"
    >
      <div className="flex items-center gap-2.5 max-w-lg mx-auto">
        {/* Primary Action 1: Call Now to Order */}
        <a
          href={`tel:${RESTAURANT_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 active:from-amber-700 active:to-amber-800 text-white font-bold text-sm py-3.5 px-3 rounded-xl shadow-lg shadow-amber-950/30 text-center transition-all active:scale-[0.98]"
        >
          <Phone className="w-4 h-4 fill-white shrink-0" />
          <span className="truncate">Call Now to Order</span>
        </a>

        {/* Primary Action 2: Get Directions */}
        <a
          href={`https://maps.google.com/?q=${RESTAURANT_INFO.mapAddressQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-stone-800 active:bg-stone-700 text-stone-100 font-bold text-sm py-3.5 px-3 rounded-xl border border-stone-700 shadow-md text-center transition-all active:scale-[0.98]"
        >
          <Navigation className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="truncate">Get Directions</span>
        </a>
      </div>
    </aside>
  );
}
