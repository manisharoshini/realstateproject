import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import RoleSelect from "./pages/RoleSelect";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import AgentDashboard from "./pages/Agent/AgentDashboard";
import BuilderDashboard from "./pages/BuilderDashboard";
import MyLeads from "./pages/Agent/MyLeads";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect /agent to /Agent/AgentDashboard */}
        <Route path="/Agent" element={<Navigate to="/Agent/AgentDashboard" replace />} />

        <Route path="/Agent/AgentDashboard" element={<AgentDashboard />} />
        <Route path="/Agent/MyLeads" element={<MyLeads />} />

        <Route path="/builder" element={<BuilderDashboard />} />
        <Route path="/" element={<RoleSelect />} />
        <Route path="/login/:role" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;