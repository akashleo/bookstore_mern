import React, { useState } from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Tabs, Toolbar, AppBar, Typography, Tab } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <AppBar position="sticky" sx={{ backgroundColor: "#232f3d" }}>
        <Toolbar>
          <Typography>
            <MenuBookIcon />
          </Typography>

          <Tabs
            sx={{ ml: "auto" }}
            indicatorColor="primary"
            textColor="inherit"
            value={tabIndex}
            onChange={(e, value) => setTabIndex(value)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add product" />
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/about" label="About Us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
