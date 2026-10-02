import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Phone, Plus, Star, X, Utensils, Check } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';

export default function MenuSection({ onSelectDishForPlate }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.tag && item.tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-12 sm:py-20 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Utensils className="w-3.5 h-3.5 text-amber-700" />
            Full Southern Comfort Menu
          </div>

          <h2 className="font-serif-southern text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
            Hand-Crafted With Real Down-Home Love
          </h2>

          <p className="mt-3 text-stone-600 text-base sm:text-lg">
            Choose a full meat & sides plate lunch, or order any of our slow-simmered southern sides, fresh-baked scratch breads, and decadent desserts à la carte.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-10 space-y-4">
          {/* Live Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search chicken fried steak, candied yams, hot water cornbread, cobbler..."
              className="w-full bg-white text-stone-900 placeholder-stone-400 pl-11 pr-10 py-3.5 rounded-2xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm sm:text-base shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-700 rounded-full"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter Categories Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-amber-800 text-white shadow-md shadow-amber-900/15'
                      : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dish Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8 max-w-md mx-auto">
            <Utensils className="w-10 h-10 text-stone-300 mx-auto mb-3" />
            <h3 className="font-serif-southern font-bold text-lg text-stone-900">
              No matching dishes found
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Try searching for "steak", "okra", "cornbread", or clear your filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-amber-700 text-white text-xs font-bold hover:bg-amber-800 transition-colors"
            >
              Reset Menu Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const isMain = item.category === 'mains';

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-stone-200/90 hover:border-amber-300/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group"
                >
                  {/* Optional Image for signature items */}
                  {item.image && (
                    <div className="relative aspect-[16/9] overflow-hidden bg-stone-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
                      {item.tag && (
                        <span className="absolute top-3 left-3 bg-amber-600/95 backdrop-blur-xs text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">
                          {item.tag}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Non-image tag */}
                      {!item.image && item.tag && (
                        <span className="inline-block bg-amber-50 text-amber-900 border border-amber-200 text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md mb-2">
                          {item.tag}
                        </span>
                      )}

                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="font-serif-southern font-bold text-lg sm:text-xl text-stone-900 group-hover:text-amber-800 transition-colors leading-snug">
                          {item.name}
                        </h3>
                        <span className="font-serif-southern font-extrabold text-base sm:text-lg text-amber-900 shrink-0 bg-amber-50/80 px-2.5 py-1 rounded-lg border border-amber-200/60">
                          {item.price}
                        </span>
                      </div>

                      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-stone-100 mt-auto flex items-center justify-between gap-2">
                      <span className="text-[11px] font-medium text-stone-500">
                        {item.servingsInfo}
                      </span>

                      {/* Action Button */}
                      {isMain && onSelectDishForPlate ? (
                        <button
                          onClick={() => onSelectDishForPlate(item.name)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg border border-amber-200 transition-colors cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5 text-amber-700" />
                          <span>Build Plate</span>
                        </button>
                      ) : (
                        <a
                          href={`tel:${RESTAURANT_INFO.phone}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-stone-700 hover:text-amber-700 transition-colors"
                        >
                          <Phone className="w-3 h-3 text-amber-600" />
                          <span>Call In</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Plate Lunch Callout Footer Banner */}
        <div className="mt-12 bg-gradient-to-r from-amber-800 via-amber-900 to-stone-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-amber-300 font-bold uppercase tracking-wider text-xs">
              Daily Value Special • Best Deal in Texarkana
            </span>
            <h3 className="font-serif-southern text-2xl sm:text-3xl font-bold">
              Looking for the Traditional Meat & 3 Sides?
            </h3>
            <p className="text-amber-100/90 text-sm sm:text-base max-w-xl">
              Enjoy 1 Entrée + 3 Heaping Southern Sides + Hot Water Cornbread for only $15.49. Call (870) 216-0302 to place your lunch pickup.
            </p>
          </div>

          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="shrink-0 inline-flex items-center gap-3 bg-white hover:bg-amber-50 text-amber-950 font-bold text-base px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95"
          >
            <Phone className="w-5 h-5 text-amber-800" />
            <span>Call to Order Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}
