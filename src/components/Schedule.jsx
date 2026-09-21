import React, { useState } from 'react';

export default function Schedule({ data = [], images }) {
  const scheduleList = data.length > 0 ? data : [
    { eventName: "pooja", eventTime: "9:45 am" },
    { eventName: "lunch", eventTime: "12:30 pm" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const { arrowcircleright, arrowcircleleft, agnipooja, sideborder, lunch, tree } = images;

  const prevItem = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : scheduleList.length - 1));
  };

  const nextItem = () => {
    setCurrentIndex(prev => (prev < scheduleList.length - 1 ? prev + 1 : 0));
  };

  const currentEvent = scheduleList[currentIndex];

  return (
    <section id="hou001-occation-detail">
      <div className="nimbus-container">
        <div className="hou001-occation-container">
          <div className="hou001-occation-box">
            <div 
              className="hou001-arrow-left" 
              onClick={prevItem}
              role="button"
              tabIndex={0}
              aria-label="Previous Event"
              onKeyDown={(e) => e.key === 'Enter' && prevItem()}
              style={{ cursor: 'pointer' }}
            >
              <img src={arrowcircleleft} alt="Previous" className="hou001-left-arrow-img" />
            </div>
            <h2 id="hou001-schedule-heading">Schedule</h2>
            <div 
              className="hou001-arrow-right" 
              onClick={nextItem}
              role="button"
              tabIndex={0}
              aria-label="Next Event"
              onKeyDown={(e) => e.key === 'Enter' && nextItem()}
              style={{ cursor: 'pointer' }}
            >
              <img src={arrowcircleright} alt="Next" className="hou001-right-arrow-img" />
            </div>
          </div>

          <div className="hou001-occation-text-box">
            <h3 className="hou001-scheduletitle">{currentEvent?.eventName}</h3>
            <span className="hou001-occation-span-text">{currentEvent?.eventTime}</span>
          </div>

          {/* Side Ornamental Borders */}
          <div className="hou001-border-left">
            <img src={sideborder} alt="Border Ornament" />
          </div>
          <div className="hou001-border-right">
            <img src={sideborder} alt="Border Ornament" />
          </div>

          {/* Flanking Banana Trees */}
          <div className="hou001-tree-left">
            <img src={tree} alt="Tree Left" className="hou001-tree-left-img" />
          </div>
          <div className="hou001-tree-right">
            <img src={tree} alt="Tree Right" className="hou001-tree-right-img" />
          </div>

          {/* Event-specific Illustration */}
          {currentIndex === 0 && (
            <div className="hou001-agni">
              <img src={agnipooja} className="hou001-agni-img" alt="Agni Pooja Sacred Flame" />
            </div>
          )}
          {currentIndex === 1 && (
            <div className="hou001-lunch">
              <img src={lunch} className="hou001-lunch-img" alt="Traditional South Indian Feast" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
