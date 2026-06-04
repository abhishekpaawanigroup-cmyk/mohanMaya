import React from "react";
import { Outlet } from "react-router";
import Header from "../components/website/Header";
import Footer from "../components/website/Footer";

const WebsiteLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default WebsiteLayout;
