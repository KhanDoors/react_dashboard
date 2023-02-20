import { Routes, Route } from "react-router-dom";
import Admin from "./components/pages/Admin";
import Chart from "./components/pages/Chart";
import Dashboard from "./components/pages/Dashboard";
import Sidebar from "./components/layout/Sidebar";

const MenuRoutes = () => {
  return (
    <Routes>
      <Route element={<Sidebar />}>
        <Route path="/" element={<Admin />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
export default MenuRoutes;
