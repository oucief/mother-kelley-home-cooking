import React, { useState } from 'react';
import { Phone, Star, Menu as MenuIcon, X, MapPin, Sparkles, ChefHat } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Navbar({ onOpenPlateBuilder }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Today's Specials", href: "#specials" },
    { label: "Full Menu", href: "#menu" },
    { label: "Plate Builder", onClick: onOpenPlateBuilder, isAction: true },
    { label: "Customer Reviews", href: "#reviews" },
    { label: "Location & Hours", href: "#location" },
  ];

  const handleLinkClick = (e, link) => {
    if (link.isAction && link.onClick) {
      e.preventDefault();
      link.onClick();
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white shadow-md shadow-amber-900/10 group-hover:scale-105 transition-transform duration-200">
              <ChefHat className="w-7 h-7 text-amber-100" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif-southern font-bold text-xl sm:text-2xl text-stone-900 tracking-tight leading-tight group-hover:text-amber-800 transition-colors">
                  Mother Kelley's
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 bg-amber-50 text-amber-800 px-2 py-0.5 rounded-full text-xs font-semibold border border-amber-200/70">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
                  4.8
                </span>
              </div>
              <p className="text-xs font-semibold tracking-wider uppercase text-amber-800/90 font-sans">
                Southern Home Cooking • Texarkana, AR
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) =>
              link.isAction ? (
                <button
                  key={link.label}
                  onClick={link.onClick}
                  className="text-stone-700 hover:text-amber-700 font-semibold text-sm transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  {link.label}
                </button>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-stone-700 hover:text-amber-700 font-semibold text-sm transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* Call CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-bold text-sm px-4 lg:px-5 py-2.5 rounded-xl shadow-md shadow-amber-900/15 hover:shadow-lg hover:shadow-amber-900/25 transition-all duration-200 active:scale-95"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call for Takeout</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600 text-white shadow-xs"
              aria-label="Call for Takeout"
            >
              <Phone className="w-5 h-5 fill-white" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white/98 backdrop-blur-lg px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100 px-2">
            <div className="flex items-center gap-2 text-xs text-stone-600">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>822 W 7th St, Texarkana, AR 71854</span>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
              <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
              4.8 (550+ reviews)
            </div>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href || '#'}
                onClick={(e) => handleLinkClick(e, link)}
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-stone-800 hover:bg-amber-50 hover:text-amber-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="flex items-center justify-center gap-2.5 w-full bg-gradient-to-r from-amber-600 to-amber-800 text-white font-bold py-3.5 rounded-xl shadow-md text-base"
            >
              <Phone className="w-5 h-5 fill-white" />
              <span>Call (870) 216-0302 to Order Takeout</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
