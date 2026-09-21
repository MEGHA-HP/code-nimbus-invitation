import React, { useState } from 'react';
import WishForm from './WishForm';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Wishes({ images, initialWishes = [] }) {
  const { backgrounddesign, rangoli, tree } = images;
  const [wishes, setWishes] = useState(initialWishes);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : wishes.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < wishes.length - 1 ? prev + 1 : 0));
  };

  const handleWishAdded = (newWish) => {
    setWishes((prev) => [newWish, ...prev]);
    setCurrentIndex(0);
  };

  const currentWish = wishes[currentIndex] || {
    authorName: 'Guest',
    message: 'May your new home be filled with joy and blessings!'
  };

  return (
    <section id="hou001-wishes">
      <div className="hou001-wishes-container nimbus-container">
        <h2 id="hou001-wishes-title">
          Heartfelt Wishes from family and friends
        </h2>

        <div className="hou001-wishes-box">
          {/* Wish Card Display (Carousel) */}
          <div className="hou001-wish-card-box">
            <div className="hou001-content-part">
              <div className="hou001-carousel-area">
                <p id="hou001-wisher-name" className="hou001-carousel-text">
                  {currentWish.authorName}
                </p>
                <p id="hou001-wish-msg" className="hou001-carousel-text">
                  {currentWish.message}
                </p>

                {/* Corner Decorative Rangolis */}
                <img
                  src={rangoli}
                  alt="Decorative Rangoli"
                  className="hou001-rangoli hou001-top-left-img"
                />
                <img
                  src={rangoli}
                  alt="Decorative Rangoli"
                  className="hou001-rangoli hou001-bottom-right-img"
                />

                {/* Animated Light Effect Producers */}
                <div className="hou001-light-effect-producer hou001-producer1" />
                <div className="hou001-light-effect-producer hou001-producer2" />
              </div>
            </div>

            {/* Background Arch Designs */}
            <div className="hou001-bg-design-box">
              <img
                src={backgrounddesign}
                alt="Background Design Top"
                className="hou001-bg-design hou001-design-top"
              />
              <img
                src={backgrounddesign}
                alt="Background Design Bottom"
                className="hou001-bg-design hou001-design-bottom"
              />
            </div>

            {/* Carousel Navigation Buttons & Counter */}
            <div id="hou001-content-change-btns-container">
              <button
                onClick={handlePrev}
                className="hou001-content-change-btn"
                aria-label="Previous Wish"
              >
                <ChevronLeft size={24} />
              </button>
              <span id="hou001-wish-index-displayer">
                {wishes.length > 0 ? `${currentIndex + 1} of ${wishes.length}` : '0 of 0'}
              </span>
              <button
                onClick={handleNext}
                className="hou001-content-change-btn"
                aria-label="Next Wish"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Send Wishes Message Box */}
          <div className="hou001-wish-message-box">
            <div className="hou001-wish-tree-left">
              <img src={tree} alt="Tree Ornament Left" className="hou001-wish-tree-left-img" />
            </div>
            <div className="hou001-wish-tree-right">
              <img src={tree} alt="Tree Ornament Right" className="hou001-wish-tree-right-img" />
            </div>

            <h4 id="hou001-msg-box-title">Send your wishes</h4>
            <WishForm onWishSubmitted={handleWishAdded} />
          </div>
        </div>
      </div>
    </section>
  );
}
