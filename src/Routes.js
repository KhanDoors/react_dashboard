import { Routes, Route } from "react-router-dom";
import Admin from "./components/pages/admin/Admin";
import Chart from "./components/pages/chart/Chart";
import Dashboard from "./components/pages/dashboard/Dashboard";

const MenuRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/chart" element={<Chart />} />
    </Routes>
  );
};
export default MenuRoutes;
