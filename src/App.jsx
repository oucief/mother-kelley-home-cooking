import React, { useState, useEffect } from 'react';
import TopAnnouncement from './components/TopAnnouncement';
import PitchBanner from './components/PitchBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DailySpecials from './components/DailySpecials';
import MenuSection from './components/MenuSection';
import ReviewsSection from './components/ReviewsSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import PlateBuilderModal from './components/PlateBuilderModal';
import { getRestaurantStatus } from './utils/hoursUtil';

export default function App() {
  const [status, setStatus] = useState(getRestaurantStatus());
  const [isPlateBuilderOpen, setIsPlateBuilderOpen] = useState(false);
  const [selectedPlateEntree, setSelectedPlateEntree] = useState('');

  // Update status every 60 seconds to ensure real-time accuracy
  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getRestaurantStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleOpenPlateBuilder = (entreeName = '') => {
    setSelectedPlateEntree(typeof entreeName === 'string' ? entreeName : '');
    setIsPlateBuilderOpen(true);
  };

  const handleClosePlateBuilder = () => {
    setIsPlateBuilderOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-amber-200 selection:text-amber-950 font-sans">
      {/* Top Banner with Client Pitch Highlights */}
      <PitchBanner />

      {/* Real-time Business Hours & Status Bar */}
      <TopAnnouncement status={status} />

      {/* Main Navigation Header */}
      <Navbar onOpenPlateBuilder={() => handleOpenPlateBuilder('')} />

      <main className="flex-1">
        {/* High-Impact Hero Section */}
        <Hero
          status={status}
          onOpenPlateBuilder={() => handleOpenPlateBuilder('Chicken Fried Steak')}
        />

        {/* Highlighted Today's Specials Banner & Weekday Switcher */}
        <DailySpecials
          activeDayKey={status.activeDayKey}
          onSelectDishForPlate={(dish) => handleOpenPlateBuilder(dish)}
        />

        {/* Interactive Filterable Menu with Live Search */}
        <MenuSection
          onSelectDishForPlate={(dish) => handleOpenPlateBuilder(dish)}
        />

        {/* Social Proof & Customer Reviews (4.8 Stars) */}
        <ReviewsSection />

        {/* Location, Directions & Takeout Instructions */}
        <LocationSection status={status} />
      </main>

      {/* Detailed Brand Footer */}
      <Footer />

      {/* Fixed Sticky Mobile Footer Bar (< 768px) */}
      <MobileStickyBar />

      {/* Interactive Plate Builder Takeout Assistant Modal */}
      <PlateBuilderModal
        isOpen={isPlateBuilderOpen}
        onClose={handleClosePlateBuilder}
        initialEntree={selectedPlateEntree}
      />
    </div>
  );
}
