import React from "react";
import Header from "../../Header";
import { Box } from "@mui/material";

const Chart = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="CHART DASHBOARD"
          subtitle="Welcome to the Chart Dashboard"
        />
      </Box>
    </Box>
  );
};

export default Chart;
