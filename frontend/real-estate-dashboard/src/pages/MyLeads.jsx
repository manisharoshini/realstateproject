import React from "react";
import { Link } from "react-router-dom";

function MyLeads() {
  return (
    <div className="my-leads-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

        .my-leads-page {
          font-family: 'Inter', sans-serif;
          --color-primary: #135bec;
          --color-bg-light: #f6f6f8;
          --text-slate-900: #0f172a;
          --text-slate-700: #334155;
          --text-slate-600: #475569;
          --text-slate-500: #64748b;
          --text-slate-400: #94a3b8;
          --border-slate-200: #e2e8f0;
          --bg-white: #ffffff;
          --bg-slate-50: #f8fafc;
          --bg-slate-100: #f1f5f9;
        }

        .material-icons { font-size: 24px; }

        /* Layout */
        .layout-wrapper {
          display: flex;
          height: 100vh;
          overflow: hidden;
          background-color: var(--color-bg-light);
        }

        /* SIDEBAR */
        .sidebar {
          width: 256px; /* w-64 */
          flex-shrink: 0;
          border-right: 1px solid var(--border-slate-200);
          background-color: var(--bg-white);
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .sidebar-inner {
          padding: 24px; /* p-6 */
          display: flex;
          flex-direction: column;
          gap: 32px; /* gap-8 */
          height: 100%;
        }

        /* Brand */
        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .brand-icon-box {
          background-color: var(--color-primary);
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
          color: var(--text-slate-900);
        }
        .brand-subtitle {
          color: var(--text-slate-500);
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
          overflow-y: auto;
        }
        .nav-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 10px;
          border-radius: 8px;
          color: var(--text-slate-600);
          cursor: pointer;
          text-decoration: none;
          transition: background-color 0.2s;
        }
        .nav-item:hover {
          background-color: #f1f5f9;
        }
        .nav-item.active {
          background-color: rgba(19, 91, 236, 0.1);
          color: var(--color-primary);
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


        /* MAIN */
        .main-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* HEADER */
        .top-header {
          height: 64px;
          background-color: var(--bg-white);
          border-bottom: 1px solid var(--border-slate-200);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 32px;
          flex-shrink: 0;
        }

        .search-wrap {
          position: relative;
          max-width: 480px;
          flex: 1;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-slate-400);
        }

        .search-input {
          width: 100%;
          padding: 8px 12px 8px 40px;
          border: 1px solid var(--border-slate-200);
          border-radius: 8px;
          background-color: var(--bg-slate-50);
          font-size: 14px;
          outline: none;
          transition: box-shadow 0.15s;
        }

        .search-input:focus {
          box-shadow: 0 0 0 2px rgba(19, 91, 236, 0.3);
          border-color: transparent;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .icon-btn {
          position: relative;
          padding: 8px;
          color: var(--text-slate-500);
          background: none;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          transition: background-color 0.15s;
        }

        .icon-btn:hover {
          background-color: var(--bg-slate-100);
        }

        .notif-dot {
          position: absolute;
          top: 8px;
          right: 10px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #ef4444;
          border: 2px solid var(--bg-white);
        }

        .divider-v {
          width: 1px;
          height: 32px;
          background-color: var(--border-slate-200);
          margin: 0 8px;
        }

        .profile-area {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }

        .profile-img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid var(--border-slate-200);
          object-fit: cover;
        }

        .profile-name {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-slate-900);
          line-height: 1;
        }

        .profile-role {
          font-size: 10px;
          color: var(--text-slate-500);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: 4px;
        }

        /* DASHBOARD BODY */
        .dashboard-body {
          flex: 1;
          overflow-y: auto;
          padding: 32px;
        }

        /* STAT CARDS */
        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 32px;
        }

        .stat-card {
          background-color: var(--bg-white);
          padding: 20px;
          border-radius: 12px;
          border: 1px solid var(--border-slate-200);
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .stat-icon {
          padding: 12px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-label {
          font-size: 10px;
          font-weight: 700;
          color: var(--text-slate-400);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .stat-value {
          font-size: 20px;
          font-weight: 700;
          color: var(--text-slate-900);
          margin-top: 2px;
        }

        /* PAGE TITLE SECTION */
        .page-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 32px;
        }

        .page-title {
          font-size: 24px;
          font-weight: 700;
          color: var(--text-slate-900);
        }

        .page-subtitle {
          font-size: 14px;
          color: var(--text-slate-500);
          margin-top: 4px;
        }

        .action-buttons {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .btn-secondary {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background-color: rgba(19, 91, 236, 0.1);
          color: var(--color-primary);
          font-weight: 600;
          font-size: 14px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: background-color 0.15s;
        }

        .btn-secondary:hover {
          background-color: rgba(19, 91, 236, 0.2);
        }

        .btn-primary {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background-color: var(--color-primary);
          color: white;
          font-weight: 600;
          font-size: 14px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(19, 91, 236, 0.2);
          transition: box-shadow 0.15s;
        }

        .btn-primary:hover {
          box-shadow: 0 8px 20px rgba(19, 91, 236, 0.35);
        }

        /* FILTER BAR */
        .filter-bar {
          background-color: var(--bg-white);
          padding: 16px;
          border-radius: 12px;
          border: 1px solid var(--border-slate-200);
          box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
          margin-bottom: 24px;
          display: flex;
          flex-wrap: wrap;
          align-items: flex-end;
          gap: 16px;
        }

        .filter-group {
          flex: 1;
          min-width: 140px;
        }

        .filter-label {
          display: block;
          font-size: 10px;
          font-weight: 700;
          color: var(--text-slate-400);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
          margin-left: 4px;
        }

        .filter-select {
          width: 100%;
          background-color: var(--bg-slate-50);
          border: none;
          font-size: 14px;
          border-radius: 8px;
          padding: 8px 12px;
          outline: none;
          color: var(--text-slate-700);
        }

        .filter-btn {
          padding: 10px;
          background-color: var(--bg-slate-100);
          color: var(--text-slate-600);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.15s;
        }

        .filter-btn:hover {
          background-color: var(--border-slate-200);
        }

        /* TABLE */
        .table-container {
          background-color: var(--bg-white);
          border-radius: 12px;
          border: 1px solid var(--border-slate-200);
          box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
          overflow: hidden;
        }

        .leads-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .leads-table thead tr {
          background-color: rgba(248, 250, 252, 0.5);
          border-bottom: 1px solid var(--border-slate-200);
        }

        .leads-table th {
          padding: 16px 24px;
          font-size: 11px;
          font-weight: 700;
          color: var(--text-slate-500);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .leads-table th:last-child {
          text-align: right;
        }

        .leads-table tbody tr {
          border-bottom: 1px solid #f1f5f9;
          transition: background-color 0.15s;
        }

        .leads-table tbody tr:last-child {
          border-bottom: none;
        }

        .leads-table tbody tr:hover {
          background-color: rgba(248, 250, 252, 0.5);
        }

        .leads-table tbody tr:hover .row-actions {
          opacity: 1;
        }

        .leads-table td {
          padding: 16px 24px;
        }

        .lead-name {
          font-weight: 600;
          color: var(--text-slate-900);
          font-size: 14px;
        }

        .lead-contact {
          font-size: 12px;
          color: var(--text-slate-500);
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 4px;
        }

        .lead-contact .material-icons {
          font-size: 14px;
        }

        .prop-name {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-slate-700);
        }

        .prop-type {
          font-size: 11px;
          text-transform: uppercase;
          color: var(--text-slate-500);
        }

        .budget-value {
          font-size: 14px;
          font-weight: 700;
          color: var(--color-primary);
        }

        .budget-loc {
          font-size: 12px;
          color: var(--text-slate-500);
          margin-top: 2px;
        }

        .source-tag {
          display: inline-flex;
          padding: 2px 8px;
          font-size: 10px;
          font-weight: 600;
          background-color: var(--bg-slate-100);
          color: var(--text-slate-600);
          border-radius: 9999px;
          margin-bottom: 8px;
        }

        .status-select {
          font-size: 12px;
          padding: 4px 8px;
          border-radius: 8px;
          border: none;
          outline: none;
          cursor: pointer;
        }

        .timeline-label {
          font-size: 11px;
          font-weight: 700;
          color: var(--text-slate-400);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .timeline-date {
          font-size: 11px;
          color: var(--text-slate-600);
          margin-top: 4px;
        }

        .timeline-follow {
          font-size: 11px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 4px;
        }

        .timeline-follow .material-icons {
          font-size: 14px;
        }

        .row-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 4px;
          opacity: 0;
          transition: opacity 0.15s;
        }

        .action-icon-btn {
          padding: 8px;
          color: var(--color-primary);
          background: none;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.15s;
        }

        .action-icon-btn:hover {
          background-color: rgba(19, 91, 236, 0.1);
        }

        .convert-btn {
          padding: 6px 12px;
          background-color: var(--color-primary);
          color: white;
          font-size: 12px;
          font-weight: 700;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          margin-left: 8px;
          transition: box-shadow 0.15s;
        }

        .convert-btn:hover {
          box-shadow: 0 4px 12px rgba(19, 91, 236, 0.35);
        }

        /* PAGINATION */
        .pagination-bar {
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-slate-200);
          background-color: var(--bg-slate-50);
        }

        .pagination-info {
          font-size: 12px;
          color: var(--text-slate-500);
          font-weight: 500;
        }

        .pagination-controls {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .page-nav-btn {
          padding: 6px;
          border: 1px solid var(--border-slate-200);
          border-radius: 4px;
          background: none;
          color: var(--text-slate-400);
          cursor: pointer;
          transition: background-color 0.15s;
        }

        .page-nav-btn:hover {
          background-color: var(--bg-white);
        }

        .page-num-btn {
          padding: 4px 12px;
          border-radius: 4px;
          border: none;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: background-color 0.15s;
        }

        .page-num-btn.active {
          background-color: var(--color-primary);
          color: white;
        }

        .page-num-btn:not(.active) {
          background: none;
          color: var(--text-slate-600);
        }

        .page-num-btn:not(.active):hover {
          background-color: var(--bg-white);
        }
      `}</style>

      <div className="layout-wrapper">

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-inner">
            {/* Brand */}
            <div className="brand">
              <div className="brand-icon-box">
                <span className="material-icons" style={{ fontSize: '24px' }}>apartment</span>
              </div>
              <div>
                <div className="brand-title">EstateFlow</div>
                <div className="brand-subtitle">Enterprise CRM</div>
              </div>
            </div>

            {/* Nav Links */}
            <nav className="nav-menu">
              <Link to="/agent" className="nav-item">
                <span className="material-icons">dashboard</span>
                <p>Dashboard Overview</p>
              </Link>
              <div className="nav-item active">
                <span className="material-icons">person_search</span>
                <p>My Leads</p>
              </div>
              <div className="nav-item">
                <span className="material-icons">house</span>
                <p>Property Management</p>
              </div>
              <div className="nav-item">
                <span className="material-icons">event_available</span>
                <p>Site Visits</p>
              </div>
              <div className="nav-item">
                <span className="material-icons">handshake</span>
                <p>Deals</p>
              </div>
              <div className="nav-item">
                <span className="material-icons">groups</span>
                <p>Clients</p>
              </div>
              <div className="nav-item">
                <span className="material-icons">notification_important</span>
                <p>Tasks &amp; Follow-ups</p>
              </div>
            </nav>

            {/* Bottom Nav */}
            <div className="bottom-nav">
              <div className="nav-item">
                <span className="material-icons">settings</span>
                <p>Profile &amp; Settings</p>
              </div>
            </div>
          </div>
        </aside>


        {/* MAIN */}
        <main className="main-col">

          {/* Header */}
          <header className="top-header">
            <div className="search-wrap">
              <span className="material-icons search-icon">search</span>
              <input
                className="search-input"
                placeholder="Search leads, properties, or clients..."
                type="text"
              />
            </div>

            <div className="header-right">
              <button className="icon-btn">
                <span className="material-icons">notifications</span>
                <span className="notif-dot"></span>
              </button>
              <button className="icon-btn">
                <span className="material-icons">chat_bubble_outline</span>
              </button>
              <div className="divider-v"></div>
              <div className="profile-area">
                <img
                  className="profile-img"
                  alt="Agent Profile"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1sY5EQD3XBrhAeFDYqxlL5eu6UZoVffwKo1u_EVUT6qT0xleJplkHk_iZAFSpZ7Cc6MaXwBR6XgHsrxFzb3S6PU4tOqJ-kUY8p8VQt-v5m3_n0Akf1ngeW0X5pCirjz5a5aEXKeFpE6Aotwc_sCMKzxCXILzkflzz4z5yTyh0bJrtRRsQ8j7DgJXZvtAEh80WcmWGvFSx3Q8_88-zd6ITULxqggEmH0VXU40yrxfjk2x--be8MZCzOaO5gXRGf0fDWbrArhYez1Id"
                />
                <div>
                  <p className="profile-name">Rahul Sharma</p>
                  <p className="profile-role">Senior Agent</p>
                </div>
              </div>
            </div>
          </header>

          {/* Dashboard Body */}
          <div className="dashboard-body">

            {/* Stats Row */}
            <div className="stats-row">
              <div className="stat-card">
                <div className="stat-icon" style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)', color: '#2563eb' }}>
                  <span className="material-icons">group_add</span>
                </div>
                <div>
                  <p className="stat-label">Total Leads</p>
                  <p className="stat-value">124</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon" style={{ backgroundColor: 'rgba(22, 163, 74, 0.1)', color: '#16a34a' }}>
                  <span className="material-icons">task_alt</span>
                </div>
                <div>
                  <p className="stat-label">Hot Leads</p>
                  <p className="stat-value">18</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon" style={{ backgroundColor: 'rgba(234, 88, 12, 0.1)', color: '#ea580c' }}>
                  <span className="material-icons">schedule</span>
                </div>
                <div>
                  <p className="stat-label">Site Visits (Wk)</p>
                  <p className="stat-value">07</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon" style={{ backgroundColor: 'rgba(168, 85, 247, 0.1)', color: '#9333ea' }}>
                  <span className="material-icons">monetization_on</span>
                </div>
                <div>
                  <p className="stat-label">Pipeline Value</p>
                  <p className="stat-value">₹12.4Cr</p>
                </div>
              </div>
            </div>

            {/* Page Title & Actions */}
            <div className="page-title-row">
              <div>
                <h1 className="page-title">Lead Management</h1>
                <p className="page-subtitle">Manage and track your active real estate prospects</p>
              </div>
              <div className="action-buttons">
                <button className="btn-secondary">
                  <span className="material-icons" style={{ fontSize: '18px' }}>file_download</span>
                  Export CSV
                </button>
                <button className="btn-primary">
                  <span className="material-icons" style={{ fontSize: '18px' }}>person_add</span>
                  Add New Lead
                </button>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="filter-bar">
              <div className="filter-group">
                <label className="filter-label">Property Type</label>
                <select className="filter-select">
                  <option>All Types</option>
                  <option>Residential Flat</option>
                  <option>Commercial Office</option>
                  <option>Independent Villa</option>
                </select>
              </div>
              <div className="filter-group">
                <label className="filter-label">Budget Range</label>
                <select className="filter-select">
                  <option>Any Budget</option>
                  <option>₹50L - ₹1Cr</option>
                  <option>₹1Cr - ₹2.5Cr</option>
                  <option>Above ₹2.5Cr</option>
                </select>
              </div>
              <div className="filter-group">
                <label className="filter-label">Lead Status</label>
                <select className="filter-select">
                  <option>All Statuses</option>
                  <option>New</option>
                  <option>Contacted</option>
                  <option>Interested</option>
                  <option>Not Interested</option>
                </select>
              </div>
              <div className="filter-group">
                <label className="filter-label">Location</label>
                <select className="filter-select">
                  <option>All Locations</option>
                  <option>Gurugram, HR</option>
                  <option>Noida, UP</option>
                  <option>South Delhi</option>
                </select>
              </div>
              <div>
                <button className="filter-btn">
                  <span className="material-icons">filter_list</span>
                </button>
              </div>
            </div>

            {/* Leads Table */}
            <div className="table-container">
              <div style={{ overflowX: 'auto' }}>
                <table className="leads-table">
                  <thead>
                    <tr>
                      <th>Lead Info</th>
                      <th>Property Interest</th>
                      <th>Budget &amp; Location</th>
                      <th>Source &amp; Status</th>
                      <th>Timeline</th>
                      <th style={{ textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Row 1 */}
                    <tr>
                      <td>
                        <div className="lead-name">Arjun Kapoor</div>
                        <div className="lead-contact">
                          <span className="material-icons">call</span> +91 98765 43210
                        </div>
                        <div className="lead-contact">
                          <span className="material-icons">email</span> arjun.k@gmail.com
                        </div>
                      </td>
                      <td>
                        <div className="prop-name">Skyline Apartments</div>
                        <div className="prop-type">3 BHK Luxury Flat</div>
                      </td>
                      <td>
                        <div className="budget-value">₹1.45 Cr</div>
                        <div className="budget-loc">Gurugram, Sec 54</div>
                      </td>
                      <td>
                        <div className="source-tag">Website Form</div>
                        <select className="status-select" style={{ backgroundColor: 'rgba(22,163,74,0.1)', color: '#15803d' }}>
                          <option>Interested</option>
                          <option>New</option>
                          <option>Contacted</option>
                          <option>Not Interested</option>
                        </select>
                      </td>
                      <td>
                        <div className="timeline-label">Last Contact</div>
                        <div className="timeline-date">22 Oct 2023</div>
                        <div className="timeline-follow" style={{ color: '#135bec' }}>
                          <span className="material-icons">alarm</span> 28 Oct 2023
                        </div>
                      </td>
                      <td>
                        <div className="row-actions">
                          <button className="action-icon-btn" title="Call"><span className="material-icons">phone_in_talk</span></button>
                          <button className="action-icon-btn" title="Add Follow-up"><span className="material-icons">edit_calendar</span></button>
                          <button className="convert-btn">CONVERT</button>
                        </div>
                      </td>
                    </tr>

                    {/* Row 2 */}
                    <tr>
                      <td>
                        <div className="lead-name">Priya Mehta</div>
                        <div className="lead-contact">
                          <span className="material-icons">call</span> +91 99000 11223
                        </div>
                        <div className="lead-contact">
                          <span className="material-icons">email</span> p.mehta@outlook.com
                        </div>
                      </td>
                      <td>
                        <div className="prop-name">The Grand Residency</div>
                        <div className="prop-type">Office Space</div>
                      </td>
                      <td>
                        <div className="budget-value">₹75 L</div>
                        <div className="budget-loc">Noida, Sec 62</div>
                      </td>
                      <td>
                        <div className="source-tag">Realtor.com</div>
                        <select className="status-select" style={{ backgroundColor: 'rgba(37,99,235,0.1)', color: '#1d4ed8' }}>
                          <option>New</option>
                          <option>Contacted</option>
                          <option>Interested</option>
                          <option>Not Interested</option>
                        </select>
                      </td>
                      <td>
                        <div className="timeline-label">Last Contact</div>
                        <div className="timeline-date">---</div>
                        <div className="timeline-follow" style={{ color: '#135bec' }}>
                          <span className="material-icons">alarm</span> Today
                        </div>
                      </td>
                      <td>
                        <div className="row-actions">
                          <button className="action-icon-btn" title="Call"><span className="material-icons">phone_in_talk</span></button>
                          <button className="action-icon-btn" title="Add Follow-up"><span className="material-icons">edit_calendar</span></button>
                          <button className="convert-btn">CONVERT</button>
                        </div>
                      </td>
                    </tr>

                    {/* Row 3 */}
                    <tr>
                      <td>
                        <div className="lead-name">Vikram Singh</div>
                        <div className="lead-contact">
                          <span className="material-icons">call</span> +91 88776 55443
                        </div>
                        <div className="lead-contact">
                          <span className="material-icons">email</span> v.singh@corp.in
                        </div>
                      </td>
                      <td>
                        <div className="prop-name">Palm Grove Villas</div>
                        <div className="prop-type">Independent Villa</div>
                      </td>
                      <td>
                        <div className="budget-value">₹5.2 Cr</div>
                        <div className="budget-loc">South Delhi</div>
                      </td>
                      <td>
                        <div className="source-tag">Referral</div>
                        <select className="status-select" style={{ backgroundColor: 'rgba(234,88,12,0.1)', color: '#c2410c' }}>
                          <option>Contacted</option>
                          <option>New</option>
                          <option>Interested</option>
                          <option>Not Interested</option>
                        </select>
                      </td>
                      <td>
                        <div className="timeline-label">Last Contact</div>
                        <div className="timeline-date">15 Oct 2023</div>
                        <div className="timeline-follow" style={{ color: '#94a3b8' }}>
                          <span className="material-icons">check_circle</span> No pending
                        </div>
                      </td>
                      <td>
                        <div className="row-actions">
                          <button className="action-icon-btn" title="Call"><span className="material-icons">phone_in_talk</span></button>
                          <button className="action-icon-btn" title="Add Follow-up"><span className="material-icons">edit_calendar</span></button>
                          <button className="convert-btn">CONVERT</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="pagination-bar">
                <span className="pagination-info">Showing 1 to 10 of 42 leads</span>
                <div className="pagination-controls">
                  <button className="page-nav-btn">
                    <span className="material-icons" style={{ fontSize: '18px' }}>chevron_left</span>
                  </button>
                  <button className="page-num-btn active">1</button>
                  <button className="page-num-btn">2</button>
                  <button className="page-num-btn">3</button>
                  <button className="page-nav-btn">
                    <span className="material-icons" style={{ fontSize: '18px' }}>chevron_right</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default MyLeads;
