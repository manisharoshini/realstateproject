import React, { useState, useEffect } from "react";

function ScheduleVisitModal({ isOpen, onClose, onSchedule }) {
  // Get current date
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("11:30 AM");
  const [note, setNote] = useState("");

  // Client & Property dropdown states
  const [selectedClient, setSelectedClient] = useState({
    id: 1,
    name: "Rajesh Kumar",
    email: "rajesh.k@example.com",
    phone: "+91 98765 43210"
  });
  const [selectedProperty, setSelectedProperty] = useState({
    id: 1,
    name: "Skyline Penthouse",
    unit: "Unit 402, Block C",
    price: "₹4.5 Cr"
  });
  const [showClientDropdown, setShowClientDropdown] = useState(false);
  const [showPropertyDropdown, setShowPropertyDropdown] = useState(false);

  // Sample clients data (replace with actual API data)
  const clients = [
    { id: 1, name: "Rajesh Kumar", email: "rajesh.k@example.com", phone: "+91 98765 43210" },
    { id: 2, name: "Ananya Sharma", email: "ananya.s@example.com", phone: "+91 91234 56789" },
    { id: 3, name: "Vikram Malhotra", email: "vikram.m@example.com", phone: "+91 88776 55443" },
    { id: 4, name: "Priya Mehta", email: "priya.m@example.com", phone: "+91 99000 11223" },
    { id: 5, name: "Rohan Singh", email: "rohan.s@example.com", phone: "+91 90000 11111" }
  ];

  // Sample properties data (replace with actual API data)
  const properties = [
    { id: 1, name: "Skyline Penthouse", unit: "Unit 402, Block C", price: "₹4.5 Cr", type: "Apartment" },
    { id: 2, name: "Green Valley Villa", unit: "Villa #12, Phase 2", price: "₹8.2 Cr", type: "Villa" },
    { id: 3, name: "Urban Heights Flat", unit: "Floor 15, Tower A", price: "₹1.2 Cr", type: "Apartment" },
    { id: 4, name: "Corporate Heights", unit: "Office Space 501", price: "₹75 L", type: "Commercial" },
    { id: 5, name: "Palm Residency", unit: "Tower A, 3rd Floor", price: "₹95 L", type: "Apartment" }
  ];

  // Get days in month
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get first day of month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push({ day: null, disabled: true });
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const isToday = date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();

      days.push({
        day: day,
        disabled: isPast,
        isToday: isToday,
        fullDate: date
      });
    }

    return days;
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateClick = (dayObj) => {
    if (!dayObj.disabled && dayObj.day) {
      setSelectedDate(dayObj.fullDate);
    }
  };

  const handleClientSelect = (client) => {
    setSelectedClient(client);
    setShowClientDropdown(false);
  };

  const handlePropertySelect = (property) => {
    setSelectedProperty(property);
    setShowPropertyDropdown(false);
  };

  // Get initials for avatar
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Get random color for avatar
  const getAvatarColor = (id) => {
    const colors = [
      { bg: 'rgba(19, 91, 236, 0.1)', text: '#135bec' },
      { bg: 'rgba(16, 185, 129, 0.1)', text: '#10b981' },
      { bg: 'rgba(251, 146, 60, 0.1)', text: '#fb923c' },
      { bg: 'rgba(139, 92, 246, 0.1)', text: '#8b5cf6' },
      { bg: 'rgba(236, 72, 153, 0.1)', text: '#ec4899' }
    ];
    return colors[id % colors.length];
  };

  const timeSlots = [
    { time: "09:00 AM", available: true },
    { time: "10:30 AM", available: true },
    { time: "11:30 AM", available: true },
    { time: "01:00 PM", available: true },
    { time: "02:30 PM", available: true },
    { time: "04:00 PM", available: true },
    { time: "05:30 PM", available: true },
    { time: "06:00 PM", available: false }
  ];

  const handleConfirm = () => {
    if (!selectedDate) {
      alert('Please select a date');
      return;
    }

    const visitData = {
      client: selectedClient.name,
      clientEmail: selectedClient.email,
      clientPhone: selectedClient.phone,
      property: selectedProperty.name,
      propertyUnit: selectedProperty.unit,
      propertyPrice: selectedProperty.price,
      date: selectedDate.toLocaleDateString(),
      time: selectedTime,
      note: note
    };
    onSchedule(visitData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(4px);
          padding: 16px;
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .modal-content {
          background-color: white;
          border-radius: 16px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          width: 100%;
          max-width: 672px;
          overflow: hidden;
          animation: zoomIn 0.3s ease-out;
        }

        .modal-header {
          padding: 16px 24px;
          border-bottom: 1px solid #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: white;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .modal-title {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
        }

        .modal-subtitle {
          font-size: 14px;
          color: #64748b;
          margin-top: 2px;
        }

        .close-btn {
          padding: 8px;
          color: #94a3b8;
          background: none;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.2s;
        }

        .close-btn:hover {
          background-color: #f1f5f9;
          color: #64748b;
        }

        .modal-body {
          padding: 24px;
          max-height: 80vh;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        @media (min-width: 768px) {
          .form-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .field-label {
          font-size: 14px;
          font-weight: 700;
          color: #0f172a;
        }

        .selector-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          background-color: white;
          cursor: pointer;
          transition: all 0.2s;
        }

        .selector-card:hover {
          border-color: #135bec;
        }

        .selector-card.active {
          border-color: #135bec;
          box-shadow: 0 0 0 3px rgba(19, 91, 236, 0.1);
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          margin-top: 8px;
          background-color: white;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          max-height: 280px;
          overflow-y: auto;
          z-index: 100;
          animation: dropdownSlide 0.2s ease-out;
        }

        @keyframes dropdownSlide {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dropdown-item {
          padding: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: background-color 0.2s;
          border-bottom: 1px solid #f1f5f9;
        }

        .dropdown-item:last-child {
          border-bottom: none;
        }

        .dropdown-item:hover {
          background-color: #f8fafc;
        }

        .dropdown-item.selected {
          background-color: rgba(19, 91, 236, 0.05);
        }

        .dropdown-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .dropdown-property-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .dropdown-details {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .dropdown-name {
          font-size: 14px;
          font-weight: 600;
          color: #0f172a;
        }

        .dropdown-sub {
          font-size: 12px;
          color: #64748b;
          margin-top: 2px;
        }

        .dropdown-price {
          font-size: 13px;
          font-weight: 700;
          color: #135bec;
          margin-left: auto;
        }

        .dropdown-type-badge {
          font-size: 10px;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 4px;
          background-color: #f1f5f9;
          color: #64748b;
        }

        .selector-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .selector-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .selector-name {
          font-size: 14px;
          font-weight: 600;
          color: #0f172a;
        }

        .selector-sub {
          font-size: 10px;
          color: #64748b;
        }

        .calendar-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .calendar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4px;
        }

        .calendar-nav {
          display: flex;
          gap: 8px;
        }

        .nav-btn {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          background: none;
          color: #64748b;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .nav-btn:hover {
          background-color: #f8fafc;
        }

        .calendar-widget {
          background-color: white;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          padding: 16px;
        }

        .calendar-month {
          text-align: center;
          font-size: 14px;
          font-weight: 700;
          color: #334155;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .calendar-weekdays {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 4px;
          text-align: center;
          font-size: 10px;
          font-weight: 700;
          color: #94a3b8;
          margin-bottom: 8px;
        }

        .calendar-days {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 4px;
        }

        .calendar-day {
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .calendar-day.disabled {
          color: #cbd5e1;
          cursor: not-allowed;
        }

        .calendar-day.past {
          color: #cbd5e1;
        }

        .calendar-day.current {
          color: #334155;
          font-weight: 700;
          border-bottom: 2px solid #135bec;
        }

        .calendar-day.available {
          color: #334155;
          cursor: pointer;
        }

        .calendar-day.available:hover {
          background-color: #f8fafc;
        }
        
        .calendar-day.available:active {
          transform: scale(0.95);
        }

        .calendar-day.selected {
          background-color: #135bec;
          color: white;
          font-weight: 700;
          box-shadow: 0 10px 15px -3px rgba(19, 91, 236, 0.3);
        }

        .time-slots {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .slots-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
          max-height: 220px;
          overflow-y: auto;
          padding-right: 4px;
        }

        .time-slot {
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          font-size: 14px;
          font-weight: 500;
          color: #475569;
          background: white;
          cursor: pointer;
          transition: all 0.2s;
          text-align: center;
        }

        .time-slot:hover:not(.disabled) {
          border-color: #135bec;
          color: #135bec;
        }

        .time-slot.selected {
          border: 2px solid #135bec;
          background-color: rgba(19, 91, 236, 0.05);
          color: #135bec;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .time-slot.disabled {
          background-color: #f8fafc;
          border-color: #f1f5f9;
          color: #cbd5e1;
          cursor: not-allowed;
        }

        .time-note {
          font-size: 10px;
          color: #94a3b8;
          font-style: italic;
          margin-top: 8px;
        }

        .note-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .note-textarea {
          width: 100%;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          padding: 12px;
          font-size: 14px;
          min-height: 80px;
          outline: none;
          resize: vertical;
          transition: all 0.2s;
        }

        .note-textarea:focus {
          border-color: #135bec;
          box-shadow: 0 0 0 3px rgba(19, 91, 236, 0.1);
        }

        .note-textarea::placeholder {
          color: #94a3b8;
        }

        .modal-footer {
          padding: 24px;
          border-top: 1px solid #f1f5f9;
          display: flex;
          gap: 12px;
          justify-content: flex-end;
          background-color: rgba(248, 250, 252, 0.5);
        }

        .btn-cancel {
          padding: 10px 24px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 700;
          color: #64748b;
          background: none;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .btn-cancel:hover {
          background-color: #e2e8f0;
        }

        .btn-confirm {
          padding: 10px 24px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 700;
          background-color: #135bec;
          color: white;
          border: none;
          cursor: pointer;
          box-shadow: 0 10px 15px -3px rgba(19, 91, 236, 0.2);
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .btn-confirm:hover {
          background-color: rgba(19, 91, 236, 0.9);
        }
      `}</style>

      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {/* Header */}
          <div className="modal-header">
            <div>
              <h3 className="modal-title">Schedule Site Visit</h3>
              <p className="modal-subtitle">Select a date and time for the property viewing.</p>
            </div>
            <button className="close-btn" onClick={onClose}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Body */}
          <div className="modal-body">
            {/* Client & Property Selection */}
            <div className="form-row">
              <div className="form-field">
                <label className="field-label">Select Client</label>
                <div style={{ position: 'relative' }}>
                  <div
                    className={`selector-card ${showClientDropdown ? 'active' : ''}`}
                    onClick={() => setShowClientDropdown(!showClientDropdown)}
                  >
                    <div className="selector-icon" style={getAvatarColor(selectedClient.id)}>
                      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>person</span>
                    </div>
                    <div className="selector-info">
                      <span className="selector-name">{selectedClient.name}</span>
                      <span className="selector-sub">{selectedClient.email}</span>
                    </div>
                    <span
                      className="material-symbols-outlined"
                      style={{
                        color: '#94a3b8',
                        transform: showClientDropdown ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s'
                      }}
                    >
                      expand_more
                    </span>
                  </div>

                  {/* Client Dropdown */}
                  {showClientDropdown && (
                    <div className="dropdown-menu">
                      {clients.map((client) => (
                        <div
                          key={client.id}
                          className={`dropdown-item ${selectedClient.id === client.id ? 'selected' : ''}`}
                          onClick={() => handleClientSelect(client)}
                        >
                          <div className="dropdown-avatar" style={getAvatarColor(client.id)}>
                            {getInitials(client.name)}
                          </div>
                          <div className="dropdown-details">
                            <span className="dropdown-name">{client.name}</span>
                            <span className="dropdown-sub">{client.email} • {client.phone}</span>
                          </div>
                          {selectedClient.id === client.id && (
                            <span className="material-symbols-outlined" style={{ color: '#135bec', fontSize: '20px' }}>
                              check_circle
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="form-field">
                <label className="field-label">Select Property</label>
                <div style={{ position: 'relative' }}>
                  <div
                    className={`selector-card ${showPropertyDropdown ? 'active' : ''}`}
                    onClick={() => setShowPropertyDropdown(!showPropertyDropdown)}
                  >
                    <div className="selector-icon" style={{ backgroundColor: '#f1f5f9', color: '#64748b' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>apartment</span>
                    </div>
                    <div className="selector-info">
                      <span className="selector-name">{selectedProperty.name}</span>
                      <span className="selector-sub">{selectedProperty.unit}</span>
                    </div>
                    <span
                      className="material-symbols-outlined"
                      style={{
                        color: '#94a3b8',
                        transform: showPropertyDropdown ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s'
                      }}
                    >
                      expand_more
                    </span>
                  </div>

                  {/* Property Dropdown */}
                  {showPropertyDropdown && (
                    <div className="dropdown-menu">
                      {properties.map((property) => (
                        <div
                          key={property.id}
                          className={`dropdown-item ${selectedProperty.id === property.id ? 'selected' : ''}`}
                          onClick={() => handlePropertySelect(property)}
                        >
                          <div className="dropdown-property-icon" style={{ backgroundColor: '#f1f5f9', color: '#64748b' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                              {property.type === 'Villa' ? 'villa' : property.type === 'Commercial' ? 'business' : 'apartment'}
                            </span>
                          </div>
                          <div className="dropdown-details">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span className="dropdown-name">{property.name}</span>
                              <span className="dropdown-type-badge">{property.type}</span>
                            </div>
                            <span className="dropdown-sub">{property.unit}</span>
                          </div>
                          <span className="dropdown-price">{property.price}</span>
                          {selectedProperty.id === property.id && (
                            <span className="material-symbols-outlined" style={{ color: '#135bec', fontSize: '20px', marginLeft: '8px' }}>
                              check_circle
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Calendar & Time Picker */}
            <div className="form-row">
              {/* Calendar */}
              <div className="calendar-container">
                <div className="calendar-header">
                  <span className="field-label">Select Date</span>
                  <div className="calendar-nav">
                    <button className="nav-btn" onClick={handlePrevMonth} type="button">
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_left</span>
                    </button>
                    <button className="nav-btn" onClick={handleNextMonth} type="button">
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_right</span>
                    </button>
                  </div>
                </div>

                <div className="calendar-widget">
                  <div className="calendar-month">{monthNames[currentMonth]} {currentYear}</div>
                  <div className="calendar-weekdays">
                    <span>SU</span>
                    <span>MO</span>
                    <span>TU</span>
                    <span>WE</span>
                    <span>TH</span>
                    <span>FR</span>
                    <span>SA</span>
                  </div>
                  <div className="calendar-days">
                    {generateCalendarDays().map((dayObj, index) => {
                      if (!dayObj.day) {
                        return <span key={`empty-${index}`} className="calendar-day"></span>;
                      }

                      const isSelected = selectedDate &&
                        dayObj.fullDate.getDate() === selectedDate.getDate() &&
                        dayObj.fullDate.getMonth() === selectedDate.getMonth() &&
                        dayObj.fullDate.getFullYear() === selectedDate.getFullYear();

                      let className = "calendar-day";
                      if (dayObj.disabled) className += " past";
                      else if (dayObj.isToday) className += " current";
                      else className += " available";
                      if (isSelected) className += " selected";

                      return (
                        <span
                          key={`day-${dayObj.day}`}
                          className={className}
                          onClick={() => handleDateClick(dayObj)}
                        >
                          {dayObj.day}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Time Slots */}
              <div className="time-slots">
                <span className="field-label" style={{ marginBottom: '4px' }}>Available Slots</span>
                <div className="slots-grid">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.time}
                      className={`time-slot ${!slot.available ? 'disabled' : ''} ${selectedTime === slot.time ? 'selected' : ''}`}
                      onClick={() => slot.available && setSelectedTime(slot.time)}
                      disabled={!slot.available}
                    >
                      {selectedTime === slot.time && (
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>check_circle</span>
                      )}
                      {slot.time}
                    </button>
                  ))}
                </div>
                <p className="time-note">* Times shown in local time zone (IST)</p>
              </div>
            </div>

            {/* Note Field */}
            <div className="note-field">
              <label className="field-label">Add a note (Optional)</label>
              <textarea
                className="note-textarea"
                placeholder="e.g. Client requested evening viewing specifically..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <button className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button className="btn-confirm" onClick={handleConfirm}>
              Confirm Schedule
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScheduleVisitModal;