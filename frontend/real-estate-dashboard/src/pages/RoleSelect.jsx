import React from "react";
import { useNavigate } from "react-router-dom";

const ROLES = [
  {
    key: "admin",
    title: "Admin",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#2563eb" />
        <circle cx="12" cy="11" r="3" fill="#ffffff" />
        <path d="M12 11h-1.5" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 10v2" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    description: "Manage the entire CRM system, users, properties, configuration, and global reports.",
    actionText: "Login as Admin →"
  },
  {
    key: "builder",
    title: "Builder",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6c-2.4 2.4-5.3 5.3-7.7 7.7a1 1 0 0 0 0 1.4l1.4 1.4a1 1 0 0 0 1.4 0l7.7-7.7 1.6 1.6a1 1 0 0 0 1.4 0l1.6-1.6a1 1 0 0 0 0-1.4l-7.4-7.4a1 1 0 0 0-1.4 0l-.2.2z" fill="#2563eb" />
        <path d="M7.3 16.7a2 2 0 1 1-2.8-2.8 2 2 0 0 1 2.8 2.8z" fill="#2563eb" />
        <path d="M6 18l-4 4" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M9 10l5-5" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M5.5 8.5L8.5 5.5" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    description: "Manage development projects, track construction progress, and oversee site inventory.",
    actionText: "Login as Builder 🛠️"
  },
  {
    key: "agent",
    title: "Agent",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 11l-3-3-6 5V21h12v-6l-3-4z" fill="#2563eb" />
        <path d="M3 13l6-5 2.5 2M15 11l6 5" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="7" r="2.5" fill="#2563eb" />
      </svg>
    ),
    description: "Manage your active leads, property listings, follow-ups, and individual deals.",
    actionText: "Login as Agent →"
  }
];

