import React, { useState } from "react";
import AgentSideAndTopPanel from "./AgentSideandTopPanel";

function AddProperty() {
  const [formData, setFormData] = useState({
    propertyTitle: '',
    description: '',
    propertyType: 'Apartment',
    builderName: '',
    projectName: '',
    city: '',
    area: '',
    fullAddress: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    sqft: '',
    floorNo: '',
    totalFloors: '',
    parkingSpots: '',
    amenities: {
      gym: false,
      pool: false,
      parking: false,
      security: false,
      garden: false,
      clubhouse: false
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAmenityChange = (amenity) => {
    setFormData(prev => ({
      ...prev,
      amenities: {
        ...prev.amenities,
        [amenity]: !prev.amenities[amenity]
      }
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add your submit logic here
  };

  const handleSaveDraft = () => {
    console.log('Saved as draft:', formData);
    // Add your save draft logic here
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

        .add-property-page {
          font-family: 'Inter', sans-serif;
          --color-primary: #135bec;
          --color-bg-light: #f6f6f8;
          --text-slate-900: #0f172a;
          --text-slate-700: #334155;
          --text-slate-600: #475569;
          --text-slate-500: #64748b;
          --text-slate-400: #94a3b8;
          --text-slate-300: #cbd5e1;
          --border-slate-200: #e2e8f0;
          --border-slate-100: #f1f5f9;
          --bg-white: #ffffff;
          --bg-slate-50: #f8fafc;
          --bg-slate-100: #f1f5f9;
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

        .content-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* Header */
        .page-header {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 32px;
        }

        @media (min-width: 768px) {
          .page-header {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        .page-title {
          font-size: 30px;
          font-weight: 800;
          color: var(--text-slate-900);
        }

        .page-subtitle {
          color: var(--text-slate-500);
          margin-top: 4px;
        }

        .header-actions {
          display: flex;
          gap: 12px;
        }

        .btn-outline {
          padding: 8px 16px;
          border: 1px solid var(--border-slate-200);
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          background-color: var(--bg-white);
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .btn-outline:hover {
          background-color: var(--bg-slate-50);
        }

        .btn-primary {
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

        /* Form Sections */
        .form-sections {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .form-section {
          background-color: var(--bg-white);
          border-radius: 12px;
          border: 1px solid var(--border-slate-200);
          overflow: hidden;
        }

        .section-header {
          padding: 24px;
          border-bottom: 1px solid var(--border-slate-100);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .section-header .material-symbols-outlined {
          color: var(--color-primary);
        }

        .section-title {
          font-size: 18px;
          font-weight: 700;
        }

        .section-content {
          padding: 24px;
        }

        /* Form Grid */
        .form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        @media (min-width: 768px) {
          .form-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .form-grid-4 {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-field.full-width {
          grid-column: 1 / -1;
        }

        .form-label {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-slate-700);
        }

        .form-input,
        .form-select,
        .form-textarea {
          padding: 8px 12px;
          border: 1px solid var(--border-slate-200);
          border-radius: 8px;
          font-size: 14px;
          outline: none;
          transition: all 0.2s;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(19, 91, 236, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 100px;
        }

        .price-input-wrapper {
          position: relative;
        }

        .price-symbol {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-slate-500);
        }

        .price-input {
          padding-left: 28px;
        }

        /* Amenities Grid */
        .amenities-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        @media (min-width: 640px) {
          .amenities-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .amenities-grid {
            grid-template-columns: repeat(6, 1fr);
          }
        }

        .amenity-checkbox {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border: 1px solid var(--border-slate-100);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .amenity-checkbox:hover {
          background-color: var(--bg-slate-50);
        }

        .amenity-checkbox input {
          width: 18px;
          height: 18px;
          accent-color: var(--color-primary);
          cursor: pointer;
        }

        .amenity-label {
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
        }

        /* Upload Area */
        .upload-area {
          border: 2px dashed var(--border-slate-200);
          border-radius: 12px;
          padding: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: var(--bg-slate-50);
          text-align: center;
        }

        .upload-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: rgba(19, 91, 236, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary);
          margin-bottom: 16px;
        }

        .upload-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .upload-subtitle {
          font-size: 14px;
          color: var(--text-slate-500);
          margin-bottom: 24px;
        }

        .upload-btn {
          padding: 8px 24px;
          background-color: var(--bg-white);
          border: 1px solid var(--border-slate-200);
          border-radius: 8px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          transition: background-color 0.2s;
        }

        .upload-btn:hover {
          background-color: var(--bg-slate-50);
        }

        .image-preview-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 24px;
        }

        @media (min-width: 640px) {
          .image-preview-grid {
            grid-template-columns: repeat(6, 1fr);
          }
        }

        .image-placeholder {
          aspect-ratio: 1;
          border-radius: 8px;
          background-color: var(--bg-slate-100);
          border: 1px solid var(--border-slate-200);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-slate-400);
        }

        /* Documents */
        .document-upload {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .document-label {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-slate-700);
        }

        .document-field {
          border: 1px solid var(--border-slate-200);
          border-radius: 8px;
          padding: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: var(--bg-slate-50);
        }

        .document-placeholder {
          font-size: 12px;
          color: var(--text-slate-500);
        }

        .document-upload-btn {
          color: var(--color-primary);
          font-size: 12px;
          font-weight: 700;
          background: none;
          border: none;
          cursor: pointer;
        }

        /* Map Placeholder */
        .map-placeholder {
          width: 100%;
          height: 192px;
          border-radius: 8px;
          background-color: var(--bg-slate-100);
          border: 2px dashed var(--border-slate-200);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background-image: url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/72.8777,19.0760,10,0/600x300?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjazBqMjAwMDAwMDAwM25wZjAwMDAwMDAwIn0');
          background-size: cover;
          background-position: center;
        }

        .map-overlay {
          background-color: rgba(255, 255, 255, 0.9);
          padding: 8px 16px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .map-overlay .material-symbols-outlined {
          color: var(--color-primary);
        }

        .map-text {
          font-size: 14px;
          font-weight: 600;
        }

        /* Footer */
        .form-footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          padding-bottom: 48px;
        }

        @media (min-width: 640px) {
          .form-footer {
            flex-direction: row;
            justify-content: flex-end;
          }
        }

        .footer-text {
          font-size: 14px;
          color: var(--text-slate-500);
        }

        .footer-actions {
          display: flex;
          gap: 16px;
          width: 100%;
        }

        @media (min-width: 640px) {
          .footer-actions {
            width: auto;
          }
        }

        .btn-cancel {
          flex: 1;
          padding: 12px 32px;
          background-color: var(--bg-slate-200);
          color: var(--text-slate-900);
          border: none;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        @media (min-width: 640px) {
          .btn-cancel {
            flex: none;
          }
        }

        .btn-cancel:hover {
          background-color: var(--text-slate-300);
        }

        .btn-submit {
          flex: 1;
          padding: 12px 48px;
          background-color: var(--color-primary);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 10px 15px -3px rgba(19, 91, 236, 0.25);
          transition: all 0.2s;
        }

        @media (min-width: 640px) {
          .btn-submit {
            flex: none;
          }
        }

        .btn-submit:hover {
          background-color: rgba(19, 91, 236, 0.9);
          transform: translateY(-2px);
        }
      `}</style>

      {/* SHARED SIDEBAR AND TOP PANEL */}
      <AgentSideAndTopPanel />

      {/* MAIN CONTENT */}
      <div className="add-property-page">
        <div className="layout-wrapper">
          <main className="main-col">
            <div className="content-container">
              {/* Header */}
              <div className="page-header">
                <div>
                  <h2 className="page-title">Add New Property</h2>
                  <p className="page-subtitle">Fill in the details to list your property for approval by our admins.</p>
                </div>
                <div className="header-actions">
                  <button className="btn-outline" onClick={handleSaveDraft}>Save as Draft</button>
                  <button className="btn-primary" onClick={handleSubmit}>Submit for Approval</button>
                </div>
              </div>

              <div className="form-sections">
                {/* Section 1: Basic Details */}
                <section className="form-section">
                  <div className="section-header">
                    <span className="material-symbols-outlined">info</span>
                    <h3 className="section-title">Basic Details</h3>
                  </div>
                  <div className="section-content">
                    <div className="form-grid">
                      <div className="form-field full-width">
                        <label className="form-label">Property Title</label>
                        <input
                          type="text"
                          name="propertyTitle"
                          className="form-input"
                          placeholder="e.g. Luxury 3BHK Apartment in Sky Heights"
                          value={formData.propertyTitle}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form-field full-width">
                        <label className="form-label">Description</label>
                        <textarea
                          name="description"
                          className="form-textarea"
                          placeholder="Provide a detailed description of the property..."
                          value={formData.description}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form-field">
                        <label className="form-label">Property Type</label>
                        <select
                          name="propertyType"
                          className="form-select"
                          value={formData.propertyType}
                          onChange={handleInputChange}
                        >
                          <option>Apartment</option>
                          <option>Villa</option>
                          <option>Plot</option>
                          <option>Commercial</option>
                        </select>
                      </div>

                      <div className="form-field">
                        <label className="form-label">Builder Name</label>
                        <input
                          type="text"
                          name="builderName"
                          className="form-input"
                          placeholder="Builder Group Name"
                          value={formData.builderName}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form-field">
                        <label className="form-label">Project Name</label>
                        <input
                          type="text"
                          name="projectName"
                          className="form-input"
                          placeholder="Project Hub"
                          value={formData.projectName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 2: Location */}
                <section className="form-section">
                  <div className="section-header">
                    <span className="material-symbols-outlined">location_on</span>
                    <h3 className="section-title">Location Details</h3>
                  </div>
                  <div className="section-content">
                    <div className="form-grid">
                      <div className="form-field">
                        <label className="form-label">City</label>
                        <input
                          type="text"
                          name="city"
                          className="form-input"
                          placeholder="Mumbai"
                          value={formData.city}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form-field">
                        <label className="form-label">Area / Locality</label>
                        <input
                          type="text"
                          name="area"
                          className="form-input"
                          placeholder="Andheri West"
                          value={formData.area}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form-field full-width">
                        <label className="form-label">Full Address</label>
                        <input
                          type="text"
                          name="fullAddress"
                          className="form-input"
                          placeholder="Plot No 42, Sky Tower, Link Road..."
                          value={formData.fullAddress}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form-field full-width">
                        <div className="map-placeholder">
                          <div className="map-overlay">
                            <span className="material-symbols-outlined">pin_drop</span>
                            <span className="map-text">Map View Placeholder</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 3: Specifications */}
                <section className="form-section">
                  <div className="section-header">
                    <span className="material-symbols-outlined">lists</span>
                    <h3 className="section-title">Specifications</h3>
                  </div>
                  <div className="section-content">
                    <div className="form-grid form-grid-4">
                      <div className="form-field" style={{ gridColumn: 'span 2' }}>
                        <label className="form-label">Price (₹)</label>
                        <div className="price-input-wrapper">
                          <span className="price-symbol">₹</span>
                          <input
                            type="number"
                            name="price"
                            className="form-input price-input"
                            placeholder="0.00"
                            value={formData.price}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="form-field">
                        <label className="form-label">Bedrooms</label>
                        <input
                          type="number"
                          name="bedrooms"
                          className="form-input"
                          placeholder="3"
                          value={formData.bedrooms}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form-field">
                        <label className="form-label">Bathrooms</label>
                        <input
                          type="number"
                          name="bathrooms"
                          className="form-input"
                          placeholder="2"
                          value={formData.bathrooms}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form-field">
                        <label className="form-label">Area (Sq Ft)</label>
                        <input
                          type="number"
                          name="sqft"
                          className="form-input"
                          placeholder="1250"
                          value={formData.sqft}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form-field">
                        <label className="form-label">Floor No.</label>
                        <input
                          type="number"
                          name="floorNo"
                          className="form-input"
                          placeholder="12"
                          value={formData.floorNo}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form-field">
                        <label className="form-label">Total Floors</label>
                        <input
                          type="number"
                          name="totalFloors"
                          className="form-input"
                          placeholder="20"
                          value={formData.totalFloors}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form-field">
                        <label className="form-label">Parking Spots</label>
                        <input
                          type="number"
                          name="parkingSpots"
                          className="form-input"
                          placeholder="2"
                          value={formData.parkingSpots}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 4: Amenities */}
                <section className="form-section">
                  <div className="section-header">
                    <span className="material-symbols-outlined">check_circle</span>
                    <h3 className="section-title">Amenities</h3>
                  </div>
                  <div className="section-content">
                    <div className="amenities-grid">
                      {Object.keys(formData.amenities).map((amenity) => (
                        <label key={amenity} className="amenity-checkbox">
                          <input
                            type="checkbox"
                            checked={formData.amenities[amenity]}
                            onChange={() => handleAmenityChange(amenity)}
                          />
                          <span className="amenity-label">{amenity.charAt(0).toUpperCase() + amenity.slice(1)}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Section 5: Media Upload */}
                <section className="form-section">
                  <div className="section-header">
                    <span className="material-symbols-outlined">image</span>
                    <h3 className="section-title">Property Media</h3>
                  </div>
                  <div className="section-content">
                    <div className="upload-area">
                      <div className="upload-icon">
                        <span className="material-symbols-outlined">cloud_upload</span>
                      </div>
                      <h4 className="upload-title">Upload high-quality images</h4>
                      <p className="upload-subtitle">
                        Drag and drop multiple images here, or click to browse.<br />
                        Max file size: 5MB per image.
                      </p>
                      <button className="upload-btn">Choose Files</button>
                    </div>
                    <div className="image-preview-grid">
                      <div className="image-placeholder">
                        <span className="material-symbols-outlined">photo_library</span>
                      </div>
                      <div className="image-placeholder">
                        <span className="material-symbols-outlined">photo_library</span>
                      </div>
                      <div className="image-placeholder">
                        <span className="material-symbols-outlined">photo_library</span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 6: Documents */}
                <section className="form-section">
                  <div className="section-header">
                    <span className="material-symbols-outlined">description</span>
                    <h3 className="section-title">Documents</h3>
                  </div>
                  <div className="section-content">
                    <div className="form-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                      <div className="document-upload">
                        <label className="document-label">Brochure (PDF)</label>
                        <div className="document-field">
                          <span className="document-placeholder">No file chosen</span>
                          <button className="document-upload-btn">Upload</button>
                        </div>
                      </div>

                      <div className="document-upload">
                        <label className="document-label">Floor Plan</label>
                        <div className="document-field">
                          <span className="document-placeholder">No file chosen</span>
                          <button className="document-upload-btn">Upload</button>
                        </div>
                      </div>

                      <div className="document-upload">
                        <label className="document-label">Legal Documents</label>
                        <div className="document-field">
                          <span className="document-placeholder">No file chosen</span>
                          <button className="document-upload-btn">Upload</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Form Footer */}
                <div className="form-footer">
                  <p className="footer-text">By submitting, you agree to our terms of service and property listing policies.</p>
                  <div className="footer-actions">
                    <button className="btn-cancel">Cancel</button>
                    <button className="btn-submit" onClick={handleSubmit}>Submit for Approval</button>
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

export default AddProperty;