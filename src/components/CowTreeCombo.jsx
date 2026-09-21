import React from 'react';

export default function CowTreeCombo({ inView = true, cow, tree }) {
  return (
    <div>
      <div className="hou001-back-tree-section">
        <img
          src={tree}
          alt="Tree Decoration"
          className={`hou001-b-tree hou001-left-tree hou001-mirror-img ${
            inView ? 'hou001-appearFromLeft' : 'hou001-hideToLeft'
          }`}
        />
        <img
          src={tree}
          alt="Tree Decoration"
          className={`hou001-b-tree hou001-right-tree ${
            inView ? 'hou001-appearFromRight' : 'hou001-hideToRight'
          }`}
        />
      </div>

      <div className="hou001-cow-image-area">
        <img
          src={cow}
          alt="Sacred Cow Decoration"
          className={`hou001-mirror-img hou001-left-cow hou001-cow ${
            inView ? 'hou001-appearFromLeft' : 'hou001-hideToLeft'
          }`}
        />
        <img
          src={cow}
          alt="Sacred Cow Decoration"
          className={`hou001-right-cow hou001-cow ${
            inView ? 'hou001-appearFromRight' : 'hou001-hideToRight'
          }`}
        />
      </div>
    </div>
  );
}
