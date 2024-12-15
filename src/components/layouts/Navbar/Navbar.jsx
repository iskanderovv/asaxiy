import { useState, useEffect } from "react";
import Button from "../../custom/button/Button";
import Navs from "../navs/Navs";
import Sidebar from "../Sidebar";
import "./Navbar.css";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light py-2 ${
        sticky ? "bg-white shadow-lg" : ""
      }`}
      style={{
        position: sticky ? "fixed" : "relative",
        top: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <div className="container">
        {/* Navbar content with flexbox to align items */}
        <div className="d-flex justify-content-between w-100 align-items-center position-relative">
          {/* Left Navs */}
          <div className="d-flex">
            <Navs className="d-none d-lg-flex" />
          </div>

          {/* Logo centered */}
          <a
            className="navbar-brand logo fs-4 fw-bold position-absolute"
            style={{ left: "50%", transform: "translateX(-50%)" }}
            href="#"
          >
            Landing
          </a>

          {/* Right Buy Now button */}
          <Button title="Buy Now" className="d-none d-lg-block" />

          {/* Hamburger button */}
          <button
            className="navbar-toggler d-lg-none ms-auto"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Sidebar */}
        <Sidebar />
      </div>
    </nav>
  );
}
