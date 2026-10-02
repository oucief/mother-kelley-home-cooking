import React, { useState } from 'react';
import { Phone, Calendar, Sparkles, CheckCircle2, AlertCircle, Clock, Utensils, ArrowRight } from 'lucide-react';
import { WEEKLY_SPECIALS, RESTAURANT_INFO } from '../data/restaurantData';

export default function DailySpecials({ activeDayKey, onSelectDishForPlate }) {
  // activeDayKey is 1-5 for Mon-Fri, or 1 for weekends
  const [selectedDayKey, setSelectedDayKey] = useState(activeDayKey || 1);

  const activeSpecial = WEEKLY_SPECIALS.find((s) => s.dayKey === selectedDayKey) || WEEKLY_SPECIALS[0];

  const days = [
    { label: 'Monday', key: 1, short: 'Mon' },
    { label: 'Tuesday', key: 2, short: 'Tue' },
    { label: 'Wednesday', key: 3, short: 'Wed' },
    { label: 'Thursday', key: 4, short: 'Thu' },
    { label: 'Friday', key: 5, short: 'Fri' },
  ];

  return (
    <section id="specials" className="py-12 sm:py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            Rotating Daily Southern Specials
          </div>

          <h2 className="font-serif-southern text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            What's Cooking On The Stove Today?
          </h2>

          <p className="mt-3 text-stone-600 text-base sm:text-lg">
            Prepared fresh starting at dawn every Monday through Friday. Plates include 1 Entrée, 2 Southern Sides, and your choice of Hot Water Cornbread or Dinner Roll.
          </p>
        </div>

        {/* Day Selector Pills */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-3 overflow-x-auto pb-4 mb-6 sm:mb-8 scrollbar-none">
          {days.map((day) => {
            const isToday = day.key === activeDayKey;
            const isSelected = day.key === selectedDayKey;

            return (
              <button
                key={day.key}
                onClick={() => setSelectedDayKey(day.key)}
                className={`relative px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                  isSelected
                    ? 'bg-amber-700 text-white shadow-lg shadow-amber-900/20 scale-105'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                <span>{day.label}</span>
                {isToday && (
                  <span
                    className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                      isSelected
                        ? 'bg-amber-300 text-amber-950'
                        : 'bg-amber-200 text-amber-900'
                    }`}
                  >
                    Today
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Special Showcase Card */}
        <div className="bg-gradient-to-br from-amber-50/90 via-stone-50 to-amber-50/40 rounded-3xl border border-amber-200/80 p-6 sm:p-10 shadow-lg shadow-amber-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="bg-amber-700 text-white font-extrabold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
                  {activeSpecial.day} Special
                </span>

                <span className="bg-white text-stone-700 font-semibold text-xs px-3 py-1 rounded-full border border-stone-200 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-700" />
                  {activeSpecial.badge}
                </span>

                <span className="bg-rose-100 text-rose-800 font-bold text-xs px-3 py-1 rounded-full flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-rose-700" />
                  {activeSpecial.soldOutRisk}
                </span>
              </div>

              <div>
                <h3 className="font-serif-southern text-2xl sm:text-4xl font-extrabold text-stone-900 leading-tight">
                  {activeSpecial.featuredDish}
                </h3>
                <p className="text-amber-800 font-medium text-sm sm:text-base mt-1">
                  {activeSpecial.tagline}
                </p>
              </div>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                {activeSpecial.description}
              </p>

              {/* Recommended Sides for this day */}
              <div className="bg-white rounded-2xl p-4 border border-stone-200 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                  Recommended Pairing with This Plate:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeSpecial.suggestedSides.map((side, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-900 text-xs sm:text-sm font-semibold px-3 py-1 rounded-lg border border-amber-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
                      {side}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-95 text-center"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Call to Order {activeSpecial.day}'s Special</span>
                </a>

                {onSelectDishForPlate && (
                  <button
                    onClick={() => onSelectDishForPlate(activeSpecial.featuredDish)}
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-50 text-stone-800 font-bold text-sm px-5 py-3.5 rounded-xl border border-stone-300 shadow-xs hover:border-amber-400 transition-colors cursor-pointer text-center"
                  >
                    <Utensils className="w-4 h-4 text-amber-700" />
                    <span>Customize Sides for This Dish</span>
                  </button>
                )}
              </div>
            </div>

            {/* Right Card / Plate Pricing Details */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-amber-200 shadow-md">
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <div>
                  <span className="text-xs uppercase font-bold text-stone-500">Plate Deal</span>
                  <div className="font-serif-southern font-extrabold text-2xl sm:text-3xl text-stone-900">
                    {activeSpecial.price}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-stone-500 block">Served Hot</span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    10:30 AM – 2:50 PM
                  </span>
                </div>
              </div>

              <div className="py-4 space-y-3 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>1 Generous Entrée:</strong> {activeSpecial.featuredDish}
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Your Choice of 2 Sides:</strong> Candied yams, mac & cheese, greens, cabbage, fried okra, etc.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Choice of Fresh Bread:</strong> Legendary Hot Water Cornbread, Cornbread Muffin, or Dinner Roll.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-amber-900 bg-amber-50/70 p-2.5 rounded-lg border border-amber-200/50">
                  <Sparkles className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
                  <span>
                    <strong>Make It a Meat & 3 Sides:</strong> Add a 3rd southern vegetable side for just $1.50 more ($15.49 total).
                  </span>
                </div>
              </div>

              <div className="pt-2 text-center text-xs text-stone-500">
                Call <a href={`tel:${RESTAURANT_INFO.phone}`} className="font-bold text-amber-800 underline">{RESTAURANT_INFO.phoneDisplay}</a> to hold your portion before it runs out.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
