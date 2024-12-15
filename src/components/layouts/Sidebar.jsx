import React from "react";
import Button from "../custom/button/Button";
import Navs from "./navs/Navs";

export default function Sidebar() {
  return (
    <div
      className="offcanvas offcanvas-start d-lg-none"
      tabIndex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
          Asaxiy
        </h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <Navs />
        {/* The 'Buy Now' button will also be displayed in the offcanvas menu */}
        <Button title="Buy Now" />
      </div>
    </div>
  );
}