function RoleSelect() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .rs-root {
          min-height: 100vh;
          background-color: #f8fafc;
          font-family: 'Inter', sans-serif;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        /* Ambient background circles to match screenshot */
        .rs-root::before {
          content: '';
          position: absolute;
          width: 120vw;
          height: 120vw;
          border-radius: 50%;
          background: radial-gradient(circle, transparent 0%, transparent 60%, rgba(226, 232, 240, 0.4) 60%, transparent 62%, transparent 64%, rgba(226, 232, 240, 0.4) 64%, transparent 66%);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%) scaleY(0.7);
          pointer-events: none;
          z-index: 0;
        }

        .rs-root::after {
          content: '';
          position: absolute;
          width: 100vw;
          height: 100vw;
          border-radius: 50%;
          background: radial-gradient(circle, transparent 0%, transparent 50%, rgba(226, 232, 240, 0.5) 50%, transparent 52%, transparent 54%, rgba(226, 232, 240, 0.5) 54%, transparent 56%);
          top: 50%; left: 50%;
          transform: translate(-30%, -60%) scaleY(0.8);
          pointer-events: none;
          z-index: 0;
        }

        .rs-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 64px;
          position: relative;
          z-index: 10;
        }

        .rs-logo-container {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .rs-logo-icon {
          width: 44px;
          height: 44px;
          background-color: #2563eb;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .rs-logo-text {
          display: flex;
          flex-direction: column;
        }

        .rs-logo-title {
          font-weight: 700;
          font-size: 16px;
          color: #0f172a;
          letter-spacing: 0.5px;
          line-height: 1.2;
        }

        .rs-logo-subtitle {
          font-weight: 600;
          font-size: 10px;
          color: #64748b;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .rs-nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .rs-nav-item {
          font-size: 14px;
          font-weight: 500;
          color: #334155;
          text-decoration: none;
          cursor: pointer;
        }

        .rs-nav-item:hover {
          color: #0f172a;
        }

        .rs-contact-btn {
          background-color: #2563eb;
          color: #ffffff;
          font-weight: 600;
          font-size: 14px;
          padding: 10px 20px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .rs-contact-btn:hover {
          background-color: #1d4ed8;
        }

        .rs-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
          position: relative;
          z-index: 10;
        }

        .rs-header-text {
          text-align: center;
          margin-bottom: 56px;
        }

        .rs-title {
          font-size: 42px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }

        .rs-subtitle {
          font-size: 16px;
          color: #475569;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.5;
        }

        .rs-cards-container {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
          justify-content: center;
          max-width: 1000px;
        }

        .rs-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 32px;
          width: 300px;
          box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(226, 232, 240, 0.4);
        }

        .rs-card-icon-wrapper {
          width: 56px;
          height: 56px;
          background-color: #eff6ff;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .rs-card-title {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 12px;
        }

        .rs-card-desc {
          font-size: 14px;
          color: #475569;
          line-height: 1.5;
          margin-bottom: 32px;
          flex: 1;
        }

        .rs-card-link {
          font-size: 14px;
          font-weight: 600;
          color: #2563eb;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          border: none;
          background: none;
          padding: 0;
          text-align: left;
        }

        .rs-card-link:hover {
          color: #1d4ed8;
        }

        .rs-card-link span {
          display: inline-block;
          transition: transform 0.2s;
        }

        .rs-card-link:hover span {
          transform: translateX(4px);
        }

        .rs-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 64px;
          position: relative;
          z-index: 10;
        }

        .rs-footer-text {
          font-size: 13px;
          color: #64748b;
        }

        .rs-footer-links {
          display: flex;
          gap: 24px;
        }

        .rs-footer-link {
          font-size: 13px;
          color: #64748b;
          text-decoration: none;
        }

        .rs-footer-link:hover {
          color: #334155;
        }

        @media (max-width: 900px) {
          .rs-nav { padding: 20px 24px; }
          .rs-footer { padding: 20px 24px; flex-direction: column; gap: 16px; text-align: center; }
          .rs-nav-links { display: none; }
        }
      `}</style>

      <div className="rs-root">
        <nav className="rs-nav">
          <div className="rs-logo-container">
            <div className="rs-logo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="10" width="4" height="10" fill="#ffffff" rx="1" />
                <rect x="10" y="6" width="4" height="14" fill="#ffffff" rx="1" />
                <rect x="16" y="12" width="4" height="8" fill="#ffffff" rx="1" />
                <circle cx="6" cy="13" r="1" fill="#2563eb" />
                <circle cx="6" cy="16" r="1" fill="#2563eb" />
                <circle cx="12" cy="9" r="1" fill="#2563eb" />
                <circle cx="12" cy="12" r="1" fill="#2563eb" />
                <circle cx="12" cy="15" r="1" fill="#2563eb" />
                <circle cx="18" cy="15" r="1" fill="#2563eb" />
              </svg>
            </div>
            <div className="rs-logo-text">
              <span className="rs-logo-title">ESTATEFLOW</span>
              <span className="rs-logo-subtitle">MANAGEMENT SYSTEMS</span>
            </div>
          </div>
          <div className="rs-nav-links">
            <span className="rs-nav-item">Platform</span>
            <span className="rs-nav-item">Resources</span>
            <span className="rs-nav-item">Pricing</span>
            <button className="rs-contact-btn">Contact Sales</button>
          </div>
        </nav>

        <main className="rs-main">
          <div className="rs-header-text">
            <h1 className="rs-title">Real Estate CRM Portal</h1>
            <p className="rs-subtitle">
              Welcome back. Please select your account role to access your personalized<br />
              dashboard and tools.
            </p>
          </div>

          <div className="rs-cards-container">
            {ROLES.map((role) => (
              <div key={role.key} className="rs-card">
                <div className="rs-card-icon-wrapper">
                  {role.icon}
                </div>
                <h2 className="rs-card-title">{role.title}</h2>
                <p className="rs-card-desc">{role.description}</p>
                <button
                  className="rs-card-link"
                  onClick={() => navigate(`/login/${role.key}`)}
                >
                  {role.actionText}
                </button>
              </div>
            ))}
          </div>
        </main>

        <footer className="rs-footer">
          <div className="rs-footer-text">
            © {new Date().getFullYear()} Raje Realty CRM. All rights reserved.
          </div>
          <div className="rs-footer-links">
            <a href="#" className="rs-footer-link">Privacy Policy</a>
            <a href="#" className="rs-footer-link">Terms of Service</a>
            <a href="#" className="rs-footer-link">Help Center</a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default RoleSelect;