import React from 'react';
import { ChefHat, Phone, MapPin, Clock, Star, Heart, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-24 md:pb-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          {/* Col 1: Identity & Story */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white shadow-md">
                <ChefHat className="w-6 h-6 text-amber-100" />
              </div>
              <span className="font-serif-southern font-bold text-xl text-white">
                Mother Kelley's
              </span>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
              Serving Texarkana, Arkansas with traditional scratch-made Southern comfort food, daily meat & vegetable plate specials, and warm Southern hospitality.
            </p>

            <div className="inline-flex items-center gap-1.5 bg-stone-900 border border-stone-800 px-3 py-1.5 rounded-full text-xs text-amber-300 font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>4.8 Stars on Google (550+ Reviews)</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#specials" className="hover:text-amber-300 transition-colors">
                  Today's Daily Specials
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-300 transition-colors">
                  Full Southern Menu
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-300 transition-colors">
                  Customer Reviews & Praise
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-300 transition-colors">
                  Directions & Parking Info
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Schedule */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              Kitchen Lunch Hours
            </h4>
            <div className="text-xs sm:text-sm space-y-1 text-stone-300">
              <p className="font-semibold text-white">Monday – Friday</p>
              <p className="text-amber-300/90 font-medium">10:30 AM – 2:50 PM CT</p>
              <p className="pt-2 font-semibold text-white">Saturday & Sunday</p>
              <p className="text-stone-500">Closed (Family & Rest)</p>
            </div>
          </div>

          {/* Col 4: Visit & Call */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              Visit & Call In
            </h4>
            <div className="text-xs sm:text-sm space-y-2.5">
              <a
                href={`https://maps.google.com/?q=${RESTAURANT_INFO.mapAddressQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-amber-300 transition-colors"
              >
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>822 W 7th St, Texarkana, AR 71854</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="flex items-center gap-2 text-amber-300 font-bold hover:text-amber-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{RESTAURANT_INFO.phoneDisplay}</span>
              </a>

              <div className="pt-2">
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="inline-block w-full py-2.5 px-4 text-center rounded-xl bg-amber-700 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Call for Takeout
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Client Pitch Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {currentYear} Mother Kelley's Home Cooking. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-stone-400">
            <span>Cooked fresh with Southern love in Texarkana, Arkansas</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
