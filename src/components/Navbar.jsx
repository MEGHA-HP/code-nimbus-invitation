import React, { useState } from 'react';

export default function Navbar({ activeTab = 'home', onTabChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { id: 'home', label: 'Home' },
    { id: 'gallery', label: 'Gallery' }
  ];

  const handleTabClick = (id) => {
    onTabChange(id);
    setIsOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById('hou001-family-detail') || document.getElementById('hou001-gallery');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header id="hou001-header">
      <nav id="hou001-navbar">
        <div 
          id="hou001-navlink-wrapper" 
          className={isOpen ? "hou001-show-navlist" : "hou001-hide-navlist"}
        >
          <div className="shared-navbar inline hou001-override-container">
            {items.map((item) => (
              <span
                key={item.id}
                role="button"
                tabIndex={0}
                aria-label={item.label}
                onClick={() => handleTabClick(item.id)}
                onKeyDown={(e) => e.key === 'Enter' && handleTabClick(item.id)}
                className={`shared-nav-item ${activeTab === item.id ? 'active' : ''}`}
              >
                <span className="nav-label">{item.label}</span>
              </span>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
