import React, { useState } from 'react';
import { AlertCircle, Mail, Shield, X } from 'lucide-react';

const LOGO_SRC = "https://cdn-admin.invitationnation.in/categories/790c30b4-9b75-40a6-9d45-caa1430c9cac_Gemini_Generated_Image_iti88piti88piti8-edit.webp";

export default function Footer({ categoryType = "housewarming" }) {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [issueType, setIssueType] = useState('');
  const [issueDesc, setIssueDesc] = useState('');
  const [reportSuccess, setReportSuccess] = useState(false);

  const handleOpenBrand = () => {
    window.open("https://invitationnation.in/", "_blank", "noopener,noreferrer");
  };

  const handleReportSubmit = (e) => {
    e.preventDefault();
    if (!issueType || !issueDesc.trim()) return;
    setReportSuccess(true);
    setTimeout(() => {
      setReportSuccess(false);
      setIsReportModalOpen(false);
      setIssueType('');
      setIssueDesc('');
    }, 2000);
  };

  return (
    <>
      <footer className="shared-footer-main" id="shared-footer-main">
        {/* Top Branding Section */}
        <div className="shared-footer-top-section" onClick={handleOpenBrand}>
          <div className="shared-footer-branding-container">
            <div className="shared-footer-branding-text">
              <h2 className="shared-footer-wedding-text">
                <span className="footer-categorytype">{categoryType.toLowerCase()}</span>{' '}
                Invitation website by
              </h2>
              <span className="shared-footer-brand-name">Invitationnation</span>
            </div>
            <div className="shared-footer-logo-group">
              <img 
                src="https://cdn-admin.invitationnation.in/media/hou001/assets/e919fbb3-ad2b-44d1-a3f2-ab6f5857cd4d_lord-ganesha.svg" 
                alt="InvitationNation Logo" 
                style={{ width: 44, height: 44 }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Navigation & Legal Wrapper */}
        <div className="shared-footer-bottom-wrapper">
          <div className="shared-footer-container">
            <div className="shared-footer-links-row">
              {/* Report a Problem */}
              <button
                type="button"
                className="shared-footer-link shared-footer-gray-link"
                onClick={() => setIsReportModalOpen(true)}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <span className="shared-footer-icon">
                  <AlertCircle size={17} color="#94A3B8" />
                </span>
                <span className="shared-footer-link-text">Report a Problem</span>
              </button>

              {/* Contact Support */}
              <a
                className="shared-footer-link shared-footer-gray-link"
                href="mailto:marketing@codenimbussolutions.com?subject=Invitation%20Support&body=Hello%20Team,%0A%0AI%20need%20help%20with..."
              >
                <span className="shared-footer-icon">
                  <Mail size={17} color="#94A3B8" />
                </span>
                <span className="shared-footer-link-text">Contact Support</span>
              </a>

              {/* Privacy Policy */}
              <a
                className="shared-footer-link shared-footer-gray-link"
                href="https://invitationnation.in/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="shared-footer-icon">
                  <Shield size={17} color="#94A3B8" />
                </span>
                <span className="shared-footer-link-text">Privacy Policy</span>
              </a>
            </div>

            {/* Attribution */}
            <div className="shared-footer-attribution">
              POWERED BY{' '}
              <span onClick={handleOpenBrand} style={{ cursor: 'pointer' }}>
                INVITATION NATION
              </span>
            </div>

            {/* Legal / Copyright */}
            <div className="shared-footer-legal-bar">
              <p className="shared-footer-legal-text">
                © 2026 Invitation Nation. All rights reserved. Crafted with care for your forever.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Report a Problem Modal */}
      {isReportModalOpen && (
        <div 
          className="shared-modal-overlay" 
          onClick={() => setIsReportModalOpen(false)}
        >
          <div 
            className="shared-modal-card" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="shared-modal-header">
              <div className="shared-modal-header-text">
                <h3 className="shared-modal-heading">Report a Problem</h3>
                <p className="shared-modal-subtext">Let us know what went wrong.</p>
              </div>
              <button 
                className="shared-modal-close-btn"
                onClick={() => setIsReportModalOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="shared-modal-content-area">
              {reportSuccess ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <h4 style={{ color: '#243f03', fontSize: '1.8rem', marginBottom: '1rem' }}>
                    Thank you!
                  </h4>
                  <p style={{ color: '#6b7280', fontSize: '1.4rem' }}>
                    Your report has been submitted successfully.
                  </p>
                </div>
              ) : (
                <form className="shared-modal-form" onSubmit={handleReportSubmit}>
                  <div>
                    <label className="shared-modal-label">Issue Type</label>
                    <select
                      className="shared-modal-select"
                      value={issueType}
                      onChange={(e) => setIssueType(e.target.value)}
                      required
                    >
                      <option value="">Select an issue type</option>
                      <option value="Broken Link">Broken Link or Map</option>
                      <option value="Visual Glitch">Visual Alignment Glitch</option>
                      <option value="Audio Issue">Background Music Not Playing</option>
                      <option value="Other">Other Problem</option>
                    </select>
                  </div>

                  <div>
                    <label className="shared-modal-label">Description</label>
                    <textarea
                      className="shared-modal-textarea"
                      placeholder="Please describe the issue..."
                      value={issueDesc}
                      onChange={(e) => setIssueDesc(e.target.value)}
                      required
                      rows={4}
                    />
                  </div>

                  <button type="submit" className="shared-modal-submit-btn">
                    Submit Report
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
