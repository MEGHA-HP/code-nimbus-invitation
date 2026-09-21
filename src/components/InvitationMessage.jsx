import React from 'react';

export default function InvitationMessage({ data, images }) {
  const { lordganesh, greenrangoli } = images;
  const invitationText = data || "Together with their families, we cordially invite you to celebrate the housewarming ceremony.";

  return (
    <section id="hou001-invitation-card">
      <div className="hou001-invitation-card-background">
        <img src={greenrangoli} alt="Green Rangoli Decoration" className="hou001-rangoli" />
      </div>

      <div className="hou001-invitation-card-box">
        <div className="hou001-ganesh">
          <img src={lordganesh} alt="Lord Ganesha" className="hou001-ganesh-pic" />
        </div>
        <p className="hou001-invitation-card-text">
          "{invitationText}"
        </p>
      </div>
    </section>
  );
}
