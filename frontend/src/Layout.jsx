import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function Layout() {
  return (
    <div className="background" >
      <Navbar />

      <main className="pt-20 w-full container mx-auto ">
        <Outlet />
      </main>

      <footer      >
        <Footer/>
      </footer>
    </div>
  );
}

export default Layout;
