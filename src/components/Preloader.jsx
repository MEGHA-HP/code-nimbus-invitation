import React from 'react';

export default function Preloader({ images, onComplete }) {
  const { lordganesh, greenrangoli } = images;

  return (
    <section 
      id="hou001-preloader-invitation-card"
      onClick={onComplete}
      style={{ cursor: 'pointer' }}
      title="Click to enter"
    >
      <div className="hou001-preloader-invitation-card-box">
        <div className="hou001-preloader-invitation-card-background">
          <img src={greenrangoli} alt="Rangoli" className="hou001-preloader-rangoli" />
        </div>
        <div className="hou001-preloader-ganesh">
          <img src={lordganesh} alt="Lord Ganesha" className="hou001-preloader-ganesh-pic" />
        </div>
      </div>
    </section>
  );
}
