import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RoleSelect from "./pages/RoleSelect";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import AgentDashboard from "./pages/AgentDashboard";
import BuilderDashboard from "./pages/BuilderDashboard";
import MyLeads from "./pages/MyLeads";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<RoleSelect />} />
        <Route path="/login/:role" element={<Login />} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/agent" element={<AgentDashboard />} />
        <Route path="/myleads" element={<MyLeads />} />
        <Route path="/builder" element={<BuilderDashboard />} />

      </Routes>
    </Router>
  );
}

export default App;