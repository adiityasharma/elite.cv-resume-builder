import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";


function Layout() {
  return (
    <div className="background" >
      <Navbar />

      <main className="pt-20 w-full container mx-auto ">
        <Outlet />
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "10px",
          marginTop: "20px",
          borderTop: "1px solid #ddd",
        }}
      >
        © {new Date().getFullYear()} My App
      </footer>
    </div>
  );
}

export default Layout;
