import { Routes, Route } from "react-router-dom";
import Admin from "./components/pages/admin/Admin";
import Chart from "./components/pages/chart/Chart";
import Contacts from "./components/pages/contacts/Contacts";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Invoices from "./components/pages/invoices/Invoices";
import Team from "./components/pages/team/Team";

const MenuRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/chart" element={<Chart />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/invoices" element={<Invoices />} />
    </Routes>
  );
};
export default MenuRoutes;
