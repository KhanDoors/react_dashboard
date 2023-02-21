import React from "react";
import Header from "../../Header";
import { Box } from "@mui/material";

const Admin = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="ADMIN DASHBOARD"
          subtitle="Welcome to the Admin  Dashboard"
        />
      </Box>
    </Box>
  );
};

export default Admin;
