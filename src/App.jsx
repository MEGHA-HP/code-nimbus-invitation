import React, { useState, useEffect } from 'react';
import { invitationData, images, initialWishes } from './data/invitationData';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import InvitationMessage from './components/InvitationMessage';
import AboutHome from './components/AboutHome';
import Location from './components/Location';
import Schedule from './components/Schedule';
import Wishes from './components/Wishes';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    // Reference auto-dismisses preloader after ~3 seconds
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismissPreloader = () => {
    setShowPreloader(false);
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="hou001-wrapper hou001-theme">
      {/* 3-second Preloader Splash */}
      {showPreloader && (
        <Preloader images={images} onComplete={handleDismissPreloader} />
      )}

      {/* Main Website Layout */}
      {!showPreloader && (
        <>
          <Navbar activeTab={activeTab} onTabChange={handleTabChange} />

          <main id="home">
            {/* 1. Hero Section */}
            <Hero data={invitationData} images={images} />

            {/* 2. Welcome / Countdown Section */}
            <Countdown date={invitationData.hero.main_event_date} />

            {/* 3. Invitation Message */}
            <InvitationMessage 
              data={invitationData.hero.invitation_text} 
              images={images} 
            />

            {/* 4. Housewarming / About Family Section */}
            <AboutHome data={invitationData.family} images={images} />

            {/* 5. Location Section */}
            <Location data={invitationData.venue} images={images} />

            {/* 6. Schedule Section */}
            <Schedule data={invitationData.schedule} images={images} />

            {/* 7. Wishes / Guestbook Section */}
            <Wishes images={images} initialWishes={initialWishes} />
          </main>

          {/* 8. Official Footer */}
          <Footer categoryType="housewarming" />

          {/* 9. Floating Contact & Audio Toggle Buttons */}
          <FloatingActions 
            phone={invitationData.venue.phone} 
            audioUrl={invitationData.music.audioUrl} 
          />
        </>
      )}
    </div>
  );
}
