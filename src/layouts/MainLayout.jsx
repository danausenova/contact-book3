import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="md">
        <Outlet />
      </Container>
    </div>
  );
};

export default MainLayout;
