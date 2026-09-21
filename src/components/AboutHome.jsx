import React from 'react';

export default function AboutHome({ data, images }) {
  const { famdecoration, famdecorationpc } = images;
  const description = data?.family_description || 
    "A graceful, compassionate soul with a radiant smile, deeply rooted in family values while embracing new dreams.";
  const photo = data?.family_photo || images.family_photo;

  return (
    <section id="hou001-family-detail">
      <div className="nimbus-container">
        <div id="hou001-forward-content">
          {/* Mobile Garland */}
          <div id="hou001-flower-box">
            <img src={famdecoration} alt="Floral Garland" className="hou001-flowers" />
          </div>
          {/* Desktop Garland */}
          <div id="hou001-flower-box-pc">
            <img src={famdecorationpc} alt="Floral Garland PC" className="hou001-flowers" />
          </div>

          <div id="hou001-bottom-text-part">
            <p className="hou001-family-title">Family</p>
            <p className="hou001-family-text">{description}</p>
          </div>

          <div className="hou001-photo-container">
            <div className="hou001-photo-box">
              <img
                src={photo}
                alt="Family Portrait"
                className="hou001-family-pic"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
