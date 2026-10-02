import React, { useState } from 'react';
import { X, Check, Phone, Copy, Sparkles, ChefHat, AlertCircle, ShoppingBag } from 'lucide-react';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';

export default function PlateBuilderModal({ isOpen, onClose, initialEntree = '' }) {
  if (!isOpen) return null;

  const entrees = MENU_ITEMS.filter((i) => i.category === 'mains');
  const sides = MENU_ITEMS.filter((i) => i.category === 'sides');
  const breads = MENU_ITEMS.filter((i) => i.category === 'breads');
  const desserts = MENU_ITEMS.filter((i) => i.category === 'desserts');
  const drinks = MENU_ITEMS.filter((i) => i.category === 'drinks');

  const [selectedEntree, setSelectedEntree] = useState(
    initialEntree || entrees[0]?.name || ''
  );
  const [selectedSides, setSelectedSides] = useState([
    'Baked Macaroni & Cheese',
    'Candied Sweet Yams',
  ]);
  const [selectedBread, setSelectedBread] = useState('Famous Hot Water Cornbread');
  const [selectedDessert, setSelectedDessert] = useState('');
  const [selectedDrink, setSelectedDrink] = useState('Southern Sweet Iced Tea');
  const [copied, setCopied] = useState(false);

  // Toggle side selection (max 3 sides)
  const toggleSide = (sideName) => {
    if (selectedSides.includes(sideName)) {
      setSelectedSides(selectedSides.filter((s) => s !== sideName));
    } else {
      if (selectedSides.length < 3) {
        setSelectedSides([...selectedSides, sideName]);
      } else {
        // Replace last side
        setSelectedSides([selectedSides[0], selectedSides[1], sideName]);
      }
    }
  };

  // Pricing calculation
  const isMeatAndThree = selectedSides.length === 3;
  const basePrice = isMeatAndThree ? 15.49 : 13.99;
  const dessertPrice = selectedDessert ? 4.50 : 0;
  const drinkPrice = selectedDrink ? 2.75 : 0;
  const estimatedTotal = (basePrice + dessertPrice + drinkPrice).toFixed(2);

  // Order summary string for phone ordering
  const orderSummaryText = `Mother Kelley's Takeout Order:
• Entrée: ${selectedEntree}
• Sides: ${selectedSides.join(', ') || 'None selected'}
• Bread: ${selectedBread}
${selectedDessert ? `• Dessert: ${selectedDessert}\n` : ''}${selectedDrink ? `• Drink: ${selectedDrink}\n` : ''}• Est. Total: $${estimatedTotal}`;

  const handleCopyOrder = () => {
    navigator.clipboard.writeText(orderSummaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl border border-stone-200 overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <ChefHat className="w-5 h-5 text-amber-100" />
            </div>
            <div>
              <h3 className="font-serif-southern font-bold text-lg leading-tight">
                Build Your Southern Plate
              </h3>
              <p className="text-xs text-amber-200">
                1 Entrée + 2 or 3 Southern Sides + Bread
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Close plate builder"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-stone-900 flex-1">
          {/* Step 1: Entrée */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-500">
                1. Select Your Main Entrée
              </label>
              <span className="text-xs font-semibold text-amber-700">Choose 1</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {entrees.map((e) => {
                const isSelected = selectedEntree === e.name;
                return (
                  <button
                    key={e.id}
                    onClick={() => setSelectedEntree(e.name)}
                    className={`p-3 rounded-xl text-left border text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'border-amber-600 bg-amber-50/80 text-amber-950 font-bold shadow-xs'
                        : 'border-stone-200 hover:border-amber-300 text-stone-700'
                    }`}
                  >
                    <span>{e.name}</span>
                    {isSelected && <Check className="w-4 h-4 text-amber-700 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Southern Sides */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-500">
                2. Choose Your Southern Sides ({selectedSides.length}/3 selected)
              </label>
              <span className="text-xs font-semibold text-stone-500">
                {isMeatAndThree ? 'Meat & 3 Sides ($15.49)' : '2 Sides Plate ($13.99)'}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {sides.map((s) => {
                const isSelected = selectedSides.includes(s.name);
                return (
                  <button
                    key={s.id}
                    onClick={() => toggleSide(s.name)}
                    className={`p-2.5 rounded-xl text-left border text-xs font-medium transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'border-amber-600 bg-amber-50 text-amber-950 font-bold'
                        : 'border-stone-200 hover:border-amber-300 text-stone-700'
                    }`}
                  >
                    <span className="truncate pr-1">{s.name}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-amber-700 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Bread */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-500">
                3. Choose Fresh Scratch Bread (Included)
              </label>
              <span className="text-xs font-semibold text-amber-700">Included Free</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {breads.map((b) => {
                const isSelected = selectedBread === b.name;
                return (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBread(b.name)}
                    className={`p-2.5 rounded-xl text-center border text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'border-amber-600 bg-amber-50 text-amber-950 shadow-xs'
                        : 'border-stone-200 hover:border-amber-300 text-stone-700'
                    }`}
                  >
                    {b.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 4: Optional Add-ons (Drink & Dessert) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-stone-100">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5">
                Ice-Cold Beverage (+$2.75)
              </label>
              <select
                value={selectedDrink}
                onChange={(e) => setSelectedDrink(e.target.value)}
                className="w-full bg-white text-stone-800 text-xs sm:text-sm p-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-amber-500"
              >
                <option value="">No Drink</option>
                {drinks.map((d) => (
                  <option key={d.id} value={d.name}>
                    {d.name} (+{d.price})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5">
                Scratch Dessert Slice (+$4.50)
              </label>
              <select
                value={selectedDessert}
                onChange={(e) => setSelectedDessert(e.target.value)}
                className="w-full bg-white text-stone-800 text-xs sm:text-sm p-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-amber-500"
              >
                <option value="">No Dessert</option>
                {desserts.map((d) => (
                  <option key={d.id} value={d.name}>
                    {d.name} (+{d.price})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Plate Order Summary Card */}
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 text-xs space-y-1.5 text-stone-800">
            <div className="flex items-center justify-between font-bold text-amber-950 pb-1 border-b border-amber-200/60">
              <span className="flex items-center gap-1.5">
                <ShoppingBag className="w-4 h-4 text-amber-700" />
                Plate Takeout Summary
              </span>
              <span className="text-base font-serif-southern">${estimatedTotal}</span>
            </div>
            <div>
              <strong>Main:</strong> {selectedEntree}
            </div>
            <div>
              <strong>Sides:</strong>{' '}
              {selectedSides.length > 0 ? selectedSides.join(', ') : 'Please choose at least 2 sides'}
            </div>
            <div>
              <strong>Bread:</strong> {selectedBread}
            </div>
            {selectedDrink && (
              <div>
                <strong>Drink:</strong> {selectedDrink}
              </div>
            )}
            {selectedDessert && (
              <div>
                <strong>Dessert:</strong> {selectedDessert}
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <button
            onClick={handleCopyOrder}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-stone-300 bg-white hover:bg-stone-100 text-stone-700 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Order Copied to Clipboard!' : 'Copy Order Text'}</span>
          </button>

          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            onClick={handleCopyOrder}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white text-sm sm:text-base font-bold shadow-md transition-all active:scale-95 text-center"
          >
            <Phone className="w-4 h-4 fill-white" />
            <span>Call In Plate: (870) 216-0302</span>
          </a>
        </div>
      </div>
    </div>
  );
}
