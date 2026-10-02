import React from 'react';
import { Phone, Star, MapPin, Clock, ArrowRight, ShieldCheck, Flame, Heart, Sparkles, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Hero({ status, onOpenPlateBuilder }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/60 via-[#FDFBF7] to-[#FAF8F5] pt-6 pb-12 sm:pt-10 sm:pb-20 border-b border-stone-200/60">
      {/* Subtle Southern Gingham / Warm Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-amber-200/40 via-amber-100/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges Bar */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          {/* Google 4.8 Star Rating Badge */}
          <a
            href={`https://maps.google.com/?q=${RESTAURANT_INFO.mapAddressQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full shadow-xs border border-stone-200/80 hover:border-amber-300 transition-colors"
          >
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-bold text-stone-900">4.8 Stars</span>
            <span className="text-xs text-stone-500 font-medium">({RESTAURANT_INFO.reviewCount} Google Reviews)</span>
          </a>

          {/* Current Status Badge */}
          <span className="inline-flex items-center gap-1.5 bg-amber-100/80 text-amber-900 border border-amber-300/60 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
            <Clock className="w-3.5 h-3.5 text-amber-700" />
            <span>Open M–F 10:30 AM – 2:50 PM</span>
          </span>

          {/* Location Badge */}
          <a
            href={`https://maps.google.com/?q=${RESTAURANT_INFO.mapAddressQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 bg-stone-100 text-stone-700 hover:text-stone-900 border border-stone-200/80 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>822 W 7th St, Texarkana, AR 71854</span>
          </a>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & High-Impact CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-800 text-xs font-bold uppercase tracking-wider border border-amber-500/20">
              <Flame className="w-3.5 h-3.5 text-amber-600" />
              Authentic Ark-La-Tex Southern Soul Food
            </div>

            <h1 className="font-serif-southern text-3xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.12]">
              Real Southern Comfort,{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900">
                Cooked From Scratch
              </span>{' '}
              Every Single Morning.
            </h1>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal max-w-2xl">
              Welcome to <strong>Mother Kelley's</strong> in Texarkana, Arkansas. Famous for tender Chicken Fried Steak smothered in country cream gravy, slow-simmered greens, candied sweet yams, and our legendary crispy <strong>Hot Water Cornbread</strong>.
            </p>

            {/* Quick Conversion CTA Box */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Primary CTA: Call for Takeout */}
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-extrabold text-base sm:text-lg px-6 py-4 rounded-2xl shadow-xl shadow-amber-900/20 hover:shadow-2xl hover:shadow-amber-900/30 transition-all duration-200 active:scale-[0.98] text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 fill-white text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs uppercase tracking-wider text-amber-200 font-semibold">Ready in 10-15 Min</div>
                  <div className="text-lg sm:text-xl font-bold leading-tight">Call for Takeout</div>
                </div>
                <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA: Today's Specials */}
              <a
                href="#specials"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-50 text-stone-800 font-bold text-base px-5 py-4 rounded-2xl border border-stone-300 shadow-xs hover:border-amber-400 transition-all duration-200 text-center"
              >
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>See Today's Specials</span>
              </a>

              {/* Directions Button for Maps */}
              <a
                href={`https://maps.google.com/?q=${RESTAURANT_INFO.mapAddressQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-sm px-4 py-4 rounded-2xl border border-stone-200 transition-colors"
                title="Open in Google Maps"
              >
                <Navigation className="w-4 h-4 text-amber-700" />
                <span>Directions</span>
              </a>
            </div>

            {/* Quick Order Phone Display & Guarantee */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-stone-600 pt-1">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Dine-In, Takeout & Drive-Thru Friendly
              </span>
              <span className="hidden sm:inline text-stone-300">•</span>
              <span className="text-stone-700 font-semibold">
                Direct Line:{' '}
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="text-amber-800 underline decoration-amber-500 font-bold hover:text-amber-900">
                  {RESTAURANT_INFO.phoneDisplay}
                </a>
              </span>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-4 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-stone-700">
              <div className="bg-white/80 p-2.5 rounded-xl border border-stone-200/60 text-center">
                <span className="block font-bold text-stone-900 text-sm">4.8 / 5.0</span>
                <span className="text-[11px] text-stone-500">550+ Local Reviews</span>
              </div>
              <div className="bg-white/80 p-2.5 rounded-xl border border-stone-200/60 text-center">
                <span className="block font-bold text-stone-900 text-sm">10:30am - 2:50pm</span>
                <span className="text-[11px] text-stone-500">Mon–Fri Lunch Rush</span>
              </div>
              <div className="bg-white/80 p-2.5 rounded-xl border border-stone-200/60 text-center">
                <span className="block font-bold text-stone-900 text-sm">$13.99 Plate</span>
                <span className="text-[11px] text-stone-500">Meat + 2 Sides + Bread</span>
              </div>
              <div className="bg-white/80 p-2.5 rounded-xl border border-stone-200/60 text-center">
                <span className="block font-bold text-stone-900 text-sm">Hot Water</span>
                <span className="text-[11px] text-stone-500">Fresh Cornbread Daily</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card (Authentic Southern Comfort Plate Showcase) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Accent backdrop pill */}
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/20 via-amber-600/20 to-amber-700/20 rounded-3xl blur-xl" />

              <div className="relative bg-white rounded-3xl p-4 sm:p-5 shadow-2xl border border-stone-200/80 overflow-hidden">
                {/* Image Container with Badges */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-900 shadow-inner group">
                  <img
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80"
                    alt="Mother Kelley's Famous Southern Chicken Fried Steak with Country Gravy and Sides"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/20 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 bg-amber-600 text-white font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-amber-200 text-amber-200" />
                    <span>#1 Customer Favorite</span>
                  </div>

                  {/* Price Tag in Hero */}
                  <div className="absolute top-3 right-3 bg-stone-900/90 backdrop-blur-md text-amber-300 font-extrabold text-sm sm:text-base px-3 py-1 rounded-full border border-stone-700 shadow-md">
                    $14.99 Plate
                  </div>

                  {/* Bottom Image Overlay Description */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-serif-southern text-lg sm:text-xl font-bold leading-tight drop-shadow-sm">
                      Hand-Battered Chicken Fried Steak
                    </h3>
                    <p className="text-xs text-amber-200/90 font-medium">
                      Smothered in peppered cream gravy • Served with 2 sides & hot water cornbread
                    </p>
                  </div>
                </div>

                {/* Plate Component Highlights */}
                <div className="mt-4 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    What Makes It Special:
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-amber-50/80 border border-amber-200/60 p-2.5 rounded-xl">
                      <span className="font-bold text-amber-950 block">Hot Water Cornbread</span>
                      <span className="text-amber-800 text-[11px]">Hand-pattied, fried crisp</span>
                    </div>
                    <div className="bg-amber-50/80 border border-amber-200/60 p-2.5 rounded-xl">
                      <span className="font-bold text-amber-950 block">Baked Mac & Cheese</span>
                      <span className="text-amber-800 text-[11px]">5-cheese golden crust</span>
                    </div>
                    <div className="bg-amber-50/80 border border-amber-200/60 p-2.5 rounded-xl">
                      <span className="font-bold text-amber-950 block">Candied Sweet Yams</span>
                      <span className="text-amber-800 text-[11px]">Butter, cinnamon & nutmeg</span>
                    </div>
                    <div className="bg-amber-50/80 border border-amber-200/60 p-2.5 rounded-xl">
                      <span className="font-bold text-amber-950 block">Scratch Cream Gravy</span>
                      <span className="text-amber-800 text-[11px]">Fresh pan dripping recipe</span>
                    </div>
                  </div>

                  {/* Interactive Button to Build Plate */}
                  <button
                    onClick={onOpenPlateBuilder}
                    className="w-full mt-2 py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Customize Your Meat & Sides Plate</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
