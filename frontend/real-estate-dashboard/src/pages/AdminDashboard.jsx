import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

function AdminDashboard() {

  const [properties, setProperties] = useState([]);

  // Load pending properties
  const loadProperties = async () => {

    const { data, error } = await supabase
      .from("properties_master")
      .select("*")
      .eq("approval_status", "PENDING");

    if (error) {
      console.log(error);
    } else {
      setProperties(data);
    }
  };

  useEffect(() => {
    loadProperties();
  }, []);

  // Approve property
  const approveProperty = async (property_id) => {

    const { data: userData } = await supabase.auth.getUser();
    const admin = userData.user;

    const { error } = await supabase
      .from("properties_master")
      .update({
        approval_status: "APPROVED",
        approved_by: admin.id,
        approved_at: new Date()
      })
      .eq("property_id", property_id);

    if (error) {
      alert(error.message);
    } else {
      alert("Property Approved");
      loadProperties();
    }
  };

  // Reject property
  const rejectProperty = async (property_id) => {

    const { error } = await supabase
      .from("properties_master")
      .update({
        approval_status: "REJECTED"
      })
      .eq("property_id", property_id);

    if (error) {
      alert(error.message);
    } else {
      alert("Property Rejected");
      loadProperties();
    }
  };

  return (
    <div>

      <h1>Admin Dashboard</h1>

      {properties.length === 0 ? (
        <p>No pending properties</p>
      ) : (
        properties.map((property) => (
          <div key={property.property_id} style={{ border: "1px solid grey", padding: "10px", margin: "10px" }}>

            <p>Property Code: {property.property_code}</p>
            <p>Status: {property.property_status}</p>

            <button onClick={() => approveProperty(property.property_id)}>
              Approve
            </button>

            <button onClick={() => rejectProperty(property.property_id)}>
              Reject
            </button>

          </div>
        ))
      )}

    </div>
  );
}

export default AdminDashboard;