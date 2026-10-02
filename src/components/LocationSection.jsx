import React from 'react';
import { MapPin, Phone, Clock, Navigation, Car, AlertCircle, CheckCircle, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function LocationSection({ status }) {
  return (
    <section id="location" className="py-12 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-amber-700" />
            Visit Mother Kelley's
          </div>

          <h2 className="font-serif-southern text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Location, Hours & Takeout Pick-Up
          </h2>

          <p className="mt-3 text-stone-600 text-base sm:text-lg">
            Stop by for lunch or call in your takeout order. We're proud to serve Texarkana and travelers passing through the Ark-La-Tex region.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact, Address, Hours, Parking info */}
          <div className="lg:col-span-6 space-y-6">
            {/* Quick Contact & Action Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  Address & Contact
                </span>
                <h3 className="font-serif-southern text-2xl font-bold text-stone-900 mt-1">
                  822 W 7th St, Texarkana, AR 71854
                </h3>
                <p className="text-sm text-stone-600 mt-1">
                  Conveniently situated in Texarkana, Arkansas with easy access from major thoroughfares.
                </p>
              </div>

              {/* Action Buttons: Call & Directions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white font-bold text-sm px-5 py-3.5 rounded-xl shadow-md transition-all active:scale-95 text-center"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Call (870) 216-0302</span>
                </a>

                <a
                  href={`https://maps.google.com/?q=${RESTAURANT_INFO.mapAddressQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm px-5 py-3.5 rounded-xl shadow-md transition-all active:scale-95 text-center"
                >
                  <Navigation className="w-4 h-4 text-amber-400" />
                  <span>Get Turn-by-Turn Directions</span>
                </a>
              </div>

              {/* Hours Breakdown Table */}
              <div className="pt-4 border-t border-stone-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    Weekly Hours of Operation
                  </span>
                  <span className="text-xs font-semibold text-stone-400">US Central Time</span>
                </div>

                <div className="divide-y divide-stone-100 text-xs sm:text-sm">
                  {RESTAURANT_INFO.regularHours.map((item, idx) => {
                    const isToday =
                      (status.weekdayStr === 'Mon' && item.day === 'Monday') ||
                      (status.weekdayStr === 'Tue' && item.day === 'Tuesday') ||
                      (status.weekdayStr === 'Wed' && item.day === 'Wednesday') ||
                      (status.weekdayStr === 'Thu' && item.day === 'Thursday') ||
                      (status.weekdayStr === 'Fri' && item.day === 'Friday') ||
                      (status.weekdayStr === 'Sat' && item.day === 'Saturday') ||
                      (status.weekdayStr === 'Sun' && item.day === 'Sunday');

                    return (
                      <div
                        key={idx}
                        className={`py-2 px-2.5 rounded-lg flex items-center justify-between ${
                          isToday ? 'bg-amber-50/90 font-bold text-amber-950 border border-amber-200/60' : 'text-stone-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span>{item.day}</span>
                          {isToday && (
                            <span className="text-[10px] bg-amber-200 text-amber-900 px-1.5 py-0.2 rounded font-bold uppercase">
                              Today
                            </span>
                          )}
                        </div>
                        <span className={item.open ? 'text-stone-900' : 'text-stone-400 font-medium'}>
                          {item.hours}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Parking & Takeout Tips Card */}
            <div className="bg-amber-50/70 border border-amber-200/80 rounded-3xl p-6 sm:p-7 space-y-4">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
                <Car className="w-5 h-5 text-amber-700" />
                <span>Parking & Fast Takeout Instructions</span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Parking:</strong> On-site customer parking with convenient pull-in stalls directly fronting the entrance for quick in-and-out takeout runs.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Call-Ahead Orders:</strong> Give us a ring at <strong>(870) 216-0302</strong> about 10–15 minutes ahead. We pack your hot plate tight with fresh bread so it's ready when you arrive.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Lunch Rush Advisory:</strong> Our dining room gets lively between 11:30 AM and 1:15 PM. Calling ahead guarantees your favorite daily special before popular dishes sell out!
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed Card */}
          <div className="lg:col-span-6 h-full flex flex-col">
            <div className="bg-white rounded-3xl p-3 sm:p-4 border border-stone-200 shadow-sm flex-1 flex flex-col overflow-hidden min-h-[420px]">
              <div className="relative w-full flex-1 rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 min-h-[360px]">
                <iframe
                  title="Mother Kelley's Home Cooking Location Map"
                  src="https://maps.google.com/maps?q=Mother+Kelley's+Home+Cooking+822+W+7th+St+Texarkana+AR+71854&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full min-h-[380px] border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Floating Map Pin Badge */}
                <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-stone-900/90 backdrop-blur-md text-white p-3 rounded-xl border border-stone-700 shadow-xl flex items-center justify-between gap-3">
                  <div>
                    <span className="block font-bold text-xs sm:text-sm">Mother Kelley's Home Cooking</span>
                    <span className="text-[11px] text-stone-300">822 W 7th St, Texarkana, AR 71854</span>
                  </div>
                  <a
                    href={`https://maps.google.com/?q=${RESTAURANT_INFO.mapAddressQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1"
                  >
                    <span>Open Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Map Footer Bar */}
              <div className="mt-3 px-2 flex items-center justify-between text-xs text-stone-500">
                <span>Free parking available on site</span>
                <a
                  href={`https://maps.google.com/?q=${RESTAURANT_INFO.mapAddressQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-800 font-semibold hover:underline"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
