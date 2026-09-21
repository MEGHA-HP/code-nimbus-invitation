import React from 'react';

export default function Location({ data, images }) {
  const { decoration, decorationpc, stars, location } = images;
  const address = data?.venue_address || "Bengaluru";
  const mapLink = data?.venue_location_link || 
    "https://maps.google.com/?cid=17933267643779665888&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYASAA&hl=en-US&source=apiv3";
  const phone = data?.phone || "+91 6364469555";

  return (
    <section id="hou001-card-box">
      <div className="nimbus-container">
        {/* Desktop Top Garland Border */}
        <div className="hou001-decoration-pc">
          <img src={decorationpc} alt="Decorative Border" className="hou001-decoration-pc-img" />
        </div>
        {/* Mobile Top Garland Border */}
        <div className="hou001-decoration">
          <img src={decoration} alt="Decorative Border" className="hou001-decoration-img" />
        </div>

        <div className="hou001-card-box-container">
          <div className="hou001-card-box-decoration-container">
            <div className="hou001-decoration-left">
              <img src={stars} alt="Star Accent" className="hou001-stars-left" />
            </div>
            <div className="hou001-location-icon">
              <img src={location} alt="Location Pin" className="hou001-location-icon-img" />
            </div>
            <div className="hou001-decoration-right">
              <img src={stars} alt="Star Accent" className="hou001-stars-right" />
            </div>
          </div>

          <div className="hou001-card-box-text-box">
            <p className="hou001-card-text">{address}</p>
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hou001-loc-maps"
            >
              Open in Maps
            </a>
            <a href={`tel:${phone}`} className="hou001-loc-ph">
              Contact Host
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
