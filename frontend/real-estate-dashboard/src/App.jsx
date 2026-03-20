import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import RoleSelect from "./pages/RoleSelect";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import AgentDashboard from "./pages/Agent/AgentDashboard";
import BuilderDashboard from "./pages/BuilderDashboard";
import MyLeads from "./pages/Agent/MyLeads";
import PropertyManagement from "./pages/Agent/PropertyManagement";
import SiteVisit from "./pages/Agent/SiteVisit";
import AddProperty from "./pages/Agent/AddProperty";
import Deals from "./pages/Agent/Deals";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect /agent to /Agent/AgentDashboard */}
        <Route path="/Agent" element={<Navigate to="/Agent/AgentDashboard" replace />} />

        <Route path="/Agent/AgentDashboard" element={<AgentDashboard />} />
        <Route path="/Agent/MyLeads" element={<MyLeads />} />
        <Route path="/Agent/PropertyManagement" element={<PropertyManagement />} />
        <Route path="/Agent/AddProperty" element={<AddProperty />} />
        <Route path="/Agent/SiteVisit" element={<SiteVisit />} />
        <Route path="/Agent/Deals" element={<Deals />} />

        <Route path="/builder" element={<BuilderDashboard />} />
        <Route path="/" element={<RoleSelect />} />
        <Route path="/login/:role" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;