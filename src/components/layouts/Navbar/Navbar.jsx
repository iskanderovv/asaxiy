// Navbar.jsx
import { useState, useEffect } from "react";
import Button from "../../custom/button/Button";
import Navs from "../navs/Navs";
import Sidebar from "../Sidebar";
import "./Navbar.css";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust this threshold based on your preference
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top ${sticky ? "bg-white shadow-lg" : ""} py-2`}
    >
      <div className="container">
        {/* Navbar content with flexbox to align logo and hamburger button */}
        <div className="d-flex justify-content-between w-100 align-items-center">
          {/* Logo */}
          <a className="navbar-brand logo fs-3 text-dark font-bold" href="#">
            Asaxiy
          </a>

          {/* Hamburger button positioned on the right */}
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Main navbar content */}
        <div
          className="collapse navbar-collapse d-flex justify-content-between w-100"
          id="navbarSupportedContent"
        >
          <Navs className="d-none d-lg-flex" />
          {/* The 'Buy Now' button will be hidden on smaller screens */}
          <Button title="Buy Now" className="d-none d-lg-block" />
        </div>

        {/* Offcanvas Menu Component */}
        <Sidebar />
      </div>
    </nav>
  );
}
