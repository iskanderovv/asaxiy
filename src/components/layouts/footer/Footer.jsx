import Button from "../../custom/button/Button";
import Navs from "../navs/Navs";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="text-dark">
      <div className="container">
        {/* Top Row */}
        <div className="row row-cols-3 align-items-center py-3">
          <div className="text-center text-md-start">
            <span>&copy; 2023 Yourcompany</span>
          </div>
          <div className="text-center ">
            <h2>Landing</h2>
          </div>
          <div className=" text-center text-md-end">
            <Button title="Purchase now" />
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="my-2" />

        {/* Bottom Navigation */}
        <div
          className="py-3 d-flex justify-content-between"
        >
          <Navs />
          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="#facebook" className="text-dark mx-2">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#linkedin" className="text-dark mx-2">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#twitter" className="text-dark mx-2">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#youtube" className="text-dark mx-2">
              <i className="bi bi-youtube"></i>
            </a>
            <a href="#instagram" className="text-dark mx-2">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
