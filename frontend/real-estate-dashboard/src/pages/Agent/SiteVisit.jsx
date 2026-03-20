import React, { useState } from "react";
import AgentSideAndTopPanel from "./AgentSideandTopPanel";
import ScheduleVisitModal from "./ScheduleVisitModal";

function SiteVisits() {
    const [activeTab, setActiveTab] = useState("all"); // all, upcoming, past, cancelled
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    const handleSchedule = (visitData) => {
        console.log('Visit scheduled:', visitData);
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

        .site-visits-page {
          font-family: 'Inter', sans-serif;
          --color-primary: #135bec;
          --color-bg-light: #f6f6f8;
          --text-slate-900: #0f172a;
          --text-slate-700: #334155;
          --text-slate-600: #475569;
          --text-slate-500: #64748b;
          --text-slate-400: #94a3b8;
          --border-slate-200: #e2e8f0;
          --border-slate-100: #f1f5f9;
          --bg-white: #ffffff;
          --bg-slate-50: #f8fafc;
        }

        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }

        /* Layout */
        .layout-wrapper {
          min-height: 100vh;
          background-color: var(--color-bg-light);
        }

        .main-col {
          margin-left: 256px;
          margin-top: 64px;
          min-height: calc(100vh - 64px);
          padding: 32px;
        }

        /* Header */
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          gap: 16px;
          flex-wrap: wrap;
        }

        .page-title {
          font-size: 24px;
          font-weight: 900;
          letter-spacing: -0.025em;
          color: var(--text-slate-900);
        }

        .page-subtitle {
          font-size: 14px;
          color: var(--text-slate-500);
          margin-top: 4px;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .search-box {
          position: relative;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-slate-400);
          font-size: 20px;
        }

        .search-input {
          padding: 8px 16px 8px 40px;
          background-color: var(--bg-white);
          border: 1px solid var(--border-slate-200);
          border-radius: 8px;
          font-size: 14px;
          width: 256px;
          outline: none;
          transition: all 0.2s;
        }

        .search-input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(19, 91, 236, 0.1);
        }

        .btn-primary {
          background-color: var(--color-primary);
          color: white;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
          border: none;
          cursor: pointer;
          box-shadow: 0 10px 15px -3px rgba(19, 91, 236, 0.2);
          transition: all 0.2s;
        }

        .btn-primary:hover {
          background-color: rgba(19, 91, 236, 0.9);
        }

        .btn-primary .material-symbols-outlined {
          font-size: 18px;
        }

        /* Metrics Cards */
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 24px;
          margin-bottom: 32px;
        }

        @media (min-width: 768px) {
          .metrics-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .metric-card {
          background-color: var(--bg-white);
          padding: 24px;
          border-radius: 12px;
          border: 1px solid var(--border-slate-200);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          transition: box-shadow 0.2s;
        }

        .metric-card:hover {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .metric-label {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-slate-500);
          margin-bottom: 4px;
        }

        .metric-value {
          font-size: 30px;
          font-weight: 900;
          margin: 8px 0;
        }

        .metric-trend {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          font-weight: 700;
          margin-top: 8px;
        }

        .metric-trend .material-symbols-outlined {
          font-size: 14px;
        }

        /* Table Container */
        .table-container {
          background-color: var(--bg-white);
          border-radius: 12px;
          border: 1px solid var(--border-slate-200);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }

        /* Tabs */
        .tabs-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-slate-200);
          padding: 0 24px;
        }

        .tabs {
          display: flex;
          gap: 32px;
        }

        .tab-btn {
          padding: 16px 0;
          border-bottom: 2px solid transparent;
          font-size: 14px;
          font-weight: 700;
          color: var(--text-slate-500);
          background: none;
          border-left: none;
          border-right: none;
          border-top: none;
          cursor: pointer;
          transition: all 0.2s;
        }

        .tab-btn:hover {
          color: var(--text-slate-700);
        }

        .tab-btn.active {
          color: var(--color-primary);
          border-bottom-color: var(--color-primary);
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          background: none;
          border: 1px solid var(--border-slate-200);
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-slate-500);
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .filter-btn:hover {
          background-color: var(--bg-slate-50);
        }

        .filter-btn .material-symbols-outlined {
          font-size: 18px;
        }

        /* Table */
        .visits-table {
          width: 100%;
          border-collapse: collapse;
        }

        .visits-table thead {
          background-color: var(--bg-slate-50);
        }

        .visits-table thead th {
          padding: 16px 24px;
          text-align: left;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-slate-500);
        }

        .visits-table thead th:last-child {
          text-align: right;
        }

        .visits-table tbody tr {
          border-bottom: 1px solid var(--border-slate-100);
          transition: background-color 0.2s;
        }

        .visits-table tbody tr:hover {
          background-color: rgba(248, 250, 252, 0.5);
        }

        .visits-table tbody td {
          padding: 16px 24px;
        }

        .visits-table tbody td:last-child {
          text-align: right;
        }

        /* Client Cell */
        .client-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .client-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .client-details {
          display: flex;
          flex-direction: column;
        }

        .client-name {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-slate-900);
        }

        .client-phone {
          font-size: 12px;
          color: var(--text-slate-500);
        }

        /* Property Cell */
        .property-info {
          display: flex;
          flex-direction: column;
        }

        .property-name {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-slate-900);
        }

        .property-ref {
          font-size: 12px;
          color: var(--text-slate-500);
        }

        /* Date Cell */
        .date-info {
          display: flex;
          flex-direction: column;
        }

        .date-text {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-slate-900);
        }

        .time-text {
          font-size: 12px;
          color: var(--text-slate-500);
        }

        /* Status Badge */
        .status-badge {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 9999px;
          font-size: 11px;
          font-weight: 700;
        }

        /* Notes */
        .notes-text {
          font-size: 12px;
          color: var(--text-slate-500);
          max-width: 150px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        /* Action Buttons */
        .action-buttons {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 8px;
        }

        .action-icon-btn {
          padding: 8px;
          background: none;
          border: none;
          color: var(--text-slate-400);
          cursor: pointer;
          border-radius: 50%;
          transition: all 0.2s;
        }

        .action-icon-btn:hover {
          color: var(--color-primary);
        }

        .action-icon-btn .material-symbols-outlined {
          font-size: 20px;
        }

        .update-btn {
          padding: 6px 12px;
          background-color: rgba(19, 91, 236, 0.05);
          color: var(--color-primary);
          border: none;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .update-btn:hover {
          background-color: rgba(19, 91, 236, 0.1);
        }

        .action-buttons.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .action-buttons.disabled button {
          pointer-events: none;
        }

        /* Pagination */
        .pagination-bar {
          padding: 16px 24px;
          background-color: var(--bg-slate-50);
          border-top: 1px solid var(--border-slate-200);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .pagination-info {
          font-size: 12px;
          color: var(--text-slate-500);
        }

        .pagination-controls {
          display: flex;
          gap: 8px;
        }

        .pagination-btn {
          padding: 6px;
          border: 1px solid var(--border-slate-200);
          background-color: var(--bg-white);
          border-radius: 4px;
          color: var(--text-slate-400);
          cursor: pointer;
          transition: all 0.2s;
        }

        .pagination-btn:hover:not(:disabled) {
          background-color: var(--bg-white);
        }

        .pagination-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .pagination-btn .material-symbols-outlined {
          font-size: 14px;
        }

        /* Success Notification */
        .success-notification {
          position: fixed;
          top: 84px;
          right: 32px;
          background-color: #10b981;
          color: white;
          padding: 16px 24px;
          border-radius: 12px;
          box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.3);
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 2000;
          animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .notification-icon {
          font-size: 24px;
        }

        .notification-text {
          font-size: 14px;
          font-weight: 600;
        }
      `}</style>

            {/* SHARED SIDEBAR AND TOP PANEL */}
            <AgentSideAndTopPanel />

            {/* MAIN CONTENT */}
            <div className="site-visits-page">
                <div className="layout-wrapper">
                    <main className="main-col">
                        {/* Header */}
                        <header className="page-header">
                            <div>
                                <h2 className="page-title">Site Visit Management</h2>
                                <p className="page-subtitle">Organize and monitor property viewings for your clients</p>
                            </div>
                            <div className="header-actions">
                                <div className="search-box">
                                    <span className="material-symbols-outlined search-icon">search</span>
                                    <input
                                        type="text"
                                        className="search-input"
                                        placeholder="Search clients or properties..."
                                    />
                                </div>
                                <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
                                    <span className="material-symbols-outlined">add_circle</span>
                                    Schedule Visit
                                </button>
                            </div>
                        </header>

                        {/* Metrics Cards */}
                        <div className="metrics-grid">
                            <div className="metric-card">
                                <p className="metric-label">Total Visits</p>
                                <h3 className="metric-value">128</h3>
                                <div className="metric-trend" style={{ color: '#10b981' }}>
                                    <span className="material-symbols-outlined">trending_up</span>
                                    <span>12% from last month</span>
                                </div>
                            </div>

                            <div className="metric-card">
                                <p className="metric-label">Upcoming</p>
                                <h3 className="metric-value" style={{ color: '#135bec' }}>12</h3>
                                <div className="metric-trend" style={{ color: '#94a3b8' }}>
                                    <span className="material-symbols-outlined">schedule</span>
                                    <span>Next 7 days</span>
                                </div>
                            </div>

                            <div className="metric-card">
                                <p className="metric-label">Completed</p>
                                <h3 className="metric-value" style={{ color: '#10b981' }}>98</h3>
                                <div className="metric-trend" style={{ color: '#10b981' }}>
                                    <span className="material-symbols-outlined">check_circle</span>
                                    <span>76% success rate</span>
                                </div>
                            </div>

                            <div className="metric-card">
                                <p className="metric-label">Cancelled</p>
                                <h3 className="metric-value" style={{ color: '#ef4444' }}>18</h3>
                                <div className="metric-trend" style={{ color: '#ef4444' }}>
                                    <span className="material-symbols-outlined">cancel</span>
                                    <span>-4% this week</span>
                                </div>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="table-container">
                            {/* Tabs */}
                            <div className="tabs-bar">
                                <div className="tabs">
                                    <button
                                        className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('all')}
                                    >
                                        All Visits
                                    </button>
                                    <button
                                        className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('upcoming')}
                                    >
                                        Upcoming
                                    </button>
                                    <button
                                        className={`tab-btn ${activeTab === 'past' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('past')}
                                    >
                                        Past
                                    </button>
                                    <button
                                        className={`tab-btn ${activeTab === 'cancelled' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('cancelled')}
                                    >
                                        Cancelled
                                    </button>
                                </div>
                                <button className="filter-btn">
                                    <span className="material-symbols-outlined">filter_list</span>
                                    Filter
                                </button>
                            </div>

                            {/* Table */}
                            <table className="visits-table">
                                <thead>
                                    <tr>
                                        <th>Client Name</th>
                                        <th>Property</th>
                                        <th>Date & Time</th>
                                        <th>Status</th>
                                        <th>Notes</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Row 1 */}
                                    <tr>
                                        <td>
                                            <div className="client-info">
                                                <div className="client-avatar" style={{ backgroundColor: 'rgba(19, 91, 236, 0.1)', color: '#135bec' }}>
                                                    AK
                                                </div>
                                                <div className="client-details">
                                                    <span className="client-name">Ananya Kapoor</span>
                                                    <span className="client-phone">+91 98765 43210</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="property-info">
                                                <span className="property-name">Skyline Penthouse</span>
                                                <span className="property-ref">REF: #PH-204 | ₹4.5 Cr</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="date-info">
                                                <span className="date-text">24 Oct, 2023</span>
                                                <span className="time-text">11:30 AM</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="status-badge" style={{ backgroundColor: 'rgba(251, 191, 36, 0.1)', color: '#d97706' }}>
                                                UPCOMING
                                            </span>
                                        </td>
                                        <td>
                                            <p className="notes-text">Interested in sea view and modular kitchen.</p>
                                        </td>
                                        <td>
                                            <div className="action-buttons">
                                                <button className="action-icon-btn" title="Reschedule">
                                                    <span className="material-symbols-outlined">event_repeat</span>
                                                </button>
                                                <button className="update-btn">Update Outcome</button>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Row 2 */}
                                    <tr>
                                        <td>
                                            <div className="client-info">
                                                <div className="client-avatar" style={{ backgroundColor: '#f1f5f9', color: '#64748b' }}>
                                                    VM
                                                </div>
                                                <div className="client-details">
                                                    <span className="client-name">Vikram Malhotra</span>
                                                    <span className="client-phone">+91 91234 56789</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="property-info">
                                                <span className="property-name">Green Valley Villa</span>
                                                <span className="property-ref">REF: #GV-882 | ₹8.2 Cr</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="date-info">
                                                <span className="date-text">22 Oct, 2023</span>
                                                <span className="time-text">04:00 PM</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="status-badge" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669' }}>
                                                COMPLETED
                                            </span>
                                        </td>
                                        <td>
                                            <p className="notes-text">Client liked the garden space. Booking expected.</p>
                                        </td>
                                        <td>
                                            <div className="action-buttons disabled">
                                                <button className="action-icon-btn">
                                                    <span className="material-symbols-outlined">event_repeat</span>
                                                </button>
                                                <button className="update-btn" style={{ border: '1px solid #e2e8f0', backgroundColor: 'transparent', color: '#94a3b8' }}>
                                                    Update Outcome
                                                </button>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Row 3 */}
                                    <tr>
                                        <td>
                                            <div className="client-info">
                                                <div className="client-avatar" style={{ backgroundColor: '#f1f5f9', color: '#64748b' }}>
                                                    RS
                                                </div>
                                                <div className="client-details">
                                                    <span className="client-name">Rohan Singh</span>
                                                    <span className="client-phone">+91 90000 11111</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="property-info">
                                                <span className="property-name">Urban Heights Flat</span>
                                                <span className="property-ref">REF: #UH-501 | ₹1.2 Cr</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="date-info">
                                                <span className="date-text">20 Oct, 2023</span>
                                                <span className="time-text">10:00 AM</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="status-badge" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#dc2626' }}>
                                                CANCELLED
                                            </span>
                                        </td>
                                        <td>
                                            <p className="notes-text">Emergency at work, requested later date.</p>
                                        </td>
                                        <td>
                                            <div className="action-buttons">
                                                <button className="action-icon-btn" style={{ color: '#135bec' }} title="Reschedule">
                                                    <span className="material-symbols-outlined">event_repeat</span>
                                                </button>
                                                <button className="update-btn" style={{ backgroundColor: 'transparent', color: '#94a3b8', cursor: 'not-allowed' }}>
                                                    Details
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* Pagination */}
                            <div className="pagination-bar">
                                <p className="pagination-info">Showing 1-10 of 128 visits</p>
                                <div className="pagination-controls">
                                    <button className="pagination-btn" disabled>
                                        <span className="material-symbols-outlined">chevron_left</span>
                                    </button>
                                    <button className="pagination-btn">
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>

                    {/* Schedule Visit Modal */}
                    <ScheduleVisitModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onSchedule={handleSchedule}
                    />

                    {/* Success Notification */}
                    {showNotification && (
                        <div className="success-notification">
                            <span className="material-symbols-outlined notification-icon">check_circle</span>
                            <span className="notification-text">Visit Scheduled Successfully!</span>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default SiteVisits;