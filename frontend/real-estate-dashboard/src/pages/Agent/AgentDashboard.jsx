import React from "react";
import AgentSideAndTopPanel from "./AgentSideandTopPanel";


function AgentDashboard() {
  return (
    <div className="agent-dashboard">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

        .agent-dashboard {
          font-family: 'Inter', sans-serif;
          --color-primary: #135bec;
          --color-bg-light: #f6f6f8;
          --text-slate-900: #0f172a;
          --text-slate-500: #64748b;
          --text-slate-600: #475569;
          --text-slate-700: #334155;
          --border-slate-200: #e2e8f0;
          --bg-white: #ffffff;
        }

        .material-icons {
          font-size: 24px;
        }

        /* Layout */
        .layout-wrapper {
          display: flex;
          height: 100vh;
          overflow: hidden;
          background-color: var(--color-bg-light);
          color: var(--text-slate-900);
        }

        /* Main Content Area */
        .main-col {
          margin-left: 256px;  /* ← Add this for sidebar */
          margin-top: 64px;    /* ← Add this for header */
          flex: 1;
          display: flex;
          flex-direction: column;
          height: calc(100vh - 64px);  /* ← Subtract header height */
          overflow: hidden;
        }

        /* Page Content Area */
        .page-content {
          flex: 1;
          overflow-y: auto;
          padding: 32px;
          background-color: var(--color-bg-light);
        }

        /* Page Header */
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 32px;
        }
        .page-title {
          font-size: 30px;
          font-weight: 900;
          letter-spacing: -0.025em;
        }
        .page-subtitle {
          color: var(--text-slate-500);
          margin-top: 4px;
          font-size: 16px;
        }
        .page-actions {
          display: flex;
          gap: 12px;
        }
        .btn-outline {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background-color: var(--bg-white);
          border: 1px solid var(--border-slate-200);
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-slate-700);
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .btn-outline:hover {
          background-color: #f8fafc;
        }
        .btn-primary {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background-color: var(--color-primary);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .btn-primary:hover {
          background-color: rgba(19, 91, 236, 0.9);
        }
        .btn-icon {
          font-size: 18px !important;
        }

        /* Stats Row */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }
        @media (min-width: 768px) { .stats-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 1024px) { .stats-grid { grid-template-columns: repeat(6, 1fr); } }

        .stat-card {
          background-color: var(--bg-white);
          padding: 20px;
          border-radius: 12px;
          border: 1px solid var(--border-slate-200);
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }
        .stat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .stat-icon {
          padding: 8px;
          border-radius: 8px;
        }
        .stat-trend {
          font-size: 12px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
        }
        .stat-label {
          color: var(--text-slate-500);
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .stat-value {
          font-size: 24px;
          font-weight: 900;
          margin-top: 4px;
        }

        /* Analytics Grid */
        .analytics-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 1024px) { .analytics-grid { grid-template-columns: repeat(3, 1fr); } }

        .widget-card {
          background-color: var(--bg-white);
          padding: 24px;
          border-radius: 12px;
          border: 1px solid var(--border-slate-200);
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }

        /* Monthly Sales Bar Chart */
        .monthly-sales-col {
          grid-column: span 1;
        }
        @media (min-width: 1024px) { .monthly-sales-col { grid-column: span 2; } }

        .widget-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }
        .widget-title {
          font-size: 18px;
          font-weight: 700;
        }
        .widget-select {
          background-color: #f1f5f9;
          border: none;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          color: var(--text-slate-600);
          padding: 6px 12px;
          outline: none;
        }

        .bar-chart-container {
          height: 256px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 16px;
          padding: 16px 8px 0;
        }
        .bar-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          height: 100%;
        }
        .bar-track {
          width: 100%;
          background-color: #f1f5f9;
          border-radius: 8px 8px 0 0;
          position: relative;
          height: 160px;
        }
        .bar-fill {
          position: absolute;
          bottom: 0;
          width: 100%;
          background-color: rgba(19, 91, 236, 0.4);
          border-radius: 8px 8px 0 0;
          transition: background-color 0.2s;
        }
        .bar-col:hover .bar-fill {
          background-color: var(--color-primary);
        }
        .bar-label {
          font-size: 12px;
          font-weight: 500;
          color: var(--text-slate-500);
        }

        /* Conversion Rate Donut */
        .conversion-col {
          display: flex;
          flex-direction: column;
        }
        .donut-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .donut-chart {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .donut-svg {
          width: 192px;
          height: 192px;
          transform: rotate(-90deg);
        }
        .donut-bg {
          color: #f1f5f9;
        }
        .donut-progress {
          color: var(--color-primary);
          stroke-dasharray: 502.4px;
          stroke-dashoffset: 361.7px;
        }
        .donut-center {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .donut-value {
          font-size: 36px;
          font-weight: 900;
        }
        .donut-label {
          font-size: 12px;
          font-weight: 700;
          color: var(--text-slate-500);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 4px;
        }
        .conversion-stats {
          margin-top: 32px;
          text-align: center;
        }
        .conversion-text {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-slate-600);
        }
        .conversion-text span {
          font-weight: 700;
          color: var(--text-slate-900);
        }
        .conversion-trend {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 8px;
        }

        /* Line Chart Widget */
        .line-chart-col {
          grid-column: span 1;
        }
        @media (min-width: 1024px) { .line-chart-col { grid-column: span 3; } }
        
        .widget-subtitle {
          font-size: 12px;
          color: var(--text-slate-500);
          font-weight: 500;
        }
        .legend {
          display: flex;
          gap: 16px;
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .legend-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        .legend-label {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-slate-600);
        }
        .chart-area {
          height: 192px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
        }
        .grid-lines {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0.1;
          background-image: linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .svg-container {
          width: 100%;
          height: 100%;
          overflow: visible;
        }
        .x-axis-labels {
          display: flex;
          justify-content: space-between;
          margin-top: 16px;
          padding: 0 8px;
        }
        .x-label {
          font-size: 12px;
          font-weight: 500;
          color: #94a3b8;
        }
        .x-label.active {
          font-weight: 700;
          color: var(--color-primary);
        }

        /* Recent Activity Table */
        .activity-section {
          margin-top: 32px;
        }
        .activity-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .view-all {
          color: var(--color-primary);
          font-size: 14px;
          font-weight: 700;
          background: none;
          border: none;
          cursor: pointer;
        }
        .view-all:hover {
          text-decoration: underline;
        }
        .table-container {
          background-color: var(--bg-white);
          border-radius: 12px;
          border: 1px solid var(--border-slate-200);
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }
        .activity-table {
          width: 100%;
          text-align: left;
          border-collapse: collapse;
        }
        .activity-table thead tr {
          border-bottom: 1px solid #f1f5f9;
          background-color: rgba(248, 250, 252, 0.5);
        }
        .activity-table th {
          padding: 16px 24px;
          font-size: 12px;
          font-weight: 700;
          color: var(--text-slate-500);
          text-transform: uppercase;
        }
        .activity-table tbody tr {
          border-bottom: 1px solid #f1f5f9;
        }
        .activity-table tbody tr:last-child {
          border-bottom: none;
        }
        .activity-table td {
          padding: 16px 24px;
        }

        .td-activity {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .activity-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .activity-name {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-slate-700);
        }
        .td-lead {
          display: flex;
          flex-direction: column;
        }
        .lead-name {
          font-size: 14px;
          font-weight: 700;
        }
        .lead-sub {
          font-size: 12px;
          color: var(--text-slate-500);
        }
        .td-date {
          font-size: 14px;
          color: var(--text-slate-600);
        }
        .status-badge {
          display: inline-flex;
          align-items: center;
          padding: 2px 10px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 700;
        }
      `}</style>

      <div className="layout-wrapper">
        {/* SHARED SIDEBAR AND TOP PANEL */}
        <AgentSideAndTopPanel />

        {/* MAIN CONTENT */}
        <main className="main-col">
          {/* Page Content */}
          <div className="page-content">
            <div className="page-header">
              <div>
                <h2 className="page-title">Agent Dashboard</h2>
                <p className="page-subtitle">Welcome back, Vikram. Here's your performance overview for this month.</p>
              </div>
              <div className="page-actions">
                <button className="btn-outline">
                  <span className="material-symbols-outlined btn-icon">download</span>
                  Export PDF
                </button>
                <button className="btn-primary">
                  <span className="material-symbols-outlined btn-icon">add</span>
                  New Lead
                </button>
              </div>
            </div>

            {/* Stats Row */}
            <div className="stats-grid">
              {/* Stat 1 */}
              <div className="stat-card">
                <div className="stat-header">
                  <span className="material-symbols-outlined stat-icon" style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)', color: '#2563eb' }}>group_add</span>
                  <span className="stat-trend" style={{ color: '#22c55e', backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>+12%</span>
                </div>
                <p className="stat-label">Total Leads</p>
                <p className="stat-value">156</p>
              </div>

              {/* Stat 2 */}
              <div className="stat-card">
                <div className="stat-header">
                  <span className="material-symbols-outlined stat-icon" style={{ backgroundColor: 'rgba(249, 115, 22, 0.1)', color: '#ea580c' }}>sync_alt</span>
                  <span className="stat-trend" style={{ color: '#f97316', backgroundColor: 'rgba(249, 115, 22, 0.1)' }}>+2</span>
                </div>
                <p className="stat-label">Active Deals</p>
                <p className="stat-value">18</p>
              </div>

              {/* Stat 3 */}
              <div className="stat-card">
                <div className="stat-header">
                  <span className="material-symbols-outlined stat-icon" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', color: '#16a34a' }}>verified</span>
                  <span className="stat-trend" style={{ color: '#22c55e', backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>+5</span>
                </div>
                <p className="stat-label">Closed Deals</p>
                <p className="stat-value">42</p>
              </div>

              {/* Stat 4 */}
              <div className="stat-card">
                <div className="stat-header">
                  <span className="material-symbols-outlined stat-icon" style={{ backgroundColor: 'rgba(168, 85, 247, 0.1)', color: '#9333ea' }}>visibility</span>
                  <span className="stat-trend" style={{ color: '#64748b', backgroundColor: '#f1f5f9' }}>Today</span>
                </div>
                <p className="stat-label">Site Visits</p>
                <p className="stat-value">8</p>
              </div>

              {/* Stat 5 */}
              <div className="stat-card">
                <div className="stat-header">
                  <span className="material-symbols-outlined stat-icon" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }}>payments</span>
                  <span className="stat-trend" style={{ color: '#22c55e', backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>+15%</span>
                </div>
                <p className="stat-label">Revenue</p>
                <p className="stat-value">₹2.4 Cr</p>
              </div>

              {/* Stat 6 */}
              <div className="stat-card">
                <div className="stat-header">
                  <span className="material-symbols-outlined stat-icon" style={{ backgroundColor: 'rgba(79, 70, 229, 0.1)', color: '#4f46e5' }}>account_balance_wallet</span>
                  <span className="stat-trend" style={{ color: '#22c55e', backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>+10%</span>
                </div>
                <p className="stat-label">Commission</p>
                <p className="stat-value">₹12.5 L</p>
              </div>
            </div>

            {/* Analytics Grid */}
            <div className="analytics-grid">
              {/* Sales Performance Bar Chart */}
              <div className="widget-card monthly-sales-col">
                <div className="widget-header">
                  <h3 className="widget-title">Monthly Sales Performance</h3>
                  <select className="widget-select">
                    <option>Last Month</option>
                    <option>Last 3 Months</option>
                    <option>Last 6 Months</option>
                    <option>Last Year</option>
                  </select>
                </div>
                <div className="bar-chart-container">
                  <div className="bar-col group">
                    <div className="bar-track">
                      <div className="bar-fill" style={{ height: '75%' }}></div>
                    </div>
                    <span className="bar-label">Jan</span>
                  </div>
                  <div className="bar-col group">
                    <div className="bar-track">
                      <div className="bar-fill" style={{ height: '40%' }}></div>
                    </div>
                    <span className="bar-label">Feb</span>
                  </div>
                  <div className="bar-col group">
                    <div className="bar-track">
                      <div className="bar-fill" style={{ height: '60%' }}></div>
                    </div>
                    <span className="bar-label">Mar</span>
                  </div>
                  <div className="bar-col group">
                    <div className="bar-track">
                      <div className="bar-fill" style={{ height: '80%' }}></div>
                    </div>
                    <span className="bar-label">Apr</span>
                  </div>
                  <div className="bar-col group">
                    <div className="bar-track">
                      <div className="bar-fill" style={{ height: '100%' }}></div>
                    </div>
                    <span className="bar-label">May</span>
                  </div>
                  <div className="bar-col group">
                    <div className="bar-track">
                      <div className="bar-fill" style={{ height: '90%', backgroundColor: 'var(--color-primary)' }}></div>
                    </div>
                    <span className="bar-label" style={{ fontWeight: 700, color: 'var(--color-primary)' }}>Jun</span>
                  </div>
                </div>
              </div>

              {/* Conversion Rate Donut */}
              <div className="widget-card conversion-col">
                <h3 className="widget-title" style={{ marginBottom: '24px' }}>Lead Conversion</h3>
                <div className="donut-wrapper">
                  <div className="donut-chart">
                    <svg className="donut-svg">
                      <circle className="donut-bg" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeWidth="12"></circle>
                      <circle className="donut-progress" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeWidth="12"></circle>
                    </svg>
                    <div className="donut-center">
                      <span className="donut-value">28%</span>
                      <span className="donut-label">Efficiency</span>
                    </div>
                  </div>
                  <div className="conversion-stats">
                    <p className="conversion-text">Total Leads processed this month: <span>142</span></p>
                    <div className="conversion-trend">
                      <span style={{ color: '#22c55e', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>trending_up</span> +3%
                      </span>
                      <span style={{ color: '#94a3b8', fontSize: '12px' }}>vs last month</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deals Closed Trend */}
              <div className="widget-card line-chart-col">
                <div className="widget-header">
                  <div>
                    <h3 className="widget-title">Deals Closed Trend</h3>
                    <p className="widget-subtitle">Visualization of monthly successful closings</p>
                  </div>
                  <div className="legend">
                    <div className="legend-item">
                      <span className="legend-dot" style={{ backgroundColor: 'var(--color-primary)' }}></span>
                      <span className="legend-label">Current Year</span>
                    </div>
                    <div className="legend-item">
                      <span className="legend-dot" style={{ backgroundColor: '#cbd5e1' }}></span>
                      <span className="legend-label">Target</span>
                    </div>
                  </div>
                </div>
                <div className="chart-area">
                  <div className="grid-lines"></div>
                  <svg className="svg-container" viewBox="0 0 1000 200" preserveAspectRatio="none">
                    <path d="M0,150 L100,140 L200,160 L300,120 L400,130 L500,90 L600,100 L700,60 L800,75 L900,40 L1000,30" fill="none" stroke="#135bec" strokeLinecap="round" strokeWidth="4"></path>
                    <circle cx="0" cy="150" fill="#135bec" r="5"></circle>
                    <circle cx="100" cy="140" fill="#135bec" r="5"></circle>
                    <circle cx="200" cy="160" fill="#135bec" r="5"></circle>
                    <circle cx="300" cy="120" fill="#135bec" r="5"></circle>
                    <circle cx="400" cy="130" fill="#135bec" r="5"></circle>
                    <circle cx="500" cy="90" fill="#135bec" r="5"></circle>
                    <circle cx="600" cy="100" fill="#135bec" r="5"></circle>
                    <circle cx="700" cy="60" fill="#135bec" r="5"></circle>
                    <circle cx="800" cy="75" fill="#135bec" r="5"></circle>
                    <circle cx="900" cy="40" fill="#135bec" r="5"></circle>
                    <circle cx="1000" cy="30" fill="#135bec" r="5"></circle>
                    <path d="M0,150 L100,140 L200,160 L300,120 L400,130 L500,90 L600,100 L700,60 L800,75 L900,40 L1000,30 L1000,200 L0,200 Z" fill="url(#gradient)" opacity="0.1"></path>
                    <defs>
                      <linearGradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#135bec', stopOpacity: 1 }}></stop>
                        <stop offset="100%" style={{ stopColor: '#135bec', stopOpacity: 0 }}></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="x-axis-labels">
                  <span className="x-label">Jan</span>
                  <span className="x-label">Feb</span>
                  <span className="x-label">Mar</span>
                  <span className="x-label">Apr</span>
                  <span className="x-label">May</span>
                  <span className="x-label">Jun</span>
                  <span className="x-label">Jul</span>
                  <span className="x-label">Aug</span>
                  <span className="x-label">Sep</span>
                  <span className="x-label">Oct</span>
                  <span className="x-label active">Nov</span>
                </div>
              </div>
            </div>

            {/* Recent Activities Table */}
            <div className="activity-section">
              <div className="activity-header">
                <h3 className="widget-title">Recent Activities</h3>
                <button className="view-all">View All</button>
              </div>
              <div className="table-container">
                <table className="activity-table">
                  <thead>
                    <tr>
                      <th>Activity</th>
                      <th>Lead/Property</th>
                      <th>Date & Time</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="td-activity">
                          <div className="activity-icon" style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)', color: '#2563eb' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>call</span>
                          </div>
                          <span className="activity-name">Call Scheduled</span>
                        </div>
                      </td>
                      <td>
                        <div className="td-lead">
                          <span className="lead-name">Rohan Gupta</span>
                          <span className="lead-sub">Skyline Apartment A-402</span>
                        </div>
                      </td>
                      <td className="td-date">Today, 02:30 PM</td>
                      <td>
                        <span className="status-badge" style={{ backgroundColor: 'rgba(217, 119, 6, 0.1)', color: '#d97706' }}>Upcoming</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="td-activity">
                          <div className="activity-icon" style={{ backgroundColor: 'rgba(22, 163, 74, 0.1)', color: '#16a34a' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>assignment_turned_in</span>
                          </div>
                          <span className="activity-name">Deal Closed</span>
                        </div>
                      </td>
                      <td>
                        <div className="td-lead">
                          <span className="lead-name">Ananya Sharma</span>
                          <span className="lead-sub">The Grand Villa #09</span>
                        </div>
                      </td>
                      <td className="td-date">Yesterday, 11:15 AM</td>
                      <td>
                        <span className="status-badge" style={{ backgroundColor: 'rgba(22, 163, 74, 0.1)', color: '#16a34a' }}>Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="td-activity">
                          <div className="activity-icon" style={{ backgroundColor: 'rgba(147, 51, 234, 0.1)', color: '#9333ea' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>calendar_month</span>
                          </div>
                          <span className="activity-name">Site Visit Conducted</span>
                        </div>
                      </td>
                      <td>
                        <div className="td-lead">
                          <span className="lead-name">Rajiv Mehta</span>
                          <span className="lead-sub">Corporate Park - Wing B</span>
                        </div>
                      </td>
                      <td className="td-date">Oct 24, 04:00 PM</td>
                      <td>
                        <span className="status-badge" style={{ backgroundColor: 'rgba(22, 163, 74, 0.1)', color: '#16a34a' }}>Successful</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AgentDashboard;