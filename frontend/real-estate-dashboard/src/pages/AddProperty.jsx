import React, { useState } from "react";
import { supabase } from "../supabaseClient";

function AddProperty() {

  const [propertyCode, setPropertyCode] = useState("");

  const submitProperty = async () => {

    const { data: userData } = await supabase.auth.getUser();
    const user = userData.user;

    const { error } = await supabase
      .from("properties_master")
      .insert([
        {
          property_code: propertyCode,
          property_status: "DRAFT",
          approval_status: "PENDING",
          agent_id: user.id
        }
      ]);

    if (error) {
      alert(error.message);
    } else {
      alert("Property submitted for approval!");
    }
  };

  return (
    <div>

      <h2>Add Property</h2>

      <input
        placeholder="Property Code"
        onChange={(e) => setPropertyCode(e.target.value)}
      />

      <button onClick={submitProperty}>
        Submit Property
      </button>

    </div>
  );
}

export default AddProperty;