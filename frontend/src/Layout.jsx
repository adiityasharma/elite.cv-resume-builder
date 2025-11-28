import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Layout() {
  return (
    <div className=" flex flex-col justify-between background">
      <Navbar />

      <main className="container mx-auto">
        <Outlet />
      </main>

      <footer className="pt-10">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
