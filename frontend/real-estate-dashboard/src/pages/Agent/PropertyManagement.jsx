import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AgentSideAndTopPanel from "./AgentSideandTopPanel";

function PropertyManagement() {
    const [viewMode, setViewMode] = useState("table"); // table or grid
    const navigate = useNavigate();

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

        .property-management {
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
          display: flex;
          flex-direction: column;
        }

        .page-content {
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        /* Summary Cards */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 24px;
        }

        @media (min-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .stat-card {
          background-color: var(--bg-white);
          padding: 24px;
          border-radius: 12px;
          border: 1px solid var(--border-slate-200);
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          transition: box-shadow 0.2s;
        }

        .stat-card:hover {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .stat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .stat-icon {
          padding: 8px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-trend {
          font-size: 12px;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 4px;
        }

        .stat-label {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-slate-500);
        }

        .stat-value {
          font-size: 24px;
          font-weight: 700;
          margin-top: 4px;
        }

        /* Filter Bar */
        .filter-bar {
          background-color: var(--bg-white);
          border-radius: 12px;
          border: 1px solid var(--border-slate-200);
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }

        .filter-header {
          padding: 24px;
          border-bottom: 1px solid var(--border-slate-200);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .filter-controls {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
        }

        .filter-select {
          font-size: 14px;
          padding: 8px 12px;
          border: 1px solid var(--border-slate-200);
          background-color: var(--bg-white);
          border-radius: 8px;
          color: var(--text-slate-700);
          outline: none;
          cursor: pointer;
          transition: all 0.2s;
        }

        .filter-select:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(19, 91, 236, 0.1);
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          padding: 8px 12px;
          color: var(--text-slate-600);
          background: none;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .filter-btn:hover {
          background-color: var(--bg-slate-100);
        }

        .filter-btn .material-symbols-outlined {
          font-size: 14px;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .view-toggle {
          display: flex;
          background-color: var(--bg-slate-100);
          padding: 4px;
          border-radius: 8px;
        }

        .view-btn {
          padding: 6px;
          background: none;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          color: var(--text-slate-400);
          transition: all 0.2s;
        }

        .view-btn.active {
          background-color: var(--bg-white);
          color: var(--color-primary);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .view-btn:hover:not(.active) {
          color: var(--text-slate-600);
        }

        .btn-primary {
          background-color: var(--color-primary);
          color: white;
          font-size: 14px;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-primary:hover {
          background-color: rgba(19, 91, 236, 0.9);
        }

        .btn-primary .material-symbols-outlined {
          font-size: 20px;
        }

        /* Table */
        .table-container {
          overflow-x: auto;
        }

        .property-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .property-table thead {
          background-color: var(--bg-slate-50);
        }

        .property-table thead th {
          padding: 16px 24px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-slate-500);
        }

        .property-table thead th:last-child {
          text-align: right;
        }

        .property-table tbody {
          border-top: 1px solid var(--bg-slate-100);
        }

        .property-table tbody tr {
          border-bottom: 1px solid var(--bg-slate-100);
          transition: background-color 0.2s;
        }

        .property-table tbody tr:hover {
          background-color: rgba(248, 250, 252, 0.5);
        }

        .property-table tbody td {
          padding: 16px 24px;
        }

        .property-table tbody td:last-child {
          text-align: right;
        }

        /* Property Details Cell */
        .property-details {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .property-image {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          background-color: var(--bg-slate-100);
          overflow: hidden;
          flex-shrink: 0;
        }

        .property-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .property-info {
          display: flex;
          flex-direction: column;
        }

        .property-name {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-slate-900);
        }

        .property-id {
          font-size: 12px;
          color: var(--text-slate-500);
          font-weight: 500;
        }

        /* Location Cell */
        .location-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .location-name {
          font-size: 14px;
          font-weight: 500;
        }

        .property-type-badge {
          display: inline-flex;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          padding: 2px 8px;
          border-radius: 4px;
          width: fit-content;
        }

        /* Price Cell */
        .price-info {
          display: flex;
          flex-direction: column;
        }

        .price-main {
          font-size: 14px;
          font-weight: 700;
        }

        .price-sub {
          font-size: 10px;
          color: var(--text-slate-400);
          text-transform: uppercase;
        }

        /* Builder Cell */
        .builder-name {
          font-size: 14px;
          font-weight: 500;
        }

        /* Status Cell */
        .status-badges {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 700;
        }

        /* Action Buttons */
        .action-buttons {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 8px;
        }

        .action-btn {
          padding: 8px;
          border: none;
          background: none;
          color: var(--text-slate-400);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .action-btn:hover {
          background-color: var(--bg-slate-100);
          color: var(--color-primary);
        }

        .action-btn .material-symbols-outlined {
          font-size: 20px;
        }

        /* Pagination */
        .pagination-bar {
          padding: 24px;
          background-color: var(--bg-slate-50);
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-slate-200);
        }

        .pagination-info {
          font-size: 12px;
          color: var(--text-slate-500);
          font-weight: 500;
        }

        .pagination-info span {
          color: var(--text-slate-900);
        }

        .pagination-controls {
          display: flex;
          gap: 8px;
        }

        .page-btn {
          padding: 6px 12px;
          border: 1px solid var(--border-slate-200);
          background-color: var(--bg-white);
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .page-btn:hover:not(:disabled):not(.active) {
          background-color: var(--bg-slate-50);
        }

        .page-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .page-btn.active {
          border-color: var(--color-primary);
          background-color: var(--color-primary);
          color: white;
        }
      `}</style>

            {/* SHARED SIDEBAR AND TOP PANEL */}
            <AgentSideAndTopPanel />

            {/* MAIN CONTENT */}
            <div className="property-management">
                <div className="layout-wrapper">
                    <main className="main-col">
                        <div className="page-content">
                            {/* Summary Cards */}
                            <div className="stats-grid">
                                <div className="stat-card">
                                    <div className="stat-header">
                                        <div className="stat-icon" style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)', color: '#2563eb' }}>
                                            <span className="material-symbols-outlined">home_work</span>
                                        </div>
                                        <span className="stat-trend" style={{ color: '#22c55e', backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>+12.5%</span>
                                    </div>
                                    <p className="stat-label">Total Properties</p>
                                    <h3 className="stat-value">1,284</h3>
                                </div>

                                <div className="stat-card">
                                    <div className="stat-header">
                                        <div className="stat-icon" style={{ backgroundColor: 'rgba(251, 191, 36, 0.1)', color: '#f59e0b' }}>
                                            <span className="material-symbols-outlined">pending_actions</span>
                                        </div>
                                        <span className="stat-trend" style={{ color: '#f59e0b', backgroundColor: 'rgba(251, 191, 36, 0.1)' }}>Action Req</span>
                                    </div>
                                    <p className="stat-label">Pending Approval</p>
                                    <h3 className="stat-value">42</h3>
                                </div>

                                <div className="stat-card">
                                    <div className="stat-header">
                                        <div className="stat-icon" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', color: '#16a34a' }}>
                                            <span className="material-symbols-outlined">verified</span>
                                        </div>
                                        <span className="stat-trend" style={{ color: '#22c55e', backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>Active</span>
                                    </div>
                                    <p className="stat-label">Approved</p>
                                    <h3 className="stat-value">1,120</h3>
                                </div>

                                <div className="stat-card">
                                    <div className="stat-header">
                                        <div className="stat-icon" style={{ backgroundColor: 'rgba(19, 91, 236, 0.1)', color: '#135bec' }}>
                                            <span className="material-symbols-outlined">sell</span>
                                        </div>
                                        <span className="stat-trend" style={{ color: '#22c55e', backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>+8.2%</span>
                                    </div>
                                    <p className="stat-label">Sold Properties</p>
                                    <h3 className="stat-value">122</h3>
                                </div>
                            </div>

                            {/* Filters and Table */}
                            <div className="filter-bar">
                                <div className="filter-header">
                                    <div className="filter-controls">
                                        <select className="filter-select">
                                            <option>Property Type</option>
                                            <option>Apartment</option>
                                            <option>Villa</option>
                                            <option>Plot</option>
                                            <option>Commercial</option>
                                        </select>

                                        <select className="filter-select">
                                            <option>Price Range</option>
                                            <option>₹20L - ₹50L</option>
                                            <option>₹50L - ₹1Cr</option>
                                            <option>₹1Cr+</option>
                                        </select>

                                        <select className="filter-select">
                                            <option>Status</option>
                                            <option>Pending</option>
                                            <option>Approved</option>
                                            <option>Rejected</option>
                                        </select>

                                        <button className="filter-btn">
                                            <span className="material-symbols-outlined">filter_list</span>
                                            More Filters
                                        </button>
                                    </div>

                                    <div className="header-actions">
                                        <div className="view-toggle">
                                            <button
                                                className={`view-btn ${viewMode === 'table' ? 'active' : ''}`}
                                                onClick={() => setViewMode('table')}
                                            >
                                                <span className="material-symbols-outlined">table_rows</span>
                                            </button>
                                            <button
                                                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                                                onClick={() => setViewMode('grid')}
                                            >
                                                <span className="material-symbols-outlined">grid_view</span>
                                            </button>
                                        </div>

                                        <button className="btn-primary" onClick={() => navigate('/Agent/AddProperty')}>
                                            <span className="material-symbols-outlined">add</span>
                                            Add Property
                                        </button>
                                    </div>
                                </div>

                                {/* Property Table */}
                                <div className="table-container">
                                    <table className="property-table">
                                        <thead>
                                            <tr>
                                                <th>Property Details</th>
                                                <th>Location &amp; Type</th>
                                                <th>Price (₹)</th>
                                                <th>Builder</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* Row 1 */}
                                            <tr>
                                                <td>
                                                    <div className="property-details">
                                                        <div className="property-image">
                                                            <img
                                                                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=100&h=100&fit=crop"
                                                                alt="Apartment"
                                                            />
                                                        </div>
                                                        <div className="property-info">
                                                            <p className="property-name">Skyline Premium Apts</p>
                                                            <p className="property-id">#PROP-8821 • 3 BHK</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="location-info">
                                                        <p className="location-name">Whitefield, Bangalore</p>
                                                        <span className="property-type-badge" style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)', color: '#2563eb' }}>
                                                            Apartment
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="price-info">
                                                        <p className="price-main">1.25 Cr</p>
                                                        <p className="price-sub">₹8,450 / sqft</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="builder-name">Prestige Group</p>
                                                </td>
                                                <td>
                                                    <div className="status-badges">
                                                        <span className="status-badge" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', color: '#16a34a' }}>
                                                            Available
                                                        </span>
                                                        <span className="status-badge" style={{ backgroundColor: 'rgba(19, 91, 236, 0.1)', color: '#135bec' }}>
                                                            Approved
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="action-buttons">
                                                        <button className="action-btn" title="View">
                                                            <span className="material-symbols-outlined">visibility</span>
                                                        </button>
                                                        <button className="action-btn" title="Edit">
                                                            <span className="material-symbols-outlined">edit</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                            {/* Row 2 */}
                                            <tr>
                                                <td>
                                                    <div className="property-details">
                                                        <div className="property-image">
                                                            <img
                                                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=100&h=100&fit=crop"
                                                                alt="Villa"
                                                            />
                                                        </div>
                                                        <div className="property-info">
                                                            <p className="property-name">Emerald Valley Villas</p>
                                                            <p className="property-id">#PROP-7612 • 4 BHK</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="location-info">
                                                        <p className="location-name">Gurugram, Sector 45</p>
                                                        <span className="property-type-badge" style={{ backgroundColor: 'rgba(168, 85, 247, 0.1)', color: '#9333ea' }}>
                                                            Villa
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="price-info">
                                                        <p className="price-main">4.80 Cr</p>
                                                        <p className="price-sub">₹12,200 / sqft</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="builder-name">DLF Builders</p>
                                                </td>
                                                <td>
                                                    <div className="status-badges">
                                                        <span className="status-badge" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', color: '#16a34a' }}>
                                                            Available
                                                        </span>
                                                        <span className="status-badge" style={{ backgroundColor: 'rgba(251, 191, 36, 0.1)', color: '#f59e0b' }}>
                                                            Pending
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="action-buttons">
                                                        <button className="action-btn" title="View">
                                                            <span className="material-symbols-outlined">visibility</span>
                                                        </button>
                                                        <button className="action-btn" title="Edit">
                                                            <span className="material-symbols-outlined">edit</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                            {/* Row 3 */}
                                            <tr>
                                                <td>
                                                    <div className="property-details">
                                                        <div className="property-image">
                                                            <img
                                                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop"
                                                                alt="Office"
                                                            />
                                                        </div>
                                                        <div className="property-info">
                                                            <p className="property-name">Global Tech Plaza</p>
                                                            <p className="property-id">#PROP-3304 • Office Space</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="location-info">
                                                        <p className="location-name">HITEC City, Hyderabad</p>
                                                        <span className="property-type-badge" style={{ backgroundColor: 'rgba(251, 191, 36, 0.1)', color: '#f59e0b' }}>
                                                            Commercial
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="price-info">
                                                        <p className="price-main">8.50 Cr</p>
                                                        <p className="price-sub">₹15,000 / sqft</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="builder-name">L&T Constructions</p>
                                                </td>
                                                <td>
                                                    <div className="status-badges">
                                                        <span className="status-badge" style={{ backgroundColor: 'rgba(100, 116, 139, 0.1)', color: '#64748b' }}>
                                                            Sold
                                                        </span>
                                                        <span className="status-badge" style={{ backgroundColor: 'rgba(19, 91, 236, 0.1)', color: '#135bec' }}>
                                                            Approved
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="action-buttons">
                                                        <button className="action-btn" title="View">
                                                            <span className="material-symbols-outlined">visibility</span>
                                                        </button>
                                                        <button className="action-btn" title="Edit">
                                                            <span className="material-symbols-outlined">edit</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                            {/* Row 4 */}
                                            <tr>
                                                <td>
                                                    <div className="property-details">
                                                        <div className="property-image">
                                                            <img
                                                                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=100&h=100&fit=crop"
                                                                alt="Plot"
                                                            />
                                                        </div>
                                                        <div className="property-info">
                                                            <p className="property-name">Greenway Acres</p>
                                                            <p className="property-id">#PROP-1129 • Residential Plot</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="location-info">
                                                        <p className="location-name">Navi Mumbai, Panvel</p>
                                                        <span className="property-type-badge" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', color: '#16a34a' }}>
                                                            Plot
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="price-info">
                                                        <p className="price-main">45.0 L</p>
                                                        <p className="price-sub">₹2,800 / sqft</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="builder-name">Hiranandani Communities</p>
                                                </td>
                                                <td>
                                                    <div className="status-badges">
                                                        <span className="status-badge" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', color: '#16a34a' }}>
                                                            Available
                                                        </span>
                                                        <span className="status-badge" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#dc2626' }}>
                                                            Rejected
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="action-buttons">
                                                        <button className="action-btn" title="View">
                                                            <span className="material-symbols-outlined">visibility</span>
                                                        </button>
                                                        <button className="action-btn" title="Edit">
                                                            <span className="material-symbols-outlined">edit</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Pagination */}
                                <div className="pagination-bar">
                                    <p className="pagination-info">
                                        Showing <span>1 - 10</span> of <span>1,284</span> properties
                                    </p>
                                    <div className="pagination-controls">
                                        <button className="page-btn" disabled>Previous</button>
                                        <button className="page-btn active">1</button>
                                        <button className="page-btn">2</button>
                                        <button className="page-btn">3</button>
                                        <button className="page-btn">Next</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default PropertyManagement;