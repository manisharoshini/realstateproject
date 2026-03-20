import React, { useState } from "react";
import AgentSideAndTopPanel from "./AgentSideandTopPanel";

function Deals() {
    const [searchQuery, setSearchQuery] = useState("");

    // Sample deals data
    const deals = [
        {
            id: "#DL-9482",
            client: { name: "Rajesh Kumar", initials: "RK" },
            property: "Skyline Penthouse, Worli",
            value: "₹1,25,00,000",
            stage: "Negotiation",
            commission: "₹2,50,000",
            status: "Active"
        },
        {
            id: "#DL-8721",
            client: { name: "Priya Sharma", initials: "PS" },
            property: "Green Valley Villa, Alibaug",
            value: "₹85,00,000",
            stage: "Documentation",
            commission: "₹1,70,000",
            status: "Active"
        },
        {
            id: "#DL-7104",
            client: { name: "Amit Varma", initials: "AV" },
            property: "Business Center Hub, BKC",
            value: "₹2,10,00,000",
            stage: "Payment",
            commission: "₹4,20,000",
            status: "Active"
        },
        {
            id: "#DL-6429",
            client: { name: "Sonia Nair", initials: "SN" },
            property: "Coastal View Studio, Juhu",
            value: "₹45,00,000",
            stage: "Closed",
            commission: "₹90,000",
            status: "Closed"
        },
        {
            id: "#DL-5512",
            client: { name: "Mahesh Das", initials: "MD" },
            property: "Urban Loft, Powai",
            value: "₹62,00,000",
            stage: "Cancelled",
            commission: "₹0",
            status: "Cancelled"
        }
    ];

    const getStageColor = (stage) => {
        const colors = {
            "Negotiation": { bg: "rgba(251, 191, 36, 0.1)", text: "#d97706" },
            "Documentation": { bg: "rgba(59, 130, 246, 0.1)", text: "#2563eb" },
            "Payment": { bg: "rgba(99, 102, 241, 0.1)", text: "#6366f1" },
            "Closed": { bg: "rgba(16, 185, 129, 0.1)", text: "#059669" },
            "Cancelled": { bg: "rgba(148, 163, 184, 0.1)", text: "#64748b" }
        };
        return colors[stage] || colors["Negotiation"];
    };

    const getStatusColor = (status) => {
        const colors = {
            "Active": { bg: "rgba(19, 91, 236, 0.1)", text: "#135bec", dot: "#135bec" },
            "Closed": { bg: "rgba(16, 185, 129, 0.1)", text: "#059669", dot: "#10b981" },
            "Cancelled": { bg: "rgba(239, 68, 68, 0.1)", text: "#dc2626", dot: "#ef4444" }
        };
        return colors[status] || colors["Active"];
    };

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

        .deals-page {
          font-family: 'Inter', sans-serif;
          --color-primary: #135bec;
          --color-bg-light: #f6f6f8;
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
        }

        /* Header */
        .page-header {
          padding: 24px 32px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-end;
          gap: 16px;
        }

        .page-title {
          font-size: 30px;
          font-weight: 900;
          letter-spacing: -0.025em;
          color: #0f172a;
        }

        .page-subtitle {
          font-size: 16px;
          color: #64748b;
          margin-top: 4px;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .team-avatars {
          display: flex;
          margin-right: -8px;
        }

        .avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid white;
          background-color: #e2e8f0;
          background-size: cover;
          background-position: center;
        }

        .icon-btn {
          padding: 8px;
          background-color: white;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s;
        }

        .icon-btn:hover {
          background-color: #f8fafc;
        }

        /* Stats Grid */
        .stats-grid {
          padding: 0 32px 32px;
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 16px;
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
          background-color: white;
          padding: 24px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }

        .stat-label {
          font-size: 14px;
          font-weight: 500;
          color: #64748b;
          margin-bottom: 4px;
        }

        .stat-value {
          font-size: 24px;
          font-weight: 700;
          color: #0f172a;
          margin-right: 8px;
        }

        .stat-change {
          font-size: 12px;
          font-weight: 700;
        }

        /* Content Section */
        .content-section {
          padding: 0 32px;
          display: flex;
          flex-direction: column;
          gap: 32px;
          padding-bottom: 48px;
        }

        /* Pipeline Funnel */
        .funnel-card {
          background-color: white;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          padding: 24px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }

        .funnel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }

        .funnel-title {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
        }

        .funnel-legend {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .legend-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: rgba(19, 91, 236, 0.4);
        }

        .legend-text {
          font-size: 12px;
          color: #64748b;
        }

        .funnel-stages {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .funnel-stage {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .stage-header {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #64748b;
        }

        .stage-bar-container {
          height: 48px;
          width: 100%;
          background-color: #f1f5f9;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
        }

        .stage-bar {
          height: 100%;
          background-color: var(--color-primary);
          transition: all 0.5s;
        }

        .stage-bar-container:hover .stage-bar {
          filter: brightness(1.1);
        }

        /* Table */
        .table-card {
          background-color: white;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }

        .table-header {
          padding: 24px;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .table-title {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
        }

        .search-box {
          position: relative;
          width: 288px;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
          font-size: 20px;
        }

        .search-input {
          width: 100%;
          padding: 8px 16px 8px 40px;
          font-size: 14px;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          outline: none;
          transition: all 0.2s;
        }

        .search-input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(19, 91, 236, 0.1);
        }

        .deals-table {
          width: 100%;
          border-collapse: collapse;
        }

        .deals-table thead {
          background-color: #f8fafc;
        }

        .deals-table thead th {
          padding: 16px 24px;
          text-align: left;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #64748b;
        }

        .deals-table thead th.text-right {
          text-align: right;
        }

        .deals-table thead th.text-center {
          text-align: center;
        }

        .deals-table tbody tr {
          border-bottom: 1px solid #f1f5f9;
          transition: background-color 0.2s;
        }

        .deals-table tbody tr:hover {
          background-color: rgba(248, 250, 252, 0.5);
        }

        .deals-table tbody td {
          padding: 16px 24px;
        }

        .deal-id {
          font-size: 14px;
          font-weight: 500;
          color: #0f172a;
        }

        .client-cell {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .client-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: rgba(19, 91, 236, 0.1);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .client-name {
          font-size: 14px;
          font-weight: 600;
          color: #0f172a;
        }

        .property-name {
          font-size: 14px;
          color: #64748b;
        }

        .deal-value {
          font-size: 14px;
          font-weight: 700;
          color: #0f172a;
          text-align: right;
        }

        .stage-badge {
          display: inline-flex;
          align-items: center;
          padding: 4px 10px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 500;
        }

        .commission {
          font-size: 14px;
          font-weight: 500;
          color: #0f172a;
          text-align: right;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .menu-btn {
          padding: 4px;
          color: #94a3b8;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.2s;
        }

        .menu-btn:hover {
          color: var(--color-primary);
        }

        /* Pagination */
        .pagination {
          padding: 16px 24px;
          border-top: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .pagination-info {
          font-size: 14px;
          color: #64748b;
        }

        .pagination-controls {
          display: flex;
          gap: 8px;
        }

        .page-btn {
          padding: 4px 12px;
          font-size: 14px;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          background-color: white;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s;
        }

        .page-btn:hover:not(:disabled) {
          background-color: #f8fafc;
        }

        .page-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .page-btn.active {
          background-color: var(--color-primary);
          color: white;
          border-color: var(--color-primary);
        }
      `}</style>

            {/* SHARED SIDEBAR AND TOP PANEL */}
            <AgentSideAndTopPanel />

            {/* MAIN CONTENT */}
            <div className="deals-page">
                <div className="layout-wrapper">
                    <main className="main-col">
                        {/* Header */}
                        <header className="page-header">
                            <div>
                                <h1 className="page-title">Deal Management</h1>
                                <p className="page-subtitle">Track and manage your high-value real estate pipeline</p>
                            </div>
                            <div className="header-actions">
                                <div className="team-avatars">
                                    <div className="avatar" style={{ backgroundImage: "url('https://i.pravatar.cc/150?img=1')" }}></div>
                                    <div className="avatar" style={{ backgroundImage: "url('https://i.pravatar.cc/150?img=2')", marginLeft: '-8px' }}></div>
                                    <div className="avatar" style={{ backgroundImage: "url('https://i.pravatar.cc/150?img=3')", marginLeft: '-8px' }}></div>
                                </div>
                                <button className="icon-btn">
                                    <span className="material-symbols-outlined">filter_list</span>
                                </button>
                                <button className="icon-btn">
                                    <span className="material-symbols-outlined">download</span>
                                </button>
                            </div>
                        </header>

                        {/* Stats Grid */}
                        <section className="stats-grid">
                            <div className="stat-card">
                                <p className="stat-label">Total Pipeline Value</p>
                                <div>
                                    <span className="stat-value">₹4.52 Cr</span>
                                    <span className="stat-change" style={{ color: '#10b981' }}>+12.4%</span>
                                </div>
                            </div>

                            <div className="stat-card">
                                <p className="stat-label">Active Deals</p>
                                <div>
                                    <span className="stat-value">18</span>
                                    <span className="stat-change" style={{ color: '#10b981' }}>+2</span>
                                </div>
                            </div>

                            <div className="stat-card">
                                <p className="stat-label">Pending Commission</p>
                                <div>
                                    <span className="stat-value">₹18.5 L</span>
                                    <span className="stat-change" style={{ color: '#f59e0b' }}>In Review</span>
                                </div>
                            </div>

                            <div className="stat-card">
                                <p className="stat-label">Avg. Closing Time</p>
                                <div>
                                    <span className="stat-value">42 Days</span>
                                    <span className="stat-change" style={{ color: '#ef4444' }}>-4%</span>
                                </div>
                            </div>
                        </section>

                        {/* Content Section */}
                        <div className="content-section">
                            {/* Pipeline Funnel */}
                            <div className="funnel-card">
                                <div className="funnel-header">
                                    <h3 className="funnel-title">Deal Pipeline Funnel</h3>
                                    <div className="funnel-legend">
                                        <span className="legend-dot"></span>
                                        <span className="legend-text">Value Distribution</span>
                                    </div>
                                </div>

                                <div className="funnel-stages">
                                    <div className="funnel-stage">
                                        <div className="stage-header">
                                            <span>Negotiation</span>
                                            <span>₹1.80 Cr (8 Deals)</span>
                                        </div>
                                        <div className="stage-bar-container">
                                            <div className="stage-bar" style={{ width: '85%' }}></div>
                                        </div>
                                    </div>

                                    <div className="funnel-stage">
                                        <div className="stage-header">
                                            <span>Documentation</span>
                                            <span>₹1.25 Cr (5 Deals)</span>
                                        </div>
                                        <div className="stage-bar-container">
                                            <div className="stage-bar" style={{ width: '60%', opacity: 0.8 }}></div>
                                        </div>
                                    </div>

                                    <div className="funnel-stage">
                                        <div className="stage-header">
                                            <span>Payment</span>
                                            <span>₹0.95 Cr (4 Deals)</span>
                                        </div>
                                        <div className="stage-bar-container">
                                            <div className="stage-bar" style={{ width: '40%', opacity: 0.6 }}></div>
                                        </div>
                                    </div>

                                    <div className="funnel-stage">
                                        <div className="stage-header">
                                            <span>Closed (Month)</span>
                                            <span>₹0.52 Cr (2 Deals)</span>
                                        </div>
                                        <div className="stage-bar-container">
                                            <div className="stage-bar" style={{ width: '15%', opacity: 0.4 }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Deals Table */}
                            <div className="table-card">
                                <div className="table-header">
                                    <h3 className="table-title">Active Deal Inventory</h3>
                                    <div className="search-box">
                                        <span className="material-symbols-outlined search-icon">search</span>
                                        <input
                                            type="text"
                                            className="search-input"
                                            placeholder="Search deals, clients..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div style={{ overflowX: 'auto' }}>
                                    <table className="deals-table">
                                        <thead>
                                            <tr>
                                                <th>Deal ID</th>
                                                <th>Client Name</th>
                                                <th>Property</th>
                                                <th className="text-right">Deal Value</th>
                                                <th className="text-center">Stage</th>
                                                <th className="text-right">Commission</th>
                                                <th className="text-center">Status</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {deals.map((deal) => {
                                                const stageColor = getStageColor(deal.stage);
                                                const statusColor = getStatusColor(deal.status);

                                                return (
                                                    <tr key={deal.id}>
                                                        <td className="deal-id">{deal.id}</td>
                                                        <td>
                                                            <div className="client-cell">
                                                                <div className="client-avatar">{deal.client.initials}</div>
                                                                <span className="client-name">{deal.client.name}</span>
                                                            </div>
                                                        </td>
                                                        <td className="property-name">{deal.property}</td>
                                                        <td className="deal-value">{deal.value}</td>
                                                        <td style={{ textAlign: 'center' }}>
                                                            <span className="stage-badge" style={{ backgroundColor: stageColor.bg, color: stageColor.text }}>
                                                                {deal.stage}
                                                            </span>
                                                        </td>
                                                        <td className="commission">{deal.commission}</td>
                                                        <td style={{ textAlign: 'center' }}>
                                                            <span className="status-badge" style={{ backgroundColor: statusColor.bg, color: statusColor.text }}>
                                                                <span className="status-dot" style={{ backgroundColor: statusColor.dot }}></span>
                                                                {deal.status}
                                                            </span>
                                                        </td>
                                                        <td style={{ textAlign: 'right' }}>
                                                            <button className="menu-btn">
                                                                <span className="material-symbols-outlined">more_vert</span>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Pagination */}
                                <div className="pagination">
                                    <p className="pagination-info">Showing 5 of 18 deals</p>
                                    <div className="pagination-controls">
                                        <button className="page-btn" disabled>Previous</button>
                                        <button className="page-btn active">1</button>
                                        <button className="page-btn">2</button>
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

export default Deals;