import React from "react";
import { Link, useLocation } from "react-router-dom";

function AgentSideAndTopPanel() {
  const location = useLocation();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', sans-serif;
        }

        .material-icons {
          font-size: 24px;
        }

        /* Sidebar */
        .sidebar {
          width: 256px;
          position: fixed;
          left: 0;
          top: 0;
          height: 100vh;
          border-right: 1px solid #e2e8f0;
          background-color: #ffffff;
          display: flex;
          flex-direction: column;
          z-index: 100;
        }

        .sidebar-inner {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 32px;
          height: 100%;
          overflow-y: auto;
        }

        /* Brand */
        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .brand-icon-box {
          background-color: #135bec;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        .brand-title {
          font-size: 18px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.025em;
        }
        .brand-subtitle {
          color: #64748b;
          font-size: 12px;
          font-weight: 500;
          margin-top: 2px;
        }

        /* Nav Links */
        .nav-menu {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex-grow: 1;
        }
        .nav-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 10px;
          border-radius: 8px;
          color: #475569;
          cursor: pointer;
          text-decoration: none;
          transition: background-color 0.2s;
        }
        .nav-item:hover {
          background-color: #f1f5f9;
        }
        .nav-item.active {
          background-color: rgba(19, 91, 236, 0.1);
          color: #135bec;
        }
        .nav-item p {
          font-size: 13px;
          font-weight: 500;
          margin: 0;
        }
        .nav-item.active p {
          font-weight: 600;
        }

        /* Bottom Nav */
        .bottom-nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
          border-top: 1px solid #f1f5f9;
          padding-top: 16px;
        }
        .nav-item.logout {
          color: #ef4444;
        }
        .nav-item.logout:hover {
          background-color: #fef2f2;
        }

        /* Top Header */
        .top-header {
          position: fixed;
          left: 256px;
          right: 0;
          top: 0;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 32px;
          background-color: #ffffff;
          border-bottom: 1px solid #e2e8f0;
          z-index: 50;
        }

        /* Search */
        .search-container {
          display: flex;
          align-items: center;
          width: 384px;
          position: relative;
        }
        .search-icon {
          position: absolute;
          left: 12px;
          color: #94a3b8;
        }
        .search-input {
          width: 100%;
          padding: 8px 16px 8px 40px;
          background-color: #f1f5f9;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          outline: none;
          transition: box-shadow 0.2s;
        }
        .search-input:focus {
          box-shadow: 0 0 0 2px rgba(19, 91, 236, 0.5);
        }

        /* Header Actions */
        .header-right {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .icon-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .icon-btn {
          position: relative;
          padding: 8px;
          color: #64748b;
          background: none;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .icon-btn:hover {
          background-color: #f1f5f9;
        }
        .notification-dot {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 8px;
          height: 8px;
          background-color: #ef4444;
          border-radius: 50%;
          border: 2px solid #ffffff;
        }

        /* Profile */
        .profile-section {
          display: flex;
          align-items: center;
          gap: 12px;
          border-left: 1px solid #e2e8f0;
          padding-left: 24px;
        }
        .profile-info {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .profile-name {
          font-size: 14px;
          font-weight: 700;
        }
        .profile-role {
          font-size: 12px;
          color: #135bec;
          font-weight: 500;
        }
        .avatar-container {
          position: relative;
        }
        .avatar-box {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(19, 91, 236, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border: 2px solid rgba(19, 91, 236, 0.1);
        }
        .avatar-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .status-dot {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 12px;
          height: 12px;
          background-color: #22c55e;
          border: 2px solid #ffffff;
          border-radius: 50%;
        }
      `}</style>

      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="sidebar-inner">
          {/* Brand Logo */}
          <div className="brand">
            <div className="brand-icon-box">
              <span className="material-icons">domain</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h1 className="brand-title">EstateFlow</h1>
              <p className="brand-subtitle">Enterprise CRM</p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="nav-menu">
            <Link
              to="/Agent/AgentDashboard"
              className={`nav-item ${location.pathname === '/Agent/AgentDashboard' ? 'active' : ''}`}
            >
              <span className="material-icons">dashboard</span>
              <p>Dashboard Overview</p>
            </Link>

            <Link
              to="/Agent/MyLeads"
              className={`nav-item ${location.pathname === '/Agent/MyLeads' ? 'active' : ''}`}
            >
              <span className="material-icons">person_search</span>
              <p>My Leads</p>
            </Link>

            <Link
              to="/Agent/property-management"
              className={`nav-item ${location.pathname === '/Agent/property-management' ? 'active' : ''}`}
            >
              <span className="material-icons">house</span>
              <p>Property Management</p>
            </Link>

            <Link
              to="/Agent/site-visits"
              className={`nav-item ${location.pathname === '/Agent/site-visits' ? 'active' : ''}`}
            >
              <span className="material-icons">event_available</span>
              <p>Site Visits</p>
            </Link>

            <Link
              to="/Agent/deals"
              className={`nav-item ${location.pathname === '/Agent/deals' ? 'active' : ''}`}
            >
              <span className="material-icons">handshake</span>
              <p>Deals</p>
            </Link>

            <Link
              to="/Agent/clients"
              className={`nav-item ${location.pathname === '/Agent/clients' ? 'active' : ''}`}
            >
              <span className="material-icons">groups</span>
              <p>Clients</p>
            </Link>

            <Link
              to="/Agent/tasks-followups"
              className={`nav-item ${location.pathname === '/Agent/tasks-followups' ? 'active' : ''}`}
            >
              <span className="material-icons">notification_important</span>
              <p>Tasks &amp; Follow-ups</p>
            </Link>
          </nav>

          {/* Bottom Nav */}
          <div className="bottom-nav">
            <Link to="/Agent/settings" className="nav-item">
              <span className="material-icons">settings</span>
              <p>Settings</p>
            </Link>
            <div className="nav-item logout" onClick={() => console.log('Logout')}>
              <span className="material-icons">logout</span>
              <p>Logout</p>
            </div>
          </div>
        </div>
      </aside>

      {/* TOP HEADER */}
      <header className="top-header">
        <div className="search-container">
          <span className="material-icons search-icon">search</span>
          <input
            className="search-input"
            placeholder="Search leads, deals or properties..."
            type="text"
          />
        </div>

        <div className="header-right">
          <div className="icon-actions">
            <button className="icon-btn">
              <span className="material-icons">notifications</span>
              <span className="notification-dot"></span>
            </button>
            <button className="icon-btn">
              <span className="material-icons">mail</span>
            </button>
          </div>

          <div className="profile-section">
            <div className="profile-info">
              <p className="profile-name">Vikram Malhotra</p>
              <p className="profile-role">Senior Sales Agent</p>
            </div>
            <div className="avatar-container">
              <div className="avatar-box">
                <img
                  alt="Profile"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo6jX3PG4qkINm9NA2Oxa7Q_dcmNxXN6pa9B10OD9iPZjkokwI9WwSlTLROI02GcE-KSxnPtAGUrznFuwaSSmL2Q3bqrIJ2B1mNo3dNrP8tLBVG7uB4hZbNk1nOKj0b36TnLyYK7Lvh6EMl7HWbMBOR7DL1-3TLA3WZZurcVA9ylCKMHE8Jh-Vf7XSwikEfoqaRJFQpLOsM1_kBPTUDiBiuaWhAtKUWSpdkfotKGKRsH27eKiAKdJvgRYC1s3jPxlANq8BERAgdjjS"
                />
              </div>
              <span className="status-dot"></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default AgentSideAndTopPanel;