import React from 'react';
import CowTreeCombo from './CowTreeCombo';

export default function Hero({ data, images }) {
  const { tree, kalash, downarrow, flowerstring, cow } = images;
  const eventDate = data?.hero?.main_event_date;
  const p = new Date(eventDate);
  const day = p.getDate();
  const month = p.toLocaleString('en-US', { month: 'long' });
  const year = p.getFullYear();

  const handleScrollDown = () => {
    const nextSection = document.getElementById('hou001-countDown');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hou001-hero-section">
      <div className="hou001-content-area">
        <div className="hou001-hero-text-box">
          <p className="hou001-styled-font">
            Inviting you to The House Warming Ceremony of{' '}
          </p>
          <h1 id="hou001-hero-title">{data?.hero?.house_name || 'Aaradhya Nilayam'}</h1>
          <p id="hou001-occation-date">
            <span className="hou001-date-info">{day}</span>
            <span className="hou001-date-info">|</span>
            <span className="hou001-date-info">{month}</span>
            <span className="hou001-date-info">|</span>
            <span className="hou001-date-info">{year}</span>
          </p>
          <a
            href={data?.venue?.venue_location_link}
            target="_blank"
            rel="noopener noreferrer"
            className="hou001-hero-btn"
          >
            Open in Maps
          </a>
        </div>
      </div>

      <div id="hou001-animated-image-area">
        {/* Hanging Floral Strings */}
        <div className="hou001-flower-strings">
          <div className="hou001-flower-strings-container">
            <img src={flowerstring} alt="Flower Garland" className="hou001-f-string hou001-corner" />
            <img src={flowerstring} alt="Flower Garland" className="hou001-f-string hou001-middle" />
            <img src={flowerstring} alt="Flower Garland" className="hou001-f-string hou001-end" />
          </div>
          <div className="hou001-flower-strings-container">
            <img src={flowerstring} alt="Flower Garland" className="hou001-f-string hou001-end" />
            <img src={flowerstring} alt="Flower Garland" className="hou001-f-string hou001-middle" />
            <img src={flowerstring} alt="Flower Garland" className="hou001-f-string hou001-corner" />
          </div>
        </div>

        {/* Animated Sacred Cows & Background Trees */}
        <CowTreeCombo cow={cow} tree={tree} inView={true} />

        {/* Foreground Flanking Banana Trees */}
        <div id="hou001-front-tree-section">
          <img
            src={tree}
            alt="Foreground Tree Left"
            className="hou001-f-tree hou001-left-tree hou001-mirror-img"
          />
          <img
            src={tree}
            alt="Foreground Tree Right"
            className="hou001-f-tree hou001-right-tree"
          />
        </div>

        {/* Rising Kalash */}
        <div id="hou001-kalash-section">
          <img src={kalash} alt="Auspicious Kalash" id="hou001-kalash" />
        </div>

        {/* Bouncing Scroll Down Indicator */}
        <div
          id="hou001-down-arrow-box"
          onClick={handleScrollDown}
          style={{ cursor: 'pointer' }}
          role="button"
          tabIndex={0}
          aria-label="Scroll to countdown"
          onKeyDown={(e) => e.key === 'Enter' && handleScrollDown()}
        >
          <img src={downarrow} alt="Scroll Down" id="hou001-down-arrow" />
        </div>
      </div>
    </section>
  );
}
